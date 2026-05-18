export default function Header() {
  return (
    <header className="relative z-10 border-b border-white/10 bg-black/25 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="block">
          <div className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-3xl font-black tracking-tight text-transparent">TrainerDecks</div>
          <div className="mt-1 text-sm text-gray-400">Decks, meta guides & trainer tools</div>
        </a>
        <nav className="hidden gap-7 text-sm font-medium text-gray-300 md:flex">
          <a href="/decks" className="transition hover:text-cyan-400">Decks</a>
          <a href="/meta" className="transition hover:text-cyan-400">Meta</a>
          <a href="/cards" className="transition hover:text-cyan-400">Cards</a>
          <a href="/tools" className="transition hover:text-cyan-400">Tools</a>
          <a href="/guides" className="transition hover:text-cyan-400">Guides</a>
        </nav>
      </div>
    </header>
  );
}
