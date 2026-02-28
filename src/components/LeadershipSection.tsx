import { useScrollReveal } from '@/hooks/useScrollReveal';
import leader1 from '@/assets/leader-1.jpg';
import leader2 from '@/assets/leader-2.jpg';
import leader3 from '@/assets/leader-3.jpg';
import leader4 from '@/assets/leader-4.jpg';
import leader5 from '@/assets/leader-5.jpg';
import leader6 from '@/assets/leader-6.jpg';
import leader7 from '@/assets/leader-7.jpg';

const topRow = [
  { img: leader1, name: 'Ravi Patel', role: 'Board Member & Director' },
  { img: leader2, name: 'Nirav Patel', role: 'Board Member' },
  { img: leader3, name: 'Ketan Patel', role: 'Board Member' },
  { img: leader4, name: 'Sandeep Kalyankar', role: 'CBO & Executive Director' },
];

const bottomRow = [
  { img: leader5, name: 'Divyesh Shah', role: 'COO & Executive Director' },
  { img: leader6, name: 'Anil Gundecha', role: 'Head, Robot Department' },
  { img: leader7, name: 'Munjal Desai', role: 'Sales & Marketing Head' },
];

interface LeaderCardProps {
  img: string;
  name: string;
  role: string;
  aspect?: string;
}

function LeaderCard({ img, name, role, aspect = 'aspect-[3/4]' }: LeaderCardProps) {
  return (
    <div className={`reveal leader-card relative overflow-hidden rounded-xl ${aspect}`}>
      <img
        src={img}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--blue-deep)/0.85)] via-transparent to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-end p-5">
        <h4 className="font-chivo font-bold text-base text-primary-foreground">{name}</h4>
        <span className="font-chivo font-light text-sm text-accent">{role}</span>
      </div>
    </div>
  );
}

export default function LeadershipSection() {
  const ref = useScrollReveal();

  return (
    <section className="bg-blue-deep py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <span className="reveal eyebrow text-accent mb-3 block">Leadership</span>
        <h2 className="reveal font-chivo font-black text-3xl md:text-5xl text-primary-foreground tracking-tight mb-12">
          The team building tomorrow's electronics.
        </h2>

        {/* Top row — 4 portrait cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {topRow.map((l) => (
            <LeaderCard key={l.name} {...l} />
          ))}
        </div>

        {/* Bottom row — 3 wider cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bottomRow.map((l) => (
            <LeaderCard key={l.name} {...l} aspect="aspect-[3/2]" />
          ))}
        </div>
      </div>
    </section>
  );
}
