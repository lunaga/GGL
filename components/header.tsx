"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMenuOpen(false) // Cerrar menú móvil después de navegar
  }

  const whatsappMessages = {
    general: encodeURIComponent(
      "Hola! Me interesa obtener más información sobre sus servicios de refrigeración. ¿Podrían ayudarme?",
    ),
    aire: encodeURIComponent(
      "Hola! Quería consultar por instalación/reparación de aire acondicionado. ¿Podrían brindarme información?",
    ),
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo1.svg"
                alt="GGL Técnicas en Refrigeración"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-primary">GGL</h1>
                <p className="text-xs text-muted-foreground">Técnicas en Refrigeración</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("productos")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection("marcas")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Marcas
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Contacto
            </button>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+5491158066309" className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>Llamar</span>
              </a>
            </Button>
            <Button size="sm" asChild>
              <a
                href={`https://wa.me/5491158066309?text=${whatsappMessages.general}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <button
                onClick={() => scrollToSection("servicios")}
                className="block w-full text-left px-3 py-2 text-base font-medium hover:text-primary transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("productos")}
                className="block w-full text-left px-3 py-2 text-base font-medium hover:text-primary transition-colors"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection("marcas")}
                className="block w-full text-left px-3 py-2 text-base font-medium hover:text-primary transition-colors"
              >
                Marcas
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block w-full text-left px-3 py-2 text-base font-medium hover:text-primary transition-colors"
              >
                Contacto
              </button>
              <div className="flex space-x-2 px-3 py-2">
                <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                  <a href="tel:+5491158066309" className="flex items-center justify-center space-x-1">
                    <Phone className="h-4 w-4" />
                    <span>Llamar</span>
                  </a>
                </Button>
                <Button size="sm" asChild className="flex-1">
                  <a
                    href={`https://wa.me/5491158066309?text=${whatsappMessages.general}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
