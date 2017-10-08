import { NzLocale } from '../nz-locale.class';
import * as moment from 'moment';

const LOCALE = 'en-us';

moment.locale(LOCALE);

export const enUS: NzLocale = {
  locale: LOCALE,

  Pagination: {
    itemsPerPage: '%num% / page',
    jumpTo: 'Goto',
    page: '',
    forwardPage: '%num% pages forward',
    backwardPage: '%num% pages backward',
    prevPage: 'Previous page',
    nextPage: 'Next page',
    firstPage: 'First page',
    lastPage: 'Last page: %page%',
    totalItems: '%total% items',
  },

  DateTime: {
    clear: 'Clear',
    chooseMonth: 'Choose a month',
    chooseYear: 'Choose a year',
    chooseDecade: 'Choose a decade',
    nYear: '%num%',
    nMonth: '%num%',
    nDay: '%num%',
    prevYear: 'Previous year',
    nextYear: 'Next year',
    prevMonth: 'Previous month',
    nextMonth: 'Next month',
    prevDecade: 'Previous decade',
    nextDecade: 'Next decade',
    chooseTime: 'Select time',
    chooseDate: 'Select date',
    chooseTimePlease: 'Select time',
    chooseDatePlease: 'Select date',
    thisMoment: 'This moment',
    today: 'Today',
    ok: 'Ok',
  },

  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    understood: 'Got it',
  },

  Table: {
    emptyText: 'No data',
  },

  // DateTime: { // For DatePicker/Calendar/TimePicker
  //   today: 'Today',
  //   now: 'Now',
  //   backToToday: 'Back to today',
  //   ok: 'Ok',
  //   clear: 'Clear',
  //   month: 'Month',
  //   year: 'Year',
  //   timeSelect: 'Select time',
  //   dateSelect: 'Select date',
  //   monthSelect: 'Choose a month',
  //   yearSelect: 'Choose a year',
  //   decadeSelect: 'Choose a decade',
  //   yearFormat: 'YYYY',
  //   dateFormat: 'M/D/YYYY',
  //   dayFormat: 'D',
  //   dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  //   monthBeforeYear: true,
  //   previousMonth: 'Previous month (PageUp)',
  //   nextMonth: 'Next month (PageDown)',
  //   previousYear: 'Last year (Control + left)',
  //   nextYear: 'Next year (Control + right)',
  //   previousDecade: 'Last decade',
  //   nextDecade: 'Next decade',
  //   previousCentury: 'Last century',
  //   nextCentury: 'Next century'
  // },
  // DatePicker: {
  //   placeholder: 'Select date',
  //   rangePlaceholder: [ 'Start date', 'End date' ],
  // },
  // TimePicker: {
  //   placeholder: 'Select time',
  // },
  // Calendar: {
  //   placeholder: 'Select date',
  //   rangePlaceholder: [ 'Start date', 'End date' ],
  // },
  // Table: {
  //   filterTitle: 'Filter menu',
  //   filterConfirm: 'OK',
  //   filterReset: 'Reset',
  //   emptyText: 'No data',
  //   selectAll: 'Select current page',
  //   selectInvert: 'Invert current page',
  // },
  // Modal: {
  //   okText: 'OK',
  //   cancelText: 'Cancel',
  //   justOkText: 'OK',
  // },
  // Popconfirm: {
  //   okText: 'OK',
  //   cancelText: 'Cancel',
  // },
  Select: {
    notFoundContent: 'Not Found',
  },
};
