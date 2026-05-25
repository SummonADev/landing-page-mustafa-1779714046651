import {
  Zap,
  Shield,
  BarChart2,
  GitBranch,
  Globe,
  Layers,
} from 'lucide-react';
import clsx from 'clsx';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
};

const FEATURES: Feature[] = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Blazing Fast Deploys',
    description:
      'Push code and see it live in seconds. Our edge network ensures sub-100ms response times globally.',
    accent: 'bg-brand-600/15 text-brand-400',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Enterprise Security',
    description:
      'SOC 2 Type II certified, end-to-end encryption, SSO, RBAC, and audit logs out of the box.',
    accent: 'bg-emerald-500/15 text-emerald-400',
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: 'Real-time Analytics',
    description:
      'Unified dashboards with custom KPIs, funnel analysis, and AI-generated insights that matter.',
    accent: 'bg-violet-500/15 text-violet-400',
  },
  {
    icon: <GitBranch className="w-5 h-5" />,
    title: 'Git-based Workflows',
    description:
      'Branch-based environments, preview deployments per PR, and instant rollbacks with one click.',
    accent: 'bg-orange-500/15 text-orange-400',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Global Edge Network',
    description:
      '300+ PoPs worldwide. Auto-scales to handle millions of requests without a single config change.',
    accent: 'bg-cyan-500/15 text-cyan-400',
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: 'Modular Architecture',
    description:
      'Mix and match components, APIs, and integrations. Build exactly what your product needs.',
    accent: 'bg-pink-500/15 text-pink-400',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Everything you need,
            <br />
            <span className="gradient-text">nothing you don't</span>
          </h2>
          <p className="text-slate-400 text-lg">
            A carefully crafted set of tools that removes friction and lets your
            team move at the speed of thought.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-[#111220] border border-white/5 rounded-2xl p-6 hover:border-brand-700/40 transition-all duration-300 glow-card"
            >
              <div
                className={clsx(
                  'w-10 h-10 rounded-xl flex items-center justify-center mb-4',
                  feature.accent
                )}
              >
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
