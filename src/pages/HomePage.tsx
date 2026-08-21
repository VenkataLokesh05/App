import { Link } from '@/components/Link';
import { ExamCard } from '@/components/Cards';
import { SectionHeader, SeeAllLink } from '@/components/Section';
import { exams } from '@/data/exams';
import { getPractice } from '@/data/practice';
import { useNavigate } from '@/router';
import {
  Search,
  ArrowRight,
  BookOpen,
  ListTree,
  PenSquare,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Target,
} from 'lucide-react';

export function HomePage() {
  const navigate = useNavigate();
  const popular = exams.slice(0, 6);
  const totalQuestions = Object.values(getPractice('ssc')!).concat(Object.values(getPractice('upsc')!).flat()).length;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white">
        <div className="absolute inset-0">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary-500/30 blur-3xl" />
          <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>
        <div className="container-page relative py-16 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold ring-1 ring-white/20 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent-300" />
              Complete preparation, all in one place
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Master India's <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">Government Exams</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-100">
              Structured syllabus, visual exam patterns and practice questions for SSC, UPSC,
              Banking, Railways and every major competitive examination — designed to take you
              from first concept to final selection.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/exams" className="btn bg-white text-primary-800 hover:bg-primary-50 shadow-lg">
                Explore Exams <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => navigate('/exam/ssc')}
                className="btn bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20 backdrop-blur"
              >
                Start with SSC
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              <Stat value={`${exams.length}`} label="Exam Categories" />
              <Stat value="50+" label="Subjects & Topics" />
              <Stat value={`${totalQuestions}+`} label="Practice Questions" />
            </div>
          </div>
        </div>
      </section>

      {/* Search bar */}
      <section className="container-page -mt-7 relative z-10">
        <div className="card p-2 shadow-cardHover">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const q = (e.currentTarget.elements.namedItem('q') as HTMLInputElement).value;
              if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`);
            }}
            className="flex items-center gap-2"
          >
            <Search className="ml-3 h-5 w-5 shrink-0 text-ink-400" />
            <input
              name="q"
              placeholder="Search for an exam, subject or topic..."
              className="w-full bg-transparent py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
              aria-label="Search exams"
            />
            <button type="submit" className="btn-primary shrink-0">Search</button>
          </form>
        </div>
      </section>

      {/* Popular exams */}
      <section className="container-page py-14 sm:py-16">
        <SectionHeader
          eyebrow="Most Prepared"
          title="Popular Examinations"
          description="Start with the exams lakhs of aspirants prepare for every year."
        >
          <SeeAllLink to="/exams" title="View all exams" />
        </SectionHeader>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((exam, i) => (
            <ExamCard key={exam.slug} exam={exam} index={i} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white border-y border-ink-200">
        <div className="container-page py-14 sm:py-16">
          <SectionHeader
            eyebrow="Everything you need"
            title="Three pillars of preparation"
            description="Every exam on the platform follows the same clear structure so you always know where to go next."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <FeatureCard icon={BookOpen} accent="blue" title="Syllabus" description="Hierarchical, topic-wise syllabus broken down from subject to concept so nothing is missed." to="/exam/ssc/syllabus" />
            <FeatureCard icon={ListTree} accent="emerald" title="Exam Pattern" description="Visual tree diagrams of tiers, papers, marks and negative marking — see the whole structure at a glance." to="/exam/ssc/exam-pattern" />
            <FeatureCard icon={PenSquare} accent="amber" title="Practice Exercises" description="MCQ practice sets with instant answers, explanations and difficulty tagging." to="/exam/ssc/practice" />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="container-page py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary-600">Built to scale</p>
            <h2 className="mt-1.5 text-2xl sm:text-3xl font-bold text-ink-900">A platform that grows with your ambitions</h2>
            <p className="mt-3 text-ink-600 leading-relaxed">
              Whether you're preparing for SSC CGL or UPSC Civil Services, the same clean interface
              adapts to every exam. New examinations, subjects and thousands of MCQs can be added
              without changing the way you navigate.
            </p>
            <div className="mt-6 space-y-4">
              <Bullet icon={ShieldCheck} title="Structured & reliable" text="Content organised exactly the way the exam demands — no clutter, no guesswork." />
              <Bullet icon={TrendingUp} title="Progressive depth" text="Drill down from exam to subject to topic to detailed concepts in a few clicks." />
              <Bullet icon={Target} title="Practice that sticks" text="Every question comes with an explanation so you learn from every attempt." />
            </div>
            <Link to="/exams" className="btn-primary mt-7 inline-flex">Get started <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {exams.slice(0, 6).map((exam, i) => {
              const Icon = exam.icon;
              return (
                <button
                  key={exam.slug}
                  onClick={() => navigate(`/exam/${exam.slug}`)}
                  className={`card card-hover p-5 text-left animate-fade-up ${i % 2 ? 'translate-y-4' : ''}`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-50 text-primary-700 ring-1 ring-primary-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 font-bold text-ink-900">{exam.name}</p>
                  <p className="mt-0.5 text-xs text-ink-500">{exam.tagline}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* All exams CTA */}
      <section className="container-page pb-16">
        <div className="rounded-3xl bg-gradient-to-br from-ink-900 to-primary-950 px-6 py-10 sm:px-12 sm:py-14 text-center text-white relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-primary-500/20 blur-3xl" />
          <h2 className="text-2xl sm:text-3xl font-bold">Ready to begin your preparation?</h2>
          <p className="mt-2 text-primary-200 max-w-xl mx-auto">Pick your exam and dive into the syllabus, pattern and practice today.</p>
          <Link to="/exams" className="btn bg-white text-primary-800 hover:bg-primary-50 mt-6 inline-flex shadow-lg">
            Browse all {exams.length} exams <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl sm:text-3xl font-extrabold text-white">{value}</p>
      <p className="mt-0.5 text-xs text-primary-200">{label}</p>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description, to, accent }: { icon: typeof BookOpen; title: string; description: string; to: string; accent: 'blue' | 'emerald' | 'amber' }) {
  const colors = {
    blue: 'bg-primary-50 text-primary-700 ring-primary-200',
    emerald: 'bg-success-50 text-success-700 ring-success-200',
    amber: 'bg-accent-50 text-accent-700 ring-accent-200',
  }[accent];
  return (
    <Link to={to} className="group block animate-fade-up">
      <div className="card card-hover h-full p-6">
        <span className={`grid h-12 w-12 place-items-center rounded-2xl ring-1 ${colors}`}>
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-lg font-bold text-ink-900">{title}</h3>
        <p className="mt-2 text-sm text-ink-600 leading-relaxed">{description}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700">
          See example <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

function Bullet({ icon: Icon, title, text }: { icon: typeof ShieldCheck; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary-700 ring-1 ring-primary-200">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="font-semibold text-ink-900">{title}</p>
        <p className="text-sm text-ink-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
