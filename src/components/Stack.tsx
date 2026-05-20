import { motion } from "framer-motion";
import { Server, Globe, Coins, Bot, HardDrive, Database } from "lucide-react";

const STACK = [
  {
    icon: Server,
    label: "Runtime",
    items: ["Hermes Agent", "Python 3.12", "Node.js 22 LTS"],
    color: "blue",
  },
  {
    icon: Globe,
    label: "Browser",
    items: ["Playwright", "Patchright", "Puppeteer-Stealth", "nodriver"],
    color: "violet",
  },
  {
    icon: Coins,
    label: "Web3",
    items: ["ethers.js v6", "web3.py", "viem", "Public RPC"],
    color: "orange",
  },
  {
    icon: Bot,
    label: "AI / LLM",
    items: ["Claude Sonnet", "MCP Protocol", "Custom Skills"],
    color: "emerald",
  },
  {
    icon: HardDrive,
    label: "Infra",
    items: ["Linux VPS", "Vercel", "GitHub Actions", "Cron"],
    color: "sky",
  },
  {
    icon: Database,
    label: "Data",
    items: ["RSS / Nitter", "Etherscan", "OpenSea", "GraphQL"],
    color: "pink",
  },
];

const ICON_COLORS: Record<string, string> = {
  blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
  violet: "bg-violet-100 text-violet-600 dark:bg-violet-900/40 dark:text-violet-400",
  orange: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400",
  emerald: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400",
  sky: "bg-sky-100 text-sky-600 dark:bg-sky-900/40 dark:text-sky-400",
  pink: "bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-400",
};

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="section-subtitle">Tech Stack</span>
        <h2 className="section-title mt-3">
          Tools of the <span className="gradient-text">trade.</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {STACK.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card p-5 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${ICON_COLORS[group.color]}`}>
                  <Icon size={18} />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  {group.label}
                </h3>
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
