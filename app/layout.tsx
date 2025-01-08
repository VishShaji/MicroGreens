import './globals.css'
import { Playfair_Display, Lato } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-lato' })

export const metadata = {
  title: 'Sproutify - Luxury Microgreens for Discerning Palates',
  description: 'Experience the epitome of freshness with Sproutify. Our premium, locally cultivated microgreens are packed with intense flavors and vital nutrients for the discerning palate.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans bg-black text-white">
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

