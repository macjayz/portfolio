import { useEffect, useRef, useState } from 'react';

// Elementor entrance animation: element stays `elementor-invisible` until it
// enters the viewport, then gets `animated <animation>` after the configured delay.
export default function Animated({ as: Tag = 'div', className, animation, delay = 0, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    let timer;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(element);
      timer = setTimeout(() => setVisible(true), delay);
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  const classes = visible ? `${className} animated ${animation}` : `${className} elementor-invisible`;
  return <Tag ref={ref} className={classes} {...props} />;
}
