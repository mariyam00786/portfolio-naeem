import { motion } from 'framer-motion';

export default function Brands() {
  return (
    <>
      <section id="brands" style={{ background: '#000', padding: '100px 0', textAlign: 'center', overflow: 'hidden' }}>
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ color: '#8a8a8a', fontSize: '14px', letterSpacing: '4px', marginBottom: '12px', fontWeight: 'bold' }}
        >
          OUR CLIENTS
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '1px', marginBottom: '60px' }}
        >
          BRANDS WORKED WITH
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ overflow: 'hidden', whiteSpace: 'nowrap', marginBottom: '24px', width: '100%' }}
        >
          <div className="marquee-track-1" style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
            <span className="marquee-text" style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, paddingRight: '30px' }}>LULU ✦ GOLD WINNER ✦ AJMI ✦ NELLARA ✦ LAKSHMI JEWELLERY ✦ MURALYA ✦ SWEET KARAM COFFEE ✦</span>
            <span className="marquee-text" style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, paddingRight: '30px' }}>LULU ✦ GOLD WINNER ✦ AJMI ✦ NELLARA ✦ LAKSHMI JEWELLERY ✦ MURALYA ✦ SWEET KARAM COFFEE ✦</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ overflow: 'hidden', whiteSpace: 'nowrap', marginBottom: '50px', width: '100%' }}
        >
          <div className="marquee-track-2" style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
            <span className="marquee-text" style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, paddingRight: '30px' }}>MTR ✦ EASTERN ✦ ROYANA ✦ SHUDHAM GHEE ✦ KERALA CAFE ✦ MUNDUVAYALIL ✦</span>
            <span className="marquee-text" style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, paddingRight: '30px' }}>MTR ✦ EASTERN ✦ ROYANA ✦ SHUDHAM GHEE ✦ KERALA CAFE ✦ MUNDUVAYALIL ✦</span>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false, amount: 0.8 }}
          style={{ color: '#fff', fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, margin: '20px 0 10px', lineHeight: 1 }}
        >
          100+
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: false, amount: 0.8 }}
          style={{ color: '#8a8a8a', fontSize: '14px', letterSpacing: '4px', fontWeight: 'bold' }}
        >
          BRANDS &amp; COUNTING
        </motion.p>
      </section>

      <style>{`
        @keyframes marqueeLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-1 {
          animation: marqueeLeft 30s linear infinite;
        }
        .marquee-track-2 {
          animation: marqueeRight 30s linear infinite;
        }
        .marquee-track-1:hover, .marquee-track-2:hover {
          animation-play-state: paused;
        }
        .marquee-text {
          color: transparent;
          -webkit-text-stroke: 1px #404040;
          transition: all 0.3s ease;
          cursor: default;
        }
        .marquee-text:hover {
          -webkit-text-stroke: 1px #ffffff;
        }
      `}</style>
    </>
  );
}
