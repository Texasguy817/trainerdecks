export default function Footer() {
  return (
    <footer className="relative z-10 mt-16 border-t-4 border-blue-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-10 text-sm font-semibold text-slate-600 md:flex-row md:items-center">
        <div>
          <p className="font-black text-slate-900">© 2026 TrainerDecks</p>
          <p className="mt-1 max-w-2xl">Independent deck, card, guide, and tools hub. Not affiliated with Nintendo, The Pokémon Company, or any official game publisher.</p>
        </div>
        <div className="flex gap-5 font-black text-blue-600">
          <a href="/about" className="transition hover:text-yellow-500">About</a>
          <a href="/privacy" className="transition hover:text-yellow-500">Privacy</a>
          <a href="/contact" className="transition hover:text-yellow-500">Contact</a>
        </div>
      </div>
    </footer>
  );
}
