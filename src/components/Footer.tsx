import { motion } from 'framer-motion';

export const Footer = () => {
  const footerLinks = {
    Game: [
      { label: 'Download', href: '#' },
      { label: 'Patch Notes', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Community', href: '#' },
    ],
    Tanks: [
      { label: 'Tank List', href: '#' },
      { label: 'Tech Trees', href: '#' },
      { label: 'Balance Changes', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: '🎥', label: 'YouTube', href: '#' },
    { icon: '🐦', label: 'Twitter', href: '#' },
    { icon: '📘', label: 'Facebook', href: '#' },
    { icon: '📷', label: 'Instagram', href: '#' },
  ];

  return (
    <footer className="bg-gaming-darker border-t border-gaming-accent/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="text-2xl font-bold font-gaming text-transparent bg-clip-text bg-gradient-to-r from-gaming-accent to-gaming-accent-alt mb-3">
              ⚔️ COOL TANKS
            </div>
            <p className="text-gray-400 mb-4">
              Experience the ultimate tank warfare simulation with cutting-edge graphics and intense multiplayer battles.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-10 h-10 rounded-full border border-gaming-accent/30 flex items-center justify-center text-gaming-accent hover:bg-gaming-accent/10 transition-all"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-white mb-4 font-gaming">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-gaming-accent transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gaming-accent/20 mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p>&copy; 2026 Cool Tanks. All rights reserved. Built for tank enthusiasts worldwide.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gaming-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gaming-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gaming-accent transition-colors">Contact Us</a>
          </div>
        </motion.div>
      </div>

      {/* Animated bottom border */}
      <motion.div
        animate={{ x: [-1000, 1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="h-px bg-gradient-to-r from-transparent via-gaming-accent to-transparent"
      />
    </footer>
  );
};
