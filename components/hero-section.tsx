import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Shield } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo1.svg"
              alt="GGL Técnicas en Refrigeración"
              width={120}
              height={120}
              className="h-32 w-auto"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            <span className="text-primary">GGL</span> Técnicas en <span className="text-secondary">Refrigeración</span>
          </h1>

          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Más de 30 años de experiencia garantizando el mejor servicio técnico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="hover-lift">
              <a
                href="https://wa.me/5491158066309?text=Hola!%20Quería%20solicitar%20un%20presupuesto%20para%20sus%20servicios%20de%20refrigeración.%20¿Podrían%20ayudarme?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <span>Solicitar Presupuesto</span>
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover-lift bg-transparent">
              <a href="tel:+5491158066309" className="flex items-center space-x-2">
                <span>Llamar Ahora</span>
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="hover-lift transition-smooth">
              <CardContent className="p-6 text-center">
                <Wrench className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Servicio Técnico</h3>
                <p className="text-sm text-muted-foreground">Reparación e instalación profesional</p>
              </CardContent>
            </Card>

            <Card className="hover-lift transition-smooth">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Garantía Total</h3>
                <p className="text-sm text-muted-foreground">Respaldamos todos nuestros trabajos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
