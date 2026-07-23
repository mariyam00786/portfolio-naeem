import FadeIn from '../components/FadeIn';

export default function FoodStyling() {
  const images = [1, 2, 3, 4, 5, 6];

  return (
    <section id="food-styling" className="py-[100px] px-6 md:px-12 bg-black">
      <FadeIn delay={0.1}>
        <div className="text-center mb-14">
          <span className="text-[0.75rem] font-bold tracking-[5px] text-textSecondary opacity-60 uppercase mb-3 block">STYLING</span>
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-wide mb-2 text-textPrimary">FOOD STYLING</h2>
          <p className="text-[0.95rem] text-textSecondary font-normal">Styling food and product shots for the camera.</p>
        </div>
      </FadeIn>

      <div className="columns-1 min-[481px]:columns-2 min-[901px]:columns-3 gap-[12px] max-w-[1400px] mx-auto">
        {images.map((id, idx) => (
          <FadeIn delay={0.1 + idx * 0.07} key={id} className="break-inside-avoid mb-[12px]">
            <div className="w-full overflow-hidden rounded-[8px] border border-borderDark group cursor-pointer">
              <img
                src={`/assets/food_${id}.jpg`}
                alt={`Food styling ${id}`}
                className="block w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://images.unsplash.com/photo-1414235077428-338988692286?q=80&w=800&auto=format&fit=crop&sig=${id}`;
                }}
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
