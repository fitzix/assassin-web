import { GetTags, GetCategories, GetDownloadTypes } from 'src/api';
import { parseListToObject } from 'src/utils/common';

const state = {
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
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
