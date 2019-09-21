import { CDN_REPOSITORY } from 'src/const';
import { ASN_APP_TYPE } from 'src/const/index';

export function cdnPrefix(url, type, serverType) {
  if (!url) {
    return '';
  }
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
  let server = CDN_REPOSITORY.GithubRawServer;
  let keys = Object.values(CDN_REPOSITORY);
  keys = keys.slice(2, 5);
  keys.push(type, url);
  if (serverType === 'web') {
    server = CDN_REPOSITORY.GithubServer;
    keys.splice(2, 0, 'tree');
  }

  keys.unshift(server);

  return keys.join('/');
}

export function imgPrefix(url) {
  if (Array.isArray(url)) {
    let resp = [];
    url.forEach(el => {
      resp.push({ url: cdnPrefix(el.url, 'img') });
    });
    return resp;
  }

  if (url && url.length < 25) {
    return cdnPrefix(url, 'img');
  }
  return url;
}

export function appContentPrefix(id, serverType) {
  return cdnPrefix(id, 'app', serverType);
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
