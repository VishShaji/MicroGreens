'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-90' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold font-serif text-green-400">Sproutify</Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/#about" className="text-white hover:text-green-400 transition-colors">About</Link></li>
            <li><Link href="/#benefits" className="text-white hover:text-green-400 transition-colors">Benefits</Link></li>
            <li><Link href="/#gallery" className="text-white hover:text-green-400 transition-colors">Gallery</Link></li>
            <li><Link href="/blog" className="text-white hover:text-green-400 transition-colors">Blog</Link></li>
            <li><Link href="/#contact" className="text-white hover:text-green-400 transition-colors">Contact</Link></li>
          </ul>
        </nav>
        <Button variant="outline" className="hidden md:block border-green-400 text-green-400 hover:bg-green-400 hover:text-black">Order Now</Button>
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="text-white" />
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black bg-opacity-90">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li><Link href="/#about" className="text-white" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            <li><Link href="/#benefits" className="text-white" onClick={() => setIsMobileMenuOpen(false)}>Benefits</Link></li>
            <li><Link href="/#gallery" className="text-white" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link></li>
            <li><Link href="/blog" className="text-white" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/#contact" className="text-white" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
            <li><Button variant="outline" onClick={() => setIsMobileMenuOpen(false)} className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">Order Now</Button></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

