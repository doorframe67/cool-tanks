import { motion } from 'framer-motion';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gaming-darker via-gaming-dark to-gaming-darker overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, 30, 0], x: [-30, 0, -30] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-gaming-accent/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [30, 0, 30], x: [30, 0, 30] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-gaming-blue/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl"
        >
          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-gaming-accent/50 bg-gaming-accent/10">
              <span className="text-gaming-accent font-gaming text-sm font-semibold">⚡ NEXT GENERATION GAMING</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black font-gaming text-white mb-6 leading-tight"
          >
            LEGENDARY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gaming-accent via-gaming-accent-alt to-gaming-accent">
              TANK WARFARE
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the ultimate tactical combat simulation. Master iconic tanks from around the world and dominate the battlefield in intense multiplayer battles.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 107, 53, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-gaming-accent to-gaming-accent-alt text-white font-bold rounded-lg hover:shadow-gaming-glow transition-all"
            >
              START PLAYING
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gaming-blue text-gaming-blue font-bold rounded-lg hover:bg-gaming-blue/10 transition-all"
            >
              WATCH TRAILER
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gaming-accent/20"
          >
            {[
              { number: '500K+', label: 'Players Online' },
              { number: '150+', label: 'Tanks Available' },
              { number: '200M+', label: 'Battles Played' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gaming-accent font-gaming mb-1">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gaming-accent rounded-full flex justify-center">
          <motion.div className="w-1 h-2 bg-gaming-accent rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};
