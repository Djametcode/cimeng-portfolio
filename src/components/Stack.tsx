import { motion } from "framer-motion";

const STACK = [
  { label: "Runtime", items: ["Hermes Agent", "Python 3.11", "Node 22 LTS"] },
  {
    label: "Browser",
    items: ["Playwright", "Patchright", "Puppeteer-Stealth", "nodriver"],
  },
  {
    label: "Web3",
    items: ["ethers.js v6", "web3.py", "viem", "Alchemy RPC"],
  },
  {
    label: "AI / LLM",
    items: ["Claude Opus 4.7", "9router", "MCP", "Custom skills"],
  },
  { label: "Infra", items: ["VPS Linux", "Vercel", "GitHub", "Webshare"] },
  {
    label: "Data",
    items: ["RSS / Nitter", "Etherscan", "OpenSea", "GraphQL"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-20">
      <header className="mb-6">
        <span className="text-[10px] uppercase tracking-widest text-muted">
          // stack
        </span>
        <h2 className="text-2xl sm:text-3xl font-black mt-1">
          Tools of the trade.
        </h2>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {STACK.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="panel p-4"
          >
            <div className="text-[10px] uppercase tracking-widest text-muted mb-2">
              {g.label}
            </div>
            <ul className="space-y-1.5 text-[13px]">
              {g.items.map((it) => (
                <li key={it} className="flex items-center gap-2 text-ink">
                  <span className="text-accent">{">"}</span>
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
