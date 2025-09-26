import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AirVent, Refrigerator, Snowflake, WashingMachine, Wrench, Settings } from "lucide-react"

const services = [
  {
    icon: AirVent,
    title: "Aires Acondicionados",
    description:
      "Instalación, reparación y mantenimiento de equipos de aire acondicionado residenciales y comerciales.",
    features: [
      "Instalación profesional",
      "Reparación de averías",
      "Mantenimiento preventivo (Limpieza y sanatización de unidades interiores)",
      "Carga de gas refrigerante",
      "Reparaciones de fuga de refrigerante",
      "Reparación de plaquetas electrónicas",
    ],
    image: "/modern-air-conditioning-unit-installation.jpg",
    whatsappMessage:
      "Hola!%20Quería%20consultar%20por%20instalación/reparación%20de%20aire%20acondicionado.%20¿Podrían%20brindarme%20información%20y%20presupuesto?",
  },
  {
    icon: Refrigerator,
    title: "Heladeras Familiares",
    description: "Servicio técnico especializado en heladeras familiares No Frost.",
    features: ["Cambbio de compresores", "Cambio de termostatos", "Reparación de fugas", "Cambio de plaquetas electrónicas", "Cambio de burletes", "Conversión de equipos electrónicos a electromecánicos"],
    image: "/commercial-refrigerator-repair-service.jpg",
    whatsappMessage:
      "Hola!%20Necesito%20servicio%20técnico%20para%20heladeras%20comerciales.%20¿Podrían%20ayudarme%20con%20información%20y%20presupuesto?",
  },
    {
    icon: Refrigerator,
    title: "Heladeras Comerciales",
    description: "Servicio técnico especializado en heladeras comerciales .",
    features: ["Cambio de compresores", "Cambio de termostatos", "Reparación de fugas", "Mantenimiento general", "Fabricación de heladeras a medida"],
    image: "/commercial-refrigerator-repair-service.jpg",
    whatsappMessage:
      "Hola!%20Necesito%20servicio%20técnico%20para%20heladeras%20comerciales.%20¿Podrían%20ayudarme%20con%20información%20y%20presupuesto?",
  },
  {
    icon: Snowflake,
    title: "Cámaras Frigoríficas",
    description: "Especialistas en cámaras de frío de baja y media temperatura para uso comercial e industrial.",
    features: ["Instalación completa", "Reparación de sistemas", "Control de temperatura", "Aislamiento térmico", "Cambio de compresores", "Control y reparación de tableros eléctricos", "Armado y desarmado de cámaras frigoríficas"],
    image: "/industrial-cold-storage-room-installation.jpg",
    whatsappMessage:
      "Hola!%20Me%20interesa%20información%20sobre%20cámaras%20frigoríficas%20y%20su%20mantenimiento.%20¿Podrían%20ayudarme?",
  },
  {
    icon: WashingMachine,
    title: "Lavarropas",
    description: "Reparación de lavarropas automáticos y semiautomáticos.",
    features: ["Cambio y reparación de motores", "Cambio de bombas de desagote, valvulas de carga de entradas", "Cambio de rodamientos y soportes de los mismos", "Cambio de fuellles", "Reparación electrónica", "Instalación de lavarropas"],
    image: "/washing-machine-repair-service.jpg",
    whatsappMessage:
      "Hola!%20Tengo%20un%20problema%20con%20mi%20lavarropas%20y%20necesito%20servicio%20técnico.%20¿Podrían%20ayudarme?",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Ofrecemos soluciones integrales en refrigeración con la más alta calidad y profesionalismo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift transition-smooth group">
              <div className="aspect-video relative overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <service.icon className="h-24 w-24 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a
                    href={`https://wa.me/5491158066309?text=${service.whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar Servicio
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
