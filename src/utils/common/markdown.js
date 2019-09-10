// import marked from 'marked';
import MarkdownIt from 'markdown-it';

export function render(str) {
  // return marked(str);
  let md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });
  return md.render(str);
}
