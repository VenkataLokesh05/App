import type { ExamPattern } from '@/types';
import {
  ChevronDown,
  FileText,
  Clock,
  MinusCircle,
  Users,
  Award,
  Monitor,
  PenLine,
  Info,
} from 'lucide-react';

export function ExamPatternTree({ pattern }: { pattern: ExamPattern }) {
  return (
    <div className="space-y-6">
      <div className="card p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
          <p className="text-sm leading-relaxed text-ink-700">{pattern.overview}</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-4 text-center text-white shadow-md">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-200">Examination Structure</p>
          <p className="mt-0.5 text-lg font-bold">Stages & Papers</p>
        </div>
        <div className="h-8 w-px bg-ink-300" />
      </div>

      {pattern.stages.map((stage, sIdx) => (
        <div key={sIdx} className="animate-fade-up" style={{ animationDelay: `${sIdx * 80}ms` }}>
          <div className="flex flex-col items-center">
            <div className="rounded-xl bg-ink-900 px-5 py-3 text-center text-white shadow-sm">
              <p className="text-sm font-bold">{stage.name}</p>
              {stage.subtitle && <p className="mt-0.5 text-xs text-ink-300">{stage.subtitle}</p>}
            </div>
            <div className="h-6 w-px bg-ink-300" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {stage.papers.map((paper, pIdx) => (
              <div key={pIdx} className="relative">
                <div className="absolute left-1/2 -top-6 hidden h-6 w-px -translate-x-1/2 bg-ink-300 md:block" />
                <div className="card p-5 h-full">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-50 text-primary-700 ring-1 ring-primary-200">
                        <FileText className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-ink-900 leading-tight">{paper.name}</h4>
                        {paper.qualifying && (
                          <span className="chip mt-0.5 bg-warning-50 text-warning-700 ring-1 ring-warning-200">Qualifying</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {paper.subjects.some((s) => s.questions > 0 || s.marks > 0) && (
                    <div className="mt-4 overflow-hidden rounded-lg ring-1 ring-ink-200">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-ink-100 text-left text-xs font-semibold uppercase tracking-wide text-ink-600">
                            <th className="px-3 py-2">Subject</th>
                            <th className="px-3 py-2 text-center">Qs</th>
                            <th className="px-3 py-2 text-center">Marks</th>
                          </tr>
                        </thead>
                        <tbody>
                          {paper.subjects.map((subj, subIdx) => (
                            <tr key={subIdx} className={subIdx % 2 ? 'bg-ink-50/50' : 'bg-white'}>
                              <td className="px-3 py-2 text-ink-800">{subj.name}</td>
                              <td className="px-3 py-2 text-center font-semibold text-ink-700">{subj.questions || '—'}</td>
                              <td className="px-3 py-2 text-center font-semibold text-ink-700">{subj.marks || '—'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    <Stat icon={Users} label="Total Qs" value={String(paper.totalQuestions || '—')} />
                    <Stat icon={Award} label="Total Marks" value={String(paper.totalMarks || '—')} />
                    <Stat icon={Clock} label="Duration" value={paper.duration} />
                    <Stat icon={MinusCircle} label="Negative Marking" value={paper.negativeMarking} />
                    <Stat
                      icon={paper.mode?.includes('Online') ? Monitor : PenLine}
                      label="Mode"
                      value={paper.mode || '—'}
                    />
                    {paper.note && (
                      <div className="col-span-2 mt-1 flex items-start gap-2 rounded-lg bg-accent-50 p-2.5 text-xs text-accent-800">
                        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                        <span>{paper.note}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sIdx < pattern.stages.length - 1 && (
            <div className="flex justify-center py-2">
              <ChevronDown className="h-6 w-6 text-ink-300" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg bg-ink-50 p-2.5">
      <Icon className="h-4 w-4 shrink-0 text-ink-500" />
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">{label}</p>
        <p className="truncate text-sm font-semibold text-ink-800">{value}</p>
      </div>
    </div>
  );
}
