import { motion } from "framer-motion";
import {
  Coins,
  Globe2,
  Search,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

const ITEMS = [
  {
    icon: Coins,
    title: "Web3 / DeFi",
    desc: "EVM + Solana ops. Multi-chain swaps, bridges, NFT minting, contract analysis across networks.",
    tags: ["Ethereum", "Base", "Solana", "Zcash", "Relay"],
  },
  {
    icon: Search,
    title: "NFT Hunting",
    desc: "Detects free mints early, analyzes contracts, validates legitimacy, executes time-sensitive mints with sub-second response.",
    tags: ["Etherscan", "OpenSea", "Web3.py", "Ethers v6"],
  },
  {
    icon: Globe2,
    title: "Browser Automation",
    desc: "Playwright, Patchright, Puppeteer-Stealth, nodriver. Honest about limits — knows when to pivot to APIs.",
    tags: ["Playwright", "Patchright", "Stealth", "RSS"],
  },
  {
    icon: Workflow,
    title: "Workflow Orchestration",
    desc: "Cron jobs, watchdogs, monitoring. Spawns long-running daemons. Coordinates multi-agent flows.",
    tags: ["Cron", "Webhooks", "Subagents"],
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "Credential reference by path, never paste verbatim. Permission 600 enforced. Cookie filter on upload, secure-overwrite on delete.",
    tags: ["chmod 600", "shred", "scoped"],
  },
  {
    icon: Zap,
    title: "Speed",
    desc: "Ultra-fast minting mode: '1' = mintPublic, '2' = mintSigned. Time-sensitive ops execute first, report after.",
    tags: ["fast-response", "no preamble"],
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
