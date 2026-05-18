import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Guides - TrainerDecks',
  description: 'Guides resources, guides, and tools from TrainerDecks.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080B14] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,#2a1e68,transparent_30%),radial-gradient(circle_at_bottom_right,#0ea5e9,transparent_25%)] opacity-40" />
      <Header />
      <main className="relative z-10 mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">TrainerDecks</p>
          <h1 className="mt-3 text-4xl font-black">Guides</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">
            This section is part of the TrainerDecks foundation. Full strategy pages, visual guides, deck resources, and tools will be added in upcoming updates.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a href="/decks" className="rounded-2xl border border-white/10 bg-black/25 p-5 hover:border-cyan-400/30">Deck Guides</a>
            <a href="/tools" className="rounded-2xl border border-white/10 bg-black/25 p-5 hover:border-cyan-400/30">Trainer Tools</a>
            <a href="/cards" className="rounded-2xl border border-white/10 bg-black/25 p-5 hover:border-fuchsia-400/30">Card Explorer</a>
            <a href="/guides" className="rounded-2xl border border-white/10 bg-black/25 p-5 hover:border-fuchsia-400/30">Beginner Guides</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
