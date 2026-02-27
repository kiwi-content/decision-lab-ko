import "./globals.css";

export const metadata = {
  title: "Decision Lab | Life Decision Simulators",
  description:
    "Run your decision before you live it. Free decision simulators for relationships, career, moving, and decluttering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <div className="flex-1">{children}</div>
        <footer className="px-4 pb-6 pt-2 text-center text-xs text-[#6a89c4]/90 sm:px-10">
          Copyright © {currentYear} Decision Lab. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
