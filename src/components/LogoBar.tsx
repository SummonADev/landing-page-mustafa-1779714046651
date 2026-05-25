const LOGOS = [
  'Stripe',
  'Vercel',
  'Linear',
  'Notion',
  'Figma',
  'GitHub',
  'Slack',
  'AWS',
];

export default function LogoBar() {
  return (
    <section className="py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 text-sm font-medium uppercase tracking-widest mb-10">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="text-slate-600 hover:text-slate-400 font-semibold text-lg tracking-tight transition-colors duration-200 cursor-default select-none"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
