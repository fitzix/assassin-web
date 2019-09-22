import axios from 'src/utils/common/http';

export function GetMarkdown(url, type = 'app') {
  return axios.getMarkdown(url, type);
}

export function GetTags() {
  return axios.get('/tags');
}

export function GetCategories() {
  return axios.get('/categories');
}

export function GetDownloadTypes() {
  return axios.get('/downloads');
}

export function apiLogin(data) {
  return axios.post('/login', data);
}
