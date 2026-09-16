import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useMenu } from '../MenuContext.jsx';

// Mirrors Elementor Pro's off-canvas widget (entrance/exit animation: fadeIn, prevent scroll: yes).
const ANIMATION = 'fadeIn';

export default function OffCanvas({ canvasId, children, ...props }) {
  const { isOpen, closeMenu } = useMenu();
  // 'idle' | 'opening' | 'closing'
  const [phase, setPhase] = useState('idle');
  const wasOpen = useRef(false);

  useLayoutEffect(() => {
    if (isOpen === wasOpen.current) return;
    wasOpen.current = isOpen;
    setPhase(isOpen ? 'opening' : 'closing');
  }, [isOpen]);

  useEffect(() => {
    const body = document.body.classList;
    body.toggle('e-off-canvas__no-scroll', isOpen);
    body.toggle('e-off-canvas__no-scroll-animation', phase === 'closing');
  }, [isOpen, phase]);

  useEffect(() => () => {
    document.body.classList.remove('e-off-canvas__no-scroll', 'e-off-canvas__no-scroll-animation');
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [closeMenu]);

  const onAnimationEnd = (event) => {
    if (event.target === event.currentTarget) setPhase('idle');
  };

  const wrapperClass = phase === 'closing' ? 'e-off-canvas animated-reverse-wrapper' : 'e-off-canvas';
  let mainClass = 'e-off-canvas__main';
  if (phase === 'opening') mainClass += ` animated ${ANIMATION}`;
  if (phase === 'closing') mainClass += ` animated reverse ${ANIMATION}`;

  return (
    <div {...props}>
      <div id={canvasId} className={wrapperClass} role="dialog" aria-hidden={isOpen ? 'false' : 'true'} aria-label="Off-Canvas" aria-modal="true" inert={!isOpen}>
        <div className="e-off-canvas__overlay" onClick={closeMenu} />
        <div className={mainClass} onAnimationEnd={onAnimationEnd}>
          <div className="e-off-canvas__content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
