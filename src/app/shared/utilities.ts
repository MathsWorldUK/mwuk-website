import markdownit from 'markdown-it';

const md = markdownit();
export function markdown(markdown: string) {
  try {
    return md.render(markdown.trim());
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return '';
  }
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'Europe/London'
  });
}
