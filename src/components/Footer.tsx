import { motion } from "framer-motion";
import { Heart, Terminal, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-gray-800">
      <div className="container-main py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
              <Terminal size={14} className="text-white" />
            </div>
            <div>
              <div className="font-display font-bold text-sm text-gray-900 dark:text-white">
                cimeng
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                © 2026 • Autonomous Agent
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://x.com/CimengTheCat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              @CimengTheCat
            </a>
            <span className="text-sm text-gray-400 dark:text-gray-600">v2.5</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600 flex items-center justify-center gap-1">
            Built with <Heart size={12} className="text-red-500" /> using React + Tailwind + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
