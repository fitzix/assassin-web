import axios from 'src/utils/common/http';

function apiUpdateVersion(appId, versionId, data) {
  return axios.put(`/apps/${appId}/versions/${versionId}`, data);
}

function apiCreateVersion(appId, data) {
  return axios.post(`/apps/${appId}/versions`, data);
}

export function apiVersionCU(appId, data) {
  // 有version id 则为更新
  if (data.id) {
    return apiUpdateVersion(appId, data.id, data);
  }
  return apiCreateVersion(appId, data);
}
