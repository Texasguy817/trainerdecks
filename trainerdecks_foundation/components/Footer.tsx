export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-gray-400 md:flex-row">
        <p>© 2026 TrainerDecks. Independent strategy, deck, and tool hub.</p>
        <div className="flex gap-6">
          <a href="/about" className="transition hover:text-white">About</a>
          <a href="/privacy" className="transition hover:text-white">Privacy</a>
          <a href="/contact" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
