import { useEffect } from 'react';

interface SEOOptions {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

const BASE_URL = 'https://21stcenturytexas.com';

export function useSEO({ title, description, canonical, schema }: SEOOptions) {
  useEffect(() => {
    document.title = title;

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;
    setMeta('property', 'og:url', canonicalUrl);

    let schemaTag = document.getElementById('page-schema');
    if (schema) {
      if (!schemaTag) {
        schemaTag = document.createElement('script');
        schemaTag.id = 'page-schema';
        (schemaTag as HTMLScriptElement).type = 'application/ld+json';
        document.head.appendChild(schemaTag);
      }
      schemaTag.textContent = JSON.stringify(schema);
    } else if (schemaTag) {
      schemaTag.remove();
    }
  }, [title, description, canonical]);
}

function setMeta(attr: string, key: string, value: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}
