import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Wrench, Zap, Shield, Car, Cog, Clock, Award, Users } from 'lucide-react'
import Link from "next/link"

const services = [
  {
    title: "Engine Repair & Service",
    description: "Complete engine diagnostics, repairs, and maintenance services for all vehicle types.",
    icon: Settings,
    features: ["Engine diagnostics", "Timing belt replacement", "Head gasket repairs", "Engine rebuilds"],
  },
  {
    title: "Brake System Service",
    description: "Comprehensive brake system maintenance, repairs, and safety inspections.",
    icon: Shield,
    features: ["Brake pad replacement", "Disc machining", "Brake fluid service", "ABS diagnostics"],
  },
  {
    title: "Electrical Diagnostics",
    description: "Advanced electrical system diagnostics and repairs using modern equipment.",
    icon: Zap,
    features: ["Computer diagnostics", "Alternator service", "Battery testing", "Wiring repairs"],
  },
  {
    title: "Transmission Service",
    description: "Manual and automatic transmission repairs, servicing, and maintenance.",
    icon: Cog,
    features: ["Transmission fluid service", "Clutch replacement", "Gearbox repairs", "CV joint service"],
  },
  {
    title: "General Maintenance",
    description: "Regular vehicle servicing and preventive maintenance to keep your car running smoothly.",
    icon: Wrench,
    features: ["Oil changes", "Filter replacements", "Tune-ups", "Safety inspections"],
  },
  {
    title: "Suspension & Steering",
    description: "Suspension system repairs and steering component maintenance for safe driving.",
    icon: Car,
    features: ["Shock absorber replacement", "Wheel alignment", "Steering repairs", "Ball joint service"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">First Swing</h1>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/concierge" className="text-gray-700 hover:text-blue-600 transition-colors">
                Concierge
              </Link>
              <Link href="/booking" className="text-gray-700 hover:text-blue-600 transition-colors">
                Book Service
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive automotive repair and maintenance services with over 35 years of experience in keeping
            vehicles running safely and efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <service.icon className="h-12 w-12 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Concierge Services CTA */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">Need Expert Automotive Advice?</h2>
            <p className="text-orange-700 mb-4">
              Our concierge service offers independent consulting for car buying, second opinions, and automotive projects.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700" asChild>
              <Link href="/concierge">Learn About Concierge Services</Link>
            </Button>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Service Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Diagnosis</h3>
              <p className="text-gray-600 text-sm">Comprehensive vehicle inspection and diagnostic testing</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Quote</h3>
              <p className="text-gray-600 text-sm">Detailed quote with transparent pricing</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Repair</h3>
              <p className="text-gray-600 text-sm">Expert repairs using quality parts and tools</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">Testing</h3>
              <p className="text-gray-600 text-sm">Quality testing and vehicle handover</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose First Swing?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">35+ Years Experience</h3>
              <p className="text-gray-600">Trusted automotive expertise since 1985</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">6-month warranty on all repairs</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Certified Mechanics</h3>
              <p className="text-gray-600">Qualified and experienced technicians</p>
            </div>
          </div>
        </div>

        {/* Emergency Services */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Emergency Breakdown Service</h2>
            <p className="text-red-700 mb-4">
              Vehicle broken down? We offer emergency diagnostic and repair services during business hours.
            </p>
            <Button className="bg-red-600 hover:bg-red-700" asChild>
              <Link href="/contact">Call for Emergency Service</Link>
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Service Your Vehicle?</h2>
          <p className="mb-6">Contact us today for a free quote or book your service appointment online</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/booking">Book Service</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
