export default function Header() {
  return (
    <header className="relative z-20 border-b-4 border-blue-100 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a href="/" className="block">
          <div className="inline-block rounded-2xl bg-blue-500 px-3 py-1 text-3xl font-black tracking-tight text-yellow-300 shadow-[0_4px_0_#facc15] md:text-4xl">
            TrainerDecks
          </div>
          <div className="mt-2 text-sm font-black text-slate-600">Decks • Cards • Events • Meta Updates</div>
        </a>
        <nav className="hidden gap-2 text-sm font-black md:flex">
          {[
            ['Decks', '/decks'],
            ['Meta', '/meta'],
            ['Cards', '/cards'],
            ['Tools', '/tools'],
            ['Guides', '/guides']
          ].map(([label, href]) => (
            <a key={href} href={href} className="rounded-full bg-blue-50 px-4 py-2 text-blue-700 transition hover:bg-yellow-200 hover:text-slate-900">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
