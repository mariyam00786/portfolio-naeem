const projects = [
  { name: 'Milma', type: 'Commercial' },
  { name: 'LFA', type: 'Advertisement' },
  { name: 'Muralya', type: 'Commercial' },
  { name: 'Regal Jewellery', type: 'Advertisement' },
  { name: 'Nellara', type: 'Commercial' },
  { name: 'Regal Jewellery', type: 'Commercial' },
  { name: 'Kerala Cafe', type: 'Commercial' },
  { name: 'Deepam Oil', type: 'Commercial' },
];

import FadeIn from '../components/FadeIn';

export default function Projects() {
  return (
    <section id="projects" className="py-[100px] px-6 md:px-12">
      <FadeIn delay={0.1}>
        <div className="text-center mb-14">
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-wide mb-2 text-textPrimary">RECENT PROJECTS</h2>
          <p className="text-[0.95rem] text-textSecondary font-normal">A short collection of projects across brands and formats.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1400px] mx-auto">
        {projects.map((project, idx) => (
          <FadeIn delay={0.1 + (idx * 0.1)} key={idx}>
            <div 
              className="group relative aspect-[1920/800] rounded-[10px] overflow-hidden border border-borderDark bg-[#0a0a0a] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-borderHover hover:brightness-105"
            >
              <video 
                src={`/assets/work_${String(idx + 1).padStart(2, '0')}.mp4`} 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              
              {/* Cinematic Title Overlay matching niyasabu */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-[0.95rem] font-bold text-textPrimary">{project.name}</h3>
                <p className="text-[0.75rem] font-normal text-white/60 mt-1 uppercase tracking-wide">{project.type}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
