import { motion } from 'framer-motion';

interface Tank {
  id: number;
  name: string;
  type: string;
  nation: string;
  year: number;
  description: string;
  image: string;
  specs: {
    armor: number;
    firepower: number;
    mobility: number;
  };
  tier: 'LEGENDARY' | 'EPIC' | 'RARE' | 'UNCOMMON';
}

interface TankCardProps {
  tank: Tank;
  index: number;
}

export const TankCard = ({ tank, index }: TankCardProps) => {
  const tierColors = {
    LEGENDARY: 'from-yellow-600 to-yellow-400',
    EPIC: 'from-purple-600 to-pink-400',
    RARE: 'from-blue-600 to-cyan-400',
    UNCOMMON: 'from-green-600 to-emerald-400',
  };

  const tierBorder = {
    LEGENDARY: 'border-yellow-500',
    EPIC: 'border-purple-500',
    RARE: 'border-blue-500',
    UNCOMMON: 'border-green-500',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`group relative overflow-hidden rounded-lg border-2 ${tierBorder[tank.tier]} bg-gaming-dark/50 backdrop-blur-sm hover:shadow-gaming-glow transition-all cursor-pointer`}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gaming-accent/20 to-gaming-blue/20">
        <motion.img
          src={tank.image}
          alt={tank.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark to-transparent" />

        {/* Tier Badge */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r ${tierColors[tank.tier]} font-bold text-sm text-white`}>
          {tank.tier}
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gaming-accent/20 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-16 h-16 border-2 border-gaming-accent rounded-full flex items-center justify-center"
          >
            <span className="text-2xl">▶</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name and Type */}
        <div className="mb-3">
          <h3 className="text-xl font-bold font-gaming text-white mb-1">{tank.name}</h3>
          <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
            <span>{tank.type}</span>
            <span>{tank.nation} • {tank.year}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">{tank.description}</p>

        {/* Stats Bars */}
        <div className="space-y-3 mb-4">
          {[
            { label: 'Armor', value: tank.specs.armor },
            { label: 'Firepower', value: tank.specs.firepower },
            { label: 'Mobility', value: tank.specs.mobility },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">{stat.label}</span>
                <span className="text-gaming-accent font-bold">{stat.value}/10</span>
              </div>
              <div className="h-1.5 bg-gaming-dark rounded-full overflow-hidden border border-gaming-accent/20">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.value * 10}%` }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="h-full bg-gradient-to-r from-gaming-accent to-gaming-accent-alt"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ boxShadow: '0 0 20px rgba(255, 107, 53, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-2 border border-gaming-accent text-gaming-accent rounded-lg font-semibold text-sm hover:bg-gaming-accent/10 transition-all"
        >
          VIEW DETAILS
        </motion.button>
      </div>
    </motion.div>
  );
};
