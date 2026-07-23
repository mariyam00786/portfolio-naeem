import { useRef } from 'react';
import FadeIn from '../components/FadeIn';

export default function FoodStyling() {
  const scrollRef = useRef(null);

  const images = [
    { src: '/assets/food_1.jpg', alt: 'Food Styling 1', caption: 'STYLING' },
    { src: '/assets/food_2.jpg', alt: 'Food Styling 2', caption: 'COMPOSITION' },
    { src: '/assets/food_3.jpg', alt: 'Food Styling 3', caption: 'COLOR PALETTE' },
    { src: '/assets/food_4.jpg', alt: 'Food Styling 4', caption: 'PRESENTATION' },
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
    <section id="food-styling" className="py-[100px] bg-black overflow-hidden">

      <FadeIn delay={0.1}>
        <div className="text-center mb-14 px-6 md:px-12">
          <span className="text-[0.75rem] font-bold tracking-[5px] text-textSecondary opacity-60 uppercase mb-3 block">STYLING</span>
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-wide mb-2 text-textPrimary">
            FOOD STYLING
          </h2>
          <p className="text-[0.95rem] text-textSecondary font-normal">
            Styling food and product shots for the camera.
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
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                width: 'auto',
              }}
              className="filmstrip-item"
            >
              {/* Image */}
              <div style={{
                height: 'clamp(260px, 30vw, 380px)',
                width: 'auto',
                overflow: 'hidden',
                borderRadius: '8px',
                border: '1px solid #1f1f1f',
                flexShrink: 0,
              }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  draggable={false}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://images.unsplash.com/photo-1414235077428-338988692286?q=80&w=800&auto=format&fit=crop&sig=${idx}`;
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

              {/* Caption */}
              <span style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#555',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                display: 'block',
              }}>
                {img.caption}
              </span>
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
