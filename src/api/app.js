import axios from 'src/utils/common/http';

export function GetAppList(data = {}) {
  return axios.get('/apps', data);
}

export function GetApp(id) {
  return axios.get(`/apps/${id}`);
}

function apiUpdateApp(appId, data) {
  return axios.put(`/apps/${appId}`, data);
}

function apiCreateApp(data) {
  return axios.post('/apps', data);
}

export function apiAppCU(appId, data) {
  // app id 则为更新
  if (data.id) {
    return apiUpdateApp(appId, data);
  }
  return apiCreateApp(data);
}
