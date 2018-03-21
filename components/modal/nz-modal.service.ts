import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EventEmitter, Injectable, Injector, Optional, SkipSelf, TemplateRef, Type, EmbeddedViewRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LoggerService } from '../core/util/logger/logger.service';

import { NzModalControlService } from './nz-modal-control.service';
import { NzModalRef } from './nz-modal-ref.class';
import { NzModalComponent } from './nz-modal.component';
import { ConfirmType, ModalOptions, ModalOptionsForService } from './nz-modal.type';

// A builder used for managing service creating modals
export class ModalBuilderForService {
  private modalRef: ComponentRef<NzModalComponent>; // Modal ComponentRef, "null" means it has been destroyed
  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private cfr: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    options: ModalOptionsForService = {}) {

    this.createModal();

    if (!('nzGetContainer' in options)) { // As we use CDK to create modal in service by force, there is no need to use nzGetContainer
      options.nzGetContainer = null; // Override nzGetContainer's default value to prevent creating another overlay
    }

    this.changeProps(options);
    this.modalRef.instance.open();
    this.modalRef.instance.nzAfterClose.subscribe(() => this.destroyModal()); // [NOTE] By default, close equals destroy when using as Service
  }

  getInstance(): NzModalComponent {
    return this.modalRef && this.modalRef.instance;
  }

  destroyModal(): void {
    if (this.modalRef) {
      // this.overlayRef.dispose();

      // Here we need destroy every resource manually due to manual creating
      this.appRef.detachView(this.modalRef.hostView);
      this.modalRef.destroy();
      this.overlayRef.dispose();
      this.modalRef = null;
    }
  }

  private changeProps(options: ModalOptions): void {
    if (this.modalRef) {
      Object.assign(this.modalRef.instance, options); // DANGER: here not limit user's inputs at runtime
    }
  }

  // Create component to ApplicationRef
  private createModal(): void {
    // this.overlayRef = this.overlay.create();
    // this.modalRef = this.overlayRef.attach(new ComponentPortal(NzModalComponent));

    // Manual creating Modal and its overlay to avoid multi change detection, see: https://github.com/angular/angular/issues/15634
    const factory = this.cfr.resolveComponentFactory(NzModalComponent);
    this.modalRef = factory.create(this.injector);

    // NOTE: the overlay is only used as a global container that holds the DOM
    this.overlayRef = this.overlay.create();
    this.overlayRef.overlayElement.appendChild((this.modalRef.hostView as EmbeddedViewRef<{}>).rootNodes[0] as HTMLElement);

    // Temporary solution: next tick to do change detection to avoid creating during a change detection
    window.setTimeout(() => this.appRef.attachView(this.modalRef.hostView));
  }
}

@Injectable()
export class NzModalService {
  // Track of the current close modals (we assume invisible is close this time)
  get openModals(): NzModalRef[] {
    return this.modalControl.openModals;
  }

  get afterAllClose(): Observable<void> {
    return this.modalControl.afterAllClose.asObservable();
  }

  constructor(
    private overlay: Overlay,
    private cfr: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private logger: LoggerService,
    private modalControl: NzModalControlService) { }

  // Closes all of the currently-open dialogs
  closeAll(): void {
    this.modalControl.closeAll();
  }

  create<T>(options: ModalOptionsForService<T> = {}): NzModalRef<T> {
    if (typeof options.nzOnCancel !== 'function') {
      options.nzOnCancel = () => {}; // Leave a empty function to close this modal by default
    }

    const modalRef = new ModalBuilderForService(this.overlay, this.cfr, this.injector, this.appRef, options).getInstance(); // NOTE: use NzModalComponent as the NzModalRef by now, we may need archive the real NzModalRef object in the future

    return modalRef;
  }

  confirm<T>(options: ModalOptionsForService<T> = {}, confirmType: ConfirmType = 'confirm'): NzModalRef<T> {
    if ('nzFooter' in options) {
      this.logger.warn(`The Confirm-Modal doesn't support "nzFooter", this property will be ignored.`);
    }
    if (!('nzWidth' in options)) {
      options.nzWidth = 416;
    }
    if (typeof options.nzOnOk !== 'function') { // NOTE: only support function currently by calling confirm()
      options.nzOnOk = () => {}; // Leave a empty function to close this modal by default
    }

    options.nzModalType = 'confirm';
    options.nzClassName = `ant-confirm ant-confirm-${confirmType} ${options.nzClassName || ''}`;
    options.nzMaskClosable = false;
    return this.create(options);
  }

  info<T>(options: ModalOptionsForService<T> = {}): NzModalRef<T> {
    return this.simpleConfirm(options, 'info');
  }

  success<T>(options: ModalOptionsForService<T> = {}): NzModalRef<T> {
    return this.simpleConfirm(options, 'success');
  }

  error<T>(options: ModalOptionsForService<T> = {}): NzModalRef<T> {
    return this.simpleConfirm(options, 'error');
  }

  warning<T>(options: ModalOptionsForService<T> = {}): NzModalRef<T> {
    return this.simpleConfirm(options, 'warning');
  }

  private simpleConfirm<T>(options: ModalOptionsForService<T> = {}, confirmType: ConfirmType): NzModalRef<T> {
    if (!('nzIconType' in options)) {
      options.nzIconType = { 'info': 'info-circle', 'success': 'check-circle', 'error': 'cross-circle', 'warning': 'exclamation-circle' }[ confirmType ];
    }
    if (!('nzCancelText' in options)) { // Remove the Cancel button if the user not specify a Cancel button
      options.nzCancelText = null;
    }
    return this.confirm(options, confirmType);
  }
}
