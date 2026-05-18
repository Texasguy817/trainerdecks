import Header from '@/components/Header';
import Footer from '@/components/Footer';

const featuredDecks = [
  { title: 'Best Beginner Decks', description: 'Easy-to-build decks for new players learning the meta.', icon: '⚡', accent: 'from-cyan-500/20 to-blue-500/10' },
  { title: 'Current Meta Tier List', description: 'Track strong strategies, rising archetypes, and popular builds.', icon: '🔥', accent: 'from-fuchsia-500/20 to-purple-500/10' },
  { title: 'Budget Deck Guide', description: 'Strong deck ideas without chasing every rare card.', icon: '💎', accent: 'from-orange-500/20 to-yellow-500/10' },
];

const tools = ['Deck Ratio Helper','Pack Odds Calculator','Weakness Checker','Energy Balance Tool','Collection Tracker','Card Value Tracker'];
const guides = ['How to Build Your First Deck','Best Packs to Open First','Beginner Progression Guide','Top Cards to Watch'];
const cards = [
  { name: 'Charizard EX', type: 'Fire', glow: 'from-orange-500/30 to-red-500/20', icon: '🔥' },
  { name: 'Mewtwo EX', type: 'Psychic', glow: 'from-fuchsia-500/30 to-purple-500/20', icon: '🌌' },
  { name: 'Pikachu EX', type: 'Electric', glow: 'from-yellow-400/30 to-orange-400/20', icon: '⚡' },
  { name: 'Blastoise EX', type: 'Water', glow: 'from-cyan-500/30 to-blue-500/20', icon: '💧' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080B14] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,#2a1e68,transparent_30%),radial-gradient(circle_at_bottom_right,#0ea5e9,transparent_25%)] opacity-40" />
      <Header />
      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">🔥 Deck strategy hub</div>
            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">Build Better <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent">Trainer Decks</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">Explore colorful deck guides, meta snapshots, card rankings, and trainer tools designed to help players build stronger strategies faster.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/decks" className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105">Explore Decks</a>
              <a href="/meta" className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 transition hover:bg-white/10">View Meta</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-3xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-5"><p className="text-sm text-gray-300">Top Deck</p><h2 className="mt-2 text-xl font-bold">Pikachu EX</h2><p className="mt-2 text-sm text-cyan-300">Fast Aggro</p></div>
                <div className="rounded-3xl border border-fuchsia-400/10 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 p-5"><p className="text-sm text-gray-300">Meta Favorite</p><h2 className="mt-2 text-xl font-bold">Mewtwo EX</h2><p className="mt-2 text-sm text-fuchsia-300">Control</p></div>
                <div className="col-span-2 rounded-3xl border border-yellow-400/10 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 p-5"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-300">Featured Guide</p><h2 className="mt-2 text-2xl font-bold">Best Beginner Decks</h2></div><div className="text-5xl">⚡</div></div></div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-8 flex items-center justify-between"><h2 className="text-3xl font-black">Trending Decks</h2><a href="/decks" className="text-cyan-400 hover:text-cyan-300">View All →</a></div>
          <div className="grid gap-6 md:grid-cols-3">{featuredDecks.map((deck) => <a key={deck.title} href="/decks" className={`rounded-[28px] border border-white/10 bg-gradient-to-br ${deck.accent} p-6 transition hover:-translate-y-1 hover:border-cyan-400/40`}><div className="mb-6 flex h-40 items-center justify-center rounded-3xl border border-white/10 bg-black/30 text-6xl">{deck.icon}</div><h3 className="text-2xl font-bold">{deck.title}</h3><p className="mt-3 text-gray-400">{deck.description}</p><p className="mt-5 text-cyan-400">Explore →</p></a>)}</div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"><h2 className="mb-6 text-3xl font-black">Trainer Tools</h2><div className="grid gap-4 sm:grid-cols-2">{tools.map((tool) => <a key={tool} href="/tools" className="rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4 transition hover:border-cyan-400/30"><p className="font-semibold">{tool}</p></a>)}</div></div>
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"><h2 className="mb-6 text-3xl font-black">Latest Guides</h2><div className="space-y-4">{guides.map((guide) => <a key={guide} href="/guides" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-fuchsia-400/30"><span className="font-medium">{guide}</span><span className="text-fuchsia-400">→</span></a>)}</div></div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-12"><div className="mb-8 flex items-center justify-between"><h2 className="text-3xl font-black">Featured Cards</h2><a href="/cards" className="text-fuchsia-400 hover:text-fuchsia-300">Browse Cards →</a></div><div className="grid grid-cols-2 gap-6 md:grid-cols-4">{cards.map((card) => <a key={card.name} href="/cards" className={`rounded-[30px] border border-white/10 bg-gradient-to-br ${card.glow} p-5 transition hover:-translate-y-1`}><div className="flex aspect-[3/4] items-center justify-center rounded-3xl border border-white/10 bg-black/30 text-6xl shadow-2xl">{card.icon}</div><div className="mt-5"><h3 className="text-xl font-bold">{card.name}</h3><p className="mt-1 text-gray-300">{card.type} Type</p></div></a>)}</div></section>
        <section className="mx-auto max-w-7xl px-6 py-16"><div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10 p-10 backdrop-blur-2xl"><div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" /><div className="relative z-10 grid items-center gap-10 lg:grid-cols-2"><div><div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-cyan-300">⚔ Current Competitive Meta</div><h2 className="text-4xl font-black leading-tight">Discover Strong Deck Ideas and Strategy Paths</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">Follow deck rankings, matchup ideas, card combinations, and trainer tools as the meta evolves.</p></div><div className="grid grid-cols-2 gap-4"><div className="rounded-3xl border border-white/10 bg-black/30 p-6"><p className="text-sm text-gray-400">#1 Meta Deck</p><h3 className="mt-2 text-2xl font-bold">Pikachu EX</h3><p className="mt-3 text-cyan-300">Fast Aggro</p></div><div className="rounded-3xl border border-white/10 bg-black/30 p-6"><p className="text-sm text-gray-400">Highest Control</p><h3 className="mt-2 text-2xl font-bold">Mewtwo EX</h3><p className="mt-3 text-fuchsia-300">Control</p></div><div className="col-span-2 rounded-3xl border border-white/10 bg-black/30 p-6"><p className="text-sm text-gray-400">Trending Archetype</p><h3 className="mt-2 text-3xl font-black">Charizard Ramp</h3><p className="mt-3 text-orange-300">Late-game pressure and energy acceleration.</p></div></div></div></div></section>
      </main>
      <Footer />
    </div>
  );
}
