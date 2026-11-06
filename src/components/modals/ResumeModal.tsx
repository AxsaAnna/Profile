import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, MapPin, Globe, CheckCircle2, Award } from 'lucide-react';
import { useProfile } from '../../context/ProfileContext';
import { useTheme } from '../../context/ThemeContext';
import { sound } from '../../utils/sound';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { profile } = useProfile();
  const { accentStyles } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-4xl max-h-[92vh] glass-panel rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden bg-slate-950/95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-white/5 print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>CURRICULUM VITAE (PRODUCTION VERIFIED)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-900/60 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-black/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black font-display text-white print:text-black">
                  {profile.name}
                </h1>
                <p className={`text-base font-semibold ${accentStyles.text} print:text-indigo-600 mt-1`}>
                  {profile.title}
                </p>
              </div>

              <div className="text-xs font-mono text-slate-400 print:text-slate-600 space-y-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>github.com/axsa-anna-shaji</span>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 print:text-slate-600 mb-2 font-bold">
              Professional Summary
            </h3>
            <p className="text-sm sm:text-base text-slate-300 print:text-slate-800 leading-relaxed">
              {profile.bioParagraphs[0]} {profile.bioParagraphs[1]}
            </p>
          </div>

          {/* Technical Arsenal Grid */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 print:text-slate-600 mb-3 font-bold">
              Core Technical & Design Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/5 print:bg-slate-100 border border-white/10 print:border-slate-300">
                <div className="text-xs font-bold text-white print:text-black font-mono">UI/UX & Design</div>
                <div className="text-xs text-slate-400 print:text-slate-600 mt-1">
                  Figma, Wireframing, Auto-Layout, Design Systems, Empathy Mapping, Usability Audits
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 print:bg-slate-100 border border-white/10 print:border-slate-300">
                <div className="text-xs font-bold text-white print:text-black font-mono">Frontend Development</div>
                <div className="text-xs text-slate-400 print:text-slate-600 mt-1">
                  React, JavaScript (ES6+), TypeScript, HTML5, Modern CSS3, Tailwind CSS, Responsive Web
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 print:bg-slate-100 border border-white/10 print:border-slate-300">
                <div className="text-xs font-bold text-white print:text-black font-mono">AI & Core CS</div>
                <div className="text-xs text-slate-400 print:text-slate-600 mt-1">
                  Python, LLM Prompt Engineering, C / C++, Data Structures & Algorithms, Git / GitHub
                </div>
              </div>
            </div>
          </div>

          {/* Career History */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 print:text-slate-600 mb-4 font-bold">
              Engineering Experience
            </h3>
            <div className="space-y-6">
              {profile.experiences.map((exp) => (
                <div key={exp.id} className="border-l-2 border-white/15 print:border-slate-400 pl-4 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <div className="font-bold text-white print:text-black">
                      {exp.role} <span className="font-normal text-slate-400 print:text-slate-600">at {exp.company}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-400 print:text-slate-600">
                      {exp.period} • {exp.location}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 print:text-slate-700">
                    {exp.summary}
                  </p>
                  <ul className="space-y-1">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-slate-400 print:text-slate-600 flex items-start gap-2">
                        <span className="text-emerald-400 print:text-emerald-700 mt-0.5">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Honors */}
          <div className="pt-4 border-t border-white/10 print:border-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 print:text-slate-600 mb-1 font-bold">
                Education
              </h4>
              <div className="text-sm font-bold text-white print:text-black">
                B.Tech in Computer Science & Engineering (Fresher)
              </div>
              <div className="text-xs text-slate-400 print:text-slate-600">
                Amal Jyothi College of Engineering (AJCE), Kerala
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 print:text-slate-600 mb-1 font-bold">
                Honors & Activities
              </h4>
              <div className="text-xs text-slate-300 print:text-slate-700 space-y-1">
                <div>• Hackathon Finalist — CogniFlow AI (36-hr rapid prototype)</div>
                <div>• Delegate & Presenter — Regional AI Conclave (MedAI Triage)</div>
                <div>• Best Design Commendation — Aura Portal (UI/UX Workshop)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-slate-950/80 flex items-center justify-between print:hidden">
          <span className="text-xs text-slate-500 font-mono">Open for internships, UI/UX roles & hackathon teams</span>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white font-mono"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

