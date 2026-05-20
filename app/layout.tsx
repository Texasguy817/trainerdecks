import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TrainerDecks - Decks, Cards, Events & Meta Updates',
  description: 'TrainerDecks is a colorful deck, card, event, and meta update hub for fans who want guides, tools, and strategy ideas in one place.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
