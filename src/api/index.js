import axios from 'src/utils/common/http';

export function GetMarkdown(url, type = 'app') {
  return axios.getMarkdown(url, type);
}
