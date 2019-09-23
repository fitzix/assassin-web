import { GetTags, GetCategories, GetDownloadTypes, apiLogin } from 'src/api';
import { parseListToObject } from 'src/utils/common';
import { ASN_STORE } from 'src/const';

function getUserInfo() {
  let userStr = localStorage.getItem(ASN_STORE.user);
  if (!userStr) {
    return false;
  }
  return JSON.parse(userStr);
}

const state = {
  token: localStorage.getItem(ASN_STORE.token),
  tags: {},
  categories: {},
  downloads: {},
  user: getUserInfo(),
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
    if (data) {
      state.token = data;
      localStorage.setItem(ASN_STORE.token, data);
      return;
    }
    state.token = null;
    localStorage.removeItem(ASN_STORE.token);
  },
  SET_USER(state, data) {
    if (data.remember) {
      localStorage.setItem(ASN_STORE.user, JSON.stringify(data));
      return;
    }
    localStorage.removeItem(ASN_STORE.user);
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
        commit('SET_USER', data);
        resolve();
      });
    });
  },
  logout({ commit }) {
    commit('SET_TOKEN');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
