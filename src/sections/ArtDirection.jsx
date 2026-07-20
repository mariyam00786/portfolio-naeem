import { useRef } from 'react';
import FadeIn from '../components/FadeIn';

export default function ArtDirection() {
  const scrollRef = useRef(null);

  // Only valid JPEG images — art_*.jpg files are HEIC format and cannot display in browsers.
  // Replace the art images with proper JPEGs exported from your phone/editor, named art_1.jpg through art_7.jpg
  const images = [
    { src: '/assets/gallery_1.jpg',  alt: 'Frame 1' },
    { src: '/assets/gallery_2.jpg',  alt: 'Frame 2' },
    { src: '/assets/gallery_3.jpg',  alt: 'Frame 3' },
    { src: '/assets/gallery_4.jpg',  alt: 'Frame 4' },
    { src: '/assets/gallery_5.jpg',  alt: 'Frame 5' },
    { src: '/assets/gallery_6.jpg',  alt: 'Frame 6' },
    { src: '/assets/gallery_7.jpg',  alt: 'Frame 7' },
    { src: '/assets/gallery_8.jpeg', alt: 'Frame 8' },
    { src: '/assets/gallery_9.jpeg', alt: 'Frame 9' },
  ];

  // Drag-to-scroll logic
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = 'grabbing';
  };
  const onMouseLeave = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section id="art-direction" className="py-[100px] bg-black overflow-hidden">

      <FadeIn delay={0.1}>
        <div className="text-center mb-14 px-6 md:px-12">
          <span className="text-[0.75rem] font-bold tracking-[5px] text-textSecondary opacity-60 uppercase mb-3 block">SET</span>
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-wide mb-2 text-textPrimary">
            ART DIRECTION
          </h2>
          <p className="text-[0.95rem] text-textSecondary font-normal">
            Set design &amp; visual styling for productions.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        {/* Filmstrip */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          style={{
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollSnapType: 'x mandatory',
            gap: '10px',
            paddingLeft: '24px',
            paddingRight: '24px',
            cursor: 'grab',
            /* hide scrollbar */
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
          className="filmstrip"
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              style={{
                flexShrink: 0,
                scrollSnapAlign: 'start',
                height: 'clamp(260px, 30vw, 380px)',
                width: 'auto',
                overflow: 'hidden',
                borderRadius: '8px',
                border: '1px solid #1f1f1f',
              }}
              className="filmstrip-item"
            >
              <img
                src={img.src}
                alt={img.alt}
                draggable={false}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=800&auto=format&fit=crop&sig=${idx}`;
                }}
                style={{
                  height: '100%',
                  width: 'auto',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                  userSelect: 'none',
                }}
                className="filmstrip-img"
              />
            </div>
          ))}
        </div>
      </FadeIn>

      <style>{`
        .filmstrip::-webkit-scrollbar { display: none; }
        .filmstrip-item:hover .filmstrip-img {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
}
