"use client"

import { Sparkles, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function PromotionSection() {
    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(
        "Hola! Me interesa la promoción de limpieza de unidad interior por $95,000. Quiero más información.",
        )
        window.open(`https://wa.me/5491158066309?text=${message}`, "_blank")
    }

    const benefits = [
        "Limpieza profunda del filtro y evaporador",
        "Desinfección con productos especializados",
        "Mejora el rendimiento y eficiencia",
        "Elimina bacterias y malos olores",
        "Prolonga la vida útil del equipo",
    ]

    return (
        <section id="promocion" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary">PROMOCIÓN ESPECIAL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Limpieza de Unidad Interior</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Mantené tu aire acondicionado en óptimas condiciones
            </p>
            </div>

            <Card className="max-w-4xl mx-auto overflow-hidden border-2 border-primary/20">
            <div className="grid md:grid-cols-2 gap-0">
                {/* Imagen */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                    src="/promo.jpeg"
                    alt="Limpieza de aire acondicionado"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:hidden" />
                </div>

                {/* Contenido */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl md:text-6xl font-bold text-primary">$95.000</span>
                    </div>
                    <p className="text-muted-foreground">Precio especial por tiempo limitado</p>
                </div>

                <div className="space-y-3 mb-8">
                    {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="h-3 w-3 text-primary" />
                        </div>
                        </div>
                        <span className="text-sm md:text-base">{benefit}</span>
                    </div>
                    ))}
                </div>

                <Button onClick={handleWhatsAppClick} size="lg" className="w-full gap-2 text-lg">
                    <Sparkles className="h-5 w-5" />
                    Aprovechar Promoción
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                    *Válido para equipos split residenciales hasta 6000 frigorías
                </p>
                </div>
            </div>
            </Card>
        </div>
        </section>
    )
}
