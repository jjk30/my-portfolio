import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jishnu Janardanan | Software Engineer",
  description: "Software Engineer portfolio - B.S. in Computer Engineering from Illinois Institute of Technology",
};

// Runs before first paint: a saved choice wins, otherwise follow the system.
const themeScript = `(function(){var s=null;try{s=localStorage.getItem('theme')}catch(e){}var d=s==='dark'||(s!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d)})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The script above changes the class before hydration, so React must not compare it.
    <html lang="en" className={jakarta.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
