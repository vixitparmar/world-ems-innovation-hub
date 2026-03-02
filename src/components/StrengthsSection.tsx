import { useScrollReveal } from '@/hooks/useScrollReveal';

const strengths = [
  {
    num: '01',
    title: 'Scalable Manufacturing Platform',
    body: '45,000 sq. ft. campus with 3× scale-up underway. Peak 15K TVs/month, targeting 150K Smart TVs by FY27.',
  },
  {
    num: '02',
    title: 'Design-Led OEM / ODM Model',
    body: 'ODM from concept to completion. JDM partnerships with global tech firms. Supports up to 115″ displays.',
  },
  {
    num: '03',
    title: 'End-to-End Manufacturing',
    body: 'Concept → Design → Engineering → Production → Testing → Packaging → Reverse Logistics + repair/refurbishment.',
  },
  {
    num: '04',
    title: 'Order-Backed Operating Model',
    body: 'Production on confirmed POs only. Advance payment model focused on profitable, sustainable volume growth.',
  },
  {
    num: '05',
    title: 'Multi-Vertical Capability',
    body: 'Smart Displays, AI Robotics, Smart Audio, New Energy — future-ready manufacturing across verticals.',
  },
  {
    num: '06',
    title: 'Strong Execution Engine',
    body: '100+ professionals, ERP governance, robotic automation roadmap — built for reliability at scale.',
  },
];

export default function StrengthsSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="bg-grey-100 py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <span className="reveal eyebrow text-blue-mid mb-3 block">Why World EMS</span>
        <h2 className="reveal font-chivo font-black text-3xl md:text-5xl text-blue-deep tracking-tight mb-12">
          Six reasons brands choose us to build.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {strengths.map((s) => (
            <div
              key={s.num}
              className="reveal strength-card bg-card rounded-xl border border-grey-200 p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent text-accent-foreground font-chivo font-black text-sm mb-5">
                {s.num}
              </span>
              <h3 className="font-chivo font-bold text-lg text-blue-deep mb-3">{s.title}</h3>
              <p className="font-chivo font-light text-sm text-grey-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
