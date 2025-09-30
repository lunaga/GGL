"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

const brands = [
  { name: "LG", logo: "/lg-logo.jpg" },
  { name: "Samsung", logo: "/samsung-logo.png" },
  { name: "Electra", logo: "/electra-logo.jpg" },
  { name: "BGH", logo: "/bgh-logo.jpg" },
  { name: "Whirlpool", logo: "/whirlpool-logo.jpg" },
  { name: "Gafa", logo: "/gafa-logo.jpg" },
  { name: "Carrier", logo: "/carrier-logo.jpg" },
  { name: "Midea", logo: "/midea-logo.jpg" },
]

export function BrandsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovered])

  const getVisibleBrands = () => {
    const visible = []
    for (let i = 0; i < 4; i++) {
      visible.push(brands[(currentIndex + i) % brands.length])
    }
    return visible
  }

  return (
    <section id="marcas" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Marcas con las que Trabajamos</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Somos especialistas en las principales marcas del mercado, garantizando repuestos originales y servicio
            autorizado
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-6 transition-transform duration-700 ease-in-out">
            {getVisibleBrands().map((brand, index) => (
              <Card
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-[calc(25%-18px)] hover-lift transition-smooth group"
              >
                <CardContent className="p-6 flex items-center justify-center h-24">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={`Logo de ${brand.name}`}
                    className="max-h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Indicadores de navegación */}
          <div className="flex justify-center gap-2 mt-6">
            {brands.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
                aria-label={`Ir a marca ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            ¿No encuentras tu marca? Contáctanos, trabajamos con muchas más marcas y modelos.
          </p>
        </div>
      </div>
    </section>
  )
}
