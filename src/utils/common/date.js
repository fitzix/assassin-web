import dayJs from 'dayjs';

function format(v, fmt = 'YYYY-MM-DD HH:mm:ss') {
  return dayJs(v).format(fmt);
}

export function dateFormat(v) {
  return format(v, 'YYYY-MM-DD');
}

export function dateTimeFormat(v) {
  return format(v, 'YYYY-MM-DD HH:mm:ss');
}
