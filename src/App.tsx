import { useRoute } from '@/router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { ExamsPage } from '@/pages/ExamsPage';
import { ExamPage } from '@/pages/ExamPage';
import { SyllabusPage } from '@/pages/SyllabusPage';
import { SubjectPage } from '@/pages/SubjectPage';
import { TopicPage } from '@/pages/TopicPage';
import { ExamPatternPage } from '@/pages/ExamPatternPage';
import { PracticePage } from '@/pages/PracticePage';
import { PracticeSetPage } from '@/pages/PracticeSetPage';
import { SearchPage } from '@/pages/SearchPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { getExam } from '@/data/exams';

function renderRoute(path: string, params: Record<string, string>) {
  switch (path) {
    case '/':
      return <HomePage />;
    case '/exams':
      return <ExamsPage />;
    case '/search':
      return <SearchPage />;
    case '/about':
      return <AboutPage />;
    case '/contact':
      return <ContactPage />;
    case '/exam/:examSlug':
      return <ExamPage examSlug={params.examSlug} />;
    case '/exam/:examSlug/syllabus':
      return <SyllabusPage examSlug={params.examSlug} />;
    case '/exam/:examSlug/syllabus/:subjectId':
      return <SubjectPage examSlug={params.examSlug} subjectId={params.subjectId} />;
    case '/exam/:examSlug/syllabus/:subjectId/:topicId':
      return <TopicPage examSlug={params.examSlug} subjectId={params.subjectId} topicId={params.topicId} />;
    case '/exam/:examSlug/exam-pattern':
      return <ExamPatternPage examSlug={params.examSlug} />;
    case '/exam/:examSlug/practice':
      return <PracticePage examSlug={params.examSlug} />;
    case '/exam/:examSlug/practice/:setId':
      return <PracticeSetPage examSlug={params.examSlug} setId={params.setId} />;
    default:
      return <NotFoundPage />;
  }
}

function App() {
  const route = useRoute();

  // guard: if exam slug is invalid, show not found for exam routes
  const isExamRoute = route.path.startsWith('/exam/');
  const examMissing = isExamRoute && !getExam(route.params.examSlug);

  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <Navbar />
      <main className="flex-1">{examMissing ? <NotFoundPage /> : renderRoute(route.path, route.params)}</main>
      <Footer />
    </div>
  );
}

export default App;
