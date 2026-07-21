import React from 'react';
import { motion } from 'motion/react';
import { Map, Sparkles, Cuboid, Globe, Hexagon, Droplets } from 'lucide-react';

export function RealmAwakening() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <header className="mb-10 text-center md:text-left space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-2">
          <Sparkles className="w-4 h-4" />
          Endgame Unlock
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Realm Awakening</h2>
        <p className="text-slate-400 text-lg max-w-4xl leading-relaxed">
          Upon clearing the Lost Kingdom, players return to the Magic Scroll to find their world forever changed. The journey transitions from personal discovery to a massive shared universe.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-semibold text-slate-200">A Boundless World (Epilogue)</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-300 space-y-4 leading-relaxed">
          <p>
            As you journey forward and finally bring peace to The Lost Kingdom, something incredible happens. The thick, magical mists bordering your scroll begin to clear...
          </p>
          <p>
            You peer across the horizon and gasp. <strong className="text-amber-400">You are not alone!</strong>
          </p>
          <p>
            Your magical kingdom is just one glorious piece of a massive, shimmering tapestry known as the <strong className="text-blue-400">Hanzi Realm</strong>. Scattered as far as the eye can see are countless other vibrant kingdoms, each painted and brought to life by other heroes just like you.
          </p>
          <p>
            The adventure is far from over! Now, it's time to gather your Vanguard team, venture out to explore these neighboring realms, and see what wonderful creations await in this shared universe.
          </p>
        </div>
      </section>

      <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
        <h3 className="text-xl font-bold text-white font-display mb-2 flex items-center gap-3">
          <Globe className="w-6 h-6 text-indigo-400" />
          Entering the Hanzi Realm
        </h3>
        <p className="text-slate-300 leading-relaxed">
          The player's journey evolves into an interconnected experience. The isolated Magic Scroll world expands into the <strong className="text-amber-400">Hanzi Realm</strong>, a massive map shared by all players.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800/50">
            <Cuboid className="w-8 h-8 text-emerald-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">2.5D Map Editor</h4>
            <p className="text-sm text-slate-400">
              The original 2D Magic Scroll world evolves into a 2.5D environment. Objects shaped by the child's handwriting through <strong className="text-slate-200">Stroke-Driven Deformation</strong> are preserved — visible when zooming into any territory.
            </p>
          </div>
          
          <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800/50">
            <Sparkles className="w-8 h-8 text-purple-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Expanded Vocabulary</h4>
            <p className="text-sm text-slate-400">
              A broader array of Hanzi characters can now be used to create complex objects, structures, and dynamic backgrounds within the map editor.
            </p>
          </div>

          <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800/50">
            <Hexagon className="w-8 h-8 text-blue-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Hex Territory</h4>
            <p className="text-sm text-slate-400">
              The player automatically occupies a <strong className="text-amber-400">central hex + 6 adjacent hexes</strong> on the shared Hanzi Realm map. Ink production begins immediately, enabling terrain development and outward expansion.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-950/20 border border-blue-500/20 rounded-3xl p-6 md:p-8">
        <h3 className="text-xl font-bold text-white font-display mb-4">The New Sequence</h3>
        <div className="flex flex-col md:flex-row items-center justify-center p-6 gap-4 text-center">
          <span className="font-mono text-sm md:text-base text-blue-300">Clear Lost Kingdom</span>
          <span className="text-slate-500">→</span>
          <span className="font-mono text-sm md:text-base text-purple-300">Upgrade to 2.5D Editor</span>
          <span className="text-slate-500">→</span>
          <span className="font-mono text-sm md:text-base text-emerald-300">Claim 7-Hex Territory</span>
          <span className="text-slate-500">→</span>
          <span className="font-mono text-sm md:text-base text-amber-300">Deploy Vanguards & Expand</span>
        </div>
      </section>
    </motion.div>
  );
}
