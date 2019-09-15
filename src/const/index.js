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
    iv: 'ADB23285B2F0CF1F',
    key: '3C221351CA73FFA6',
  },
};

const CDN_REPOSITORY = {
  GithubServer: 'https://raw.githubusercontent.com',
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

export { ASN_APP_LIST_RESPONSIVE_LAYOUT, CDN_REPOSITORY, ASN_APP_TYPE, ASN_ENCRYPT, ASN_GITALK };
