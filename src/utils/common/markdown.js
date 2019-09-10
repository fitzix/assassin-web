// import marked from 'marked';
import MarkdownIt from 'markdown-it';

export function render(str) {
  // return marked(str);
  let md = new MarkdownIt();
  return md.render(str);
}
