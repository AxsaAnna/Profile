import React, { useState, useEffect } from 'react';
import { X, Check, RotateCcw, Download, Sparkles, User, Briefcase, Mail, MapPin } from 'lucide-react';
import { useProfile } from '../../context/ProfileContext';
import { useTheme } from '../../context/ThemeContext';
import { sound } from '../../utils/sound';
import confetti from 'canvas-confetti';

interface ProfileEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileEditorModal: React.FC<ProfileEditorModalProps> = ({ isOpen, onClose }) => {
  const { profile, updateProfile, resetProfile, loadPersonaPreset } = useProfile();
  const { accentStyles } = useTheme();

  const [formData, setFormData] = useState({
    name: profile.name,
    title: profile.title,
    headline: profile.headline,
    statusBadge: profile.statusBadge,
    location: profile.location,
    email: profile.email,
    availableForHire: profile.availableForHire,
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: profile.name,
        title: profile.title,
        headline: profile.headline,
        statusBadge: profile.statusBadge,
        location: profile.location,
        email: profile.email,
        availableForHire: profile.availableForHire,
      });
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, profile]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccess();
    updateProfile(formData);
    confetti({ particleCount: 60, spread: 70 });
    onClose();
  };

  const handleExportJSON = () => {
    sound.playClick();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(profile, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${profile.name.toLowerCase().replace(/\s+/g, '-')}-portfolio-config.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl max-h-[90vh] glass-panel rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden bg-slate-950/95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold font-display text-white">Live Portfolio Customizer</h3>
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

        {/* Content */}
        <form onSubmit={handleSave} className="overflow-y-auto p-6 space-y-6 flex-1">
          {/* Quick Presets */}
          <div>
            <div className="text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">
              Instant Persona Presets
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  loadPersonaPreset('fullstack');
                }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-all"
              >
                <div className="text-xs font-bold text-white font-display">Aspiring Full-Stack</div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">Web & Hackathon MVPs</div>
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  loadPersonaPreset('ai');
                }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-all"
              >
                <div className="text-xs font-bold text-white font-display">AI Conclave Track</div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">LLMs & Python ML</div>
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  loadPersonaPreset('creative');
                }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-all"
              >
                <div className="text-xs font-bold text-white font-display">UI/UX Designer</div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">Figma & Design Systems</div>
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-panel text-white text-xs border border-white/10 focus:border-white/30 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Professional Title</label>
              <div className="relative">
                <Briefcase className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-panel text-white text-xs border border-white/10 focus:border-white/30 outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">Impact Headline</label>
            <input
              type="text"
              value={formData.headline}
              onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl glass-panel text-white text-xs border border-white/10 focus:border-white/30 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Status Badge Text</label>
              <input
                type="text"
                value={formData.statusBadge}
                onChange={(e) => setFormData({ ...formData, statusBadge: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl glass-panel text-white text-xs border border-white/10 focus:border-white/30 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Primary Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-panel text-white text-xs border border-white/10 focus:border-white/30 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Location</label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-panel text-white text-xs border border-white/10 focus:border-white/30 outline-none"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <input
                type="checkbox"
                id="avail"
                checked={formData.availableForHire}
                onChange={(e) => setFormData({ ...formData, availableForHire: e.target.checked })}
                className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-400 bg-slate-900 border-white/20"
              />
              <label htmlFor="avail" className="text-xs font-mono text-slate-300 cursor-pointer">
                Show "Available for Hire" Beacon
              </label>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  resetProfile();
                }}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-rose-400 flex items-center gap-1.5 transition-colors"
                title="Reset to original default profile"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>

              <button
                type="button"
                onClick={handleExportJSON}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-colors"
                title="Download JSON config"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON</span>
              </button>
            </div>

            <button
              type="submit"
              className={`px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${accentStyles.gradient} shadow-lg hover:brightness-110 flex items-center gap-1.5`}
            >
              <Check className="w-4 h-4" />
              <span>Apply Changes Live</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

