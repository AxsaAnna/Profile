import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, Play, RotateCcw, Sliders, Volume2, Check, Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useProfile } from '../../context/ProfileContext';
import { SectionHeading } from '../common/SectionHeading';
import { sound } from '../../utils/sound';
import confetti from 'canvas-confetti';

export const InteractiveLabSection: React.FC = () => {
  const { accentStyles, setColorTheme, colorTheme } = useTheme();
  const { profile } = useProfile();

  // Terminal state
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ text: string; type: 'cmd' | 'output' | 'system' | 'success' | 'error' }>>([
    { text: "Axsa Anna Shaji — Dev Terminal v1.0.0 [Amal Jyothi College of Engineering]", type: 'system' },
    { text: "Try commands: 'help', 'whoami', 'hackathons', 'conclave', 'uiux', 'skills', 'hire', 'clear'", type: 'output' },
  ]);
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const terminalBottomRef = useRef<HTMLDivElement | null>(null);

  // Audio Synth Pad state
  const [activeChordNote, setActiveChordNote] = useState<number | null>(null);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    sound.playClick();
    const newHistory = [...terminalHistory, { text: `$ ${terminalInput}`, type: 'cmd' as const }];

    if (cmd === 'help') {
      newHistory.push({
        text: `Available commands:
• whoami       : Developer bio & AJCE background
• hackathons   : Hackathon projects & achievements
• conclave     : AI Conclave learnings & prototypes
• uiux         : UI/UX design workshops & Figma work
• skills       : Core technical & design stacks
• projects     : Shipped applications & repositories
• contact      : Direct contact details
• hire         : Internship & collaboration inquiry
• theme <name> : Change theme (indigo, cyan, emerald, amber, fuchsia)
• matrix       : Toggle matrix visual stream
• sound        : Toggle UI sound effects
• clear        : Clear console window`,
        type: 'output'
      });
    } else if (cmd === 'whoami') {
      newHistory.push({
        text: `${profile.name} — ${profile.title}\n${profile.headline}\nCollege: Amal Jyothi College of Engineering (AJCE)\nBase: ${profile.location} | Status: ${profile.statusBadge}`,
        type: 'output'
      });
    } else if (cmd === 'hackathons') {
      newHistory.push({
        text: `🏆 Hackathon Highlights:
• CogniFlow AI: 36-hr sprint finalist (Adaptive student flashcards & AI study tutor)
• EcoTrack AJCE: Smart campus energy & waste tracking dashboard (24h sprint)
• Active competitor in national & collegiate innovation hackathons`,
        type: 'success'
      });
    } else if (cmd === 'conclave') {
      newHistory.push({
        text: `🤖 AI Conclave Highlights:
• Delegate at Regional AI Conclave & Emerging Tech Symposium
• Showcased MedAI clinical triage prototype
• Explored LLM prompt engineering, computer vision, and agentic workflows`,
        type: 'success'
      });
    } else if (cmd === 'uiux') {
      newHistory.push({
        text: `🎨 UI/UX Workshop Highlights:
• Figma component architectures & auto-layout masterclasses
• Designed 'Aura' AJCE campus community & event discovery portal
• Empathy mapping, user research, and usability testing with student peers`,
        type: 'success'
      });
    } else if (cmd === 'skills') {
      const topSkills = profile.skills.filter(s => s.highlight).map(s => `  • ${s.name} (${s.category})`).join('\n');
      newHistory.push({
        text: `Primary Technical & Design Stacks:\n${topSkills}`,
        type: 'output'
      });
    } else if (cmd === 'projects') {
      const projList = profile.projects.map(p => `  • [${p.title}] - ${p.tagline}`).join('\n');
      newHistory.push({
        text: `Featured Works:\n${projList}`,
        type: 'output'
      });
    } else if (cmd === 'contact') {
      newHistory.push({
        text: `Reach out directly: ${profile.email}\nOpening contact channel...`,
        type: 'success'
      });
      const el = document.getElementById('contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd === 'hire') {
      sound.playSuccess();
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
      newHistory.push({
        text: `🎉 EXCELLENT OPPORTUNITY! Initiating student collaboration protocol.\nAxsa is actively looking for Frontend, UI/UX, & AI Software Engineering internships and student hackathon teams.\nPlease reach out at ${profile.email}!`,
        type: 'success'
      });
    } else if (cmd.startsWith('theme ')) {
      const targetTheme = cmd.split(' ')[1];
      if (['indigo', 'cyan', 'emerald', 'amber', 'fuchsia'].includes(targetTheme)) {
        setColorTheme(targetTheme as any);
        newHistory.push({ text: `Theme successfully changed to ${targetTheme}!`, type: 'success' });
      } else {
        newHistory.push({ text: `Invalid theme. Choose: indigo, cyan, emerald, amber, or fuchsia.`, type: 'error' });
      }
    } else if (cmd === 'matrix') {
      setIsMatrixActive(!isMatrixActive);
      newHistory.push({ text: `Matrix digital stream ${!isMatrixActive ? 'ACTIVATED' : 'DEACTIVATED'}.`, type: 'success' });
    } else if (cmd === 'sound') {
      const enabled = sound.toggle();
      newHistory.push({ text: `UI sound effects ${enabled ? 'ENABLED' : 'MUTED'}.`, type: 'output' });
    } else if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else {
      newHistory.push({
        text: `Command not recognized: '${cmd}'. Type 'help' to inspect command catalog.`,
        type: 'error'
      });
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  const playSynthesizerNote = (freq: number, index: number) => {
    setActiveChordNote(index);
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch {
      // Audio not permitted
    }
    setTimeout(() => setActiveChordNote(null), 300);
  };

  const synthNotes = [
    { label: 'C4 (261Hz)', freq: 261.63, tag: 'Tonic' },
    { label: 'E4 (329Hz)', freq: 329.63, tag: 'Major 3rd' },
    { label: 'G4 (392Hz)', freq: 392.00, tag: '5th' },
    { label: 'B4 (493Hz)', freq: 493.88, tag: 'Maj 7th' },
    { label: 'D5 (587Hz)', freq: 587.33, tag: '9th' },
  ];

  return (
    <section id="lab" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Interactive Playground & Dev Lab"
          title="Experiment in real-time with"
          highlightText="code & sound."
          subtitle="Explore the live developer console, synthesize audio frequencies via Web Audio API, or customize the interface dynamically."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Web Terminal */}
          <div className="lg:col-span-8 flex flex-col">
            <div className={`glass-panel rounded-3xl border border-white/15 overflow-hidden flex flex-col h-[480px] shadow-2xl relative ${isMatrixActive ? 'border-emerald-500/50 bg-black/90' : ''
              }`}>
              {/* Window Header */}
              <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">bash — axsa@ajce-laptop</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>zsh (interactive)</span>
                </div>
              </div>

              {/* Terminal Output Area */}
              <div className="flex-1 p-4 font-mono text-xs sm:text-sm overflow-y-auto space-y-2 selection:bg-emerald-500/30 selection:text-emerald-300">
                {terminalHistory.map((item, idx) => (
                  <div
                    key={idx}
                    className={`leading-relaxed whitespace-pre-wrap ${item.type === 'cmd'
                        ? 'text-white font-bold'
                        : item.type === 'system'
                          ? 'text-cyan-400'
                          : item.type === 'success'
                            ? 'text-emerald-400'
                            : item.type === 'error'
                              ? 'text-rose-400'
                              : 'text-slate-300'
                      }`}
                  >
                    {item.text}
                  </div>
                ))}
                <div ref={terminalBottomRef} />
              </div>

              {/* Terminal Input Bar */}
              <form onSubmit={handleTerminalSubmit} className="p-3 bg-black/40 border-t border-white/10 flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-sm font-bold">axsa@ajce:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type 'help', 'hire', or 'whoami'..."
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm placeholder-slate-600"
                />
                <button
                  type="submit"
                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors"
                >
                  Enter
                </button>
              </form>
            </div>
          </div>

          {/* Right: Audio Synthesizer & Quick Studio Controls */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Audio Synth Pad */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-xl bg-white/5 ${accentStyles.text}`}>
                      <Volume2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-display">Web Audio Synthesizer</h4>
                      <p className="text-xs text-slate-400">Zero audio assets, pure math oscillator</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Trigger synthesized harmonic frequencies directly in the browser using the Web Audio API.
                </p>

                {/* Synth keys */}
                <div className="grid grid-cols-1 gap-2">
                  {synthNotes.map((note, idx) => (
                    <button
                      key={note.label}
                      onClick={() => playSynthesizerNote(note.freq, idx)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-mono transition-all ${activeChordNote === idx
                          ? `${accentStyles.bg} text-white border-white scale-102 shadow-lg`
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                      <div className="flex items-center gap-2">
                        <Play className="w-3 h-3 text-slate-400" />
                        <span className="font-semibold">{note.label}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 uppercase font-sans">
                        {note.tag}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Polyphony: Triangle wave</span>
                <span className="text-emerald-400">Web Audio Active</span>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-amber-400" />
                <div>
                  <div className="text-xs font-bold text-white font-display">Easter Egg Available</div>
                  <div className="text-[11px] text-slate-400 font-mono">Type `hire` in terminal</div>
                </div>
              </div>
              <button
                onClick={() => {
                  sound.playSuccess();
                  confetti({ particleCount: 50, spread: 70 });
                }}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-mono"
              >
                Spark
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
