import { CDN_REPOSITORY } from 'src/const';

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
