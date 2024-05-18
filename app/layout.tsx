import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Main from "@/components/Main";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cleverDevs",
  description: "cleverDevs - Justine Rhei Torres",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
