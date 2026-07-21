import React from 'react';
import { motion } from 'motion/react';
import { Database, Code2, Box, Layers, Frame, Lock, Sparkles } from 'lucide-react';

export function EngineeringHooks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <header className="mb-10 text-center md:text-left space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-400 text-sm font-medium mb-2">
          <Code2 className="w-4 h-4" />
          Technical Architecture Notes
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Engineering Hooks: 2D to 2.5D</h2>
        <p className="text-slate-400 text-lg max-w-4xl leading-relaxed">
          A blueprint for the lead engineer: How to architect the 2D Magic Scroll now so it seamlessly ports into the 2.5D Hanzi Realm diorama later, without rewriting the engine.
        </p>
      </header>

      {/* The Core Strategy */}
      <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
        <h3 className="text-xl font-bold text-white font-display flex items-center gap-3">
          <Box className="w-6 h-6 text-indigo-400" />
          The Core Rule: Data over Pixels
        </h3>
        <div className="prose prose-invert max-w-none">
          <p className="text-slate-300 leading-relaxed">
            <strong>Magic Scroll should remain 100% 2D.</strong> It's cheaper, safer, and fits the "illustrated scroll" fantasy perfectly for ages 4-7. However, the world will eventually appear as a 2.5D strategic diorama in Unfurled Realm.
          </p>
          <div className="bg-rose-950/30 border border-rose-500/30 rounded-lg p-4 my-4">
            <strong className="text-rose-400 block mb-1">❌ The Wrong Approach:</strong>
            <span className="text-rose-200/70">Taking a 2D screenshot of the canvas and trying to procedurally convert it into 3D geometry later.</span>
          </div>
          <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-4 mt-2 mb-6">
            <strong className="text-emerald-400 block mb-1">✅ The Right Approach:</strong>
            <span className="text-emerald-200/70">Storing the Magic Scroll world as a structured <strong>Scene Graph database</strong>. Treat the 2D view as just one "Render Profile" of the underlying data.</span>
          </div>
        </div>
      </section>

      {/* Semantic Positioning */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-white font-display flex items-center gap-3 border-b border-slate-800 pb-2">
          <Layers className="w-6 h-6 text-amber-400" />
          The Secret Sauce: Semantic Positioning
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          A 2D coordinate (`x: 0.42, y: 0.68`) means nothing to a 3D renderer. To bridge the gap, every object placed in Magic Scroll must save both its literal 2D coordinate and its <strong>semantic meaning</strong>.
        </p>
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 overflow-x-auto">
          <pre className="text-sm font-mono text-emerald-300">
{`{
  "objectId": "obj_0001",
  "sourceCharacter": "木",
  "objectType": "tree",
  "position2D": { "x": 0.42, "y": 0.68 },           // Used by Magic Scroll canvas
  "positionSemantic": {                           // Used by Unfurled Realm 2.5D generator
    "zone": "ground",
    "depthBand": "midground",
    "anchor": "left"
  },
  "variantId": "tree_甲",                           // Links to visual prefab
  "state": { "lifeStage": "adult", "isAwake": true },
  "deformation": {                                  // Stroke-Driven Deformation parameters
    "strokeAngle": 0.12,                            // Vertical stroke deviation → trunk lean
    "strokePressure": 0.78,                         // Avg pressure → thickness
    "strokeCurvature": 0.35,                        // Curvature → organic waviness
    "strokeSpeed": 0.62,                            // Writing speed → animation energy
    "strokeSmoothness": 0.81,                       // Smoothness → surface texture
    "aspectRatio": 1.15                             // Character proportions → overall shape
  }
}`}
          </pre>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          When scaling to 2.5D, the generator ignores `position2D` and reads `positionSemantic` instead (e.g., placing the item on the "Main Terrain Plane" dynamically).
        </p>
      </section>

      {/* Content Schema Checklist */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-white font-display flex items-center gap-3 border-b border-slate-800 pb-2">
          <Database className="w-6 h-6 text-emerald-400" />
          MVP Schema Checklist
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Ensure these fields are tracked in the database from Day 1 to avoid a painful rewrite in the future:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { field: 'worldState', desc: 'Active environment (Time of day, Season, Weather). Dictates the 2.5D Biome lighting and particle effects.' },
            { field: 'venues', desc: 'Support multiple background layers & scenes. Connect them logically (Up = Sky, In = House).' },
            { field: 'sourceCharacter', desc: 'Link every object back to the Hanzi that summoned it.' },
            { field: 'variantId', desc: 'Separate object identity from artwork. Lets you map `tree_甲` to a 2D sprite OR a 3D billboard.' },
            { field: 'srsState', desc: 'Store spacing repetition memory strength per character, not just globally.' },
            { field: 'exportState', desc: 'A curated list of "Featured Objects" so the public 2.5D city is readable and child-safe.' },
            { field: 'deformation', desc: 'Normalized stroke parameters (angle, pressure, curvature, speed, smoothness, aspect ratio). Drives 2D mesh deformation and 2.5D territory visual signature.' },
            { field: 'visualSignature', desc: 'Aggregate handwriting characteristics across all objects. Produces territory-wide tonal shift at strategic zoom level in Unfurled Realm.' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl">
              <code className="text-indigo-400 font-bold mb-2 block">{item.field}</code>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Editor Split */}
      <section className="bg-blue-950/20 border border-blue-500/20 rounded-3xl p-6 md:p-8 space-y-6">
        <h3 className="text-xl font-bold text-white font-display flex items-center gap-3">
          <Frame className="w-6 h-6 text-blue-400" />
          The Editor Responsibility Split
        </h3>
        <p className="text-slate-300 leading-relaxed text-sm">
          Instead of building one massive editor that does everything, split the concerns natively into the two modes:
        </p>
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          <div className="flex-1 bg-slate-950/50 p-6 rounded-2xl border border-slate-800/50">
            <h4 className="font-bold text-purple-400 mb-2">1. Magic Scroll determines WHAT the city is</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Provides the "soul". It generates the Biome, Weather, Decor, and overall Magic Scroll origin-world layout. (e.g. A world with lots of 木 and 雨 becomes a rainy forest base).
            </p>
          </div>
          <div className="flex-1 bg-slate-950/50 p-6 rounded-2xl border border-slate-800/50">
            <h4 className="font-bold text-amber-400 mb-2">2. Unfurled Realm Editor determines HOW it defends</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              A slot-based 2.5D editor for 7-12 year olds. They place their 4 Vanguard posts, set the attack route, configure the city gate, and lock it before the monthly campaign.
            </p>
          </div>
        </div>
      </section>

      {/* Gemini's Additions */}
      <section className="bg-indigo-950/20 border border-indigo-500/30 rounded-3xl p-6 md:p-8 space-y-6 mt-8">
        <h3 className="text-xl font-bold text-white font-display flex items-center gap-3 border-b border-indigo-500/30 pb-4">
          <Sparkles className="w-6 h-6 text-indigo-400" />
          Advanced Considerations (Gemini's Additions)
        </h3>
        <p className="text-slate-300 leading-relaxed text-sm mb-6">
          Building upon the excellent Scene Graph architecture, I recommend adding three specific technical layers to preserve the emotional magic and ensure network scalability:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 p-5 rounded-2xl border border-indigo-500/20">
            <h4 className="font-bold text-white flex items-center gap-2 mb-3">
              <span className="text-indigo-400">1.</span>
              The Handwriting Decal
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              When converting to 2.5D, <strong>store each child's stroke vector data and deformation parameters</strong> in the Scene Graph database. At <strong>strategic zoom</strong>, objects use canonical 2.5D art with a subtle territory-wide visual signature derived from aggregate handwriting. At <strong>inspection zoom</strong>, the full deformed variants are rendered — revealing the maker's hand in every object. Additionally, stroke data can project as a glowing aura or floating decal above assets.
            </p>
          </div>

          <div className="bg-slate-900/60 p-5 rounded-2xl border border-indigo-500/20">
            <h4 className="font-bold text-white flex items-center gap-2 mb-3">
              <span className="text-indigo-400">2.</span>
              Temporal Maturity
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Store a <code>createdAt</code> timestamp for every object. Since Unfurled Realm occurs chronologically after the player finishes the main game, objects placed on Day 1 should visually scale up or look older/grander in the 2.5D diorama than objects placed yesterday. This gives the city a profound sense of history.
            </p>
          </div>

          <div className="bg-slate-900/60 p-5 rounded-2xl border border-indigo-500/20">
            <h4 className="font-bold text-white flex items-center gap-2 mb-3">
              <span className="text-indigo-400">3.</span>
              Deterministic Simulation
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              For the "Simulation-based Conquest" to be scalable to thousands of players without burning server costs, <strong>build the Vanguard battle engine logic mathematically and deterministically</strong>. The server only needs to pass a random seed and team compositions to the client. The client renders the battle, and the server instantly validates the math.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
