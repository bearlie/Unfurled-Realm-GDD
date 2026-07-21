import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Scroll, Search, FileText, Users, Handshake, TrendingUp } from 'lucide-react';

export function ReadingComprehension() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <header className="mb-10 text-center md:text-left space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-2">
          <BookOpen className="w-4 h-4" />
          Educational Layer
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Reading Comprehension</h2>
        <p className="text-slate-400 text-lg max-w-4xl leading-relaxed">
          Players entering Unfurled Realm have mastered ~1,000 individual characters. The next educational frontier is <strong className="text-slate-200">reading comprehension</strong> — understanding sentences, passages, and meaning in context. Rather than bolting on quizzes, comprehension is embedded as the <strong className="text-amber-400">intelligence layer</strong> of the strategy game: the player who reads better sees more, knows more, and decides better.
        </p>
      </header>

      {/* Core Principle */}
      <section className="bg-amber-950/20 border border-amber-500/20 rounded-3xl p-6 md:p-8 space-y-4">
        <h3 className="text-xl font-bold text-white font-display flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-amber-400" />
          Design Principle
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Reading comprehension is not a separate activity — it is <strong className="text-amber-400">strategic advantage</strong>. Every reading layer ties to an existing mechanic the player is already motivated to engage with. The player who comprehends Chinese text gains better intel, better territory buffs, better trade deals, and better alliance coordination. <em>The best commanders are the best readers.</em>
        </p>
      </section>

      {/* Layer 1: Ancient Inscriptions */}
      <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
            <Scroll className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-white font-display">1. Ancient Inscriptions</h3>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Hex Exploration</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              When a player conquers a wild hex, they occasionally discover an <strong className="text-emerald-400">Ancient Inscription</strong> — a short Chinese passage (a poem, a proverb, a historical excerpt, a fable fragment). The inscription contains embedded strategic information about the hex and surrounding territory.
            </p>
            <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/50 font-serif">
              <p className="text-amber-200/90 text-base leading-relaxed mb-3">
                「此地三面環山，唯北方有一條小路通往大河。河中有一座石橋，橋下常年有霧。」
              </p>
              <p className="text-slate-500 text-xs italic">
                "This land is surrounded by mountains on three sides. Only to the north is there a small path leading to the great river. In the river there is a stone bridge, and beneath it, fog lingers year-round."
              </p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              A player who <em>comprehends</em> the passage knows: mountains on three sides, a path north to a river, a stone bridge, persistent fog. This translates to gameplay:
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong className="text-slate-200">Hidden terrain bonuses</strong> unlocked only by answering a comprehension question correctly ("Which direction leads to the river?")</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong className="text-slate-200">Secret hex connections</strong> revealed — the passage describes shortcuts to distant hexes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong className="text-slate-200">Special terrain types</strong> unlocked that aren't buildable through normal ink expenditure</span>
              </li>
            </ul>
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
              <p className="text-emerald-200 text-xs leading-relaxed">
                <strong>Scaling:</strong> Early hexes near the player's core have simple inscriptions (2–3 sentences, basic vocabulary). Distant frontier hexes have complex classical passages. The map's difficulty gradient is both a <em>combat</em> gradient and a <em>literacy</em> gradient. The hex map becomes a storybook you conquer page by page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Layer 2: Intelligence Scrolls */}
      <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
            <Search className="w-6 h-6 text-blue-400" />
          </div>
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-white font-display">2. Intelligence Scrolls</h3>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Scouting</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              When a Vanguard team scouts an enemy or neutral territory, they return with an <strong className="text-blue-400">Intelligence Scroll</strong> — a written report in Chinese describing their observations.
            </p>
            <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/50 font-serif">
              <p className="text-amber-200/90 text-base leading-relaxed mb-3">
                「敵方城堡東面部署了大量水系英雄，地形以河流和湖泊為主。西面防守較弱，只有兩名火系守衛。建議從西面進攻。」
              </p>
              <p className="text-slate-500 text-xs italic">
                "The enemy castle has deployed many water-radical heroes on the east side, with terrain dominated by rivers and lakes. The western defense is weaker, with only two fire-radical guards. Recommend attacking from the west."
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                <h5 className="font-bold text-blue-400 text-sm mb-2">Full Comprehension</h5>
                <p className="text-xs text-slate-400">Players who read and understand get full intel: defense composition, terrain layout, weak points, and recommended attack vectors.</p>
              </div>
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                <h5 className="font-bold text-slate-500 text-sm mb-2">Skipped Report</h5>
                <p className="text-xs text-slate-400">Players who skip the report see only basic stats: team count and rough power level. They can still attack — but they're playing blind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layer 3: Edicts & Decrees */}
      <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6 text-purple-400" />
          </div>
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-white font-display">3. Edicts & Decrees</h3>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">Territory Management</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              As a territory ruler, players can issue <strong className="text-purple-400">Edicts</strong> — policy decisions that provide territory-wide buffs. Edicts are presented as formal Chinese documents with multiple clauses, including both benefits and trade-offs.
            </p>
            <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/50 font-serif">
              <p className="text-amber-200/90 text-base leading-relaxed mb-3">
                「凡佔領河流地區之先鋒隊，每日可額外獲得兩份墨水。但若該地區遭受攻擊，先鋒隊不得撤退，須堅守至戰鬥結束。」
              </p>
              <p className="text-slate-500 text-xs italic">
                "All vanguard teams occupying river territories shall receive two additional ink per day. However, should that territory come under attack, the vanguard team may not retreat and must hold until the battle concludes."
              </p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The player must <strong className="text-slate-200">read and understand the trade-off</strong> before signing. Edicts with better bonuses have more complex Chinese text with subtler penalties buried in the language. A ruler who doesn't read the fine print gets burned — mirroring real governance.
            </p>
          </div>
        </div>
      </section>

      {/* Layer 4: Alliance War Council */}
      <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6 text-rose-400" />
          </div>
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-white font-display">4. Alliance War Council</h3>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">Multiplayer Coordination</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Before a major campaign, the alliance leader drafts a <strong className="text-rose-400">Battle Plan</strong> — a Chinese-language strategic document distributed to all members.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span>Target territories and attack sequence</span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span>Team assignments, roles, and timing</span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span>Fallback positions if the attack fails</span>
              </li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                <h5 className="font-bold text-rose-400 text-sm mb-2">Coordination Buff</h5>
                <p className="text-xs text-slate-400">Alliance members who read and comprehend the plan receive a <strong className="text-slate-200">Coordination Buff</strong> during the campaign. Members who skip it fight at base stats.</p>
              </div>
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                <h5 className="font-bold text-rose-400 text-sm mb-2">Peer-Driven Motivation</h5>
                <p className="text-xs text-slate-400">It's not the game nagging you to read — it's your <strong className="text-slate-200">friends depending on you</strong>. Social accountability drives literacy motivation naturally.</p>
              </div>
            </div>
            <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl">
              <p className="text-rose-200 text-xs leading-relaxed">
                <strong>Writing Comprehension:</strong> For the alliance leader, <em>drafting</em> the battle plan is itself a composition exercise — the natural sequel to reading comprehension. The game provides templates and vocabulary assistance, but the act of writing strategic communication in Chinese extends the educational loop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Layer 5: Trade Caravans */}
      <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
            <Handshake className="w-6 h-6 text-amber-400" />
          </div>
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-white font-display">5. Trade Caravans</h3>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">Economic Layer</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Players can send <strong className="text-amber-400">Trade Caravans</strong> between territories. Trade offers are written as Chinese-language contracts with benefits, conditions, and penalty clauses.
            </p>
            <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/50 font-serif">
              <p className="text-amber-200/90 text-base leading-relaxed mb-3">
                「以三百墨水換取對方領土上的山地使用權，為期七日。期滿後使用權自動歸還。若期間該地遭攻擊，損失由買方承擔。」
              </p>
              <p className="text-slate-500 text-xs italic">
                "Exchange 300 ink for 7-day mountain terrain usage rights on the other party's territory. Rights automatically return upon expiry. If the territory is attacked during this period, losses are borne by the buyer."
              </p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Good deals vs. bad deals are distinguished by <strong className="text-slate-200">reading the contract carefully</strong>. A player who skims might miss a penalty clause. A player who reads carefully finds bargains.
            </p>
          </div>
        </div>
      </section>

      {/* Progression Table */}
      <section className="bg-blue-950/20 border border-blue-500/20 rounded-3xl p-6 md:p-10 space-y-6">
        <h3 className="text-2xl font-bold text-white font-display text-center mb-2">Progressive Complexity</h3>
        <p className="text-slate-400 text-sm text-center max-w-2xl mx-auto mb-6">
          Each layer maps to a real-world literacy stage. The progression mirrors how reading develops naturally: descriptions → reports → official documents → collaborative plans → contracts.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-3 px-4 text-slate-400 font-mono text-xs uppercase tracking-wider">Stage</th>
                <th className="text-left py-3 px-4 text-slate-400 font-mono text-xs uppercase tracking-wider">Reading Layer</th>
                <th className="text-left py-3 px-4 text-slate-400 font-mono text-xs uppercase tracking-wider">Game Mechanic</th>
                <th className="text-left py-3 px-4 text-slate-400 font-mono text-xs uppercase tracking-wider">Complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              <tr>
                <td className="py-3 px-4 text-slate-300">Early Expansion</td>
                <td className="py-3 px-4 text-emerald-400 font-medium">Ancient Inscriptions</td>
                <td className="py-3 px-4 text-slate-400">Hex exploration / PvE</td>
                <td className="py-3 px-4"><span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">HSK 2–3</span></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-300">Mid-Game</td>
                <td className="py-3 px-4 text-blue-400 font-medium">Intelligence Scrolls</td>
                <td className="py-3 px-4 text-slate-400">Scouting / reconnaissance</td>
                <td className="py-3 px-4"><span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">HSK 3–4</span></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-300">Territory Mgmt</td>
                <td className="py-3 px-4 text-purple-400 font-medium">Edicts & Decrees</td>
                <td className="py-3 px-4 text-slate-400">Territory-wide buffs</td>
                <td className="py-3 px-4"><span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">HSK 4–5</span></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-300">Alliance Play</td>
                <td className="py-3 px-4 text-rose-400 font-medium">War Council Plans</td>
                <td className="py-3 px-4 text-slate-400">Multiplayer coordination</td>
                <td className="py-3 px-4"><span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">HSK 5–6</span></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-300">Inter-Player</td>
                <td className="py-3 px-4 text-amber-400 font-medium">Trade Contracts</td>
                <td className="py-3 px-4 text-slate-400">Economic layer</td>
                <td className="py-3 px-4"><span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">HSK 5–6</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </motion.div>
  );
}
