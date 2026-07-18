import FadeIn from '../components/FadeIn';

const services = [
  {
    title: "Cinematography",
    desc: "Camera operation, lighting design, and visual storytelling for commercials, brand films, and food/product campaigns. Focused on building mood and depth through light and framing.",
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
    title: "Art Direction",
    desc: "Set design, prop styling, and visual concept development — building the world a shoot lives in, from color palette to spatial layout, so every frame feels intentional.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    )
  },
  {
    title: "Food Styling",
    desc: "Styling food and product shots for the camera — arrangement, texture, freshness, and presentation, tailored to how a dish or product needs to read on screen versus in real life.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    )
  },
  {
    title: "On-Set Coordination",
    desc: "Bridging the creative and technical sides of a shoot — working closely with directors, chefs, and brand teams to keep vision and execution aligned from prep to final frame.",
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

export default function Services() {
  return (
    <section id="services" className="py-[100px] px-6 md:px-12">
      <FadeIn delay={0.1}>
        <div className="text-center mb-14">
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-wide mb-2 text-textPrimary">HOW I CAN HELP</h2>
          <p className="text-[0.95rem] text-textSecondary font-normal">Cinematography, art direction, and food styling — all three in one.</p>
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
