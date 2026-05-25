import { Check } from 'lucide-react';
import clsx from 'clsx';
import type { PricingPlan } from '@/types';

const PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for side projects and early-stage products.',
    features: [
      '3 projects',
      '100 GB bandwidth',
      'Community support',
      'Preview deployments',
      'Basic analytics',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: 'per month',
    description: 'For growing teams who need power and flexibility.',
    features: [
      'Unlimited projects',
      '1 TB bandwidth',
      'Priority support',
      'Advanced analytics',
      'Custom domains',
      'Team collaboration',
      'SSO & RBAC',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'Tailored solutions for large-scale, mission-critical apps.',
    features: [
      'Everything in Pro',
      'Dedicated infrastructure',
      'SLA guarantee',
      '24/7 dedicated support',
      'Custom contracts',
      'On-prem option',
    ],
    cta: 'Talk to sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#111220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Simple,{' '}
            <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="text-slate-400 text-lg">
            No hidden fees. No vendor lock-in. Start free and scale as you grow.
          </p>
        </div>

        {/* Plans */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={clsx(
                'relative rounded-2xl p-8 flex flex-col',
                plan.highlighted
                  ? 'bg-brand-600 glow-brand border border-brand-500'
                  : 'bg-[#0a0b14] border border-white/5 glow-card'
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-brand-700 text-xs font-bold px-4 py-1.5 rounded-full">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={clsx(
                    'text-lg font-semibold mb-1',
                    plan.highlighted ? 'text-white' : 'text-white'
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={clsx(
                    'text-sm mb-4',
                    plan.highlighted ? 'text-brand-100' : 'text-slate-400'
                  )}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className={clsx(
                      'text-4xl font-extrabold',
                      plan.highlighted ? 'text-white' : 'text-white'
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={clsx(
                      'text-sm',
                      plan.highlighted ? 'text-brand-200' : 'text-slate-500'
                    )}
                  >
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <Check
                      className={clsx(
                        'w-4 h-4 flex-shrink-0 mt-0.5',
                        plan.highlighted
                          ? 'text-brand-100'
                          : 'text-brand-400'
                      )}
                    />
                    <span
                      className={clsx(
                        'text-sm',
                        plan.highlighted ? 'text-brand-100' : 'text-slate-300'
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={clsx(
                  'block text-center text-sm font-semibold px-6 py-3 rounded-xl transition-colors',
                  plan.highlighted
                    ? 'bg-white text-brand-700 hover:bg-brand-50'
                    : 'bg-brand-600 hover:bg-brand-500 text-white glow-brand'
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
