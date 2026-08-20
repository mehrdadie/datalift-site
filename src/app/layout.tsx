import type { Metadata, Viewport } from "next"
import { Archivo, Instrument_Sans, JetBrains_Mono } from "next/font/google"
import { profile } from "@/content/profile"
import "./globals.css"

/** Display face carries a width axis — headings run slightly expanded. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
})

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

const title = `${profile.name} | Data, Automation & Growth Systems Consultant`
const description =
  "Independent data, automation and growth systems consultant helping businesses connect CRM, marketing, sales and operational data into reliable reporting and automated workflows."

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title,
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.url }],
  creator: profile.name,
  keywords: [
    "data consultant",
    "automation consultant",
    "revenue operations",
    "marketing analytics",
    "CRM architecture",
    "business intelligence",
    "revenue attribution",
    "system integration",
    "n8n",
    "BigQuery",
    "Power BI",
    "Salesforce",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: profile.url,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
}

export const viewport: Viewport = {
  themeColor: "#0F1518",
  colorScheme: "dark",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
