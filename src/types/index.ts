import type { LucideIcon } from 'lucide-react';

export type SectionKey = 'syllabus' | 'exam-pattern' | 'practice';

export interface ExamMeta {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  fullName: string;
  icon: LucideIcon;
  accent: 'blue' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan' | 'orange' | 'teal' | 'indigo' | 'slate';
  tagline: string;
  highlights: string[];
  conductingBody: string;
  frequency: string;
  eligibility: string;
}

export interface TopicContent {
  heading: string;
  intro: string;
  sections: {
    title: string;
    points: string[];
  }[];
  tips?: string[];
}

export interface Subject {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  topics: {
    id: string;
    name: string;
    content: TopicContent;
  }[];
}

export interface Syllabus {
  examSlug: string;
  subjects: Subject[];
}

export interface PatternStage {
  name: string;
  subtitle?: string;
  papers: PatternPaper[];
}

export interface PatternPaper {
  name: string;
  subjects: { name: string; questions: number; marks: number }[];
  totalQuestions: number;
  totalMarks: number;
  duration: string;
  negativeMarking: string;
  mode?: string;
  qualifying?: boolean;
  note?: string;
}

export interface ExamPattern {
  examSlug: string;
  overview: string;
  stages: PatternStage[];
}

export interface MCQOption {
  id: string;
  text: string;
}

export interface MCQ {
  id: string;
  question: string;
  options: MCQOption[];
  correctOptionId: string;
  explanation: string;
  subject: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  examSlug: string;
  source?: string;
}

export interface PracticeSet {
  id: string;
  title: string;
  description: string;
  subject: string;
  questionIds: string[];
}

export interface ExamPractice {
  examSlug: string;
  sets: PracticeSet[];
  questions: MCQ[];
}
