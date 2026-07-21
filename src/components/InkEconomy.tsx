import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Package, TrendingDown, Truck } from 'lucide-react';

export function InkEconomy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <header className="mb-10 text-center md:text-left space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-2">
          <Droplets className="w-4 h-4" />
          Resource System
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Ink Economy</h2>
        <p className="text-slate-400 text-lg max-w-4xl leading-relaxed">
          <strong className="text-blue-400">Ink</strong> is the core resource for territory development. Ink is produced, stored, and consumed <strong className="text-slate-200">per tile</strong>. Moving ink between tiles requires a Vanguard expedition team to physically carry it.
        </p>
      </header>

      {/* Production, Storage, Consumption */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-white font-display flex items-center gap-3 border-b border-slate-800 pb-2">
          <TrendingDown className="w-6 h-6 text-amber-400" />
          Production, Storage & Consumption
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-3">Production</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Ink production is <strong className="text-slate-200">per tile</strong>, based on the number of heroes stationed in it</li>
              <li>• <strong className="text-amber-400">Diminishing marginal returns:</strong> each additional hero in a tile produces less ink than the previous one</li>
              <li>• 1 hero = high ink/hero. 4 heroes = strong defense but low ink/hero</li>
              <li>• Creates a core strategic tension: <strong className="text-slate-200">spread for economy vs. concentrate for military</strong></li>
            </ul>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-3">Storage & Transfer</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Ink is <strong className="text-slate-200">stored per tile</strong> — each hex has its own ink reserve</li>
              <li>• To move ink, a <strong className="text-amber-400">Vanguard expedition team</strong> must physically carry it between tiles</li>
              <li>• Each hero's carrying capacity is <strong className="text-slate-200">proportional to their power</strong> (stroke count & practice)</li>
              <li>• Complex characters (more strokes) carry more ink — learning harder characters has direct economic payoff</li>
            </ul>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-3">Consumption</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Placing a background or object in a hex costs ink from that tile's reserve</li>
              <li>• Terrain provides radical-based combat buffs to defenders</li>
              <li>• Frontline tiles consume ink but produce less (heroes concentrated for defense)</li>
              <li>• Rear tiles accumulate ink (heroes spread for max production)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vanguard Roles */}
      <section className="bg-blue-950/20 border border-blue-500/20 rounded-3xl p-6 md:p-8 space-y-6">
        <h3 className="text-xl font-bold text-white font-display flex items-center gap-3">
          <Package className="w-6 h-6 text-blue-400" />
          Vanguard Role Allocation
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          The ink transfer system creates <strong className="text-slate-200">three distinct roles</strong> for Vanguard teams. Players must allocate their limited teams across all three — the heart of Unfurled Realm's resource management.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/50">
            <h5 className="font-bold text-rose-400 text-sm mb-2">⚔️ Combat</h5>
            <p className="text-xs text-slate-400">Attacks or defends tiles. Not producing or transporting ink. Pure military expenditure.</p>
          </div>
          <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/50">
            <h5 className="font-bold text-emerald-400 text-sm mb-2">🏰 Garrison</h5>
            <p className="text-xs text-slate-400">Stationed in a tile, producing ink passively. Tied down — cannot help elsewhere. Best spread thin for maximum economic output.</p>
          </div>
          <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/50">
            <h5 className="font-bold text-amber-400 text-sm mb-2">📦 Logistics</h5>
            <p className="text-xs text-slate-400">Carries ink between tiles. <strong className="text-slate-200">Vulnerable in transit</strong> — can be intercepted by enemy raids. Carrying capacity scales with hero power (stroke count). Higher-stroke teams carry more but move slower.</p>
          </div>
        </div>
      </section>

      {/* Supply Line Warfare */}
      <section className="bg-rose-950/20 border border-rose-500/20 rounded-3xl p-6 md:p-8 space-y-4">
        <h3 className="text-xl font-bold text-white font-display flex items-center gap-3">
          <Truck className="w-6 h-6 text-rose-400" />
          Emergent: Supply Line Warfare
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Because ink must be physically transported by Vanguard teams, <strong className="text-slate-200">supply lines emerge naturally</strong>. Rear production tiles generate ink → logistics teams carry it to frontline tiles → frontline tiles consume it for terrain development and defense.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
            <h5 className="font-bold text-rose-400 text-sm mb-2">Offensive: Raiding</h5>
            <p className="text-xs text-slate-400">Attackers can <strong className="text-slate-200">raid logistics teams</strong> to steal ink and disrupt the enemy's economy without fighting their main army. Fast, light teams excel at hit-and-run interception.</p>
          </div>
          <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
            <h5 className="font-bold text-emerald-400 text-sm mb-2">Defensive: Escort & Routing</h5>
            <p className="text-xs text-slate-400">Defenders must <strong className="text-slate-200">escort logistics convoys</strong> or route them through safe interior territory. Allied hexes serve as safe corridors for supply convoys.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
