import { Quote } from 'lucide-react';
import type { Testimonial } from '@/types';

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Luminary AI',
    avatar: 'SC',
    quote:
      'NovaTech cut our deployment time from 45 minutes to under 2. The team now ships 3× more features every sprint. It\'s genuinely transformative.',
  },
  {
    name: 'Marcus Webb',
    role: 'Head of Engineering',
    company: 'Orbit Finance',
    avatar: 'MW',
    quote:
      'We migrated our entire infra in a weekend. Zero downtime, zero drama. The observability tooling alone is worth the price of admission.',
  },
  {
    name: 'Priya Nair',
    role: 'Founder & CEO',
    company: 'Stackwise',
    avatar: 'PN',
    quote:
      'As a solo founder, NovaTech gives me the leverage of a full DevOps team. I can focus on product, not infrastructure headaches.',
  },
  {
    name: 'James Okafor',
    role: 'VP of Product',
    company: 'Tempo Labs',
    avatar: 'JO',
    quote:
      'The AI-powered analytics surface insights I didn\'t even know to look for. We caught a funnel drop that was costing us $40k/month.',
  },
  {
    name: 'Lena Fischer',
    role: 'Lead Developer',
    company: 'Clarifai',
    avatar: 'LF',
    quote:
      'Best DX I\'ve experienced in 12 years of building software. The preview environments per PR alone make code review so much faster.',
  },
  {
    name: 'Tom Hartley',
    role: 'Co-founder',
    company: 'Pixelcraft',
    avatar: 'TH',
    quote:
      'We went from idea to paying customers in 6 weeks. NovaTech\'s speed and reliability made that possible. Couldn\'t recommend it more.',
  },
];

const AVATAR_COLORS = [
  'bg-brand-600',
  'bg-violet-600',
  'bg-emerald-600',
  'bg-orange-500',
  'bg-cyan-600',
  'bg-pink-600',
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Loved by{' '}
            <span className="gradient-text">builders worldwide</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Don't take our word for it — hear from the teams who ship with
            NovaTech every day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#111220] border border-white/5 rounded-2xl p-6 glow-card flex flex-col"
            >
              <Quote className="w-6 h-6 text-brand-600/60 mb-4 flex-shrink-0" />
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${AVATAR_COLORS[idx % AVATAR_COLORS.length]}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
