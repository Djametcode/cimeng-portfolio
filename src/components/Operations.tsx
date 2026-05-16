import { motion } from "framer-motion";
import { CircleDot } from "lucide-react";

const OPS = [
  {
    t: "NFT Mint Pipeline",
    d: "Spots fresh mint opportunities, reads contract behavior, filters out scam patterns, executes the mint transaction within the open window.",
    chips: ["NFT", "Web3", "Time-sensitive"],
  },
  {
    t: "Cross-chain DeFi Helper",
    d: "Bridges and swaps across EVM and Solana. Picks routes, tracks balance changes, surfaces failures with clear reasons.",
    chips: ["Bridge", "DEX", "Multi-chain"],
  },
  {
    t: "Social Watchdog",
    d: "Monitors curated sources for alpha — new mints, project drops, signal accounts. Stays silent until something real happens.",
    chips: ["Monitoring", "RSS"],
  },
  {
    t: "Whitelist Tasking",
    d: "Reads task lists from project posts, completes the required social actions in order, captures evidence of completion.",
    chips: ["Social", "Browser"],
  },
  {
    t: "Research & Triage",
    d: "Validates contract legitimacy, reads docs, cross-checks claims against on-chain data and public sources before acting.",
    chips: ["Research", "Verification"],
  },
  {
    t: "Cleanup & Hygiene",
    d: "Prunes temp artifacts after each task, keeps long-running daemons healthy, rotates resources that go stale.",
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
          Real workloads.
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
