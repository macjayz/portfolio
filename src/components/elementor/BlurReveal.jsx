import { createContext, useContext, useEffect, useRef, useState } from 'react';

// Delay (in milliseconds) between each letter revealing
const STAGGER_DELAY = 30;

const RevealContext = createContext(false);

// Letter-by-letter blur reveal (styles in styles/custom/blur-reveal.css).
export default function BlurReveal({ children, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setVisible(true);
      observer.disconnect();
    }, { threshold: 0.5 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} {...props}>
      <RevealContext value={visible}>{children}</RevealContext>
    </div>
  );
}

// `offset` is the number of letters that precede this text within the same heading,
// so the stagger continues across <br> and other elements.
export function RevealText({ text, offset = 0 }) {
  const visible = useContext(RevealContext);
  let index = offset;

  // Split into words and whitespace; letters of a word are grouped so they wrap together.
  return text.split(/([ \n\t]+)/).map((part, partIndex) => {
    if (!part || /^[ \n\t]+$/.test(part)) return part;
    return (
      <span key={partIndex} className="word-group">
        {[...part].map((char, i) => {
          const delay = index * STAGGER_DELAY;
          index += 1;
          return (
            <span
              key={i}
              className={visible ? 'word is-visible' : 'word'}
              style={visible ? { transitionDelay: `${delay}ms` } : undefined}
            >
              {char}
            </span>
          );
        })}
      </span>
    );
  });
}
