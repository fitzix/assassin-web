import Gitalk from 'gitalk';
import { ASN_GITALK } from 'src/const';

const gitalk = new Gitalk(ASN_GITALK);

export function gitalkRender(id) {
  gitalk.options.id = id;
  gitalk.render('gitalk-container');
}
