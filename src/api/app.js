import axios from 'src/utils/common/http';

export function GetAppList(data = {}) {
  return axios.get('/apps', data);
}

export function GetApp(id) {
  return axios.get(`/apps/${id}`);
}
