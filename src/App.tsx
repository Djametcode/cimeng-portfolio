import { Hero } from "./components/Hero";
import { Capabilities } from "./components/Capabilities";
import { Stack } from "./components/Stack";
import { Operations } from "./components/Operations";
import { Footer } from "./components/Footer";
import { TerminalNav } from "./components/TerminalNav";

export default function App() {
  return (
    <div className="crt min-h-screen">
      <div className="grid-bg fixed inset-0 -z-10 opacity-40" />
      <TerminalNav />
      <main className="container-pad py-10 sm:py-16 space-y-20">
        <Hero />
        <Capabilities />
        <Stack />
        <Operations />
      </main>
      <Footer />
    </div>
  );
}
