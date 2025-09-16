import Image from "next/image"
import Link from "next/link"
import { Snowflake, Phone, MessageCircle, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo1.svg"
                alt="GGL Técnicas en Refrigeración"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <h3 className="font-bold text-primary">GGL</h3>
                <p className="text-xs text-muted-foreground">Técnicas en Refrigeración</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Especialistas en refrigeración con más de 30 años de experiencia. Servicio técnico profesional y
              fabricación a medida.
            </p>
            <div className="flex items-center space-x-2">
              <Snowflake className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Calidad garantizada</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#servicios" className="hover:text-primary transition-colors">
                  Aires Acondicionados
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-primary transition-colors">
                  Heladeras Comerciales
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-primary transition-colors">
                  Cámaras Frigoríficas
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-primary transition-colors">
                  Lavarropas
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-primary transition-colors">
                  Fabricación a Medida
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-primary transition-colors">
                  Mantenimiento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <p>+54 9 11 5806-6309</p>
                  <p>+54 9 11 5504-8023</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                <a
                  href="https://wa.me/5491158066309?text=Hola!%20Me%20interesa%20obtener%20más%20información%20sobre%20sus%20servicios%20de%20refrigeración.%20¿Podrían%20ayudarme?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>General San Martín</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 GGL Técnicas en Refrigeración. Todos los derechos reservados.</p>
          <p className="mt-1">
            Sitio web creado por <span className="text-primary font-medium">LunagaDev</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
