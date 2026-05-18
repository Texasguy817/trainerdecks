import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TrainerDecks - Decks, Meta Guides & Tools',
  description: 'TrainerDecks is a colorful companion hub for deck guides, meta snapshots, card tools, and strategy resources for trading card game fans.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
