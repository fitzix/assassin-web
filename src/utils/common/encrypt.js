const CryptoJS = require('crypto-js');
import { ASN_ENCRYPT } from 'src/const';

const iv = CryptoJS.enc.Utf8.parse(ASN_ENCRYPT.aes.iv);
const key = CryptoJS.enc.Utf8.parse(ASN_ENCRYPT.aes.key);

//加密方法
export function AESEncrypt(word) {
  let src = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(src, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  return encrypted.ciphertext.toString().toUpperCase();
}

//解密方法

export function AESDecrypt(data) {
  let rawData = atob(data);
  let iv = btoa(rawData.substring(0, 16));
  let cryptText = btoa(rawData.substring(16));

  let plaintextArray = CryptoJS.AES.decrypt(cryptText, CryptoJS.enc.Utf8.parse(ASN_ENCRYPT.aes.key), { iv: CryptoJS.enc.Base64.parse(iv) });
  return plaintextArray.toString(CryptoJS.enc.Utf8);
}
