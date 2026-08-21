import { useEffect, useRef, useState } from 'react';
import { Link } from '@/components/Link';
import { useNavigate } from '@/router';
import { exams } from '@/data/exams';
import { Search, Menu, X, GraduationCap, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Exams', to: '/exams' },
  { label: 'Practice', to: '/exams', match: 'practice' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [examMenuOpen, setExamMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const examMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (examMenuRef.current && !examMenuRef.current.contains(e.target as Node)) {
        setExamMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setMobileOpen(false);
      setQuery('');
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm ring-1 ring-ink-200/60'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-extrabold tracking-tight text-ink-900">ExamPrep<span className="text-primary-600">India</span></span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-ink-500">Govt Exam Platform</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          <Link to="/" className="px-3 py-2 text-sm font-semibold text-ink-700 rounded-lg hover:bg-ink-100 transition-colors">Home</Link>

          <div className="relative" ref={examMenuRef}>
            <button
              onClick={() => setExamMenuOpen((v) => !v)}
              className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-ink-700 rounded-lg hover:bg-ink-100 transition-colors"
            >
              Exams <ChevronDown className={`h-4 w-4 transition-transform ${examMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {examMenuOpen && (
              <div className="absolute left-0 top-full pt-2 w-[640px] animate-slide-down">
                <div className="rounded-2xl bg-white p-3 shadow-cardHover ring-1 ring-ink-200">
                  <div className="grid grid-cols-2 gap-1">
                    {exams.map((exam) => {
                      const Icon = exam.icon;
                      return (
                        <Link
                          key={exam.slug}
                          to={`/exam/${exam.slug}`}
                          onClick={() => setExamMenuOpen(false)}
                          className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-ink-50 transition-colors"
                        >
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-50 text-primary-600">
                            <Icon className="h-4.5 w-4.5" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-ink-900">{exam.name}</span>
                            <span className="block truncate text-xs text-ink-500">{exam.tagline}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    to="/exams"
                    onClick={() => setExamMenuOpen(false)}
                    className="mt-2 flex items-center justify-center rounded-xl bg-ink-50 py-2 text-sm font-semibold text-primary-700 hover:bg-ink-100"
                  >
                    View all exams
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/search" className="px-3 py-2 text-sm font-semibold text-ink-700 rounded-lg hover:bg-ink-100 transition-colors">Search</Link>
          <Link to="/about" className="px-3 py-2 text-sm font-semibold text-ink-700 rounded-lg hover:bg-ink-100 transition-colors">About</Link>
          <Link to="/contact" className="px-3 py-2 text-sm font-semibold text-ink-700 rounded-lg hover:bg-ink-100 transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block" ref={searchRef}>
            <form onSubmit={submitSearch} className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setSearchOpen(true)}
                placeholder="Search exams, topics..."
                className="w-48 md:w-64 rounded-xl border-0 bg-ink-100 py-2 pl-9 pr-3 text-sm text-ink-900 placeholder:text-ink-400 focus:bg-white focus:ring-2 focus:ring-primary-500 transition-all"
                aria-label="Search"
              />
            </form>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-xl text-ink-700 hover:bg-ink-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-ink-200 bg-white animate-slide-down">
          <div className="container-page py-4 space-y-1">
            <form onSubmit={submitSearch} className="relative mb-3">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search exams, topics..."
                className="w-full rounded-xl border-0 bg-ink-100 py-2.5 pl-9 pr-3 text-sm focus:bg-white focus:ring-2 focus:ring-primary-500"
                aria-label="Search"
              />
            </form>
            <Link to="/" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-800 hover:bg-ink-100">Home</Link>
            <Link to="/exams" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-800 hover:bg-ink-100">All Exams</Link>
            <Link to="/search" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-800 hover:bg-ink-100">Search</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-800 hover:bg-ink-100">About</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-800 hover:bg-ink-100">Contact</Link>
            <div className="pt-2 mt-2 border-t border-ink-200">
              <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink-500">Popular Exams</p>
              <div className="grid grid-cols-2 gap-1 pt-1">
                {exams.slice(0, 8).map((exam) => (
                  <Link
                    key={exam.slug}
                    to={`/exam/${exam.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100"
                  >
                    {exam.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
