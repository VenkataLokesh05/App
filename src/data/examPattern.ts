import type { ExamPattern } from '@/types';

export const patterns: Record<string, ExamPattern> = {
  ssc: {
    examSlug: 'ssc',
    overview:
      'SSC CGL is conducted in two tiers. Tier 1 is a qualifying computer-based test with four sections. Tier 2 is the merit-deciding stage with multiple papers including a computer proficiency and descriptive test.',
    stages: [
      {
        name: 'Tier 1',
        subtitle: 'Qualifying Computer-Based Examination',
        papers: [
          {
            name: 'Single Paper (4 Sections)',
            subjects: [
              { name: 'General Intelligence & Reasoning', questions: 25, marks: 50 },
              { name: 'General Awareness', questions: 25, marks: 50 },
              { name: 'Quantitative Aptitude', questions: 25, marks: 50 },
              { name: 'English Comprehension', questions: 25, marks: 50 },
            ],
            totalQuestions: 100,
            totalMarks: 200,
            duration: '60 minutes',
            negativeMarking: '0.50 marks per wrong answer',
            mode: 'Online (CBT)',
            qualifying: true,
          },
        ],
      },
      {
        name: 'Tier 2',
        subtitle: 'Merit-deciding stage',
        papers: [
          {
            name: 'Paper I (Compulsory for all posts)',
            subjects: [
              { name: 'Mathematical Abilities', questions: 30, marks: 90 },
              { name: 'Reasoning & General Intelligence', questions: 30, marks: 90 },
              { name: 'English & Comprehension', questions: 45, marks: 135 },
              { name: 'General Awareness', questions: 25, marks: 75 },
              { name: 'Computer Knowledge', questions: 20, marks: 60 },
            ],
            totalQuestions: 150,
            totalMarks: 450,
            duration: '2 hours 15 minutes',
            negativeMarking: '1 mark per wrong answer (0.50 for Computer)',
            mode: 'Online (CBT)',
          },
          {
            name: 'Paper II (Descriptive)',
            subjects: [{ name: 'English / Hindi Essay & Letter', questions: 2, marks: 0 }],
            totalQuestions: 2,
            totalMarks: 0,
            duration: '30 minutes',
            negativeMarking: 'No negative marking',
            mode: 'Offline (Pen & Paper)',
            note: 'Conducting of Tier-2 in Hindi/English as per post requirement',
          },
        ],
      },
    ],
  },

  upsc: {
    examSlug: 'upsc',
    overview:
      'The UPSC Civil Services Examination has three stages — Preliminary (objective), Mains (descriptive) and Personality Test (interview). Only Prelims-qualified candidates appear for Mains.',
    stages: [
      {
        name: 'Preliminary Examination',
        subtitle: 'Screening test — marks not counted in final ranking',
        papers: [
          {
            name: 'General Studies Paper I',
            subjects: [
              { name: 'History', questions: 15, marks: 30 },
              { name: 'Geography', questions: 15, marks: 30 },
              { name: 'Polity', questions: 15, marks: 30 },
              { name: 'Economy', questions: 15, marks: 30 },
              { name: 'Environment & Science', questions: 20, marks: 40 },
              { name: 'Current Affairs', questions: 20, marks: 40 },
            ],
            totalQuestions: 100,
            totalMarks: 200,
            duration: '2 hours',
            negativeMarking: '1/3rd of marks (0.66) per wrong answer',
            mode: 'Online (CBT)',
            qualifying: true,
          },
          {
            name: 'CSAT (Paper II)',
            subjects: [
              { name: 'Comprehension', questions: 27, marks: 54 },
              { name: 'Logical Reasoning & Analytical Ability', questions: 18, marks: 36 },
              { name: 'Decision Making', questions: 10, marks: 20 },
              { name: 'Basic Numeracy & Data Interpretation', questions: 25, marks: 50 },
            ],
            totalQuestions: 80,
            totalMarks: 200,
            duration: '2 hours',
            negativeMarking: '1/3rd of marks (0.83) per wrong answer',
            mode: 'Online (CBT)',
            qualifying: true,
            note: 'Qualifying — 33% required',
          },
        ],
      },
      {
        name: 'Mains Examination',
        subtitle: 'Descriptive written examination — 9 papers',
        papers: [
          {
            name: 'Paper A — Indian Language',
            subjects: [{ name: 'One of 22 scheduled languages', questions: 0, marks: 300 }],
            totalQuestions: 0,
            totalMarks: 300,
            duration: '3 hours',
            negativeMarking: 'None',
            mode: 'Offline (Pen & Paper)',
            qualifying: true,
            note: 'Qualifying in nature',
          },
          {
            name: 'Paper B — English',
            subjects: [{ name: 'English Language', questions: 0, marks: 300 }],
            totalQuestions: 0,
            totalMarks: 300,
            duration: '3 hours',
            negativeMarking: 'None',
            mode: 'Offline (Pen & Paper)',
            qualifying: true,
            note: 'Qualifying in nature',
          },
          {
            name: 'Paper I — Essay',
            subjects: [{ name: 'Essay Writing (two essays)', questions: 2, marks: 250 }],
            totalQuestions: 2,
            totalMarks: 250,
            duration: '3 hours',
            negativeMarking: 'None',
            mode: 'Offline (Pen & Paper)',
          },
          {
            name: 'Paper II — GS-I',
            subjects: [
              { name: 'Indian Heritage & Culture', questions: 0, marks: 250 },
              { name: 'History & Geography', questions: 0, marks: 0 },
            ],
            totalQuestions: 20,
            totalMarks: 250,
            duration: '3 hours',
            negativeMarking: 'None',
            mode: 'Offline (Pen & Paper)',
          },
          {
            name: 'Paper III — GS-II',
            subjects: [{ name: 'Polity, Governance & Social Justice', questions: 0, marks: 250 }],
            totalQuestions: 20,
            totalMarks: 250,
            duration: '3 hours',
            negativeMarking: 'None',
            mode: 'Offline (Pen & Paper)',
          },
          {
            name: 'Paper IV — GS-III',
            subjects: [{ name: 'Economy, Agriculture & Technology', questions: 0, marks: 250 }],
            totalQuestions: 20,
            totalMarks: 250,
            duration: '3 hours',
            negativeMarking: 'None',
            mode: 'Offline (Pen & Paper)',
          },
          {
            name: 'Paper V — GS-IV',
            subjects: [{ name: 'Ethics, Integrity & Aptitude', questions: 0, marks: 250 }],
            totalQuestions: 20,
            totalMarks: 250,
            duration: '3 hours',
            negativeMarking: 'None',
            mode: 'Offline (Pen & Paper)',
          },
          {
            name: 'Paper VI & VII — Optional I & II',
            subjects: [{ name: 'Chosen optional subject', questions: 0, marks: 500 }],
            totalQuestions: 0,
            totalMarks: 500,
            duration: '3 hours each',
            negativeMarking: 'None',
            mode: 'Offline (Pen & Paper)',
          },
        ],
      },
      {
        name: 'Personality Test',
        subtitle: 'Interview — 275 marks',
        papers: [
          {
            name: 'Interview',
            subjects: [{ name: 'Personality Assessment', questions: 0, marks: 275 }],
            totalQuestions: 0,
            totalMarks: 275,
            duration: '~30 minutes',
            negativeMarking: 'None',
            mode: 'In-person',
          },
        ],
      },
    ],
  },
};

export function getPattern(examSlug: string): ExamPattern | undefined {
  return patterns[examSlug];
}
