import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Blog() {
  const posts = [
    { id: 1, title: "The Connoisseur's Guide to Microgreens", slug: 'connoisseurs-guide-microgreens' },
    { id: 2, title: "Elevating Haute Cuisine with Microgreens", slug: 'elevating-haute-cuisine-microgreens' },
    { id: 3, title: "The Artistry and Science of Luxury Microgreen Cultivation", slug: 'artistry-science-luxury-microgreen-cultivation' },
  ]

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h1 
        className="text-5xl font-bold mb-12 text-center font-serif text-green-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sproutify Insights
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div 
            key={post.id} 
            className="bg-gray-900 p-8 rounded-lg shadow-xl border border-green-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-4 font-serif text-green-400">{post.title}</h2>
            <Link href={`/blog/${post.slug}`} className="text-white hover:text-green-400 transition-colors font-sans">
              Read More
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

