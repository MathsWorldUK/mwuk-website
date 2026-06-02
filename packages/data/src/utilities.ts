import {DatoEvent} from './interfaces';
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

interface StructuredTextNode {
  type?: string;
  children?: StructuredTextNode[];
  value?: string;
  marks?: string[];
  style?: string;
  level?: number;
  url?: string;
}

interface StructuredTextValue {
  schema?: string;
  document?: StructuredTextNode;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function sanitizeHref(url?: string): string {
  if (!url) {
    return '#';
  }

  if (url.startsWith('/') || url.startsWith('#')) {
    return escapeHtml(url);
  }

  try {
    const parsedUrl = new URL(url);
    if (
      parsedUrl.protocol === 'http:' ||
      parsedUrl.protocol === 'https:' ||
      parsedUrl.protocol === 'mailto:' ||
      parsedUrl.protocol === 'tel:'
    ) {
      return escapeHtml(url);
    }
  } catch {
    return '#';
  }

  return '#';
}

function applyMarks(text: string, marks: string[] = []): string {
  return marks.reduce((result, mark) => {
    if (mark === 'strong') {
      return `<strong>${result}</strong>`;
    }

    if (mark === 'emphasis') {
      return `<em>${result}</em>`;
    }

    if (mark === 'underline') {
      return `<u>${result}</u>`;
    }

    if (mark === 'strikethrough') {
      return `<s>${result}</s>`;
    }

    if (mark === 'code') {
      return `<code>${result}</code>`;
    }

    return result;
  }, text);
}

function renderChildren(children: StructuredTextNode[] = []): string {
  return children.map((child) => renderNode(child)).join('');
}

function renderNode(node?: StructuredTextNode): string {
  if (!node?.type) {
    return '';
  }

  if (node.type === 'root') {
    return renderChildren(node.children);
  }

  if (node.type === 'paragraph') {
    return `<p>${renderChildren(node.children)}</p>`;
  }

  if (node.type === 'heading') {
    const level = Math.min(Math.max(node.level || 2, 1), 6);
    return `<h${level}>${renderChildren(node.children)}</h${level}>`;
  }

  if (node.type === 'list') {
    const tag = node.style === 'numbered' ? 'ol' : 'ul';
    return `<${tag}>${renderChildren(node.children)}</${tag}>`;
  }

  if (node.type === 'listItem') {
    return `<li>${renderChildren(node.children)}</li>`;
  }

  if (node.type === 'blockquote') {
    return `<blockquote>${renderChildren(node.children)}</blockquote>`;
  }

  if (node.type === 'thematicBreak') {
    return '<hr />';
  }

  if (node.type === 'link') {
    const label = renderChildren(node.children) || escapeHtml(node.url || '');
    return `<a href="${sanitizeHref(node.url)}">${label}</a>`;
  }

  if (node.type === 'span') {
    const text = escapeHtml(node.value || '').replaceAll('\n', '<br />');
    return applyMarks(text, node.marks);
  }

  return renderChildren(node.children);
}

function isStructuredTextValue(value: unknown): value is StructuredTextValue {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const typedValue = value as StructuredTextValue;
  return typedValue.schema === 'dast' && !!typedValue.document;
}

export function structuredTextToHtml(value: unknown): string {
  if (!isStructuredTextValue(value)) {
    return '';
  }

  return renderNode(value.document);
}

const SHORT = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'Europe/London',
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
    timeZone: 'Europe/London',
  });
}
