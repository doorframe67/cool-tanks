import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface StatItem {
  label: string;
  value: string;
  icon: string;
  color: string;
}

export const Stats = () => {
  const [counts, setCounts] = useState({
    players: 0,
    tanks: 0,
    battles: 0,
    nations: 0,
  });

  useEffect(() => {
    const targets = { players: 500000, tanks: 150, battles: 200000000, nations: 30 };
    const duration = 2000;
    const step = 50;

    const intervals = Object.keys(targets).map((key) => {
      let current = 0;
      const target = targets[key as keyof typeof targets];
      const increment = target / (duration / step);

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, step);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const stats: StatItem[] = [
    { label: 'Active Players', value: counts.players.toLocaleString(), icon: '👥', color: 'from-gaming-accent' },
    { label: 'Tanks Available', value: counts.tanks.toString(), icon: '🪖', color: 'from-gaming-blue' },
    { label: 'Battles Fought', value: `${(counts.battles / 1000000).toFixed(0)}M`, icon: '⚔️', color: 'from-gaming-purple' },
    { label: 'Nations Represented', value: counts.nations.toString(), icon: '🌍', color: 'from-gaming-accent-alt' },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-gaming-darker via-gaming-dark to-gaming-darker overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gaming-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative p-8 rounded-lg border border-gaming-accent/30 bg-gradient-to-br from-gaming-dark/50 to-gaming-darker/50 backdrop-blur-sm overflow-hidden group`}
            >
              {/* Hover glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} to-transparent opacity-20 group-hover:opacity-30 transition-opacity`}
              />

              <div className="relative z-10">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className={`text-4xl font-black font-gaming text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>

              {/* Border animation */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: index * 0.1 + 0.1, duration: 0.6 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gaming-accent to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
