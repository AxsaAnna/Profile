import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightText,
  subtitle,
  alignment = 'center',
}) => {
  const { accentStyles } = useTheme();

  return (
    <div className={`mb-14 ${alignment === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'}`}>
      {/* Badge */}
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase border mb-4 ${accentStyles.badge} backdrop-blur-md`}>
        <span className={`w-1.5 h-1.5 rounded-full ${accentStyles.bg} animate-pulse`} />
        {badge}
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white mb-4 leading-tight">
        {title}{' '}
        {highlightText && (
          <span className={`bg-gradient-to-r ${accentStyles.gradient} bg-clip-text text-transparent`}>
            {highlightText}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

