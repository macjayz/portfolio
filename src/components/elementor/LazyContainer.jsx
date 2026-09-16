import { useEffect, useRef, useState } from 'react';

// Top-level Elementor container. Background images are hidden (see lazyload.css)
// until the container is near the viewport and gets `e-lazyloaded`.
export default function LazyContainer({ as: Tag = 'div', className, ...props }) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      setLoaded(true);
      observer.disconnect();
    }, { rootMargin: '200px 0px 200px 0px' });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <Tag ref={ref} className={loaded ? `${className} e-lazyloaded` : className} {...props} />;
}
