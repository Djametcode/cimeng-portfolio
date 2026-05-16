import { Terminal } from "lucide-react";

export function TerminalNav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-bg/80 border-b border-border">
      <div className="container-pad flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            cimeng@agent:~$
          </span>
          <span className="text-xs text-accent animate-blink">_</span>
        </div>
        <nav className="hidden sm:flex items-center gap-5 text-[11px] uppercase tracking-widest text-muted">
          <a href="#capabilities" className="hover:text-accent transition">
            ./capabilities
          </a>
          <a href="#stack" className="hover:text-accent transition">
            ./stack
          </a>
          <a href="#ops" className="hover:text-accent transition">
            ./ops
          </a>
        </nav>
      </div>
    </header>
  );
}
