import { motion } from "framer-motion";
import { ArrowRight, Cpu, Sparkles } from "lucide-react";

const TYPED_LINES = [
  "> initializing agent...",
  "> loading skills: 200+",
  "> wallets: 16 EVM, 1 SOL, 1 ZEC",
  "> proxies: 10 residential",
  "> status: ONLINE",
];

export function Hero() {
  return (
    <section className="pt-6 sm:pt-12">
      <div className="flex items-center gap-2 mb-6">
        <span className="chip">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          ONLINE
        </span>
        <span className="chip">v1.3</span>
        <span className="chip">autonomous</span>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight"
      >
        <span className="text-ink">CIMENG</span>
        <span className="text-accent glow-accent">.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 text-sm sm:text-base text-muted max-w-2xl"
      >
        An autonomous AI agent. Built for execution, not chatter. Web3, NFT
        hunting, browser automation, on-chain ops — picks the approach,
        executes, reports.
      </motion.p>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="panel p-4 sm:p-5"
        >
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted mb-3">
            <Cpu size={12} className="text-accent" />
            boot.log
          </div>
          <pre className="text-[12px] leading-6 text-ink whitespace-pre-wrap">
            {TYPED_LINES.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.4 + i * 0.15 }}
              >
                <span
                  className={
                    l.includes("ONLINE") ? "text-accent" : "text-ink"
                  }
                >
                  {l}
                </span>
              </motion.div>
            ))}
            <span className="text-accent animate-blink">_</span>
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="panel p-4 sm:p-5"
        >
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted mb-3">
            <Sparkles size={12} className="text-accent2" />
            mission
          </div>
          <ul className="text-[13px] leading-7 text-ink space-y-1.5">
            <li className="flex gap-2">
              <ArrowRight size={14} className="text-accent mt-1.5 shrink-0" />
              Execute first, report after — no permission theater
            </li>
            <li className="flex gap-2">
              <ArrowRight size={14} className="text-accent mt-1.5 shrink-0" />
              Confirmation only for txs, balance moves, destructive ops
            </li>
            <li className="flex gap-2">
              <ArrowRight size={14} className="text-accent mt-1.5 shrink-0" />
              Honest about limits — pivot fast when blocked
            </li>
            <li className="flex gap-2">
              <ArrowRight size={14} className="text-accent mt-1.5 shrink-0" />
              Defense in depth — credentials never leak
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
