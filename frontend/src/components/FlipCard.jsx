import { useState } from 'react';

/**
 * Generic flip-card shell: internal flipped state, click/keyboard toggle, a11y, accent CSS var.
 * Always applies `.diva-flip-card` / `.diva-flip-card-inner` (shared 3D primitive).
 * Outer className should still include the contextual root (e.g. "char-flip", "skin-flip");
 * the inner wrapper also keeps `${root}-inner` unless innerClassName is provided.
 *
 * @param {object} props
 * @param {string} props.className - Outer classes (first token used to derive *-inner)
 * @param {string} [props.innerClassName] - Override for the 3D transform wrapper
 * @param {string} [props.accent] - Sets CSS variable --accent-c
 * @param {string} props.ariaLabel - Accessible name for the button role
 * @param {() => void} [props.onFlip] - Called on every toggle (flip and unflip)
 * @param {React.ReactNode} props.children - Front/back face content
 */
export default function FlipCard({
  className,
  innerClassName,
  accent,
  ariaLabel,
  onFlip,
  children,
}) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => {
    setFlipped((f) => !f);
    onFlip?.();
  };

  const rootClass = className.trim().split(/\s+/)[0];
  const resolvedInnerClass = innerClassName ?? `diva-flip-card-inner ${rootClass}-inner`;

  return (
    <div
      className={`diva-flip-card ${className}${flipped ? ' flipped' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      aria-pressed={flipped}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      }}
      style={accent ? { '--accent-c': accent } : undefined}
    >
      <div className={resolvedInnerClass}>
        {children}
      </div>
    </div>
  );
}
