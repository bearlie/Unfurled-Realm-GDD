import React from 'react';
import { motion } from 'motion/react';
import { Compass, Tent, Route, Eye, HeartHandshake, Hexagon, ArrowRightLeft, Zap } from 'lucide-react';

export function VanguardExpeditions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <header className="mb-10 text-center md:text-left space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-2">
          <Tent className="w-4 h-4" />
          Map Exploration
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Vanguard Expeditions</h2>
        <p className="text-slate-400 text-lg max-w-4xl leading-relaxed">
          The Hanzi Realm is a hex-based explorable space. Players deploy vanguard teams to occupy hexes, develop terrain, and expand territory. Teams travel physically across the map, making geography and positioning central to all strategy.
        </p>
      </header>

      <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-bold text-white font-display flex items-center gap-3">
              <Route className="w-6 h-6 text-indigo-400" />
              Deployment & Occupation
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              Players deploy <strong className="text-amber-400">Vanguard Teams</strong> of <strong>4 Hanzi Heroes</strong> onto the hex map. To occupy a new hex, a vanguard team must travel to it, defeat its <strong className="text-emerald-400">natural vanguard</strong> (or the current occupier's defenders), and then station there.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm">
              Once stationed, the vanguard team serves as the hex's <strong className="text-slate-200">defense force</strong> and determines what terrain can be built. The team remains in the hex until recalled or defeated.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl mt-4">
              <h4 className="font-bold text-amber-400 text-sm mb-2 flex items-center gap-2">
                <Hexagon className="w-4 h-4" />
                Temporary Stations
              </h4>
              <p className="text-slate-400 text-xs">
                Vanguard teams can be sent to any occupied hex as a <strong className="text-slate-200">temporary station</strong>. From there, they can push further outward to explore and occupy distant hexes. This creates natural <strong className="text-slate-200">supply chains</strong> — to reach a distant hex, you need a chain of occupied hexes connecting back to your core territory.
              </p>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-bold text-white font-display flex items-center gap-3">
              <Eye className="w-6 h-6 text-emerald-400" />
              Scouting & Discovery
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              You cannot instantly inspect another player's territory. To view a hex's terrain, defenses, and stationed teams, a Vanguard team must first travel and arrive there.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm">
              Once arrived, the fog of war lifts, revealing the hex's terrain composition, defensive vanguard, radical synergies, and reinforcement depth.
            </p>
            <div className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-xl mt-4">
              <h4 className="font-bold text-indigo-400 text-sm mb-2 flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4" />
                Team Composition Swapping
              </h4>
              <p className="text-slate-400 text-xs">
                When multiple Vanguard teams occupy the same hex, they can dynamically swap heroes between them. For example, if team <strong className="text-slate-200">七上八下</strong> and team <strong className="text-slate-200">左右不分</strong> meet on the map, they can freely reorganize into <strong className="text-slate-200">不分上下</strong> and <strong className="text-slate-200">七八左右</strong> before an engagement. This adds a layer of pre-engagement tactical depth that rewards map positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Movement Speed */}
      <section className="bg-amber-950/20 border border-amber-500/20 rounded-3xl p-6 md:p-8 space-y-6">
        <h3 className="text-xl font-bold text-white font-display flex items-center gap-3">
          <Zap className="w-6 h-6 text-amber-400" />
          Movement Speed: The Power-Speed Tradeoff
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Team movement speed is <strong className="text-slate-200">inversely proportional to combined team power</strong> (total stroke count). Low-power teams move fast. High-power teams move slow. This creates a fundamental strategic tradeoff:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/50">
            <h5 className="font-bold text-cyan-400 text-sm mb-2">⚡ Light Teams</h5>
            <p className="text-xs text-slate-400">Simple characters (fewer strokes) = fast scouts, raiders, quick logistics. The <strong className="text-slate-200">first characters you learn</strong> remain your fastest units forever. 一二三十 is a lightning cavalry.</p>
          </div>
          <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/50">
            <h5 className="font-bold text-amber-400 text-sm mb-2">⚖️ Balanced Teams</h5>
            <p className="text-xs text-slate-400">Mix simple and complex characters to tune the speed/power slider. A team of 一 + 木 + 馬 + 龍 moves at medium pace with high firepower but one weak link.</p>
          </div>
          <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/50">
            <h5 className="font-bold text-rose-400 text-sm mb-2">🛡️ Heavy Teams</h5>
            <p className="text-xs text-slate-400">Complex characters (many strokes) = slow but devastating heavy infantry. High carrying capacity. 馬魚鳥龍 is an unstoppable wall that takes days to arrive.</p>
          </div>
        </div>
        <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
          <h5 className="font-bold text-indigo-400 text-sm mb-2">Educational Consequence</h5>
          <p className="text-xs text-slate-400">Every character has permanent strategic value regardless of complexity. Simple characters never become obsolete — they're always the fastest. Complex characters are always the strongest. A diverse vocabulary is the most tactically flexible army.</p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h4 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
            <HeartHandshake className="w-5 h-5" /> Neutral Mode Exploration
          </h4>
          <p className="text-sm text-slate-400 mb-4">
            For non-competitive players, expeditions offer a peaceful, meaningful exploration loop without the pressure of conquest.
          </p>
          <ul className="space-y-3 text-slate-400 text-sm mb-6">
            <li>• Send teams to discover creative territories built by other players.</li>
            <li>• Collect digital visitor stamps for your passport.</li>
            <li>• Engage in friendly practice against the hex's Vanguard defenders.</li>
            <li>• Explore the diverse terrain compositions and radical synergies across the map.</li>
          </ul>
          <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl mt-auto">
             <h5 className="font-bold text-emerald-400 text-sm mb-1">Power Recovery: Host Civilizations</h5>
             <p className="text-slate-400 text-xs text-balance">
                In Neutral mode, teams recover power simply by entering other players' territories. As ChatGPT noted: <em className="text-slate-300">"In peace, other civilizations can host and restore you."</em> This rewards visiting, diplomacy, trade routes, cultural exchange, and cross-player world traversal.
             </p>
          </div>
        </div>
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col">
          <h4 className="text-lg font-bold text-rose-400 mb-4 flex items-center gap-2">
            <Tent className="w-5 h-5" /> Siege Mode Presence
          </h4>
          <p className="text-sm text-slate-400 mb-4">
            Conquest requires <strong className="text-rose-400">physical map presence</strong>. You can only attack hexes adjacent to your own occupied territory or where your vanguard teams are stationed.
          </p>
          <ul className="space-y-3 text-slate-400 text-sm mb-6 flex-1">
            <li>• At least one Vanguard team must be adjacent to the target hex to initiate an attack.</li>
            <li>• Makes the realm feel like an actual strategic map rather than a list of targets.</li>
            <li>• Encourages alliances to coordinate Vanguard movements and establish supply chains.</li>
          </ul>
          <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl mt-auto">
             <h5 className="font-bold text-rose-400 text-sm mb-1">Power Recovery & Ink Logistics</h5>
             <p className="text-slate-400 text-xs text-balance">
                In Siege mode, teams recover power only in <strong className="text-rose-300">friendly territory</strong>. Vanguard teams also serve as <strong className="text-rose-300">ink logistics convoys</strong> — physically carrying ink between tiles, with carrying capacity proportional to each hero's power (stroke count). Team movement speed is <strong className="text-rose-300">inversely proportional to combined power</strong> — simple characters move fast, complex characters move slow. This creates distinct roles: light teams (fast scouts/raiders) and heavy teams (slow but powerful garrison/logistics).
             </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
