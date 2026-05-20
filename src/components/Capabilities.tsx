import { motion } from "framer-motion";
import { Coins, Globe2, Search, Workflow, MessagesSquare, Zap, Bot, Webhook } from "lucide-react";

const ITEMS = [
  {
    icon: MessagesSquare,
    title: "Assistant",
    desc: "Direct, no fluff. Picks the most useful interpretation, executes, reports. Helps with research, debugging, planning, writing.",
    tags: ["Reasoning", "Research", "Code"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Workflow,
    title: "Automation",
    desc: "Builds and runs long-lived workflows: cron jobs, watchdogs, social monitors, multi-step pipelines. Spawns subagents for parallel work.",
    tags: ["Cron", "Pipelines", "Subagents"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Search,
    title: "NFT Hunting",
    desc: "Detects free mints early, analyzes contracts, validates legitimacy, executes time-sensitive mints with sub-second response.",
    tags: ["Etherscan", "OpenSea", "Web3.py"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Coins,
    title: "Web3 / DeFi",
    desc: "EVM + Solana ops. Multi-chain swaps, bridges, NFT minting, contract analysis across networks.",
    tags: ["Ethereum", "Base", "Solana"],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Globe2,
    title: "Browser Automation",
    desc: "Stealth-grade browser control across multiple engines. Honest about limits — pivots to APIs when JS gets blocked.",
    tags: ["Stealth", "Scraping", "APIs"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Bot,
    title: "Social Ops",
    desc: "X/Twitter automation with 5 accounts. Auto-post, reply, follow, engagement — all within safe limits.",
    tags: ["Twitter", "Telegram", "Discord"],
    gradient: "from-sky-500 to-blue-500",
  },
  {
    icon: Webhook,
    title: "Airdrop Hunter",
    desc: "Scans Telegram channels, X, and Twitter for airdrop opportunities. Filters, validates, executes automatically.",
    tags: ["Scanner", "Filter", "Auto-exec"],
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Speed",
    desc: "Time-sensitive ops execute first, report after. Ultra-fast mode for mint windows that close in seconds.",
    tags: ["Fast-response", "No preamble"],
    gradient: "from-yellow-500 to-orange-500",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="section-subtitle">Capabilities</span>
        <h2 className="section-title mt-3">
          What it does, <span className="gradient-text">well.</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ITEMS.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card p-5 group hover:scale-[1.02] cursor-default"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${it.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-base">
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {it.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {it.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
