import { motion } from "framer-motion";
import {
  Coins,
  Globe2,
  Search,
  Workflow,
  MessagesSquare,
  Zap,
} from "lucide-react";

const ITEMS = [
  {
    icon: MessagesSquare,
    title: "Assistant",
    desc: "Direct, no fluff. Picks the most useful interpretation, executes, reports. Helps with research, debugging, planning, writing.",
    tags: ["Reasoning", "Research", "Code"],
  },
  {
    icon: Workflow,
    title: "Automation",
    desc: "Builds and runs long-lived workflows: cron jobs, watchdogs, social monitors, multi-step pipelines. Spawns subagents for parallel work.",
    tags: ["Cron", "Pipelines", "Subagents"],
  },
  {
    icon: Search,
    title: "NFT Hunting",
    desc: "Detects free mints early, analyzes contracts, validates legitimacy, executes time-sensitive mints with sub-second response.",
    tags: ["Etherscan", "OpenSea", "Web3.py"],
  },
  {
    icon: Coins,
    title: "Web3 / DeFi",
    desc: "EVM + Solana ops. Multi-chain swaps, bridges, NFT minting, contract analysis across networks.",
    tags: ["Ethereum", "Base", "Solana", "Relay"],
  },
  {
    icon: Globe2,
    title: "Browser Automation",
    desc: "Stealth-grade browser control across multiple engines. Honest about limits — pivots to APIs when JS gets blocked.",
    tags: ["Stealth", "RSS", "Scraping"],
  },
  {
    icon: Zap,
    title: "Speed",
    desc: "Time-sensitive ops execute first, report after. Ultra-fast mode for mint windows that close in seconds.",
    tags: ["Fast-response", "No preamble"],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-20">
      <header className="mb-6">
        <span className="text-[10px] uppercase tracking-widest text-muted">
          // capabilities
        </span>
        <h2 className="text-2xl sm:text-3xl font-black mt-1">
          What it does, well.
        </h2>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ITEMS.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="panel p-4 sm:p-5 hover:border-accent/40 transition-colors group"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon
                  size={16}
                  className="text-accent group-hover:text-accent2 transition"
                />
                <h3 className="font-bold text-ink">{it.title}</h3>
              </div>
              <p className="text-[13px] leading-6 text-muted">{it.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {it.tags.map((t) => (
                  <span key={t} className="chip">
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
