import React from 'react';
import { ScrollText, Map as MapIcon, Languages, ClipboardList, AlertCircle, Sparkles, BookOpen, Shield, Globe, Compass, Code2, Grid3X3, TreePine, Droplets } from 'lucide-react';
import { SectionType } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarProps {
  currentSection: SectionType;
  onSelect: (section: SectionType) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function Sidebar({ currentSection, onSelect, isOpen, setIsOpen }: SidebarProps) {
  const kingdomSiegeItems: { id: SectionType; label: string; icon: React.ReactNode }[] = [
    { id: 'siege-transition', label: 'Realm Awakening', icon: <Globe className="w-4 h-4" /> },
    { id: 'siege-expeditions', label: 'Vanguard Expeditions', icon: <Compass className="w-4 h-4" /> },
    { id: 'siege-economy', label: 'Ink Economy', icon: <Droplets className="w-4 h-4" /> },
    { id: 'siege-conquest', label: 'Siege & Conquest', icon: <Shield className="w-4 h-4" /> },
    { id: 'siege-education', label: 'Education', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'siege-architecture', label: 'Tech & Architecture', icon: <Code2 className="w-4 h-4" /> },
  ];

  return (
    <>
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-72 bg-slate-950 text-slate-300 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 border-r border-slate-800/60 flex flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                 <Sparkles className="w-6 h-6"/>
             </div>
             <div>
               <h1 className="text-xl font-display text-white font-bold leading-tight">Hanzi Heroes</h1>
               <div className="text-lg font-display text-indigo-400 font-bold leading-tight tracking-wide">Unfurled Realm <span className="text-indigo-300">GDD</span></div>
             </div>
          </div>
        </div>
        
        <div className="overflow-y-auto flex-1 pb-6 no-scrollbar">
          <div className="px-6 pb-2 text-xs font-mono text-slate-500 font-bold tracking-widest uppercase mt-4">
            Unfurled Realm
          </div>
          <nav className="px-3 space-y-1">
            {kingdomSiegeItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelect(item.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-left font-medium text-sm",
                  currentSection === item.id 
                    ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" 
                    : "text-slate-400 hover:bg-slate-900 hover:text-slate-200 border border-transparent"
                )}
              >
                <div className={cn("p-1 rounded-md", currentSection === item.id ? "text-indigo-400" : "text-slate-500")}>
                  {item.icon}
                </div>
                <span className="truncate">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
