import { motion } from 'framer-motion'
import { creatorProfile } from './data/creatorProfile'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Particles Layer (später Three.js) */}
      <div className="absolute inset-0 bg-[radial-gradient(#C026D3_0.8px,transparent_1px)] [background-size:30px_30px] opacity-20" />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-8xl md:text-[10rem] font-black tracking-tighter neon-text mb-6"
        >
          {creatorProfile.name.toUpperCase()}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-3xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-8"
        >
          {creatorProfile.tagline}
        </motion.p>

        <div className="glass rounded-3xl px-10 py-6 inline-block">
          <p className="text-xl text-cyan-400 tracking-[4px] font-mono">
            LOADING THE FUTURE...
          </p>
        </div>
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.03)_50%)] bg-[length:100%_4px]" />
    </div>
  )
}

export default App
