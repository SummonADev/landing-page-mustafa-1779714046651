import { Zap, Github, Twitter, Linkedin } from 'lucide-react';

const LINKS = [
  {
    heading: 'Product',
    items: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  },
  {
    heading: 'Company',
    items: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  },
  {
    heading: 'Resources',
    items: ['Docs', 'API Reference', 'Guides', 'Community', 'Support'],
  },
  {
    heading: 'Legal',
    items: ['Privacy', 'Terms', 'Security', 'Cookie Policy'],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Nova<span className="text-brand-400">Tech</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed">
              The platform for ambitious teams building ambitious products.
            </p>
          </div>

          {/* Links */}
          {LINKS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white text-sm font-semibold mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} NovaTech, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="GitHub"
              className="text-slate-600 hover:text-slate-300 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-slate-600 hover:text-slate-300 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-slate-600 hover:text-slate-300 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
