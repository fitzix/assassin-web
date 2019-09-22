const ASN_APP_LIST_RESPONSIVE_LAYOUT = {
  home: {
    lg: 6,
    sm: 8,
    xs: 12,
  },
  'app-index': {
    lg: 4,
    sm: 6,
    xs: 12,
  },
};

const ASN_APP_TYPE = {
  0: 'App',
  1: 'Book',
};

const ASN_ENCRYPT = {
  aes: {
    key: '3C221351CA73FFA6',
  },
};

const CDN_REPOSITORY = {
  GithubRawServer: 'https://raw.githubusercontent.com',
  GithubServer: 'https://github.com',
  Owner: 'asins-xyz',
  Repo: 'assassin',
  Branch: 'master',
  ImgPath: 'post/img',
  ArticlePath: 'post/article',
  AppContentPath: 'post/app',
};

const ASN_GITALK = {
  repo: CDN_REPOSITORY.Repo,
  owner: CDN_REPOSITORY.Owner,
  clientID: '9ce1b80625f9d4dec430',
  clientSecret: '086c8114e8933dc5311a77926595ea9551dfa392',
  admin: ['asins-xyz'],
  distractionFreeMode: false,
};

const ASN_API = {
  baseUrl: `${process.env.VUE_APP_BASE_URL}/api/v1`,
  get uploadApi() {
    return `${this.baseUrl}/upload`;
  },
};

export { ASN_APP_LIST_RESPONSIVE_LAYOUT, CDN_REPOSITORY, ASN_APP_TYPE, ASN_ENCRYPT, ASN_GITALK, ASN_API };
