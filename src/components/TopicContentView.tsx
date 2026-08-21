import type { TopicContent } from '@/types';
import { Lightbulb, CheckCircle2 } from 'lucide-react';

export function TopicContentView({ content }: { content: TopicContent }) {
  return (
    <article className="card p-6 sm:p-8 animate-fade-up">
      <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">{content.heading}</h1>
      <p className="mt-3 text-base leading-relaxed text-ink-600">{content.intro}</p>

      <div className="mt-6 space-y-6">
        {content.sections.map((section, i) => (
          <section key={i} className="rounded-2xl border border-ink-200 bg-ink-50/40 p-5">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-ink-900">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary-100 text-xs font-bold text-primary-700">{i + 1}</span>
              {section.title}
            </h3>
            <ul className="mt-3 space-y-2 pl-1">
              {section.points.map((pt, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {content.tips && content.tips.length > 0 && (
        <div className="mt-6 rounded-2xl bg-gradient-to-br from-accent-50 to-accent-100/60 p-5 ring-1 ring-accent-200">
          <h3 className="flex items-center gap-2 text-base font-bold text-accent-800">
            <Lightbulb className="h-5 w-5" /> Quick Tips
          </h3>
          <ul className="mt-3 space-y-2">
            {content.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-accent-900">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
