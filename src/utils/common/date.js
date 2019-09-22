import dayJs from 'dayjs';

function format(v, fmt = 'YYYY-MM-DD HH:mm:ss') {
  if (v === '0001-01-01T00:00:00Z') {
    return '0000-00-00';
  }

  return dayJs(v).format(fmt);
}

export function dateFormat(v) {
  return format(v, 'YYYY-MM-DD');
}

export function dateTimeFormat(v) {
  return format(v, 'YYYY-MM-DD HH:mm:ss');
}
