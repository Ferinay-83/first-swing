import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, Users, Shield, Award } from "lucide-react"
import Link from "next/link"

const conciergeServices = [
  {
    title: "Car Buying Buddy",
    description: "Expert guidance through the entire car buying process",
    features: [
      "Pre-purchase vehicle inspections",
      "Market value assessments",
      "Negotiation support and advice",
      "Vehicle history analysis",
      "Financing options guidance",
      "Documentation assistance",
    ],
  },
  {
    title: "Second Opinion Assessments",
    description: "Independent expert evaluation of repair quotes and diagnoses",
    features: [
      "Diagnostic verification",
      "Repair quote analysis",
      "Alternative solution recommendations",
      "Cost-benefit evaluations",
      "Priority repair identification",
      "Honest professional advice",
    ],
  },
  {
    title: "Automotive Project Consulting",
    description: "Professional guidance for restoration and modification projects",
    features: [
      "Project planning and budgeting",
      "Parts sourcing recommendations",
      "Timeline development",
      "Quality control oversight",
      "Progress monitoring",
      "Technical problem solving",
    ],
  },
  {
    title: "Transparent Pricing Consultation",
    description: "Avoid predatory pricing with honest cost assessments",
    features: [
      "Fair market pricing analysis",
      "Quote comparison services",
      "Hidden cost identification",
      "Value-for-money assessments",
      "Budget planning assistance",
      "Cost-saving recommendations",
    ],
  },
]

const testimonials = [
  {
    name: "Sarah M.",
    text: "The car buying consultation saved me thousands! Expert advice I could trust.",
    rating: 5,
    service: "Car Buying Buddy",
  },
  {
    name: "John D.",
    text: "Got a second opinion that revealed unnecessary repairs. Honest and professional.",
    rating: 5,
    service: "Second Opinion",
  },
  {
    name: "Mike R.",
    text: "Project consultation helped me restore my classic car within budget and on time.",
    rating: 5,
    service: "Project Consulting",
  },
]

export default function ConciergePage() {
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
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/concierge" className="text-blue-600 font-medium">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">Premium Service</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Auto Motor Repairer &<span className="text-orange-600"> Concierge Service</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Independent, qualified motor mechanic with 20+ years experience offering personalized, trustworthy
                service to deliver convenience, efficiency & transparency.
              </p>

              <div className="bg-orange-100 rounded-lg p-6 mb-8">
                <p className="text-orange-800 font-medium text-lg italic text-center">
                  "I offer high quality, tailored automotive repairs & concierge services to individuals tired of being
                  taken for a ride"
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/contact">Get Consultation</Link>
                </Button>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">084 525 0587</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/concierge-service.jpg"
                alt="Auto Motor Repairer & Concierge Service - Independent Qualified Mechanic"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Are You Experiencing These Issues?</h2>
            <p className="text-xl text-gray-600">We understand the frustrations of automotive ownership</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-700">Need a repair or service?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Unsure about diagnoses or feeling overwhelmed by technical jargon?</p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-700">Buying a new or pre-owned car?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Worried about making the wrong choice or paying too much?</p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-700">Starting an automotive project?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Need expert guidance to avoid costly mistakes and delays?</p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-700">Need a second opinion?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Want an independent assessment from a qualified expert?</p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-700">Tired of predatory pricing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Fed up with inflated quotes and unnecessary repairs?</p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-700">Unable to make informed decisions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Lacking the technical knowledge to evaluate options properly?</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Concierge Services</h2>
            <p className="text-xl text-gray-600">Comprehensive automotive consulting and advisory services</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {conciergeServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-700">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-orange-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.service}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Concierge Service?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Independent Expertise</h3>
              <p className="text-gray-600">20+ years of unbiased, professional automotive experience</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Personalized Service</h3>
              <p className="text-gray-600">Tailored advice based on your specific needs and budget</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Transparent Approach</h3>
              <p className="text-gray-600">Honest, straightforward advice with no hidden agendas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get Your Consultation</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Direct Line</h3>
                    <p className="text-lg font-semibold text-orange-600">084 525 0587</p>
                    <p className="text-gray-600">Call for immediate consultation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@firstswing.co.za</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Based in Northcliff, Gauteng</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Consultation Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 3:00 PM</p>
                      <p>Sunday: By appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Contact us today for your personalized automotive consultation. Whether you need a second opinion, car
                buying advice, or project guidance, we're here to help.
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                  asChild
                >
                  <Link href="/booking">Book Service Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
