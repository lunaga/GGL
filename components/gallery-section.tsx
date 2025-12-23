"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
    {
        src: "/aire 6000.jpeg",
        alt: "Instalación de aire acondicionado ATMA en interior",
    },
    {
        src: "/vacio.jpeg",
        alt: "Proceso de vacío en instalación de aire acondicionado",
    },
    {
        src: "/aires exteriores.jpeg",
        alt: "Instalación de unidades exteriores Philco",
    },
    {
        src: "/exterior.jpeg",
        alt: "Instalación de aire acondicionado en edificio",
    },
    {
        src: "/reparacion aire.jpeg",
        alt: "reparaciobn de aire acondicionado",
    },
    {
        src: "/cambio de capacitor.jpeg",
        alt: "Cambio de capacitor en unidad exterior",
    },
    {
        src: "/aire hyundai.jpeg",
        alt: "Instalación de aire acondicionado Hyundai",
    },
    {
        src: "/aire lg.jpeg",
        alt: "Instalación de unidad exterior LG",
    },
    {
        src: "/reparacion.jpeg",
        alt: "Reparación de componentes internos de aire acondicionado",
    },
    {
        src: "/motor camara.jpeg",
        alt: "Mantenimiento de motor de cámara frigorífica",
    },
    {
        src: "/heladera familiar 2.jpeg",
        alt: "Cambio de compresor de heladera familiar",
    },
        {
        src: "/heladera familiar.jpeg",
        alt: "Proceso de vacio de sistema de heladera familiar",
    },
    {
        src: "/camara 1.jpeg",
        alt: "Mantenimiento de camara de frio",
    },
    {
        src: "/camara 2.jpeg",
        alt: "Cambio de compresor de camara de frio",
    },
    {
        src: "/camara 3.jpeg",
        alt: "Reparacion de camara tipo mochila",
    },
    {
        src: "/perdida evaporador.jpeg",
        alt: "Reparacion de perdidas en evaporador",
    },
        {
        src: "/compresor.jpeg",
        alt: "Cambio de compresor en heladera vertical",
    },
    ]

    export function GallerySection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1))
        setIsAutoPlaying(false)
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
        setIsAutoPlaying(false)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
    }

    return (
        <section id="galeria" className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Galería de Trabajos Realizados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Descubrí la calidad de nuestro trabajo en cada instalación y reparación
            </p>
            </div>

            <div
            className="relative group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            >
            <div className="relative overflow-hidden rounded-lg bg-black/5 dark:bg-white/5">
                <div className="aspect-video md:aspect-[21/9] relative">
                <div
                    className="flex transition-transform duration-700 ease-out h-full w-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {galleryImages.map((image, index) => (
                    <div
                        key={index}
                        className="min-w-full h-full flex-shrink-0 relative flex items-center justify-center"
                    >
                        <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none z-10">
                        <p className="text-sm md:text-lg font-semibold drop-shadow-lg text-balance">{image.alt}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>

            {/* Botones de navegación */}
            <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-10 w-10 md:h-12 md:w-12"
                aria-label="Imagen anterior"
            >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
            <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-10 w-10 md:h-12 md:w-12"
                aria-label="Siguiente imagen"
            >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </Button>

            {/* Indicadores de puntos */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {galleryImages.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                />
                ))}
            </div>
            </div>

            <div className="mt-6 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 md:gap-3">
            {galleryImages.map((image, index) => (
                <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-md bg-black/5 dark:bg-white/5 transition-all duration-300 ${
                    index === currentIndex
                    ? "ring-2 ring-primary scale-105"
                    : "hover:scale-105 opacity-70 hover:opacity-100"
                }`}
                >
                <div className="aspect-square flex items-center justify-center p-1">
                    <img
                    src={image.src || "/placeholder.svg"}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover rounded-sm"
                    />
                </div>
                </button>
            ))}
            </div>
        </div>
        </section>
    )
}
