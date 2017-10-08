import { NzLocale } from '../nz-locale.class';
import * as moment from 'moment';

const LOCALE = 'zh-cn';

moment.locale(LOCALE);

export const zhCN: NzLocale = {
  locale: LOCALE,

  Pagination: {
    itemsPerPage: '%num% 条/页',
    jumpTo: '跳至',
    page: '页',
    forwardPage: '向前 %num% 页',
    backwardPage: '向后 %num% 页',
    prevPage: '上一页',
    nextPage: '下一页',
    firstPage: '第一页',
    lastPage: '最后一页: %page%',
    totalItems: '共 %total% 条',
  },

  DateTime: {
    clear: '清除',
    chooseMonth: '选择月份',
    chooseYear: '选择年份',
    nYear: '%num%年',
    nMonth: '%num%月',
    nDay: '%num%日',
    prevYear: '上一年',
    nextYear: '下一年',
    prevMonth: '上个月',
    nextMonth: '下个月',
    prevDecade: '上一年代',
    nextDecade: '下一年代',
    chooseDecade: '选择年代',
    chooseTime: '选择时间',
    chooseDate: '选择日期',
    chooseTimePlease: '请选择时间',
    chooseDatePlease: '请选择日期',
    thisMoment: '此刻',
    today: '今天',
    ok: '确 定',
  },

  Modal: {
    okText: '确定',
    cancelText: '取消',
    understood: '知道了',
  },

  Table: {
    emptyText: '没有数据',
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
  //   okText: '确定',
  //   cancelText: '取消',
  //   justOkText: 'OK',
  // },
  // Popconfirm: {
  //   okText: 'OK',
  //   cancelText: 'Cancel',
  // },
  Select: {
    notFoundContent: '无法找到',
  },
};
