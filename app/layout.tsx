import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "GGL Técnicas en Refrigeración | Instalación y Reparación de Aires Acondicionados | General San Martín",
  description:
    "Servicio técnico especializado en General San Martín. Instalación y reparación de aires acondicionados, heladeras comerciales, cámaras frigoríficas y lavarropas. Más de 30 años de experiencia. Fabricación a medida de equipos de refrigeración. Marcas: LG, Samsung, BGH, Electra.",
  generator: "v0.app",
  keywords: [
    "instalación aires acondicionados General San Martín",
    "reparación aires acondicionados",
    "servicio técnico refrigeración",
    "técnico heladeras comerciales",
    "reparación heladeras",
    "cámaras frigoríficas",
    "instalación aire acondicionado",
    "service aire acondicionado",
    "técnico lavarropas",
    "refrigeración comercial",
    "fabricación heladeras comerciales",
    "técnico refrigeración General San Martín",
    "aires LG Samsung BGH",
    "reparación electrodomésticos",
    "instalador aire split",
    "service heladeras",
    "cámaras de frío",
    "equipos de refrigeración",
    "GGL refrigeración",
  ].join(", "),
  authors: [{ name: "GGL Técnicas en Refrigeración" }],
  creator: "LunagaDev",
  publisher: "GGL Técnicas en Refrigeración",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://ggl-refrigeracion.vercel.app",
    siteName: "GGL Técnicas en Refrigeración",
    title: "GGL Técnicas en Refrigeración | Instalación y Reparación de Aires Acondicionados",
    description:
      "Servicio técnico especializado en General San Martín. Instalación y reparación de aires acondicionados, heladeras comerciales y cámaras frigoríficas. Más de 30 años de experiencia.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "GGL Técnicas en Refrigeración - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GGL Técnicas en Refrigeración | Instalación y Reparación de Aires Acondicionados",
    description:
      "Servicio técnico especializado en General San Martín. Más de 30 años de experiencia en refrigeración.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://ggl-refrigeracion.vercel.app",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "GGL Técnicas en Refrigeración",
              description:
                "Servicio técnico especializado en instalación y reparación de aires acondicionados, heladeras comerciales, cámaras frigoríficas y lavarropas",
              address: {
                "@type": "PostalAddress",
                addressLocality: "General San Martín",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
              },
              telephone: ["+54 9 11 5806-6309", "+54 9 11 5504-8023"],
              url: "https://ggl-refrigeracion.vercel.app",
              image: "/logo.png",
              priceRange: "$$",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -34.5755,
                  longitude: -58.5374,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Refrigeración",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Instalación de Aires Acondicionados",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Reparación de Heladeras Comerciales",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mantenimiento de Cámaras Frigoríficas",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
