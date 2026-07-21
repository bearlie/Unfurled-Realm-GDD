import React from 'react';
import { motion } from 'motion/react';
import { Shield, Swords, TreePine, Calculator, Trophy, Flag, Lock, Crown, Users, Hexagon, Map, Sparkles } from 'lucide-react';

export function SiegeConquest() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <header className="mb-10 text-center md:text-left space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-2">
          <Swords className="w-4 h-4" />
          Endgame Event Mode
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Siege & Conquest</h2>
        <p className="text-slate-400 text-lg max-w-4xl leading-relaxed">
          A hex-based territorial strategy game where vanguard teams occupy, develop, and defend territory. Combat is a fully automated auto-battler — strategy lies in team composition, terrain development, and map control.
        </p>
      </header>

      {/* Hex Map & Territory */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-white font-display flex items-center gap-3 border-b border-slate-800 pb-2">
          <Hexagon className="w-6 h-6 text-amber-400" />
          Hex Map & Territory
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h4 className="text-lg font-bold text-white">Starting Position</h4>
            <p className="text-sm text-slate-400">
              Every player automatically occupies a <strong className="text-amber-400">central hex</strong> plus the <strong className="text-amber-400">6 adjacent hexes</strong>, forming a 7-hex home territory. This is the player's sovereign starting position.
            </p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h4 className="text-lg font-bold text-white">Maximum Territory</h4>
            <p className="text-sm text-slate-400">
              With a roster of 1,000 characters and 4 heroes per Vanguard team, the theoretical maximum is <strong className="text-slate-200">250 occupied hexes</strong> per player. In practice, territory is bounded by active SRS maintenance — characters that decay lose power, naturally contracting the player's effective frontier.
            </p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h4 className="text-lg font-bold text-white">Procedural Map Growth</h4>
            <p className="text-sm text-slate-400">
              The Hanzi Realm hex map expands procedurally based on player population. As more players join, new terrain generates at the edges, ensuring the map always has room for expansion while maintaining density in settled areas.
            </p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 space-y-4">
            <Map className="w-8 h-8 text-emerald-400 mb-2" />
            <h4 className="text-lg font-bold text-white">Pre-Defined Terrain</h4>
            <p className="text-sm text-slate-400">
              The Hanzi Realm comes with pre-existing environmental features. Some hexes naturally contain mountains (山), rain (雨), livestock (牛), structures (宅), and more. These provide innate combat advantages and create strategic value for certain locations.
            </p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 space-y-4">
            <Sparkles className="w-8 h-8 text-purple-400 mb-2" />
            <h4 className="text-lg font-bold text-white">Territory Identity</h4>
            <p className="text-sm text-slate-400">
              At <strong className="text-slate-200">strategic zoom</strong>, all objects use canonical 2.5D art for visual clarity. At <strong className="text-slate-200">inspection zoom</strong> (scouting or entering a hex), the owner's <strong className="text-purple-400">Stroke-Driven Deformation</strong> variants reveal themselves &mdash; handwriting-shaped trees, mountains, and structures from their Magic Scroll childhood. A subtle territory-wide visual signature derived from aggregate handwriting gives each domain a whisper of identity even at strategic zoom.
            </p>
          </div>
        </div>
      </section>

      {/* Natural Vanguards */}
      <section className="bg-emerald-950/20 border border-emerald-500/20 rounded-3xl p-6 md:p-8 space-y-4">
        <h3 className="text-xl font-bold text-white font-display flex items-center gap-3">
          <TreePine className="w-6 h-6 text-emerald-400" />
          Natural Vanguards
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Wild (unoccupied) hexes are not empty. Each contains <strong className="text-emerald-400">4 natural vanguard defenders</strong> tied to the hex's pre-defined terrain. A mountain hex has mountain-themed natural defenders; an ocean hex has water-themed defenders.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
            <h5 className="font-bold text-white text-sm mb-2">PvE Expansion</h5>
            <p className="text-xs text-slate-400">To expand territory, players must defeat the natural vanguards of adjacent wild hexes. The map itself is a PvE challenge.</p>
          </div>
          <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
            <h5 className="font-bold text-white text-sm mb-2">Map Healing</h5>
            <p className="text-xs text-slate-400">When a player abandons or loses a hex and no one claims it, it reverts to natural vanguard control. The map "heals" when players leave.</p>
          </div>
          <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
            <h5 className="font-bold text-white text-sm mb-2">Difficulty Gradient</h5>
            <p className="text-xs text-slate-400">Hexes near starting positions have simpler natural defenders. Distant hexes feature more complex, powerful characters — the map teaches vocabulary through conquest.</p>
          </div>
        </div>
      </section>


      {/* Terrain Placement Rules */}
      <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
        <h3 className="text-xl font-bold text-white font-display flex items-center gap-3">
          <TreePine className="w-6 h-6 text-emerald-400" />
          Terrain Placement & Radical Synergy
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          The backgrounds and objects that can be placed in a hex are <strong className="text-amber-400">limited to the vanguard team stationed there</strong>. A team's heroes determine the terrain palette for that hex.
        </p>
        <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800/50 space-y-4">
          <h4 className="text-white font-bold">The Triple Feedback Loop</h4>
          <div className="flex flex-col md:flex-row items-center justify-center p-4 gap-3 text-center">
            <span className="font-mono text-sm text-blue-300 bg-slate-900 px-3 py-2 rounded-lg border border-slate-800">Team Composition</span>
            <span className="text-slate-500">→</span>
            <span className="font-mono text-sm text-emerald-300 bg-slate-900 px-3 py-2 rounded-lg border border-slate-800">Available Terrain</span>
            <span className="text-slate-500">→</span>
            <span className="font-mono text-sm text-amber-300 bg-slate-900 px-3 py-2 rounded-lg border border-slate-800">Defense Buffs</span>
            <span className="text-slate-500">→</span>
            <span className="font-mono text-sm text-rose-300 bg-slate-900 px-3 py-2 rounded-lg border border-slate-800">Stronger Defense</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Example: stationing water-radical heroes (河, 海, 湖, 泳) allows placing rain and ocean terrain, which buffs those same heroes defensively. The territory <em>becomes</em> what its defenders are.
          </p>
        </div>
        <div className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-xl">
          <h4 className="font-bold text-indigo-400 text-sm mb-2">Reinforcement Teams</h4>
          <p className="text-slate-400 text-xs leading-relaxed">
            Players can send additional vanguard teams to any occupied hex. While only <strong className="text-slate-200">4 heroes</strong> are designated as the active defense, reinforcement teams serve two purposes: they <strong className="text-slate-200">expand the terrain placement palette</strong> (their radicals become available for building) and act as <strong className="text-slate-200">reserves</strong> (if the primary defense falls, the next team auto-slots in). They also serve as <strong className="text-slate-200">temporary stations</strong> for exploring further into distant areas.
          </p>
        </div>
      </section>

      {/* Auto-Battler Combat */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
          <h3 className="text-xl font-bold text-white font-display flex items-center gap-3">
            <Calculator className="w-6 h-6 text-emerald-400" />
            Auto-Battler Combat
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Combat is fully automated. Two teams fight until one side reaches <strong className="text-rose-400">0 remaining power (HP)</strong>. No writing or listening is required — the system assumes perfect blocking with a standardized writing time of <code className="text-blue-300 bg-slate-950 px-1 rounded">0.5 + 0.3n</code> seconds (where <code className="text-blue-300 bg-slate-950 px-1 rounded">n</code> = stroke count).
          </p>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold">1.</span>
              <span>Both sides use a <strong className="text-slate-200">symmetric 0.1× damage multiplier</strong>, mirroring the Lost Kingdom Pro-Rata combat system but applied equally to attacker and defender.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold">2.</span>
              <span>The defender's terrain provides radical-based combat buffs — the strategic advantage of defense comes from preparation, not asymmetric formulas.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold">3.</span>
              <span>The team whose power reaches 0 first loses. If the attacker wins, they <strong className="text-rose-400">capture the hex</strong>.</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
          <h3 className="text-xl font-bold text-white font-display flex items-center gap-3">
            <Swords className="w-6 h-6 text-rose-400" />
            Capture Rules
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            When a hex is captured, the previous owner's <strong className="text-rose-400">terrain is destroyed</strong>. The winner inherits a blank hex that must be rebuilt with their own ink and vanguard teams.
          </p>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-start gap-3 bg-slate-950/50 p-3 rounded-lg border border-slate-800/50">
              <span className="text-rose-400 font-bold text-lg w-8 text-center shrink-0">⚔️</span>
              <span><strong className="text-white">Attacking is cheap, rebuilding is expensive.</strong> Capturing 20 hexes means 20 blank hexes requiring days of ink investment.</span>
            </li>
            <li className="flex items-start gap-3 bg-slate-950/50 p-3 rounded-lg border border-slate-800/50">
              <span className="text-emerald-400 font-bold text-lg w-8 text-center shrink-0">🛡️</span>
              <span><strong className="text-white">Defense has inherent advantage.</strong> The defender's terrain buffs their team; the attacker fights without terrain support.</span>
            </li>
            <li className="flex items-start gap-3 bg-slate-950/50 p-3 rounded-lg border border-slate-800/50">
              <span className="text-amber-400 font-bold text-lg w-8 text-center shrink-0">🔥</span>
              <span><strong className="text-white">Scorched earth is the default.</strong> You can't steal someone's fortress — you can only destroy it and build your own.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Diplomatic & Neutral Status */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-white font-display flex items-center gap-3 border-b border-slate-800 pb-2">
          <Flag className="w-6 h-6 text-amber-400" />
          Neutral Status & Alliances
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 space-y-4">
            <Lock className="w-8 h-8 text-amber-400" />
            <h4 className="text-lg font-bold text-white">Neutral Protection</h4>
            <p className="text-sm text-slate-400">
              Neutral players' <strong className="text-slate-200">core 7 hexes</strong> (central + 6 adjacent) cannot be attacked. Neutral players can still explore, visit, and spectate, but cannot initiate conquest.
            </p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 space-y-4">
            <Crown className="w-8 h-8 text-blue-400" />
            <h4 className="text-lg font-bold text-white">Sovereign Default</h4>
            <p className="text-sm text-slate-400">
              By default, every player is their own country. Players may form Alliances, whose leader becomes the country leader during campaigns.
            </p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 space-y-4">
            <Users className="w-8 h-8 text-indigo-400" />
            <h4 className="text-lg font-bold text-white">Alliance Territory</h4>
            <p className="text-sm text-slate-400">
              Allies can place vanguards in each other's hexes for mutual defense. Adjacent allied hexes form shared borders, eliminating internal defense needs. Allied territories form visible contiguous nations. <strong className="text-slate-200">Ink can be transferred across allied territory</strong> via Vanguard logistics teams — allied hexes serve as safe corridors for supply convoys.
            </p>
          </div>
        </div>
      </section>

      {/* Key Design Principles */}
      <section className="bg-blue-950/20 border border-blue-500/20 rounded-3xl p-6 md:p-10 text-center mt-12">
        <Trophy className="w-12 h-12 text-blue-400 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-white font-display mb-8">Pillars of Unfurled Realm</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {[
            { tag: 'Safety', title: 'Core territory is safe.', desc: 'Neutral players\' 7 home hexes are permanently protected.' },
            { tag: 'Choice', title: 'Campaign is opt-in.', desc: 'Players avoiding war can permanently stay Neutral.' },
            { tag: 'Strategic', title: 'Brain over brawn.', desc: 'Auto-battler combat rewards composition and terrain preparation, not execution speed.' },
            { tag: 'Educational', title: 'Learning earns power.', desc: 'Territory size is bounded by active SRS maintenance. Characters that decay lose power.' },
            { tag: 'Identity', title: 'Teams shape terrain.', desc: 'Vanguard composition determines what can be built — your roster defines your territory.' },
            { tag: 'Territorial', title: 'Geography matters.', desc: 'Hex adjacency, supply lines, and natural vanguards make map position strategic.' }
          ].map((pillar, idx) => (
            <div key={idx} className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/50">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">{pillar.tag}</div>
              <h5 className="font-bold text-white mb-1">{pillar.title}</h5>
              <p className="text-sm text-slate-400">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
