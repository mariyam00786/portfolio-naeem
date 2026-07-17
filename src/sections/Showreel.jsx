import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="showreel" className="py-[100px] px-6 md:px-12 max-w-[1400px] mx-auto">
      <FadeIn delay={0.1}>
        <div className="text-center mb-14">
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-wide mb-2 text-textPrimary">WATCH SHOWREEL</h2>
          <p className="text-[0.95rem] text-textSecondary font-normal">Selected frames and shots in under a minute.</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="max-w-[1000px] mx-auto">
          <div 
            className="relative aspect-video rounded-[10px] overflow-hidden border border-borderDark bg-[#0a0a0a] cursor-pointer group transition-colors hover:border-borderHover"
            onClick={() => setIsPlaying(true)}
          >
            <img 
              src="/assets/showreel_thumb.jpg" 
              alt="Showreel thumbnail" 
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.01]"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1000&auto=format&fit=crop' }}
            />
            
            {/* Glass Circular Play Button matching niyasabu */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 border-2 border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/50 group-hover:scale-105">
              {/* CSS Triangle Play Icon */}
              <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white/90 ml-1"></div>
            </div>
          </div>
        </div>
      </FadeIn>

      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 md:p-12 backdrop-blur-md"
          >
            <button 
              className="absolute top-6 right-6 text-textSecondary hover:text-white transition-colors"
              onClick={() => setIsPlaying(false)}
            >
              <X size={32} strokeWidth={1.5} />
            </button>
            <div className="w-full max-w-5xl aspect-video bg-black relative rounded-lg overflow-hidden shadow-2xl">
              <video 
                src="/assets/showreel.mp4" 
                className="w-full h-full"
                controls
                autoPlay
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
