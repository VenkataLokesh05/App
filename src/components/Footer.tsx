import { useNavigate } from '@/router';
import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react';
import { exams } from '@/data/exams';

export function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="mt-20 border-t border-ink-200 bg-white">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="text-base font-extrabold text-ink-900">ExamPrep<span className="text-primary-600">India</span></span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              A modern preparation platform for India's government competitive examinations —
              syllabus, exam pattern and practice, all in one place.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-ink-500">Exams</h4>
            <ul className="mt-4 space-y-2.5">
              {exams.slice(0, 6).map((exam) => (
                <li key={exam.slug}>
                  <button
                    onClick={() => navigate(`/exam/${exam.slug}`)}
                    className="text-sm text-ink-600 hover:text-primary-700 transition-colors"
                  >
                    {exam.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-ink-500">Platform</h4>
            <ul className="mt-4 space-y-2.5">
              <li><button onClick={() => navigate('/exams')} className="text-sm text-ink-600 hover:text-primary-700">All Exams</button></li>
              <li><button onClick={() => navigate('/search')} className="text-sm text-ink-600 hover:text-primary-700">Search</button></li>
              <li><button onClick={() => navigate('/about')} className="text-sm text-ink-600 hover:text-primary-700">About Us</button></li>
              <li><button onClick={() => navigate('/contact')} className="text-sm text-ink-600 hover:text-primary-700">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-ink-500">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-600">
              <li className="flex items-start gap-2.5"><Mail className="h-4 w-4 mt-0.5 text-primary-600" /> support@examprepindia.in</li>
              <li className="flex items-start gap-2.5"><Phone className="h-4 w-4 mt-0.5 text-primary-600" /> +91 1800 000 0000</li>
              <li className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-primary-600" /> New Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ink-200 pt-6">
          <p className="text-xs text-ink-500">© {new Date().getFullYear()} ExamPrep India. Built for aspirants, by aspirants.</p>
          <p className="text-xs text-ink-400">Sample content for demonstration. Not affiliated with any government body.</p>
        </div>
      </div>
    </footer>
  );
}
