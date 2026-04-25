# Cool Tanks - Gaming Edition

A modern, gaming-themed website for an epic tank warfare game, inspired by War Thunder and World of Tanks. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🎮 Features

- **Modern Gaming UI**: Sleek dark theme with vibrant orange/blue accents
- **Responsive Design**: Fully responsive layout for all devices
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Interactive Components**: Hover effects, smooth scrolling, and dynamic content
- **Featured Tanks**: 6 legendary tanks with detailed specs and tier system
- **Image Gallery**: Beautiful tank photography showcase
- **Live Stats**: Animated counters for game statistics
- **Mobile Menu**: Responsive navigation for all screen sizes

## 🚀 Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Axios** - HTTP client (for future API integration)

## 📋 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder:
```bash
cd cool-tanks
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Top navbar with responsive menu
│   ├── Hero.tsx            # Hero section with CTA
│   ├── FeaturedTanks.tsx   # Tank grid showcase
│   ├── TankCard.tsx        # Individual tank card component
│   ├── Gallery.tsx         # Image gallery section
│   ├── Stats.tsx           # Animated statistics
│   ├── Footer.tsx          # Footer with links
│   └── index.ts            # Component exports
├── App.tsx                 # Main app component
├── main.tsx                # React entry point
└── index.css               # Global styles and animations
```

## 🎨 Color Scheme

- **Primary Dark**: `#0a0e27` (Gaming Dark)
- **Secondary Dark**: `#05070f` (Gaming Darker)
- **Accent Orange**: `#ff6b35` (Gaming Accent)
- **Accent Gold**: `#f7931e` (Gaming Accent Alt)
- **Accent Cyan**: `#00d9ff` (Gaming Blue)
- **Accent Purple**: `#7c3aed` (Gaming Purple)

## 🚀 Deployment

To build for production:
```bash
npm run build
```

The optimized build will be in the `dist/` folder and ready to deploy.

## 🎯 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Tank customization system
- [ ] Battle leaderboards
- [ ] Clan/Team system
- [ ] In-game economy
- [ ] Real-time multiplayer features

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or issues.

---

**Built with ⚔️ for tank enthusiasts worldwide.**
