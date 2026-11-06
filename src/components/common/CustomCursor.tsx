import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { colorTheme } = useTheme();

  useEffect(() => {
    // Only enable for desktop mice
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = Boolean(
          target.closest('button, a, input, textarea, select, [role="button"], .interactive')
        );
        setIsPointer(interactive);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const colorStyles: Record<string, string> = {
    indigo: 'border-indigo-400/80 bg-indigo-500/15',
    cyan: 'border-cyan-400/80 bg-cyan-500/15',
    emerald: 'border-emerald-400/80 bg-emerald-500/15',
    amber: 'border-amber-400/80 bg-amber-500/15',
    fuchsia: 'border-fuchsia-400/80 bg-fuchsia-500/15',
  };

  const dotColorStyles: Record<string, string> = {
    indigo: 'bg-indigo-400',
    cyan: 'bg-cyan-400',
    emerald: 'bg-emerald-400',
    amber: 'bg-amber-400',
    fuchsia: 'bg-fuchsia-400',
  };

  return (
    <>
      {/* Outer follow ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border transition-transform duration-150 ease-out hidden md:block ${
          colorStyles[colorTheme] || colorStyles.indigo
        } ${isPointer ? 'scale-150 opacity-90' : 'scale-100 opacity-60'}`}
        style={{
          width: '32px',
          height: '32px',
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)`,
          backdropFilter: 'blur(1px)',
        }}
      />
      {/* Center dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-75 hidden md:block ${
          dotColorStyles[colorTheme] || dotColorStyles.indigo
        } ${isPointer ? 'scale-0' : 'scale-100'}`}
        style={{
          width: '6px',
          height: '6px',
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
        }}
      />
    </>
  );
};

