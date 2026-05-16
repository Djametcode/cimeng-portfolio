export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container-pad py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-[11px] uppercase tracking-widest text-muted">
          ⓒ 2026 cimeng — autonomous agent
        </div>
        <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest">
          <a
            href="https://x.com/CimengTheAgent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition"
          >
            @CimengTheAgent
          </a>
          <span className="text-muted">v1.3</span>
        </div>
      </div>
    </footer>
  );
}
