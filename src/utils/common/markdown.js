// import marked from 'marked';
import MarkdownIt from 'markdown-it';

export function render(str) {
  // return marked(str);
  let md = new MarkdownIt();
  md.render(str);
}
