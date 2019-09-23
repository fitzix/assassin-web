const getters = {
  tags: state => state.app.tags,
  categories: state => state.app.categories,
  token: state => state.app.token,
  downloads: state => state.app.downloads,
  user: state => state.app.user,
};

export default getters;
