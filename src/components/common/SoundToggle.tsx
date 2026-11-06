import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sound } from '../../utils/sound';

export const SoundToggle: React.FC = () => {
  const [enabled, setEnabled] = useState(sound.isEnabled());

  const handleToggle = () => {
    const next = sound.toggle();
    setEnabled(next);
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
      title={enabled ? 'Mute UI Audio Effects' : 'Enable UI Audio Effects'}
      aria-label="Toggle Sound Effects"
    >
      {enabled ? (
        <div className="flex items-center gap-1.5">
          <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="hidden sm:inline-block text-[11px] font-mono text-emerald-400/90 font-medium">FX ON</span>
        </div>
      ) : (
        <div className="flex items-center gap-1.5">
          <VolumeX className="w-4 h-4 text-slate-500" />
          <span className="hidden sm:inline-block text-[11px] font-mono text-slate-500 font-medium">FX OFF</span>
        </div>
      )}
    </button>
  );
};

