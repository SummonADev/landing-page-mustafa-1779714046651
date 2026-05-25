import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden p-12 text-center"
          style={{
            background:
              'linear-gradient(135deg, #3538cd 0%, #6172f3 50%, #8b5cf6 100%)',
          }}
        >
          {/* Background decoration */}
          <div
            className="absolute inset-0 opacity-20"
            aria-hidden
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 40%)',
            }}
          />

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Ready to ship faster?
            </h2>
            <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of teams already building with NovaTech. Start free,
              no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-white text-brand-700 font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-brand-50 transition-colors flex items-center justify-center gap-2"
              >
                Start for free <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-colors border border-white/20"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
