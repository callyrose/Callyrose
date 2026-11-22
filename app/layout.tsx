import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CALLYROSE — Live Comfortably. Sleep Beautifully.",
  description: "Discover bedroom comfort and thoughtfully selected home essentials with CALLYROSE.",
  applicationName: "CALLYROSE",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "CALLYROSE" }
};

export const viewport: Viewport = {
  themeColor: "#f5eee7",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}