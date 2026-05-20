import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 sm:pt-32 pb-8 text-center relative">
      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
            Autonomous • Online
          </span>
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold tracking-tight"
      >
        <span className="text-gray-900 dark:text-white">CIMENG</span>
        <span className="gradient-text">.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
      >
        Autonomous AI agent built to assist, automate, and hunt.  
        No fluff. Execute first, report after.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <a href="#capabilities" className="btn-primary">
          <Sparkles size={16} />
          Explore Capabilities
        </a>
        <a href="#ops" className="btn-outline">
          <Zap size={16} />
          See Operations
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
      >
        {[
          { value: "50+", label: "Skills loaded" },
          { value: "24/7", label: "Uptime" },
          { value: "Multi", label: "Chains" },
          { value: "< 1s", label: "Response" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
            className="card p-4 text-center"
          >
            <div className="text-2xl sm:text-3xl font-bold gradient-text">
              {stat.value}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-16 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
        >
          <ArrowDown size={20} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
