import { GetTags, GetCategories, GetDownloadTypes, apiLogin } from 'src/api';
import { parseListToObject } from 'src/utils/common';

const state = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJVR2hLN2QtcjM0aGVvQVJWIiwiY29kZSI6MCwiZXhwIjoxNTY5NDEyMTA3LCJpc3MiOiJhc24ueHl6In0.H1pUNRAO8UOFC1dX8eXikWrTcouJEaTEyfEGiGRDxtg',
  tags: {},
  categories: {},
  downloads: {},
};

const mutations = {
  SET_TAGS(state, data) {
    state.tags = data;
  },
  SET_CATEGORIES(state, data) {
    state.categories = data;
  },
  SET_DOWNLOADS(state, data) {
    state.downloads = data;
  },
  SET_TOKEN(state, data) {
    state.token = data;
  },
};

const actions = {
  setTags({ commit }) {
    GetTags().then(resp => {
      commit('SET_TAGS', parseListToObject(resp));
    });
  },
  setCategory({ commit }) {
    GetCategories().then(resp => {
      commit('SET_CATEGORIES', parseListToObject(resp));
    });
  },
  setDownloads({ commit }) {
    GetDownloadTypes().then(resp => {
      commit('SET_DOWNLOADS', parseListToObject(resp));
    });
  },
  login({ commit }, data) {
    return new Promise(resolve => {
      apiLogin(data).then(resp => {
        commit('SET_TOKEN', resp.token);
        resolve();
      });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
