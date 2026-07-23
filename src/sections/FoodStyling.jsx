import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function FoodStyling() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/assets/food_1.jpg', alt: 'Food Styling 1', caption: 'STYLING' },
    { src: '/assets/food_2.jpg', alt: 'Food Styling 2', caption: 'COMPOSITION' },
    { src: '/assets/food_3.jpg', alt: 'Food Styling 3', caption: 'COLOR PALETTE' },
    { src: '/assets/food_4.jpg', alt: 'Food Styling 4', caption: 'PRESENTATION' },
  ];

  return (
    <section id="food-styling" className="py-[100px] px-6 md:px-12 bg-black overflow-hidden relative">

      <FadeIn delay={0.1}>
        <div className="text-center mb-14">
          <span className="text-[0.75rem] font-bold tracking-[5px] text-textSecondary opacity-60 uppercase mb-3 block">STYLING</span>
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-wide mb-2 text-textPrimary">
            FOOD STYLING
          </h2>
          <p className="text-[0.95rem] text-textSecondary font-normal">
            Styling food and product shots for the camera.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-[1400px] mx-auto">
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[650px]">
            
            {/* Left Side: Large Featured Image */}
            <div 
              onClick={() => setSelectedImage(images[0])}
              className="relative rounded-[12px] overflow-hidden group aspect-[4/5] md:aspect-auto h-full w-full bg-[#111] border border-borderDark cursor-pointer"
            >
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1414235077428-338988692286?q=80&w=800&auto=format&fit=crop' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="absolute bottom-6 left-6 text-sm font-bold tracking-[4px] text-white uppercase drop-shadow-md">
                {images[0].caption}
              </span>
            </div>
            
            {/* Right Side: 3 Smaller Images in Bento Layout */}
            {images.length > 1 && (
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                
                {/* Top wide image */}
                {images[1] && (
                  <div 
                    onClick={() => setSelectedImage(images[1])}
                    className="col-span-2 relative rounded-[12px] overflow-hidden group aspect-video md:aspect-auto w-full h-full bg-[#111] border border-borderDark cursor-pointer"
                  >
                    <img
                      src={images[1].src}
                      alt={images[1].alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                    <span className="absolute bottom-5 left-5 text-xs font-bold tracking-[3px] text-white uppercase drop-shadow-md">
                      {images[1].caption}
                    </span>
                  </div>
                )}
                
                {/* Bottom left image */}
                {images[2] && (
                  <div 
                    onClick={() => setSelectedImage(images[2])}
                    className="relative rounded-[12px] overflow-hidden group aspect-square md:aspect-auto w-full h-full bg-[#111] border border-borderDark cursor-pointer"
                  >
                    <img
                      src={images[2].src}
                      alt={images[2].alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=600&auto=format&fit=crop' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                    <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[2px] text-white uppercase drop-shadow-md">
                      {images[2].caption}
                    </span>
                  </div>
                )}
                
                {/* Bottom right image */}
                {images[3] && (
                  <div 
                    onClick={() => setSelectedImage(images[3])}
                    className="relative rounded-[12px] overflow-hidden group aspect-square md:aspect-auto w-full h-full bg-[#111] border border-borderDark cursor-pointer"
                  >
                    <img
                      src={images[3].src}
                      alt={images[3].alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1484723091791-c0e7e53534b4?q=80&w=600&auto=format&fit=crop' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                    <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[2px] text-white uppercase drop-shadow-md">
                      {images[3].caption}
                    </span>
                  </div>
                )}

              </div>
            )}
          </div>
        </FadeIn>
      </div>

      {/* Lightbox Modal with Framer Motion */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-50 focus:outline-none"
            >
              <X size={36} strokeWidth={1.5} />
            </button>
            
            <motion.img
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-[8px] shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-center"
            >
              <span className="text-sm md:text-base font-bold tracking-[5px] text-white uppercase">
                {selectedImage.caption}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
