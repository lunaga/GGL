"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle, MapPin, Mail, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hola! Me llamo ${formData.name}. 
Servicio: ${formData.service}
Teléfono: ${formData.phone}
Email: ${formData.email}
Mensaje: ${formData.message}`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/5491158066309?text=${encodedMessage}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const getWhatsAppLink = (service: string) => {
    const messages = {
      aires:
        "Hola! Quería consultar por instalación/reparación de aire acondicionado. ¿Podrían brindarme información y presupuesto?",
      heladeras: "Hola! Necesito servicio técnico para heladeras comerciales. ¿Podrían ayudarme?",
      camaras: "Hola! Me interesa información sobre cámaras frigoríficas y su mantenimiento.",
      lavarropas: "Hola! Tengo un problema con mi lavarropas y necesito servicio técnico.",
      fabricacion: "Hola! Me interesa la fabricación a medida de equipos de refrigeración comercial.",
      general: "Hola! Me interesa obtener más información sobre sus servicios de refrigeración. ¿Podrían ayudarme?",
    }

    const message = messages[service as keyof typeof messages] || messages.general
    return `https://wa.me/5491158066309?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Contactanos</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Estamos disponibles para atender tus consultas y emergencias
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover-lift transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Teléfonos</h3>
                    <div className="space-y-1">
                      <a
                        href="tel:+5491158066309"
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        +54 9 11 5806-6309
                      </a>
                      <a
                        href="tel:+5491155048023"
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        +54 9 11 5504-8023
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground mb-3">Respuesta inmediata</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={getWhatsAppLink("aires")} target="_blank" rel="noopener noreferrer">
                          Aires
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={getWhatsAppLink("heladeras")} target="_blank" rel="noopener noreferrer">
                          Heladeras
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={getWhatsAppLink("camaras")} target="_blank" rel="noopener noreferrer">
                          Cámaras
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={getWhatsAppLink("general")} target="_blank" rel="noopener noreferrer">
                          Consulta
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Zona de Cobertura</h3>
                    <p className="text-muted-foreground font-medium">General San Martín</p>
                    <p className="text-sm text-muted-foreground">Consultar otras zonas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="hover-lift transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Solicitar Presupuesto</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Teléfono *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Servicio Requerido *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Seleccionar servicio</option>
                    <option value="Aires Acondicionados">Aires Acondicionados</option>
                    <option value="Heladeras Comerciales">Heladeras Comerciales</option>
                    <option value="Cámaras Frigoríficas">Cámaras Frigoríficas</option>
                    <option value="Lavarropas">Lavarropas</option>
                    <option value="Fabricación a Medida">Fabricación a Medida</option>
                    <option value="Mantenimiento">Mantenimiento</option>
                    <option value="Emergencia">Emergencia</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe tu consulta o problema..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
