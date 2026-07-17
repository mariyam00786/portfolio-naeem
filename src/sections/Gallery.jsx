import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `/assets/gallery_${i + 1}.jpg`,
    fallback: `https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop&sig=${i}`
  }));

  return (
    <section id="gallery" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-16">
          Selected <span className="text-accent">Frames</span>
        </h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid relative group cursor-zoom-in overflow-hidden"
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={img.src} 
                alt={`Gallery ${img.id}`}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = img.fallback; }}
              />
              <div className="absolute inset-0 bg-accent/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-light hover:text-accent transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg.src}
              onError={(e) => { e.target.src = selectedImg.fallback; }}
              className="max-w-full max-h-full object-contain shadow-2xl"
              alt="Selected frame"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
