import FadeIn from '../components/FadeIn';

export default function Frames() {
  const frameIds = [1, 2, 3, 4, 5, 6, 7];

  return (
    <section id="frames" className="py-[100px] px-6 md:px-12 bg-black">
      <FadeIn delay={0.1}>
        <div className="text-center mb-14">
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-wide mb-2 text-textPrimary">SELECTED FRAMES</h2>
          <p className="text-[0.95rem] text-textSecondary font-normal">Still grabs from various projects and shoots.</p>
        </div>
      </FadeIn>

      <div className="columns-1 min-[481px]:columns-2 min-[901px]:columns-4 gap-[12px] p-[24px] max-w-[1400px] mx-auto bg-black">
        {frameIds.map((id, idx) => (
          <FadeIn delay={0.1 + (idx * 0.05)} key={id} className="break-inside-avoid mb-[12px]">
            <div className="w-full h-full">
              <img 
                src={`/assets/gallery_${id}.jpg`} 
                alt={`Frame ${id}`}
                className="block w-full h-auto rounded-[6px] box-border"
                onError={(e) => { e.target.src = `https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=800&auto=format&fit=crop&sig=${id}` }}
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
