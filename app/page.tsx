'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./components/Map'), { ssr: false })

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Luxury+Microgreens"
          alt="Luxury Microgreens"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 font-serif text-green-400">Sproutify</h1>
            <p className="text-2xl mb-8 font-sans">Elevate Your Culinary Experience</p>
            <Button size="lg" className="text-lg px-8 py-6 bg-green-400 text-black hover:bg-green-500">Discover Our Greens</Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-serif text-green-400">
            Our Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 font-sans text-gray-300">
                At Sproutify, we're more than just microgreen cultivators; we're artisans of nature's most potent flavors and nutrients. Our journey began with a vision to bring the purest, most vibrant greens to discerning palates and health enthusiasts alike.
              </p>
              <p className="text-lg font-sans text-gray-300">
                Each tiny leaf we nurture embodies our commitment to excellence, sustainability, and the art of fine dining. Join us in rediscovering the intense flavors and vital energy that only premium microgreens can offer.
              </p>
            </div>
            <div className="relative h-96 md:h-full">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Luxury+Microgreens+Farm"
                alt="Luxury Microgreens Farm"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-serif text-green-400">
            The Sproutify Advantage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Nutrient Powerhouse", description: "Up to 40 times more nutrients than mature plants, packed into every delicate leaf." },
              { title: "Flavor Intensity", description: "Experience a burst of flavors that elevate your culinary creations to new heights." },
              { title: "Sustainable Luxury", description: "Indulge in eco-friendly, locally grown greens that are as kind to the planet as they are to your palate." }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gray-900 p-8 rounded-lg shadow-xl border border-green-400"
              >
                <h3 className="text-2xl font-bold mb-4 font-serif text-green-400">{benefit.title}</h3>
                <p className="text-lg font-sans text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-serif text-green-400">
            Our Luxury Collection
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div 
                key={i} 
                className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=Luxury+Microgreen+${i}`}
                  alt={`Luxury Microgreen Variety ${i}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-serif text-green-400">
            Sproutify Voices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Chef Maria", role: "Michelin-starred Chef", quote: "Sproutify's microgreens are a game-changer in my kitchen. The intensity of flavors and the visual appeal they bring to my dishes is unparalleled." },
              { name: "Dr. James", role: "Nutritionist", quote: "I recommend Sproutify to all my clients. The nutrient density of these microgreens is impressive, offering a powerful health boost in every bite." },
              { name: "Sarah", role: "Home Cooking Enthusiast", quote: "Since discovering Sproutify, my home-cooked meals have reached new heights. These microgreens add a gourmet touch to even the simplest dishes." }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-900 p-8 rounded-lg shadow-xl border border-green-400"
              >
                <p className="mb-4 text-lg italic font-sans text-gray-300">"{testimonial.quote}"</p>
                <p className="font-bold font-serif text-green-400">{testimonial.name}</p>
                <p className="text-sm text-gray-400 font-sans">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-serif text-green-400">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-green-500 focus:ring-green-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-green-500 focus:ring-green-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-green-500 focus:ring-green-500"></textarea>
              </div>
              <Button type="submit" className="w-full bg-green-400 text-black hover:bg-green-500">Send Message</Button>
            </form>
            <div>
              <h3 className="text-2xl font-bold mb-6 font-serif text-green-400">Visit Our Farm</h3>
              <div className="h-96 mb-6">
                <Map />
              </div>
              <p className="text-lg font-sans text-gray-300">Experience the Sproutify difference in person. Visit our state-of-the-art microgreens farm and see how we cultivate nature's finest greens.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

