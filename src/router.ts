import { useEffect, useState, useCallback } from 'react';

export interface Route {
  path: string;
  params: Record<string, string>;
}

function parseHash(): Route {
  const raw = window.location.hash.replace(/^#/, '') || '/';
  const clean = raw.split('?')[0];
  const segments = clean.split('/').filter(Boolean);
  const params: Record<string, string> = {};

  // Patterns:
  // /                       -> home
  // /exams                  -> exams listing
  // /exam/:examSlug         -> exam hub
  // /exam/:examSlug/syllabus            -> syllabus subjects
  // /exam/:examSlug/syllabus/:subjectId -> subject -> topics
  // /exam/:examSlug/syllabus/:subjectId/:topicId -> topic content
  // /exam/:examSlug/exam-pattern        -> exam pattern
  // /exam/:examSlug/practice            -> practice sets
  // /exam/:examSlug/practice/:setId     -> MCQ set
  // /search                 -> search
  // /about                  -> about
  // /contact                -> contact

  if (segments.length === 0) return { path: '/', params };
  if (segments[0] === 'exams') return { path: '/exams', params };
  if (segments[0] === 'search') return { path: '/search', params };
  if (segments[0] === 'about') return { path: '/about', params };
  if (segments[0] === 'contact') return { path: '/contact', params };

  if (segments[0] === 'exam' && segments[1]) {
    params.examSlug = segments[1];
    if (!segments[2]) return { path: '/exam/:examSlug', params };
    if (segments[2] === 'syllabus') {
      if (segments[3]) params.subjectId = segments[3];
      if (segments[4]) params.topicId = segments[4];
      return {
        path: segments[4]
          ? '/exam/:examSlug/syllabus/:subjectId/:topicId'
          : segments[3]
            ? '/exam/:examSlug/syllabus/:subjectId'
            : '/exam/:examSlug/syllabus',
        params,
      };
    }
    if (segments[2] === 'exam-pattern') return { path: '/exam/:examSlug/exam-pattern', params };
    if (segments[2] === 'practice') {
      if (segments[3]) params.setId = segments[3];
      return {
        path: segments[3] ? '/exam/:examSlug/practice/:setId' : '/exam/:examSlug/practice',
        params,
      };
    }
  }

  return { path: '/not-found', params };
}

export function navigate(to: string) {
  const target = to.startsWith('#') ? to : `#${to}`;
  if (window.location.hash === target) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  window.location.hash = target;
  window.scrollTo({ top: 0, behavior: 'auto' });
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash());

  useEffect(() => {
    const handler = () => setRoute(parseHash());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return route;
}

export function useNavigate() {
  return useCallback((to: string) => navigate(to), []);
}

export function buildPath(pattern: string, values: Record<string, string>): string {
  let p = pattern;
  for (const [k, v] of Object.entries(values)) {
    p = p.replace(`:${k}`, encodeURIComponent(v));
  }
  return p;
}
