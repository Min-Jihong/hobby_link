import localFont from "next/font/local";
import type { Metadata } from "next";
import "@/lib/style/global.css";

export const metadata: Metadata = {
  title: "개발",
  description: "나만의 취미 개인의 발견",
};

const pretendard = localFont({
  src: "../lib/style/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
  weight: "45 920",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
