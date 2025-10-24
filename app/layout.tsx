import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";


export const metadata: Metadata = {
  title:
    "GGL Técnicas en Refrigeración | Instalación y Reparación de Aires, Heladeras y Cámaras Frigoríficas en General San Martín",
  description:
    "Servicio técnico especializado en General San Martín con más de 30 años de experiencia. Instalación y reparación de aires acondicionados, heladeras comerciales y familiares, cámaras frigoríficas de baja y media temperatura, lavarropas. Fabricación a medida de equipos de refrigeración comercial. Service autorizado de marcas: LG, Samsung, BGH, Electra, Whirlpool, Carrier. Atención inmediata por WhatsApp.",
  generator: "v0.app",
  keywords: [
    // Aires acondicionados
    "instalación aires acondicionados General San Martín",
    "reparación aires acondicionados General San Martín",
    "service aire acondicionado",
    "instalador aire split",
    "carga gas refrigerante",
    "mantenimiento aire acondicionado",
    "técnico aire acondicionado zona norte",
    "instalación aire split General San Martín",
    // Heladeras
    "reparación heladeras comerciales",
    "service heladeras General San Martín",
    "técnico heladeras",
    "reparación heladeras familiares",
    "arreglo heladeras",
    "heladeras no enfría",
    "cambio compresor heladera",
    "fabricación heladeras comerciales",
    "heladeras bajomesadas",
    "heladeras verticales a medida",
    // Refrigeración
    "refrigeración comercial",
    "refrigeración industrial",
    "técnico refrigeración General San Martín",
    "servicio técnico refrigeración",
    "equipos de refrigeración",
    "sistemas de refrigeración",
    // Cámaras frigoríficas
    "cámaras frigoríficas",
    "cámaras de frío",
    "instalación cámaras frigoríficas",
    "reparación cámaras de frío",
    "cámaras baja temperatura",
    "cámaras media temperatura",
    // Lavarropas
    "reparación lavarropas",
    "service lavarropas General San Martín",
    "técnico lavarropas",
    "arreglo lavarropas",
    // Marcas
    "service LG",
    "service Samsung",
    "service BGH",
    "service Electra",
    "aires LG Samsung BGH",
    "heladeras Whirlpool Gafa",
    // Ubicación
    "técnico refrigeración zona norte",
    "service General San Martín",
    "refrigeración Buenos Aires",
    // General
    "GGL refrigeración",
    "técnicas en refrigeración",
    "servicio técnico especializado",
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
    url: "https://gglrefrigeracion.com",
    siteName: "GGL Técnicas en Refrigeración",
    title: "GGL Técnicas en Refrigeración | Instalación y Reparación de Aires, Heladeras y Cámaras Frigoríficas",
    description:
      "Más de 30 años de experiencia en General San Martín. Instalación y reparación de aires acondicionados, heladeras comerciales, cámaras frigoríficas. Service autorizado de todas las marcas.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "GGL Técnicas en Refrigeración - Servicio Técnico Especializado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GGL Técnicas en Refrigeración | Service Especializado en General San Martín",
    description: "Más de 30 años de experiencia. Instalación y reparación de aires, heladeras y cámaras frigoríficas.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://gglrefrigeracion.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Íconos */}
        <link rel="icon" href="/logo1.svg" type="image/svg" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* ✅ Estilos globales cargados desde /public */}
        <link rel="stylesheet" href="/globals.css" />

        {/* SEO / Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "GGL Técnicas en Refrigeración",
              description:
                "Servicio técnico especializado con más de 30 años de experiencia en instalación y reparación de aires acondicionados, heladeras comerciales y familiares, cámaras frigoríficas de baja y media temperatura, lavarropas. Fabricación a medida de equipos de refrigeración comercial.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "General San Martín",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
              },
              telephone: ["+54 9 11 5806-6309", "+54 9 11 5504-8023"],
              url: "https://gglrefrigeracion.com",
              image: "/logo.png",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "150",
              },
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
                name: "Servicios de Refrigeración y Climatización",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Instalación de Aires Acondicionados",
                      description:
                        "Instalación profesional de equipos split y centrales",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Reparación de Aires Acondicionados",
                      description: "Service y reparación de todas las marcas",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Reparación de Heladeras Comerciales",
                      description:
                        "Service técnico de heladeras comerciales y familiares",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Instalación y Mantenimiento de Cámaras Frigoríficas",
                      description:
                        "Cámaras de baja y media temperatura para uso comercial e industrial",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fabricación de Heladeras Comerciales a Medida",
                      description:
                        "Diseño y fabricación de heladeras bajomesadas y verticales personalizadas",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Reparación de Lavarropas",
                      description:
                        "Service técnico de lavarropas automáticos y semiautomáticos",
                    },
                  },
                ],
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "08:00",
                  closes: "20:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider defaultTheme="light" storageKey="ggl-theme">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
