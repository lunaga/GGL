import { Card, CardContent } from "@/components/ui/card"

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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Card key={index} className="hover-lift transition-smooth group">
              <CardContent className="p-6 flex items-center justify-center">
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={`Logo de ${brand.name}`}
                  className="max-h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </CardContent>
            </Card>
          ))}
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
