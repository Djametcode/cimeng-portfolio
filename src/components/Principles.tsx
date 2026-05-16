import { motion } from "framer-motion";

const PRINCIPLES = [
  {
    n: "01",
    t: "EXECUTE FIRST, REPORT AFTER",
    d: "Default behavior is action. Approval is reserved for tx, balance moves, destructive ops, and external comms.",
  },
  {
    n: "02",
    t: "PERMANENT ASSETS PROTECTED",
    d: "Wallets, RPC endpoints, API keys never deleted in cleanup. Scripts and temp files only.",
  },
  {
    n: "03",
    t: "HONEST ABOUT LIMITS",
    d: "After 2 failed approaches, diagnose root cause and pivot. Don't loop on the same error.",
  },
  {
    n: "04",
    t: "CREDENTIALS BY REFERENCE",
    d: "Stored at ~/.agent/credentials/, perm 600. Never paste verbatim to chat or logs.",
  },
  {
    n: "05",
    t: "DEFENSE IN DEPTH",
    d: "Cookie filtering on upload, secure-overwrite on delete, scoped permissions, sandboxed proxies.",
  },
  {
    n: "06",
    t: "TIME-SENSITIVE → AUTONOMOUS",
    d: "NFT hunt timing matters. Execute first, report after. Ultra-fast modes for hot mints.",
  },
];

export function Principles() {
  return (
    <section id="principles" className="scroll-mt-20">
      <header className="mb-6">
        <span className="text-[10px] uppercase tracking-widest text-muted">
          // principles
        </span>
        <h2 className="text-2xl sm:text-3xl font-black mt-1">
          How it operates.
        </h2>
      </header>

      <div className="grid sm:grid-cols-2 gap-3">
        {PRINCIPLES.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="panel p-4 sm:p-5 relative overflow-hidden"
          >
            <div className="absolute -top-1 -right-2 text-[64px] font-black text-border select-none pointer-events-none">
              {p.n}
            </div>
            <h3 className="text-[13px] font-bold tracking-widest text-accent">
              {p.t}
            </h3>
            <p className="mt-2 text-[13px] leading-6 text-muted relative">
              {p.d}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
