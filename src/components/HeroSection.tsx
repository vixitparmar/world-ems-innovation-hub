import { useCountUp } from '@/hooks/useCountUp';
import heroFactory from '@/assets/hero-factory.jpg';
import heroFloor from '@/assets/hero-manufacturing-floor.jpg';

export default function HeroSection() {
  const revenue = useCountUp(66.73, 1800, '₹', 'Cr');
  const growth = useCountUp(41.7, 1800, '', '×');
  const footprint = useCountUp(365, 1800, '', 'K');

  return (
    <section className="min-h-screen pt-[68px] bg-blue-deep">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[1fr_auto] gap-[3px] h-[calc(100vh-68px)] p-[3px]">
        {/* Cell A — Hero Main */}
        <div className="relative overflow-hidden md:row-span-1 group cursor-default">
          <img
            src={heroFactory}
            alt="World EMS manufacturing facility"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-[1.04]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--blue-deep))] via-[hsl(var(--blue-deep)/0.6)] to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-1.5 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
              <span className="eyebrow text-accent text-[11px]">🇮🇳 India's Next-Gen EMS Partner</span>
            </div>

            <h1 className="font-chivo font-black text-3xl md:text-[52px] leading-[1.08] tracking-[-1.5px] text-primary-foreground mb-2">
              Your Partner in Next-Gen
              <span className="block"><span className="yellow-rule inline-block w-16 mr-3 align-middle" />Electronics</span>
              Brand Building Journey.
            </h1>

            <p className="font-chivo font-light text-sm md:text-base text-primary-foreground/60 max-w-lg mt-4 mb-6">
              From Smart Displays to AI Robots — design-led manufacturing for the world's boldest electronics brands, made in India.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#capabilities"
                className="bg-accent text-accent-foreground font-chivo font-bold text-sm px-6 py-3 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_4px_24px_hsl(var(--yellow)/0.4)] transition-all"
              >
                Explore Capabilities
              </a>
              <a
                href="#products"
                className="border border-primary-foreground/30 text-primary-foreground font-chivo font-bold text-sm px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-all"
              >
                View Product Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Cell B — Revenue */}
        <div className="relative bg-accent overflow-hidden p-6 flex flex-col justify-center">
          <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-accent-foreground/20" />
          <div className="absolute top-4 right-4 text-accent-foreground/40 text-xl">↗</div>
          <div ref={revenue.ref}>
            <span className="font-chivo font-black text-4xl md:text-[52px] text-accent-foreground tracking-tight">
              {revenue.display}
            </span>
          </div>
          <span className="font-chivo font-light text-sm text-accent-foreground/60 mt-2">Revenue FY 2024–25</span>
        </div>

        {/* Cell C — Growth */}
        <div
          className="relative overflow-hidden p-6 flex flex-col justify-center"
          style={{ backgroundColor: 'hsl(var(--blue-deep))' }}
        >
          <img
            src={heroFactory}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10" ref={growth.ref}>
            <span className="font-chivo font-black text-4xl md:text-[52px] text-primary-foreground tracking-tight">
              {growth.display}
            </span>
          </div>
          <span className="relative z-10 font-chivo font-light text-sm text-primary-foreground/45 mt-2">
            Revenue growth year over year
          </span>
        </div>

        {/* Cell D — Locations */}
        <div className="relative overflow-hidden group">
          <img
            src={heroFloor}
            alt="Manufacturing floor"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--blue-deep))] to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <span className="font-chivo font-bold text-sm text-primary-foreground">
              Ahmedabad · Greater Noida · Expanding
            </span>
            <span className="font-chivo font-light text-xs text-primary-foreground/45 mt-1">
              3 world-class manufacturing locations
            </span>
          </div>
        </div>

        {/* Cell E — Footprint */}
        <div className="bg-card p-6 flex flex-col justify-center">
          <div ref={footprint.ref}>
            <span className="font-chivo font-black text-4xl md:text-[52px] text-blue-mid tracking-tight">
              {footprint.display}
            </span>
          </div>
          <span className="font-chivo font-light text-sm text-grey-400 mt-2">
            Sq. ft. of manufacturing footprint
          </span>
        </div>

        {/* Cell F — Certifications */}
        <div className="bg-blue-pale p-6 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-3">
            {['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 50001', 'BIS', 'BEE'].map((cert) => (
              <span
                key={cert}
                className="bg-card text-blue-deep font-chivo font-bold text-[10px] px-3 py-1.5 rounded-full border border-grey-200"
              >
                {cert}
              </span>
            ))}
          </div>
          <span className="font-chivo font-light text-xs text-grey-400">
            Fully certified & compliant
          </span>
        </div>
      </div>
    </section>
  );
}
