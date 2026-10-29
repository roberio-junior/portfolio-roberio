
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });

      return;
    }

    const sectionId = decodeURIComponent(hash.slice(1));
    const section = document.getElementById(sectionId);

    section?.scrollIntoView({
      behavior: 'instant',
      block: 'start',
    });
  }, [pathname, hash]);

  return null;
}
