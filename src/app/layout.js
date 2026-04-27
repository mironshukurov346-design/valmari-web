import "./globals.css";

export const metadata = {
  title: "Valmarí — Events & Snack Bar",
  description:
    "Valmarí creates unforgettable events with customized snack bars and creative coordination. Book your next celebration with us.",
  keywords: "events, snack bar, catering, party planning, celebrations, Valmarí",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
