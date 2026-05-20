import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Capabilities } from "./components/Capabilities";
import { Stack } from "./components/Stack";
import { Operations } from "./components/Operations";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Animated blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="blob w-96 h-96 bg-blue-400 top-20 -left-48 animate-float" />
        <div className="blob w-80 h-80 bg-violet-400 top-1/3 -right-40 animate-float" style={{ animationDelay: "2s" }} />
        <div className="blob w-72 h-72 bg-emerald-400 bottom-20 left-1/3 animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <Navbar />
      <main className="container-main py-12 sm:py-16 space-y-24">
        <Hero />
        <About />
        <Capabilities />
        <Stack />
        <Operations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
