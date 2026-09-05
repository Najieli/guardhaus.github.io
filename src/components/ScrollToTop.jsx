import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { key, pathname, hash } = useLocation();
  useLayoutEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => { window.history.scrollRestoration = previous; };
  }, []);
  useLayoutEffect(() => {
    // Run before paint so a new page never flashes at the previous scroll position.
    const anchor = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (anchor) anchor.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [key, pathname, hash]);
  return null;
}
