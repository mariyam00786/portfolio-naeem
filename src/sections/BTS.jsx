import FadeIn from '../components/FadeIn';

export default function BTS() {
  const images = [
    { src: '/assets/bts_01.jpg', id: 'img1' },
    { src: '/assets/bts_02.jpg', id: 'img2' },
    { src: '/assets/bts_03.jpg', id: 'img3' },
    { src: '/assets/bts_04.jpg', id: 'img4' },
    { src: '/assets/bts_05.jpg', id: 'img5' },
    { src: '/assets/bts_06.jpg', id: 'img6' },
    { src: '/assets/bts_07.jpg', id: 'img7' },
    { src: '/assets/bts_08.jpg', id: 'img8' },
  ];

  const videos = [
    { src: '/assets/bts_vid_1.mp4', id: 'vid1' },
    { src: '/assets/bts_vid_2.mp4', id: 'vid2' },
    { src: '/assets/bts_vid_3.mp4', id: 'vid3' },
    { src: '/assets/bts_vid_4.mp4', id: 'vid4' },
  ];

  return (
    <section id="bts" className="py-[100px] px-6 md:px-12">
      <FadeIn delay={0.1}>
        <div className="text-center mb-14">
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-wide mb-2 text-textPrimary">BEHIND THE SCENES</h2>
          <p className="text-[0.95rem] text-textSecondary font-normal">Set moments, lighting setups, and the process behind the final frame.</p>
        </div>
      </FadeIn>

      <div className="max-w-[1400px] mx-auto space-y-5">
        {/* Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {images.map((item, idx) => (
            <FadeIn delay={0.1 + (idx * 0.05)} key={item.id}>
              <div 
                className="group relative aspect-square rounded-[10px] overflow-hidden border border-borderDark bg-[#0a0a0a] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-borderHover hover:brightness-105"
              >
                <img 
                  src={item.src} 
                  alt={`Behind the scenes ${idx + 1}`}
                  onError={(e) => { e.target.src = `https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=400&auto=format&fit=crop&sig=${idx}` }}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Videos Grid (Reel Layout) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {videos.map((item, idx) => (
            <FadeIn delay={0.1 + (idx * 0.1)} key={item.id}>
              <div 
                className="group relative aspect-[9/16] rounded-[10px] overflow-hidden border border-borderDark bg-[#0a0a0a] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-borderHover hover:brightness-105"
              >
                <video 
                  src={item.src} 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
