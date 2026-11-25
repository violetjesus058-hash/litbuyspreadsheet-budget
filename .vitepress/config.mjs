import { defineConfig } from 'vitepress'

const hostname = 'https://litbuyspreadsheet-budget.com'
const siteTitle = 'Litbuy Spreadsheet 2026: Budget Finds, QC Photos & Shopping Guides'
const siteDescription = 'Explore Litbuy Spreadsheet budget finds by category, price range, brand, QC photos, size notes, shipping guidance, and shopping shortcuts through an independent directory.'

export default defineConfig({
  title: siteTitle,
  description: siteDescription,
  lang: 'en-US',
  cleanUrls: 'with-subfolders',

  head: [
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtm.js?id=GTM-TRMBFMSD' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    `],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
    ['meta', { name: 'google-site-verification', content: 'EnHLB-w90YQehCBgwxYRUVhmDEotaHdd9hx4cwuVWeM' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: siteTitle }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:url', content: hostname }],
    ['meta', { property: 'og:image', content: `${hostname}/favicon.png` }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: siteTitle }],
    ['meta', { name: 'twitter:description', content: siteDescription }],
    ['script', {}, `
      (function() {
        function sendTracking(eventName) {
          if (typeof window.gtag === 'function') {
            window.gtag('event', eventName, {
              event_category: 'directory_navigation',
              event_label: eventName,
              value: 1.0
            });
          }
        }
        function bindTracking() {
          document.querySelectorAll('a.cta-spreadsheet, a.hero-action, a.wide-cta, a.text-button').forEach(function(el) {
            if (!el.dataset.tracked) {
              el.dataset.tracked = '1';
              el.addEventListener('click', function() { sendTracking('external_directory_click'); });
            }
          });
        }
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindTracking);
        else bindTracking();
        new MutationObserver(bindTracking).observe(document.body, { childList: true, subtree: true });
      })();
    `],
  ],

  themeConfig: {
    logo: '/favicon.png',
    siteTitle,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Clothing', link: 'https://productsite-8wf.pages.dev/?view=styles&category=clothing&platform=litbuy' },
      { text: 'Shoes', link: 'https://productsite-8wf.pages.dev/?view=styles&category=shoe&platform=litbuy' },
      { text: 'Pants', link: 'https://productsite-8wf.pages.dev/?view=styles&category=pants&platform=litbuy' },
      { text: 'Accessories', link: 'https://productsite-8wf.pages.dev/?view=styles&category=ACC&platform=litbuy' },
      { text: 'Brands', link: '/#featured-brands' },
      { text: 'All Finds', link: 'https://productsite-8wf.pages.dev/?view=styles&platform=litbuy' },
    ],
    sidebar: false,
    outline: false,
  },

  sitemap: {
    hostname,
  },
})
