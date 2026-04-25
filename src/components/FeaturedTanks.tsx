import { motion } from 'framer-motion';
import { TankCard } from './TankCard';

const TANKS_DATA = [
  {
    id: 1,
    name: 'Tiger I',
    type: 'Heavy Tank',
    nation: '🇩🇪 Germany',
    year: 1942,
    description: 'One of the most feared tanks of WWII with legendary 88mm firepower.',
    image: 'https://images.unsplash.com/photo-1570303008042-e39dd90a6fb5?w=500&h=400&fit=crop',
    specs: { armor: 9, firepower: 10, mobility: 6 },
    tier: 'LEGENDARY' as const,
  },
  {
    id: 2,
    name: 'T-34',
    type: 'Medium Tank',
    nation: '🇷🇺 Soviet Union',
    year: 1940,
    description: 'Revolutionary sloped armor design that revolutionized tank warfare.',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=500&h=400&fit=crop',
    specs: { armor: 8, firepower: 8, mobility: 8 },
    tier: 'EPIC' as const,
  },
  {
    id: 3,
    name: 'M4 Sherman',
    type: 'Medium Tank',
    nation: '🇺🇸 USA',
    year: 1942,
    description: 'The reliable workhorse of the Allied forces deployed worldwide.',
    image: 'https://images.unsplash.com/photo-1552536007-e0a00f8a8c51?w=500&h=400&fit=crop',
    specs: { armor: 6, firepower: 7, mobility: 9 },
    tier: 'RARE' as const,
  },
  {
    id: 4,
    name: 'Panther',
    type: 'Medium Tank',
    nation: '🇩🇪 Germany',
    year: 1943,
    description: 'Perfect balance of firepower and armor with superior design.',
    image: 'https://images.unsplash.com/photo-1551524164-0caf9ffd8cda?w=500&h=400&fit=crop',
    specs: { armor: 8, firepower: 9, mobility: 7 },
    tier: 'EPIC' as const,
  },
  {
    id: 5,
    name: 'IS-7',
    type: 'Heavy Tank',
    nation: '🇷🇺 Soviet Union',
    year: 1945,
    description: 'The pinnacle of Soviet heavy tank engineering with exceptional firepower.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    specs: { armor: 10, firepower: 10, mobility: 5 },
    tier: 'LEGENDARY' as const,
  },
  {
    id: 6,
    name: 'Leopard 2',
    type: 'Main Battle Tank',
    nation: '🇩🇪 Germany',
    year: 1979,
    description: 'Cutting-edge modern design, still one of the most advanced tanks.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&h=400&fit=crop',
    specs: { armor: 9, firepower: 9, mobility: 9 },
    tier: 'LEGENDARY' as const,
  },
];

export const FeaturedTanks = () => {
  return (
    <section id="tanks" className="relative py-20 bg-gradient-to-b from-gaming-dark to-gaming-darker overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 right-0 w-96 h-96 bg-gaming-accent/10 rounded-full blur-3xl"
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
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-gaming-accent/50 bg-gaming-accent/10">
            <span className="text-gaming-accent font-gaming text-sm font-semibold">⭐ FEATURED COLLECTION</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black font-gaming text-white mb-4">
            Legendary <span className="text-transparent bg-clip-text bg-gradient-to-r from-gaming-accent to-gaming-accent-alt">Tanks</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose from our extensive collection of iconic tanks, each with unique abilities and playstyles.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TANKS_DATA.map((tank, index) => (
            <TankCard key={tank.id} tank={tank} index={index} />
          ))}
        </div>

        {/* Browse all button */}
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
            BROWSE ALL TANKS →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
