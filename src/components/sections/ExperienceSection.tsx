import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useProfile } from '../../context/ProfileContext';
import { SectionHeading } from '../common/SectionHeading';
import { sound } from '../../utils/sound';

export const ExperienceSection: React.FC = () => {
  const { accentStyles } = useTheme();
  const { profile } = useProfile();

  return (
    <section id="experience" className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="Track Record & Leadership"
          title="Career milestones &"
          highlightText="engineering impact."
          subtitle="Proven track record taking distributed products from zero-to-one and scaling platforms to multi-million user volume."
        />

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {profile.experiences.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              {/* Luminous Node on Timeline */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 border-slate-950 bg-slate-800 group-hover:${accentStyles.bg} transition-colors ring-2 ring-white/10`}
                style={{
                  backgroundColor: exp.current ? (accentStyles.bg.replace('bg-', '') === 'indigo-500' ? '#6366f1' : '#10b981') : undefined
                }}
              />

              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all group-hover:-translate-y-1">
                {/* Header: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${accentStyles.badge}`}>
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-slate-300 flex items-center gap-2 mt-1">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 font-mono text-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {exp.summary}
                </p>

                {/* Achievements List */}
                <div className="space-y-2.5 mb-6">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Used in this role */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {exp.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

