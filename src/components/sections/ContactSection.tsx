import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, Clock, MapPin, Github, Linkedin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useProfile } from '../../context/ProfileContext';
import { SectionHeading } from '../common/SectionHeading';
import { MagneticButton } from '../common/MagneticButton';
import { copyToClipboard } from '../../utils/helpers';
import { sound } from '../../utils/sound';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const { accentStyles } = useTheme();
  const { profile } = useProfile();

  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    interest: 'Software / Frontend Engineering Internship',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    sound.playSuccess();
    await copyToClipboard(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    sound.playClick();

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      sound.playSuccess();
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 },
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Direct Pipeline & Inquiries"
          title="Let's build something"
          highlightText="extraordinary together."
          subtitle="Whether you're scaling an engineering team, launching a zero-to-one venture, or exploring strategic technical advisory — my inbox is open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Info, Copy Email, Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div>
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold border mb-3 ${accentStyles.badge}`}>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Internships & Hackathon Teams
                </span>
                <h3 className="text-2xl font-bold font-display text-white">
                  Direct Contact Information
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Fastest response via email. I am always excited to discuss engineering internships, hackathons, and UI/UX design collaborations.
                </p>
              </div>

              {/* 1-Click Copy Email Pill */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className={`p-2 rounded-xl bg-white/5 ${accentStyles.text}`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Primary Email</div>
                    <div className="text-sm font-semibold text-white truncate font-mono">{profile.email}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Stats & Guarantee */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>RESPONSE TIME</span>
                  </div>
                  <div className="text-white font-bold">&lt; 12 Hours</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>TIMEZONE</span>
                  </div>
                  <div className="text-white font-bold">IST (UTC+5:30)</div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Professional Networks
                </div>
                <div className="flex flex-wrap gap-2">
                  {profile.socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5"
                    >
                      <span>{social.platform.toUpperCase()}</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-500" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Dispatch Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 flex-1 flex flex-col justify-between">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center ring-4 ring-emerald-500/10">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold font-display text-white">
                    Transmission Dispatched!
                  </h4>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">
                    Thank you for reaching out, {formState.name}. Your inquiry has been routed to my personal inbox. I will review and respond shortly!
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: '', email: '', interest: 'Senior / Staff Full-Stack Role', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-white/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-white/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      INQUIRY TOPIC
                    </label>
                    <select
                      value={formState.interest}
                      onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
                    >
                      <option value="Software / Frontend Engineering Internship">Software / Frontend Engineering Internship</option>
                      <option value="UI/UX Design Project or Collaboration">UI/UX Design Project or Collaboration</option>
                      <option value="Hackathon Team Teammate Invitation">Hackathon Team Teammate Invitation</option>
                      <option value="AI Conclave or Tech Event Networking">AI Conclave or Tech Event Networking</option>
                      <option value="General Tech Chat & Mentorship">General Tech Chat & Mentorship</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      PROJECT OVERVIEW & CONTEXT *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about what you are building, your team size, key challenges, or timeline..."
                      className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-white/30 resize-none"
                    />
                  </div>

                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${accentStyles.gradient} shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2`}
                  >
                    {isSubmitting ? (
                      <span className="font-mono">Transmitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Direct Message</span>
                      </>
                    )}
                  </MagneticButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

