import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { SectionType } from './types';
import { RealmAwakening } from './components/RealmAwakening';
import { VanguardExpeditions } from './components/VanguardExpeditions';
import { InkEconomy } from './components/InkEconomy';
import { SiegeConquest } from './components/SiegeConquest';
import { ReadingComprehension } from './components/ReadingComprehension';
import { EngineeringHooks } from './components/EngineeringHooks';
import { Menu, Sparkles } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState<SectionType>('siege-transition');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-950 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-hidden text-slate-200">
      <Sidebar 
        currentSection={currentSection} 
        onSelect={setCurrentSection}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <main className="flex-1 overflow-auto flex flex-col relative w-full">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur z-20 sticky top-0">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                 <Sparkles className="w-6 h-6"/>
             </div>
             <div>
               <h1 className="text-xl font-display text-white font-bold leading-tight">Hanzi Heroes</h1>
               <div className="text-sm font-display text-indigo-400 font-bold leading-tight tracking-wide">Unfurled Realm <span className="text-indigo-300">GDD</span></div>
             </div>
          </div>
          <button 
            className="p-2 text-slate-300 hover:text-white"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-10 md:py-20 lg:px-16 min-h-full w-full">
          {currentSection === 'siege-transition' && <RealmAwakening />}
          {currentSection === 'siege-expeditions' && <VanguardExpeditions />}
          {currentSection === 'siege-economy' && <InkEconomy />}
          {currentSection === 'siege-conquest' && <SiegeConquest />}
          {currentSection === 'siege-education' && <ReadingComprehension />}
          {currentSection === 'siege-architecture' && <EngineeringHooks />}
        </div>
      </main>
      
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/80 z-30 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
