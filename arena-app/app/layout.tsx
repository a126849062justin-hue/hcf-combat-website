import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.hsinchucombat.com"),
  title: "HCF ENTER THE ARENA 新竹格鬥選手訓練與比賽",
  description:
    "踏進 HCF 新竹格鬥的世界 從訓練日常與教練陪伴 到選手比賽與真實蛻變 讓你的旅程從第一堂體驗開始",
  alternates: { canonical: "/fighters" },
  openGraph: {
    title: "HCF ENTER THE ARENA",
    description: "每一位格鬥家 都從第一步開始",
    url: "/fighters",
    siteName: "HCF 新竹格鬥",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/assets/stories-20261108/p03.webp",
        width: 1600,
        height: 1143,
        alt: "HCF 選手的擂台攻防時刻",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/assets/favicon.png" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D0D0D",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body className="hcf-arena-page">{children}</body>
    </html>
  );
}
