import { useEffect } from 'react';

export interface SeoOpts {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

export function useSEO({ title, description, canonical, schema }: SeoOpts) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    if (canonical) setLink('canonical', canonical);
    if (schema) setSchema(schema);
  }, [title, description, canonical, schema]);
}

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function setSchema(obj: object) {
  const id = 'page-schema';
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(obj);
}
