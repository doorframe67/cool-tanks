import { motion } from 'framer-motion';
import { useState } from 'react';

const GALLERY_ITEMS = [
  'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop',
  'https://openclipart.org/image/800px/188645',
  'https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1552536007-e0a00f8a8c51?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1551524164-0caf9ffd8cda?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
];

export const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-20 bg-gaming-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gaming-blue/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-gaming-blue/50 bg-gaming-blue/10">
            <span className="text-gaming-blue font-gaming text-sm font-semibold">📸 GALLERY</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black font-gaming text-white mb-4">
            Epic <span className="text-transparent bg-clip-text bg-gradient-to-r from-gaming-blue to-gaming-purple">Gameplay</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Witness intense battles and stunning visuals from our global community
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <motion.img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/80 via-transparent to-transparent" />

              {/* Hover Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gaming-accent/20 backdrop-blur-sm flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center bg-gaming-accent/20"
                >
                  <span className="text-2xl">🔍</span>
                </motion.div>
              </motion.div>

              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gaming-accent/80 rounded-full flex items-center justify-center font-bold text-white">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gaming-blue text-gaming-blue font-bold rounded-lg hover:bg-gaming-blue/10 transition-all"
          >
            VIEW FULL GALLERY →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
