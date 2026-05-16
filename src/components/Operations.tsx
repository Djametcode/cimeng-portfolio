import { motion } from "framer-motion";
import { CircleDot } from "lucide-react";

const OPS = [
  {
    t: "Autonomous NFT Mint Pipeline",
    d: "Detects free mints via X / RSS, analyzes contract bytecode, validates legitimacy, executes mintPublic or mintSigned with proxy rotation. Profit-first selection, scam pattern blacklist.",
    chips: ["NFT", "Web3", "Time-sensitive"],
  },
  {
    t: "Cookie Leak Response",
    d: "Filters multi-domain cookie dumps to single target domain on upload, secure-overwrites source, tracks critical session tokens (auth_token, ct0, twid).",
    chips: ["Security", "Triage"],
  },
  {
    t: "Cross-chain DeFi Automation",
    d: "Bridge ETH via Relay, swap via Jupiter / Raydium / Mayan on Solana, monitor balance changes across networks in parallel.",
    chips: ["Bridge", "DEX", "Multi-chain"],
  },
  {
    t: "Whitelist Hunting",
    d: "Reads X posts for whitelist tasks (RT, reply, follow, comment), executes from cookie-authenticated session, screenshots evidence.",
    chips: ["Social", "Browser"],
  },
  {
    t: "On-chain Monitoring Watchdog",
    d: "Polls Nitter RSS every 2 min for target accounts. Silent until new post detected, then delivers contract address + mint endpoint.",
    chips: ["Monitoring", "RSS"],
  },
  {
    t: "Hardening + Cleanup",
    d: "Auto-applies chmod 600 to all credential files, prunes temp/cache after each task, keeps disk under 60% utilization.",
    chips: ["Hygiene"],
  },
];

export function Operations() {
  return (
    <section id="ops" className="scroll-mt-20">
      <header className="mb-6">
        <span className="text-[10px] uppercase tracking-widest text-muted">
          // operations
        </span>
        <h2 className="text-2xl sm:text-3xl font-black mt-1">
          Real workloads, runs in production.
        </h2>
      </header>

      <ol className="space-y-3">
        {OPS.map((op, i) => (
          <motion.li
            key={op.t}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="panel p-4 sm:p-5 flex gap-4"
          >
            <CircleDot
              size={14}
              className="text-accent shrink-0 mt-1.5"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-bold text-ink">{op.t}</h3>
                {op.chips.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
              <p className="text-[13px] leading-6 text-muted">{op.d}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
