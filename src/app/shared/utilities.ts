import {DatoEvent} from '@/lib/interfaces';
import markdownit from 'markdown-it';

const md = markdownit();
export function markdown(markdown?: string) {
  try {
    return md.render((markdown || '').trim());
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return '';
  }
}

const SHORT = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'Europe/London'
} as const;

export function formatDate(event: DatoEvent) {
  const date = new Date(event.date);

  if (event.endDate) {
    const endDate = new Date(event.endDate);
    const start = date.toLocaleDateString('en-GB', SHORT);
    const end = endDate.toLocaleDateString('en-GB', SHORT);
    return `${start} – ${end}`;
  }

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
