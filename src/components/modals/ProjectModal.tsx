import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight, Layers, ShieldCheck, Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ProjectItem } from '../../types';
import { sound } from '../../utils/sound';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { accentStyles } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-4xl max-h-[90vh] glass-panel rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden bg-slate-950/90"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase text-slate-400">
              {project.category}
            </span>
            {project.badge && (
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${accentStyles.badge}`}>
                {project.badge}
              </span>
            )}
          </div>

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

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Header */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white mb-2">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg font-medium text-brand-400 mb-4">
              {project.tagline}
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Preview Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 shadow-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.caseStudy.metrics.map((metric) => (
              <div key={metric.label} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className={`text-2xl font-black font-display bg-gradient-to-r ${accentStyles.gradient} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1 uppercase">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* The Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20">
              <h4 className="text-sm font-bold text-rose-400 uppercase font-mono mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                The Core Challenge
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
              <h4 className="text-sm font-bold text-emerald-400 uppercase font-mono mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                The Architectural Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div>
            <h4 className="text-base font-bold font-display text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Key Architectural Decisions</span>
            </h4>
            <div className="space-y-2">
              {project.caseStudy.architecture.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Technologies & Libraries</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-xl bg-white/10 text-xs font-mono text-slate-200 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-slate-950/80 flex items-center justify-between">
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-300 font-mono transition-colors"
          >
            Close Overview
          </button>

          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className={`px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${accentStyles.gradient} shadow-lg hover:brightness-110 flex items-center gap-2 transition-all`}
              >
                <span>Live Demonstration</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

