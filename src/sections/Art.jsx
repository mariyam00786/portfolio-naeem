import FadeIn from '../components/FadeIn';

export default function Art() {
  const artworks = [1, 2, 3, 4, 5, 6, 7];

  return (
    <section id="art" className="py-[100px] px-6 md:px-12 bg-black">
      <FadeIn delay={0.1}>
        <div className="text-center mb-14">
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-wide mb-2 text-textPrimary">ART WORKS</h2>
          <p className="text-[0.95rem] text-textSecondary font-normal">Art direction & visual concepts.</p>
        </div>
      </FadeIn>

      <div className="columns-1 min-[481px]:columns-2 min-[901px]:columns-3 gap-[12px] max-w-[1400px] mx-auto">
        {artworks.map((id, idx) => (
          <FadeIn delay={0.1 + idx * 0.07} key={id} className="break-inside-avoid mb-[12px]">
            <div className="w-full overflow-hidden rounded-[8px] border border-borderDark group cursor-pointer">
              <img
                src={`/assets/art_${id}.jpg`}
                alt={`Art work ${id}`}
                className="block w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800&auto=format&fit=crop&sig=${id}`;
                }}
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
