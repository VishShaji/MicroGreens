import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Fresh Microgreens</h3>
            <p>Providing fresh, nutritious microgreens to health-conscious food lovers.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/#benefits">Benefits</Link></li>
              <li><Link href="/#gallery">Gallery</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* Placeholder for social media icons */}
              <a href="#" className="text-white hover:text-green-300">Facebook</a>
              <a href="#" className="text-white hover:text-green-300">Instagram</a>
              <a href="#" className="text-white hover:text-green-300">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Fresh Microgreens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

