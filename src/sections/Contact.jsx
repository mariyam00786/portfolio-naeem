import FadeIn from '../components/FadeIn';

export default function Contact() {
  const email = "hello@naeem.com"; // Placeholder
  const phone = "+91 755 900 8507"; // Placeholder
  const instagramUrl = "#";
  const vimeoUrl = "#";

  return (
    <footer id="contact" className="pt-[100px] pb-[60px] px-6 text-center">
      <FadeIn delay={0.1}>
        <div className="mb-8">
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-wide mb-2 text-textPrimary">WORK WITH ME</h2>
          <p className="text-[0.95rem] text-textSecondary font-normal">For projects, collaborations, or full portfolio requests, reach out.</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="flex justify-center gap-5 flex-wrap mt-8">
          <a 
            href={`mailto:${email}`} 
            className="inline-block py-[0.9rem] px-[2.1rem] border border-borderDark rounded-[50px] text-[0.85rem] font-normal tracking-[0.05em] uppercase bg-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:-translate-y-[2px] w-full max-w-[280px] md:w-auto"
          >
            Email Me
          </a>
          <a 
            href={`tel:${phone.replace(/\s+/g, '')}`} 
            className="inline-block py-[0.9rem] px-[2.1rem] border border-borderDark rounded-[50px] text-[0.85rem] font-normal tracking-[0.05em] uppercase bg-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:-translate-y-[2px] w-full max-w-[280px] md:w-auto"
          >
            Call Me
          </a>
          <a 
            href={instagramUrl} 
            className="inline-block py-[0.9rem] px-[2.1rem] border border-borderDark rounded-[50px] text-[0.85rem] font-normal tracking-[0.05em] uppercase bg-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:-translate-y-[2px] w-full max-w-[280px] md:w-auto"
          >
            Instagram
          </a>
          <a 
            href={vimeoUrl} 
            className="inline-block py-[0.9rem] px-[2.1rem] border border-borderDark rounded-[50px] text-[0.85rem] font-normal tracking-[0.05em] uppercase bg-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:-translate-y-[2px] w-full max-w-[280px] md:w-auto"
          >
            Vimeo
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mt-20 pt-8 border-t border-borderDark">
          <p className="text-[0.75rem] text-textTertiary">
            &copy; 2026 Naeem. All rights reserved.
          </p>
        </div>
      </FadeIn>
    </footer>
  );
}
