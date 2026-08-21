import type { ExamPractice } from '@/types';

export const practices: Record<string, ExamPractice> = {
  ssc: {
    examSlug: 'ssc',
    sets: [
      {
        id: 'ssc-quant-1',
        title: 'Quantitative Aptitude — Basics',
        description: 'Number system, percentage and profit & loss practice set.',
        subject: 'Quantitative Aptitude',
        questionIds: ['ssc-q1', 'ssc-q2', 'ssc-q3', 'ssc-q4', 'ssc-q5'],
      },
      {
        id: 'ssc-reasoning-1',
        title: 'Reasoning — Series & Coding',
        description: 'Number series, analogy and coding-decoding practice set.',
        subject: 'Reasoning',
        questionIds: ['ssc-q6', 'ssc-q7', 'ssc-q8'],
      },
      {
        id: 'ssc-english-1',
        title: 'English — Grammar & Vocabulary',
        description: 'Error detection, synonyms and one-word substitution.',
        subject: 'English',
        questionIds: ['ssc-q9', 'ssc-q10'],
      },
    ],
    questions: [
      {
        id: 'ssc-q1',
        examSlug: 'ssc',
        subject: 'Quantitative Aptitude',
        topic: 'Percentage',
        difficulty: 'Easy',
        question: 'A student scored 360 marks out of 500. What percentage did the student score?',
        options: [
          { id: 'a', text: '68%' },
          { id: 'b', text: '70%' },
          { id: 'c', text: '72%' },
          { id: 'd', text: '75%' },
        ],
        correctOptionId: 'c',
        explanation:
          'Percentage = (360 / 500) × 100 = 0.72 × 100 = 72%. The student scored 72% in the examination.',
        source: 'SSC CGL 2022',
      },
      {
        id: 'ssc-q2',
        examSlug: 'ssc',
        subject: 'Quantitative Aptitude',
        topic: 'Profit and Loss',
        difficulty: 'Medium',
        question:
          'An article is bought for ₹600 and sold for ₹750. What is the profit percentage?',
        options: [
          { id: 'a', text: '20%' },
          { id: 'b', text: '25%' },
          { id: 'c', text: '30%' },
          { id: 'd', text: '15%' },
        ],
        correctOptionId: 'b',
        explanation:
          'Profit = 750 − 600 = ₹150. Profit % = (150 / 600) × 100 = 25%. Hence the profit percentage is 25%.',
        source: 'SSC CHSL 2021',
      },
      {
        id: 'ssc-q3',
        examSlug: 'ssc',
        subject: 'Quantitative Aptitude',
        topic: 'Ratio and Proportion',
        difficulty: 'Easy',
        question: 'If the ratio of two numbers is 3:5 and their sum is 64, what is the smaller number?',
        options: [
          { id: 'a', text: '20' },
          { id: 'b', text: '24' },
          { id: 'c', text: '28' },
          { id: 'd', text: '32' },
        ],
        correctOptionId: 'b',
        explanation:
          'Let the numbers be 3k and 5k. Then 3k + 5k = 8k = 64, so k = 8. The smaller number = 3k = 3 × 8 = 24.',
        source: 'SSC CGL 2023',
      },
      {
        id: 'ssc-q4',
        examSlug: 'ssc',
        subject: 'Quantitative Aptitude',
        topic: 'Average',
        difficulty: 'Medium',
        question:
          'The average of 5 numbers is 18. If a sixth number 30 is added, what is the new average?',
        options: [
          { id: 'a', text: '19' },
          { id: 'b', text: '20' },
          { id: 'c', text: '21' },
          { id: 'd', text: '22' },
        ],
        correctOptionId: 'b',
        explanation:
          'Sum of 5 numbers = 5 × 18 = 90. New sum = 90 + 30 = 120. New average = 120 / 6 = 20.',
        source: 'SSC MTS 2022',
      },
      {
        id: 'ssc-q5',
        examSlug: 'ssc',
        subject: 'Quantitative Aptitude',
        topic: 'Simple Interest',
        difficulty: 'Easy',
        question:
          'Find the simple interest on ₹2000 at 5% per annum for 3 years.',
        options: [
          { id: 'a', text: '₹250' },
          { id: 'b', text: '₹300' },
          { id: 'c', text: '₹350' },
          { id: 'd', text: '₹400' },
        ],
        correctOptionId: 'b',
        explanation:
          'SI = (P × R × T) / 100 = (2000 × 5 × 3) / 100 = 30000 / 100 = ₹300.',
        source: 'SSC GD 2021',
      },
      {
        id: 'ssc-q6',
        examSlug: 'ssc',
        subject: 'Reasoning',
        topic: 'Series',
        difficulty: 'Easy',
        question: 'Find the next term in the series: 2, 6, 12, 20, 30, ?',
        options: [
          { id: 'a', text: '40' },
          { id: 'b', text: '42' },
          { id: 'c', text: '44' },
          { id: 'd', text: '46' },
        ],
        correctOptionId: 'b',
        explanation:
          'The differences are 4, 6, 8, 10, 12 — increasing by 2 each time. So 30 + 12 = 42.',
        source: 'SSC CGL 2022',
      },
      {
        id: 'ssc-q7',
        examSlug: 'ssc',
        subject: 'Reasoning',
        topic: 'Analogy',
        difficulty: 'Medium',
        question: 'Book is to Author as Painting is to ____?',
        options: [
          { id: 'a', text: 'Canvas' },
          { id: 'b', text: 'Painter' },
          { id: 'c', text: 'Brush' },
          { id: 'd', text: 'Gallery' },
        ],
        correctOptionId: 'b',
        explanation:
          'A book is created by an author; similarly, a painting is created by a painter. The relationship is creator-to-creation.',
        source: 'SSC CHSL 2020',
      },
      {
        id: 'ssc-q8',
        examSlug: 'ssc',
        subject: 'Reasoning',
        topic: 'Coding-Decoding',
        difficulty: 'Medium',
        question: 'If CAT is coded as 24, how is DOG coded?',
        options: [
          { id: 'a', text: '26' },
          { id: 'b', text: '27' },
          { id: 'c', text: '29' },
          { id: 'd', text: '31' },
        ],
        correctOptionId: 'a',
        explanation:
          'C(3) + A(1) + T(20) = 24. Applying the same rule, D(4) + O(15) + G(7) = 26. So DOG is coded as 26.',
        source: 'SSC CPO 2021',
      },
      {
        id: 'ssc-q9',
        examSlug: 'ssc',
        subject: 'English',
        topic: 'Vocabulary',
        difficulty: 'Easy',
        question: 'Choose the synonym of "ABUNDANT".',
        options: [
          { id: 'a', text: 'Scarce' },
          { id: 'b', text: 'Plentiful' },
          { id: 'c', text: 'Rare' },
          { id: 'd', text: 'Empty' },
        ],
        correctOptionId: 'b',
        explanation:
          '"Abundant" means existing in large quantities — its synonym is "Plentiful". The other options are antonyms or unrelated.',
        source: 'SSC CGL 2023',
      },
      {
        id: 'ssc-q10',
        examSlug: 'ssc',
        subject: 'English',
        topic: 'Grammar',
        difficulty: 'Medium',
        question: 'Identify the grammatically correct sentence.',
        options: [
          { id: 'a', text: 'He do not like tea.' },
          { id: 'b', text: 'He does not likes tea.' },
          { id: 'c', text: 'He does not like tea.' },
          { id: 'd', text: 'He not like tea.' },
        ],
        correctOptionId: 'c',
        explanation:
          'With the third person singular "he", the auxiliary "does" is used and the main verb stays in its base form: "He does not like tea."',
        source: 'SSC Stenographer 2022',
      },
    ],
  },

  upsc: {
    examSlug: 'upsc',
    sets: [
      {
        id: 'upsc-prelims-1',
        title: 'Prelims GS — Mixed Practice',
        description: 'History, polity and economy questions in UPSC Prelims style.',
        subject: 'General Studies',
        questionIds: ['upsc-q1', 'upsc-q2', 'upsc-q3', 'upsc-q4'],
      },
    ],
    questions: [
      {
        id: 'upsc-q1',
        examSlug: 'upsc',
        subject: 'History',
        topic: 'Modern India',
        difficulty: 'Medium',
        question:
          'The Non-Cooperation Movement was launched by Mahatma Gandhi in which year?',
        options: [
          { id: 'a', text: '1919' },
          { id: 'b', text: '1920' },
          { id: 'c', text: '1921' },
          { id: 'd', text: '1922' },
        ],
        correctOptionId: 'b',
        explanation:
          'The Non-Cooperation Movement was launched in September 1920 at the Calcutta session of the Indian National Congress and gained momentum at the Nagpur session in December 1920.',
        source: 'UPSC CSE Prelims 2021',
      },
      {
        id: 'upsc-q2',
        examSlug: 'upsc',
        subject: 'Polity',
        topic: 'Constitution',
        difficulty: 'Hard',
        question:
          'The concept of "Basic Structure" of the Constitution was propounded by the Supreme Court in which case?',
        options: [
          { id: 'a', text: 'Golaknath Case (1967)' },
          { id: 'b', text: 'Kesavananda Bharati Case (1973)' },
          { id: 'c', text: 'Minerva Mills Case (1980)' },
          { id: 'd', text: 'Indira Nehru Gandhi Case (1975)' },
        ],
        correctOptionId: 'b',
        explanation:
          'The Basic Structure Doctrine was laid down by the Supreme Court in the landmark Kesavananda Bharati v. State of Kerala (1973) case, holding that Parliament cannot amend the basic structure of the Constitution.',
        source: 'UPSC CSE Prelims 2019',
      },
      {
        id: 'upsc-q3',
        examSlug: 'upsc',
        subject: 'Economy',
        topic: 'Macroeconomics',
        difficulty: 'Medium',
        question:
          'Which of the following is NOT a tool of monetary policy used by the RBI?',
        options: [
          { id: 'a', text: 'Repo Rate' },
          { id: 'b', text: 'Cash Reserve Ratio (CRR)' },
          { id: 'c', text: 'Open Market Operations' },
          { id: 'd', text: 'Fiscal Deficit Target' },
        ],
        correctOptionId: 'd',
        explanation:
          'Fiscal deficit is a fiscal policy instrument controlled by the Government, not the RBI. Repo rate, CRR and open market operations are monetary policy tools of the RBI.',
        source: 'UPSC CSE Prelims 2020',
      },
      {
        id: 'upsc-q4',
        examSlug: 'upsc',
        subject: 'Geography',
        topic: 'Physical Geography',
        difficulty: 'Easy',
        question: 'The Himalayas were formed as a result of which type of plate movement?',
        options: [
          { id: 'a', text: 'Divergent boundary' },
          { id: 'b', text: 'Transform boundary' },
          { id: 'c', text: 'Convergent boundary (continental–continental)' },
          { id: 'd', text: 'Conservative boundary' },
        ],
        correctOptionId: 'c',
        explanation:
          'The Himalayas formed from the collision (convergent boundary) of the Indian Plate with the Eurasian Plate — both continental plates — causing uplift and folding.',
        source: 'UPSC CSE Prelims 2022',
      },
    ],
  },
};

export function getPractice(examSlug: string): ExamPractice | undefined {
  return practices[examSlug];
}
