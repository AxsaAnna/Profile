import React, { useState, useEffect } from 'react';
import { Sparkles, Layers, Zap, Gauge, MapPin, Clock, Globe, Award, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useProfile } from '../../context/ProfileContext';
import { SectionHeading } from '../common/SectionHeading';
import { MagneticButton } from '../common/MagneticButton';
import { sound } from '../../utils/sound';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const { accentStyles } = useTheme();
  const { profile } = useProfile();
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const valueIcons: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
    Gauge: <Gauge className="w-5 h-5" />,
  };

  const personalityTags = [
    "Amal Jyothi (AJCE)",
    "Hackathon Innovator",
    "UI/UX Design Workshops",
    "AI Conclave Delegate",
    "Figma Prototyping",
    "React & Tailwind CSS",
    "Python & Machine Learning",
    "Continuous Learner"
  ];

  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Philosophy & Background"
          title="Bridging the gap between"
          highlightText="logic & emotion."
          subtitle="I believe the most unforgettable digital products occur at the intersection of robust systems engineering and obsessive visual refinement."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Avatar Card & Personal Metadata */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel p-6 rounded-3xl border border-white/10 relative overflow-hidden group">
              {/* Background ambient lighting */}
              <div
                className="absolute -right-20 -top-20 w-52 h-52 rounded-full blur-[80px] pointer-events-none opacity-40"
                style={{ background: accentStyles.glow }}
              />

              {/* Profile Image with high-end framing */}
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 group-hover:border-white/20 transition-all">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xl font-bold font-display text-white">{profile.name}</div>
                  <div className="text-xs font-mono text-slate-300">{profile.title}</div>
                </div>
              </div>

              {/* Metadata Indicators: Location & Timezone Clock */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-slate-400 text-[10px]">BASE LOCATION</div>
                    <div className="text-slate-200 truncate font-sans font-medium">{profile.location}</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-slate-400 text-[10px]">LOCAL TIME (IST)</div>
                    <div className="text-slate-200 font-mono font-medium">{time || '05:30:00 PM'}</div>
                  </div>
                </div>
              </div>

              {/* Personality Pills */}
              <div className="mt-5 pt-5 border-t border-white/10">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                  Interests & Domains
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalityTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/25 transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Resume Callout Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white font-display">Looking for complete work history?</h4>
                <p className="text-xs text-slate-400 mt-0.5">Comprehensive CV with verified references.</p>
              </div>
              <MagneticButton
                onClick={onOpenResume}
                className={`px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r ${accentStyles.gradient} shrink-0`}
              >
                View CV
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Narrative & 4 Core Values */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold font-display text-white mb-6 flex items-center gap-2.5">
                <Award className={`w-6 h-6 ${accentStyles.text}`} />
                <span>The Story So Far</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {profile.bioParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Rapid Hackathon Prototyping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Empathy-Driven UI/UX Design</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>AI & Frontend Engineering</span>
                </div>
              </div>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.coreValues.map((val) => (
                <div
                  key={val.title}
                  className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all group hover:-translate-y-1"
                >
                  <div className={`p-2.5 rounded-xl bg-white/5 w-fit mb-4 text-slate-200 group-hover:scale-110 transition-transform ${accentStyles.text}`}>
                    {valueIcons[val.icon] || <Sparkles className="w-5 h-5" />}
                  </div>
                  <h4 className="text-base font-bold text-white font-display mb-1.5 group-hover:text-white transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

