import { motion } from 'framer-motion';

const brands = [
  "LULU", "GOLD WINNER", "AJMI", "NELLARA", "LAKSHMI JEWELLERY", 
  "MURALYA", "SWEET KARAM COFFEE", "MTR", "EASTERN", "ROYANA", 
  "SHUDHAM GHEE", "KERALA CAFE", "MUNDUVAYALIL"
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-[#0a0a0a] overflow-hidden border-y border-white/5">
      <div className="relative flex flex-col items-center">
        
        {/* Marquee Container */}
        <div className="flex whitespace-nowrap overflow-hidden w-full relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>

          {/* Marquee Track */}
          <motion.div 
            className="flex items-center space-x-8 md:space-x-12 shrink-0 will-change-transform"
            animate={{ x: [0, -1035] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20
            }}
          >
            {/* Render 3 times for seamless loop */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex space-x-8 md:space-x-12 items-center">
                {brands.map((brand, idx) => (
                  <div key={`${i}-${idx}`} className="flex items-center space-x-8 md:space-x-12">
                    <span className="font-heading text-4xl md:text-6xl font-bold text-light/20 uppercase tracking-wider hover:text-accent transition-colors duration-300 cursor-default">
                      {brand}
                    </span>
                    <span className="text-accent/50 text-2xl">✦</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-light/50 border border-white/10 py-2 px-6 rounded-full">
            13 Brands & Counting
          </span>
        </div>
      </div>
    </section>
  );
}
