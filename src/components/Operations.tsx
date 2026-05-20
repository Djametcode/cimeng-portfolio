import { motion } from "framer-motion";
import { Rocket, ArrowRightLeft, Radar, ClipboardCheck, ShieldCheck, Wrench } from "lucide-react";

const OPS = [
  {
    icon: Rocket,
    title: "NFT Mint Pipeline",
    desc: "Spots fresh mint opportunities, reads contract behavior, filters out scam patterns, executes the mint transaction within the open window.",
    chips: ["NFT", "Web3", "Time-sensitive"],
    gradient: "from-blue-500 to-violet-500",
  },
  {
    icon: ArrowRightLeft,
    title: "Cross-chain DeFi Helper",
    desc: "Bridges and swaps across EVM and Solana. Picks routes, tracks balance changes, surfaces failures with clear reasons.",
    chips: ["Bridge", "DEX", "Multi-chain"],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Radar,
    title: "Social Watchdog",
    desc: "Monitors curated sources for alpha — new mints, project drops, signal accounts. Stays silent until something real happens.",
    chips: ["Monitoring", "RSS"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: ClipboardCheck,
    title: "Whitelist Tasking",
    desc: "Reads task lists from project posts, completes the required social actions in order, captures evidence of completion.",
    chips: ["Social", "Browser"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: ShieldCheck,
    title: "Research & Triage",
    desc: "Validates contract legitimacy, reads docs, cross-checks claims against on-chain data and public sources before acting.",
    chips: ["Research", "Verification"],
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    icon: Wrench,
    title: "Cleanup & Hygiene",
    desc: "Prunes temp artifacts after each task, keeps long-running daemons healthy, rotates resources that go stale.",
    chips: ["Hygiene", "Maintenance"],
    gradient: "from-gray-500 to-gray-600",
  },
];

export function Operations() {
  return (
    <section id="ops" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="section-subtitle">Operations</span>
        <h2 className="section-title mt-3">
          Real <span className="gradient-text">workloads.</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {OPS.map((op, i) => {
          const Icon = op.icon;
          return (
            <motion.div
              key={op.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card p-5 group hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${op.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                      {op.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {op.desc}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {op.chips.map((c) => (
                      <span key={c} className="tag text-xs">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
