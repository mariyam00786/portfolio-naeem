import FadeIn from '../components/FadeIn';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 overflow-hidden">
      
      {/* Static Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black">
        <img 
          src="/src/assets/hero_bg.jpg" 
          alt="Hero background"
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop' }}
        />
      </div>

      {/* Dark semi-transparent overlay (rgba(0,0,0,0.6)) */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>

      <div className="max-w-3xl z-20 pt-20 relative flex flex-col items-center">

        <FadeIn delay={0.1}>
          <h1 className="text-[clamp(2.8rem,9vw,5.5rem)] font-bold tracking-wider leading-[0.92] text-textPrimary opacity-90 mb-4">
            NAEEM
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-[clamp(0.75rem,1.3vw,0.95rem)] font-normal tracking-[0.18em] uppercase text-[#a8a8a8] mb-8">
            CINEMATOGRAPHER / VIDEO EDITOR / DIRECTOR
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5}>
          <div className="max-w-[680px] space-y-3 text-[0.95rem] font-normal text-[#a8a8a8] leading-[1.7] text-balance">
            <p>Cinematographer working across Kerala, shooting commercials and brand ad films.</p>
            <p>4+ years in production, from concept to final delivery.</p>
            <p>Comfortable moving between creative and technical roles on set.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
