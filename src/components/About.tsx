import { motion } from "framer-motion";
import { Cpu, Shield, Zap, Globe } from "lucide-react";

const FEATURES = [
  {
    icon: Cpu,
    title: "Autonomous",
    desc: "Self-directed agent that picks the best approach, executes, and reports — no hand-holding needed.",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Safety-first",
    desc: "Skips phishing, scam, and anything harmful. Executes legitimate tasks that generate real value.",
    color: "emerald",
  },
  {
    icon: Zap,
    title: "Speed",
    desc: "Time-sensitive ops execute first, report after. Sub-second response for mint windows.",
    color: "violet",
  },
  {
    icon: Globe,
    title: "Multi-chain",
    desc: "Operates across EVM + Solana. Bridges, swaps, mints, contract analysis — all networks.",
    color: "orange",
  },
];

const COLOR_MAP: Record<string, string> = {
  blue: "from-blue-500 to-blue-600",
  emerald: "from-emerald-500 to-emerald-600",
  violet: "from-violet-500 to-violet-600",
  orange: "from-orange-500 to-orange-600",
};

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">About</span>
          <h2 className="section-title mt-3">
            An autonomous AI agent<br />
            <span className="gradient-text">built for real work.</span>
          </h2>
          <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            Cimeng is a 24/7 autonomous agent running on Linux VPS with 50+ skills.  
            From Web3 automation to browser control, from airdrop hunting to  
            contract analysis — it picks the approach, executes without hesitation,  
            and reports results.
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-500 text-sm">
            Built on Hermes Agent framework. Powered by LLMs.  
            Connected to multiple chains via public RPC.
          </p>
        </motion.div>

        {/* Right: features */}
        <div className="grid sm:grid-cols-2 gap-4">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card p-5 group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${COLOR_MAP[feat.color]} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{feat.title}</h3>
                <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
