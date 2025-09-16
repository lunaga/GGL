"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppFloat() {
  const whatsappMessage = encodeURIComponent(
    "Hola! Me interesa obtener más información sobre sus servicios de refrigeración. ¿Podrían ayudarme?",
  )

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
        asChild
      >
        <a
          href={`https://wa.me/5491158066309?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </div>
  )
}
