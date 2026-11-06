import React from 'react';
import { Quote, CheckCircle2, Linkedin } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useProfile } from '../../context/ProfileContext';
import { SectionHeading } from '../common/SectionHeading';

export const TestimonialsSection: React.FC = () => {
  const { accentStyles } = useTheme();
  const { profile } = useProfile();

  return (
    <section id="testimonials" className="py-24 px-4 relative z-10 bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Social Proof & Endorsements"
          title="What peers & engineering leaders"
          highlightText="say about my craft."
          subtitle="Direct feedback from VP of Engineering, design directors, and founders I've collaborated with to ship world-class systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.testimonials.map((test) => (
            <div
              key={test.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <Quote className={`w-8 h-8 mb-4 ${accentStyles.text} opacity-50 group-hover:opacity-100 transition-opacity`} />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-8">
                  "{test.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-white/15"
                />
                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-sm font-display truncate">
                      {test.name}
                    </span>
                    {test.verified && (
                      <span title="Verified Colleague">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400 truncate">
                    {test.role} • <span className="text-slate-300">{test.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
