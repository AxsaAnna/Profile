import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioProfile } from '../types';
import { initialPortfolioData } from '../data/portfolioData';

interface ProfileContextType {
  profile: PortfolioProfile;
  updateProfile: (updates: Partial<PortfolioProfile>) => void;
  resetProfile: () => void;
  loadPersonaPreset: (presetKey: 'fullstack' | 'ai' | 'creative') => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<PortfolioProfile>(() => {
    try {
      const saved = localStorage.getItem('portfolio_user_profile');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return initialPortfolioData;
  });

  useEffect(() => {
    localStorage.setItem('portfolio_user_profile', JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (updates: Partial<PortfolioProfile>) => {
    setProfile(prev => ({
      ...prev,
      ...updates,
    }));
  };

  const resetProfile = () => {
    setProfile(initialPortfolioData);
    localStorage.removeItem('portfolio_user_profile');
  };

  const loadPersonaPreset = (presetKey: 'fullstack' | 'ai' | 'creative') => {
    if (presetKey === 'fullstack') {
      updateProfile({
        name: "Axsa Anna Shaji",
        title: "Aspiring Software Engineer & Web Developer",
        headline: "B.Tech Fresher at Amal Jyothi College of Engineering building responsive web apps & hackathon MVPs.",
        statusBadge: "Fresher @ Amal Jyothi College of Engineering • Open to Internships",
      });
    } else if (presetKey === 'ai') {
      updateProfile({
        name: "Axsa Anna Shaji",
        title: "AI Conclave Delegate & Machine Learning Enthusiast",
        headline: "Exploring generative AI, prompt engineering, and intelligent healthcare/education tools.",
        statusBadge: "Active AI Conclave & Tech Participant",
      });
    } else if (presetKey === 'creative') {
      updateProfile({
        name: "Axsa Anna Shaji",
        title: "UI/UX Product Designer & Workshop Fellow",
        headline: "Crafting intuitive Figma design systems, wireframes, and empathy-driven student interfaces.",
        statusBadge: "UI/UX Workshop Commendation • Open for Design Sprints",
      });
    }
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile, resetProfile, loadPersonaPreset }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

