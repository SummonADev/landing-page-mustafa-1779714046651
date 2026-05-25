import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow orbs */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(97,114,243,0.18) 0%, rgba(97,114,243,0.04) 60%, transparent 80%)',
          }}
        />
        <div
          className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)',
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(97,114,243,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(97,114,243,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-950/80 border border-brand-700/40 text-brand-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
          Now in public beta — Join 10,000+ teams
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
          Build products{' '}
          <span className="gradient-text">10× faster</span>
          <br />
          with NovaTech
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed mb-10">
          The all-in-one platform to design, develop, and deploy your SaaS —
          with AI-powered tools, real-time collaboration, and instant scaling.
        </p>

        {/* Email capture */}
        {submitted ? (
          <div className="inline-flex items-center gap-2 bg-brand-900/50 border border-brand-600/40 text-brand-300 px-6 py-3 rounded-xl text-sm font-medium">
            🎉 You're on the list! We'll be in touch soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8"
          >
            <input
              type="email"
              required
              placeholder="Enter your work email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className="flex-1 bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
            />
            <button
              type="submit"
              className="bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors glow-brand flex items-center gap-2 justify-center"
            >
              Get early access <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Social proof */}
        <div className="flex items-center justify-center gap-4 text-sm text-slate-500 mb-12">
          <div className="flex -space-x-2">
            {['A', 'B', 'C', 'D', 'E'].map((l, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-[#0a0b14] flex items-center justify-center text-white text-[10px] font-bold"
                style={{
                  background: [
                    '#6172f3',
                    '#a78bfa',
                    '#60a5fa',
                    '#34d399',
                    '#fb923c',
                  ][i],
                }}
              >
                {l}
              </div>
            ))}
          </div>
          <span>Trusted by <strong className="text-slate-300">10,000+</strong> developers</span>
        </div>

        {/* Photo + Dashboard preview side by side */}
        <div className="relative mx-auto max-w-4xl flex flex-col lg:flex-row gap-6 items-stretch">
          {/* User Photo Card */}
          <div className="glow-card rounded-2xl overflow-hidden border border-white/8 bg-[#111220] flex flex-col items-center justify-center p-6 lg:w-56 shrink-0">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 mb-4" style={{ borderColor: 'rgba(97,114,243,0.5)' }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/800px-Gatto_europeo4.jpg"
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white font-semibold text-sm">Your Name</p>
            <p className="text-slate-400 text-xs mt-1">Founder & CEO</p>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs">Available</span>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="glow-card rounded-2xl overflow-hidden border border-white/8 bg-[#111220] flex-1">
            {/* Window bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#181928] border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-4 text-xs text-slate-500 font-mono">app.novatech.io/dashboard</span>
            </div>
            {/* Fake dashboard */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Total Revenue', val: '$128,430', change: '+12.4%', up: true },
                  { label: 'Active Users', val: '24,891', change: '+8.1%', up: true },
                  { label: 'Churn Rate', val: '1.2%', change: '-0.3%', up: false },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#0a0b14] rounded-xl p-4 border border-white/5">
                    <p className="text-slate-500 text-xs mb-1">{stat.label}</p>
                    <p className="text-white text-lg font-bold">{stat.val}</p>
                    <p
                      className={clsx(
                        'text-xs font-medium mt-1',
                        stat.up ? 'text-emerald-400' : 'text-red-400'
                      )}
                    >
                      {stat.change}
                    </p>
                  </div>
                ))}
              </div>
              {/* Fake chart bars */}
              <div className="bg-[#0a0b14] rounded-xl p-4 border border-white/5">
                <p className="text-slate-400 text-xs mb-4 font-medium">Revenue over time</p>
                <div className="flex items-end gap-2 h-24">
                  {[40, 65, 45, 80, 60, 90, 75, 95, 70, 100, 85, 110].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background:
                          i === 11
                            ? 'linear-gradient(180deg,#6172f3,#a78bfa)'
                            : 'rgba(97,114,243,0.25)',
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-slate-600 mt-2">
                  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2 bg-[#181928] border border-white/10 rounded-xl px-3 py-2 glow-card">
            <Play className="w-3.5 h-3.5 text-brand-400" />
            <span className="text-white text-xs font-medium">Watch demo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
