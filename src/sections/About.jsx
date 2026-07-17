import { useState } from 'react';
import FadeIn from '../components/FadeIn';

export default function About() {
  const [isColor, setIsColor] = useState(false);

  return (
    <section id="about" className="py-[100px] px-6 md:px-12">
      <FadeIn delay={0.1}>
        <div className="text-center mb-14">
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-wide text-textPrimary">ABOUT ME</h2>
        </div>
      </FadeIn>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <FadeIn delay={0.2} direction="right" className="order-2 md:order-1">
          <div className="space-y-5 text-[1rem] text-textSecondary font-normal leading-[1.85]">
            <p>
              I'm a cinematographer with 4+ years of experience shooting commercials and brand campaigns across Kerala. My work sits at the intersection of lighting, camera movement, and visual storytelling, making sure ideas translate smoothly from set to screen.
            </p>
            <p>
              I focus on keeping the process simple, organized, and efficient, so the work speaks for itself.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} direction="left" className="order-1 md:order-2">
          <div 
            className="relative aspect-[4/5] rounded-[10px] overflow-hidden bg-[#0a0a0a] border border-borderDark max-w-[350px] mx-auto md:max-w-none md:mx-0 w-full cursor-pointer group"
            onClick={() => setIsColor(!isColor)}
            title="Click to toggle color"
          >
            <img 
              src="/src/assets/about.jpg" 
              alt="Naeem"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=800&auto=format&fit=crop' }}
              className={`w-full h-full object-cover transition-all duration-[600ms] ease-out ${isColor ? 'grayscale-0 brightness-100' : 'grayscale brightness-50'}`}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
