const STEPS = [
  {
    number: '01',
    title: 'Connect your repo',
    description:
      'Link your GitHub, GitLab, or Bitbucket repository in under 60 seconds. Zero config needed.',
  },
  {
    number: '02',
    title: 'Configure your stack',
    description:
      'Choose your framework, set environment variables, and define scaling rules — all from a clean UI.',
  },
  {
    number: '03',
    title: 'Deploy & scale',
    description:
      'Push to main and watch your app go live globally. Auto-scaling handles traffic spikes without manual intervention.',
  },
  {
    number: '04',
    title: 'Monitor & iterate',
    description:
      'Real-time logs, error tracking, and performance metrics keep you ahead of issues before users notice.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#111220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Up and running{' '}
            <span className="gradient-text">in minutes</span>
          </h2>
          <p className="text-slate-400 text-lg">
            No DevOps PhD required. Get from zero to production faster than you
            can finish your coffee.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-transparent via-brand-700/50 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                {/* Number bubble */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-brand-950 border-2 border-brand-600/50 flex items-center justify-center glow-brand">
                    <span className="text-brand-300 font-mono font-bold text-sm">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
