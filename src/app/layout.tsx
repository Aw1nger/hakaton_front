import { Toaster } from "@/shared/components/ui/sonner";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ProviderCompose } from "./_providers/provider-compose";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Home | NeltoID",
  description: "NektoID by Nekto-Z",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <ProviderCompose>{children}</ProviderCompose>
        <Toaster />
      </body>
    </html>
  );
}