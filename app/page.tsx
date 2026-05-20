import Header from '@/components/Header';
import Footer from '@/components/Footer';

const trendingDecks = [
  { name: 'Pikachu EX Rush', tag: 'Fast Aggro', type: 'Electric', icon: '⚡', color: 'from-yellow-200 via-yellow-100 to-blue-100', border: 'border-yellow-300' },
  { name: 'Mewtwo EX Control', tag: 'Meta Favorite', type: 'Psychic', icon: '🌌', color: 'from-purple-200 via-pink-100 to-blue-100', border: 'border-purple-300' },
  { name: 'Charizard Ramp', tag: 'Late Game Power', type: 'Fire', icon: '🔥', color: 'from-orange-200 via-red-100 to-yellow-100', border: 'border-orange-300' },
  { name: 'Blastoise Tank', tag: 'Defensive Setup', type: 'Water', icon: '💧', color: 'from-sky-200 via-blue-100 to-white', border: 'border-sky-300' }
];

const popularCards = [
  { name: 'Pikachu EX', stat: 'Fast attacker', icon: '⚡', bg: 'from-yellow-200 to-yellow-50' },
  { name: 'Charizard EX', stat: 'Heavy finisher', icon: '🔥', bg: 'from-orange-200 to-red-50' },
  { name: 'Mewtwo EX', stat: 'Control core', icon: '🌌', bg: 'from-purple-200 to-pink-50' },
  { name: 'Blastoise EX', stat: 'Tank setup', icon: '💧', bg: 'from-sky-200 to-blue-50' },
  { name: 'Venusaur EX', stat: 'Sustain engine', icon: '🌿', bg: 'from-green-200 to-lime-50' },
  { name: 'Mew EX', stat: 'Flexible tech', icon: '✨', bg: 'from-pink-200 to-yellow-50' }
];

const events = [
  { title: 'New Expansion Watch', detail: 'Track cards, set reveals, and early deck ideas.', icon: '🎁' },
  { title: 'Ranked Tournament Prep', detail: 'See decks to test before the next event window.', icon: '🏆' },
  { title: 'Legendary Drop Week', detail: 'Featured cards, pack priorities, and event tips.', icon: '⭐' },
  { title: 'Meta Shakeup Tracker', detail: 'Follow decks rising after balance and set changes.', icon: '📈' }
];

const guides = [
  'Best Beginner Decks',
  'Best Budget Decks',
  'Current Meta Tier List',
  'Best Packs to Open First',
  'Top EX Cards Right Now',
  'How to Build Your First Deck'
];

const tools = [
  'Deck Ratio Helper',
  'Weakness Checker',
  'Pack Odds Calculator',
  'Energy Balance Tool'
];

function MiniCard({ name, icon, bg, stat }: { name: string; icon: string; bg: string; stat: string }) {
  return (
    <a href="/cards" className={`group rounded-[28px] border-4 border-white bg-gradient-to-br ${bg} p-4 shadow-md transition hover:-translate-y-1 hover:shadow-xl`}>
      <div className="flex aspect-[3/4] items-center justify-center rounded-3xl border-2 border-white/80 bg-white/70 text-6xl shadow-inner transition group-hover:scale-[1.03]">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-black text-slate-900">{name}</h3>
      <p className="text-sm font-semibold text-slate-600">{stat}</p>
    </a>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-sky-100 via-blue-50 to-yellow-50 text-slate-900">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.45),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.35),transparent_30%)]" />
      <Header />
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="relative overflow-hidden rounded-[36px] border-4 border-white bg-gradient-to-br from-yellow-300 via-yellow-100 to-sky-200 p-6 shadow-[0_18px_50px_rgba(37,99,235,0.18)] md:p-8">
              <div className="absolute -right-8 -top-10 text-[210px] leading-none opacity-10">⚡</div>
              <div className="relative z-10">
                <div className="mb-5 flex flex-wrap gap-3">
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-blue-600 shadow-sm">🔥 New Meta Decks</span>
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-orange-500 shadow-sm">🎉 Upcoming Events</span>
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-purple-600 shadow-sm">✨ EX Cards</span>
                </div>
                <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-slate-950 md:text-6xl">
                  Trending Decks, Cards & Events
                </h1>
                <p className="mt-5 max-w-2xl text-lg font-semibold text-slate-700">
                  Jump into the latest deck ideas, powerful cards, event prep, and meta updates for trainers who want something fun to explore every visit.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {trendingDecks.slice(0, 3).map((deck) => (
                    <a key={deck.name} href="/decks" className={`rounded-[28px] border-4 ${deck.border} bg-gradient-to-br ${deck.color} p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl`}>
                      <div className="mb-4 text-6xl">{deck.icon}</div>
                      <h2 className="text-2xl font-black text-slate-950">{deck.name}</h2>
                      <p className="mt-2 font-bold text-slate-700">{deck.tag}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[32px] border-4 border-blue-100 bg-white p-6 shadow-lg">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-2xl font-black text-slate-950">Upcoming Events</h2>
                  <span className="text-4xl">🎉</span>
                </div>
                <div className="space-y-3">
                  {events.map((event) => (
                    <a key={event.title} href="/guides" className="flex items-center gap-3 rounded-2xl border-2 border-blue-100 bg-blue-50 px-4 py-3 transition hover:bg-yellow-50">
                      <span className="text-2xl">{event.icon}</span>
                      <span>
                        <span className="block font-black text-slate-900">{event.title}</span>
                        <span className="text-sm font-medium text-slate-600">{event.detail}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border-4 border-yellow-100 bg-white p-6 shadow-lg">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-2xl font-black text-slate-950">Popular Cards</h2>
                  <span className="text-4xl">🎴</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {popularCards.slice(0, 4).map((card) => (
                    <a key={card.name} href="/cards" className={`rounded-2xl bg-gradient-to-br ${card.bg} p-4 text-center shadow-sm transition hover:scale-[1.03]`}>
                      <div className="text-4xl">{card.icon}</div>
                      <div className="mt-2 text-sm font-black text-slate-900">{card.name}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-black text-slate-950">Top Decks Right Now</h2>
            <a href="/decks" className="font-black text-blue-600 hover:text-yellow-500">View all decks →</a>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {trendingDecks.map((deck) => (
              <a key={deck.name} href="/decks" className={`rounded-[30px] border-4 ${deck.border} bg-gradient-to-br ${deck.color} p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl`}>
                <div className="flex h-36 items-center justify-center rounded-3xl border-2 border-white/80 bg-white/60 text-6xl shadow-inner">{deck.icon}</div>
                <h3 className="mt-5 text-xl font-black text-slate-950">{deck.name}</h3>
                <p className="font-bold text-slate-700">{deck.type} • {deck.tag}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="rounded-[36px] border-4 border-white bg-white p-6 shadow-xl md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-3xl font-black text-slate-950">Featured Cards</h2>
              <a href="/cards" className="font-black text-blue-600 hover:text-yellow-500">Browse card hub →</a>
            </div>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
              {popularCards.map((card) => <MiniCard key={card.name} {...card} />)}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:px-6 lg:grid-cols-2">
          <div className="rounded-[36px] border-4 border-blue-100 bg-white p-6 shadow-lg md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-3xl font-black text-slate-950">Latest Guides</h2>
              <span className="text-4xl">📘</span>
            </div>
            <div className="grid gap-3">
              {guides.map((guide) => (
                <a key={guide} href="/guides" className="flex items-center justify-between rounded-2xl border-2 border-blue-100 bg-blue-50 px-5 py-4 font-black text-slate-800 transition hover:bg-yellow-50">
                  {guide}<span>→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[36px] border-4 border-yellow-100 bg-white p-6 shadow-lg md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-3xl font-black text-slate-950">Trainer Tools</h2>
              <span className="text-4xl">🧰</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {tools.map((tool) => (
                <a key={tool} href="/tools" className="rounded-2xl border-2 border-yellow-100 bg-yellow-50 p-5 font-black text-slate-800 transition hover:border-blue-200 hover:bg-blue-50">
                  {tool}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="rounded-[36px] border-4 border-white bg-gradient-to-r from-blue-500 to-sky-400 p-8 text-white shadow-xl md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="inline-block rounded-full bg-yellow-300 px-4 py-2 text-sm font-black text-slate-900">⚔ Meta Snapshot</p>
                <h2 className="mt-5 text-4xl font-black leading-tight">What decks are rising this week?</h2>
                <p className="mt-4 text-lg font-semibold text-blue-50">Track fast aggro, control cores, late-game ramp, and the cards that are shaping current deck builds.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {['Fast Aggro', 'Control Core', 'Late Game Ramp'].map((item) => (
                  <a key={item} href="/meta" className="rounded-[28px] border-4 border-white bg-white p-5 text-slate-900 shadow-md transition hover:-translate-y-1">
                    <div className="text-4xl">🏆</div>
                    <h3 className="mt-4 text-xl font-black">{item}</h3>
                    <p className="mt-2 text-sm font-semibold text-slate-600">View meta notes →</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
