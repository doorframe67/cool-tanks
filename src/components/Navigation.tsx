import { useState } from 'react';
import { motion } from 'framer-motion';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-gradient-to-b from-gaming-darker to-gaming-dark/80 backdrop-blur-md border-b border-gaming-accent/20 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="text-2xl font-bold font-gaming text-transparent bg-clip-text bg-gradient-to-r from-gaming-accent to-gaming-accent-alt">
            ⚔️ COOL TANKS
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Tanks', 'Gallery', 'Rankings', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: '#ff6b35', y: -2 }}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-gaming-accent cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-gaming-accent to-gaming-accent-alt text-white rounded-lg font-semibold hover:shadow-gaming-glow transition-all"
          >
            Play Now
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gaming-accent"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gaming-darker border-t border-gaming-accent/20"
        >
          <div className="px-6 py-4 space-y-3">
            {['Home', 'Tanks', 'Gallery', 'Rankings', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-gaming-accent transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="w-full px-4 py-2 bg-gradient-to-r from-gaming-accent to-gaming-accent-alt text-white rounded-lg font-semibold">
              Play Now
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
