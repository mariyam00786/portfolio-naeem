const services = [
  {
    title: "Cinematography",
    desc: "Camera operation, lighting design, and visual storytelling for commercials and brand films.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
        <path d="M16 10l4-2v8l-4-2"></path>
        <circle cx="7" cy="12" r="2"></circle>
        <circle cx="12" cy="12" r="1"></circle>
      </svg>
    )
  },
  {
    title: "On-set technical direction",
    desc: "Shot planning, camera department coordination, and technical execution of the director's vision.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
      </svg>
    )
  },
  {
    title: "Color & look development",
    desc: "Collaborating on grading, LUTs, and visual tone matched to brand identity.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14"></line>
        <line x1="4" y1="10" x2="4" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="3"></line>
        <line x1="20" y1="21" x2="20" y2="16"></line>
        <line x1="20" y1="12" x2="20" y2="3"></line>
        <line x1="1" y1="14" x2="7" y2="14"></line>
        <line x1="9" y1="8" x2="15" y2="8"></line>
        <line x1="17" y1="16" x2="23" y2="16"></line>
      </svg>
    )
  },
  {
    title: "Creative collaboration",
    desc: "Working closely with directors and agencies for cohesive project outcomes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
        <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
        <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
      </svg>
    )
  }
];

import FadeIn from '../components/FadeIn';

export default function Services() {
  return (
    <section id="services" className="py-[100px] px-6 md:px-12">
      <FadeIn delay={0.1}>
        <div className="text-center mb-14">
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-wide mb-2 text-textPrimary">HOW I CAN HELP</h2>
          <p className="text-[0.95rem] text-textSecondary font-normal">Visuals, lighting, and on-set execution.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
        {services.map((svc, idx) => (
          <FadeIn delay={0.2 + (idx * 0.1)} key={idx} className="h-full">
            <div 
              className="h-full p-8 border border-borderDark rounded-[10px] bg-white/[0.01] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-borderHover hover:bg-white/[0.02] hover:brightness-105 group"
            >
              <span className="block mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                {svc.icon}
              </span>
              <h3 className="text-[0.95rem] font-bold uppercase tracking-wide mb-3 text-textPrimary opacity-90">{svc.title}</h3>
              <p className="text-[0.9rem] font-normal text-textTertiary leading-[1.6] transition-colors duration-300 group-hover:text-white/90">{svc.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
