import { CDN_REPOSITORY } from 'src/const';
import { ASN_APP_TYPE } from 'src/const/index';

export function cdnPrefix(url, type) {
  switch (type) {
    case 'article':
      type = CDN_REPOSITORY.ArticlePath;
      break;
    case 'img':
      type = CDN_REPOSITORY.ImgPath;
      break;
    case 'app':
      type = CDN_REPOSITORY.AppContentPath;
  }
  let keys = Object.values(CDN_REPOSITORY);
  keys.splice(4);
  keys.push(type, url);
  return keys.join('/');
}

export function imgPrefix(url) {
  return cdnPrefix(url, 'img');
}

export function parseListToObject(dataList) {
  let resp = {};
  for (let e of dataList) {
    resp[e.id] = e.name;
  }
  return resp;
}

export function asnTranslate(id, list) {
  if (list && list.hasOwnProperty(id)) {
    return list[id];
  }

  if (ASN_APP_TYPE.hasOwnProperty(id)) {
    return ASN_APP_TYPE[id];
  }

  return '';
}
