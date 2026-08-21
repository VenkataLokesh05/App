import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Link } from '@/components/Link';
import { exams } from '@/data/exams';
import { Target, BookOpen, ListTree, PenSquare, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="container-page py-8 sm:py-10">
      <Breadcrumbs items={[{ label: 'About' }]} />

      <div className="mt-5 rounded-3xl bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 px-6 py-10 sm:px-10 sm:py-14 text-white relative overflow-hidden">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold ring-1 ring-white/20">
            <Target className="h-3.5 w-3.5 text-accent-300" /> Our Mission
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">About ExamPrep India</h1>
          <p className="mt-3 text-primary-100 leading-relaxed">
            We're building a single, well-organised platform where aspirants can find the syllabus,
            exam pattern and practice questions for every major Indian government examination —
            without jumping between dozens of websites and PDFs.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <Value icon={Layers} title="Unified structure" text="Every exam follows the same clear hierarchy: Exam → Syllabus → Subject → Topic → Concept. Learn once, navigate anywhere." />
        <Value icon={ShieldCheck} title="Reliable & clean" text="Content is curated and presented in a distraction-free, professional interface built for serious preparation." />
        <Value icon={Target} title="Practice-focused" text="Every practice question includes the correct answer and a full explanation, so every attempt teaches you something." />
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-ink-900">What you'll find here</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <Feature icon={BookOpen} title="Syllabus" text="Topic-wise breakdown of every subject, with concept notes for each topic." />
          <Feature icon={ListTree} title="Exam Pattern" text="Visual tree diagrams of stages, papers, marks and negative marking." />
          <Feature icon={PenSquare} title="Practice" text="MCQ sets with instant feedback and detailed explanations." />
        </div>
      </div>

      <div className="mt-12 card p-6 sm:p-8">
        <h2 className="text-xl font-bold text-ink-900">Exams currently on the platform</h2>
        <p className="mt-1 text-sm text-ink-600">The architecture supports adding many more — here's what's available today.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {exams.map((exam) => (
            <Link key={exam.slug} to={`/exam/${exam.slug}`} className="chip bg-ink-100 text-ink-700 ring-1 ring-ink-200 hover:bg-primary-50 hover:text-primary-700 hover:ring-primary-200 transition-colors">
              {exam.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl bg-ink-900 px-6 py-8 sm:px-10 text-white">
        <div>
          <h2 className="text-xl font-bold">Ready to start preparing?</h2>
          <p className="mt-1 text-ink-300 text-sm">Pick an exam and dive in.</p>
        </div>
        <Link to="/exams" className="btn bg-white text-primary-800 hover:bg-primary-50 shadow-lg">
          Browse exams <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function Value({ icon: Icon, title, text }: { icon: typeof Layers; title: string; text: string }) {
  return (
    <div className="card p-6">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-50 text-primary-700 ring-1 ring-primary-200">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{text}</p>
    </div>
  );
}

function Feature({ icon: Icon, title, text }: { icon: typeof BookOpen; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5">
      <Icon className="h-6 w-6 text-primary-600" />
      <h3 className="mt-3 font-semibold text-ink-900">{title}</h3>
      <p className="mt-1 text-sm text-ink-600">{text}</p>
    </div>
  );
}
