import { useState } from 'react';
import type { MCQ } from '@/types';
import { Check, X, Lightbulb, RotateCcw } from 'lucide-react';

const difficultyStyles: Record<MCQ['difficulty'], string> = {
  Easy: 'bg-success-50 text-success-700 ring-success-200',
  Medium: 'bg-warning-50 text-warning-700 ring-warning-200',
  Hard: 'bg-error-50 text-error-700 ring-error-200',
};

interface MCQCardProps {
  mcq: MCQ;
  index: number;
  total: number;
}

export function MCQCard({ mcq, index, total }: MCQCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = submitted && selected === mcq.correctOptionId;
  const isWrong = submitted && selected !== null && selected !== mcq.correctOptionId;

  const reset = () => {
    setSelected(null);
    setSubmitted(false);
  };

  return (
    <div className="card p-5 sm:p-6 animate-fade-up">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary-50 text-xs font-bold text-primary-700 ring-1 ring-primary-200">
            {index + 1}
          </span>
          <span className="chip ring-1 bg-ink-100 text-ink-700 ring-ink-200">{mcq.topic}</span>
          <span className={`chip ring-1 ${difficultyStyles[mcq.difficulty]}`}>{mcq.difficulty}</span>
        </div>
        <span className="text-xs font-medium text-ink-400">Question {index + 1} of {total}</span>
      </div>

      <p className="mt-4 text-base font-semibold leading-relaxed text-ink-900">{mcq.question}</p>

      <div className="mt-4 space-y-2.5">
        {mcq.options.map((opt) => {
          const isThisCorrect = submitted && opt.id === mcq.correctOptionId;
          const isThisWrong = submitted && opt.id === selected && opt.id !== mcq.correctOptionId;
          const isSelected = selected === opt.id;

          return (
            <button
              key={opt.id}
              disabled={submitted}
              onClick={() => setSelected(opt.id)}
              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200 ${
                isThisCorrect
                  ? 'border-success-300 bg-success-50 text-success-900 ring-1 ring-success-300'
                  : isThisWrong
                    ? 'border-error-300 bg-error-50 text-error-900 ring-1 ring-error-300'
                    : isSelected
                      ? 'border-primary-400 bg-primary-50 text-ink-900 ring-1 ring-primary-300'
                      : 'border-ink-200 bg-white text-ink-700 hover:border-primary-300 hover:bg-primary-50/50'
              } ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-md text-xs font-bold ${
                isThisCorrect ? 'bg-success-600 text-white' : isThisWrong ? 'bg-error-600 text-white' : isSelected ? 'bg-primary-600 text-white' : 'bg-ink-100 text-ink-600'
              }`}>
                {isThisCorrect ? <Check className="h-3.5 w-3.5" /> : isThisWrong ? <X className="h-3.5 w-3.5" /> : opt.id.toUpperCase()}
              </span>
              <span className="font-medium">{opt.text}</span>
            </button>
          );
        })}
      </div>

      {!submitted && (
        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs text-ink-500">Select one option, then submit to check your answer.</p>
          <button
            onClick={() => setSubmitted(true)}
            disabled={!selected}
            className="btn-primary"
          >
            Submit Answer
          </button>
        </div>
      )}

      {submitted && (
        <div className={`mt-5 rounded-xl p-4 animate-fade-in ${isCorrect ? 'bg-success-50 ring-1 ring-success-200' : 'bg-error-50 ring-1 ring-error-200'}`}>
          <div className="flex items-center gap-2">
            {isCorrect ? (
              <span className="flex items-center gap-2 text-sm font-bold text-success-800">
                <Check className="h-4.5 w-4.5" /> Correct!
              </span>
            ) : (
              <span className="flex items-center gap-2 text-sm font-bold text-error-800">
                <X className="h-4.5 w-4.5" /> {isWrong ? 'Incorrect' : 'Not answered'}
              </span>
            )}
            {!isCorrect && (
              <span className="text-sm text-error-700">
                Correct answer: <strong className="font-bold">{mcq.options.find((o) => o.id === mcq.correctOptionId)?.text}</strong>
              </span>
            )}
          </div>
          <div className="mt-3 flex items-start gap-2 rounded-lg bg-white/70 p-3">
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
            <p className="text-sm leading-relaxed text-ink-700"><strong className="font-semibold text-ink-900">Explanation: </strong>{mcq.explanation}</p>
          </div>
          {mcq.source && <p className="mt-2 text-xs text-ink-500">Source: {mcq.source}</p>}
          <button onClick={reset} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800">
            <RotateCcw className="h-3.5 w-3.5" /> Try again
          </button>
        </div>
      )}
    </div>
  );
}
