import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { setPageStyles } from '../styles/index.js';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import { MenuProvider } from './MenuContext.jsx';

const BASE_BODY_CLASSES = 'wp-singular page-template-default page wp-embed-responsive wp-theme-hello-elementor hello-elementor-default elementor-default elementor-kit-51 elementor-page';

// Rendered before the rest of the page so its layout effect runs first:
// the page stylesheet must be active before anything (e.g. Swiper) measures the DOM,
// otherwise elements with CSS transitions would animate into their page styles.
function PageSetup({ page }) {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    const classes = [
      ...(page.home ? ['home'] : []),
      ...BASE_BODY_CLASSES.split(' '),
      `page-id-${page.id}`,
      `elementor-page-${page.id}`,
    ];
    document.body.classList.add(...classes);
    document.title = page.title;
    setPageStyles(page.styles);
    return () => document.body.classList.remove(...classes);
  }, [page]);

  // Each route was a full page load before: jump (no smooth scrolling) to the top or the
  // #anchor. Later hash changes on the same page scroll like normal in-page anchors.
  const previousHash = useRef(null);
  useLayoutEffect(() => {
    const isPageLoad = previousHash.current === null || previousHash.current === hash;
    const behavior = isPageLoad ? 'instant' : 'auto';
    previousHash.current = hash;
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView({ behavior });
    else window.scrollTo({ top: 0, left: 0, behavior });
  }, [hash]);

  return null;
}

export default function Layout({ page, children }) {
  return (
    <MenuProvider>
      <PageSetup page={page} />
      <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
      <Header />
      {children}
      <Footer />
    </MenuProvider>
  );
}
