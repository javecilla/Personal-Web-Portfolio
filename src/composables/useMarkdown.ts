import MarkdownIt from 'markdown-it';

export function useMarkdown() {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true
  });

  const parseMarkdown = (content: string) => {
    return md.render(content);
  };

  return {
    parseMarkdown
  };
}
