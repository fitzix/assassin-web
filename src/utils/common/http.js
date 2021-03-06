import axios from 'axios';
import store from 'src/pages/templar/store';
import { Message } from 'element-ui';
import { cdnPrefix } from './index';
import { CDN_REPOSITORY, ASN_API } from 'src/const';

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: 'http://localhost:8080/api/v1',
  baseURL: ASN_API.baseUrl,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (store.getters.token) {
    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation
    // config.headers['X-Token'] = getToken();
    // }
    // config.headers;
    // config.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJVR2hLN2QtcjM0aGVvQVJWIiwiY29kZSI6MCwiZXhwIjoxNTY5NDEyMTA3LCJpc3MiOiJhc24ueHl6In0.H1pUNRAO8UOFC1dX8eXikWrTcouJEaTEyfEGiGRDxtg';
    config.headers.Authorization = `Bearer ${store.getters.token}`;
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    if (response.config.baseURL.includes(CDN_REPOSITORY.GithubServer)) {
      return response.data;
    }

    return response.data.data;
    // const res = response.data;
    //
    // // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000,
    //   });
    //
    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // to re-login
    //     MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
    //       confirmButtonText: 'Re-Login',
    //       cancelButtonText: 'Cancel',
    //       type: 'warning',
    //     }).then(() => {
    //       store.dispatch('user/resetToken').then(() => {
    //         location.reload();
    //       });
    //     });
    //   }
    //   return Promise.reject(new Error(res.message || 'Error'));
    // } else {
    //   return res;
    // }
  },
  error => {
    console.log('err' + error); // for debug
    Message.error(error.message);
    return Promise.reject(error);
  }
);

const http = {
  get(url, data) {
    return service.get(url, {
      params: data,
    });
  },
  post(url, data) {
    return service.post(url, data);
  },
  put(url, data) {
    return service.put(url, data);
  },
  delete(url, data) {
    return service.delete(url, data);
  },
  getMarkdown(url, type) {
    return service.get(`${url}.md`, {
      baseURL: cdnPrefix('', type),
    });
  },
};

export default http;
