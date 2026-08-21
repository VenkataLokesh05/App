import { useState } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Mail, MapPin, Phone, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container-page py-8 sm:py-10">
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <div className="mt-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">Get in touch</h1>
        <p className="mt-2 text-ink-600 max-w-2xl">Questions, feedback or content suggestions? We'd love to hear from you.</p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="card p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center animate-scale-in">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-success-50 text-success-600 ring-1 ring-success-200">
                <CheckCircle2 className="h-8 w-8" />
              </span>
              <h2 className="mt-4 text-xl font-bold text-ink-900">Message sent!</h2>
              <p className="mt-1.5 text-sm text-ink-600 max-w-sm">Thanks for reaching out, {form.name || 'aspirant'}. We'll get back to you at {form.email || 'your email'} shortly.</p>
              <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }} className="btn-secondary mt-5">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" required>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Aspirant Name"
                    className="w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/30"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/30"
                  />
                </Field>
              </div>
              <Field label="Subject" required>
                <input
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                  className="w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/30"
                />
              </Field>
              <Field label="Message" required>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your message..."
                  className="w-full resize-y rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/30"
                />
              </Field>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                <Send className="h-4 w-4" /> Send message
              </button>
              <p className="text-xs text-ink-400">This is a frontend demo form — messages aren't stored or sent yet.</p>
            </form>
          )}
        </div>

        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="flex items-center gap-2 font-bold text-ink-900"><MessageSquare className="h-5 w-5 text-primary-600" /> Contact details</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <ContactRow icon={Mail} label="Email" value="support@examprepindia.in" />
              <ContactRow icon={Phone} label="Phone" value="+91 1800 000 0000" />
              <ContactRow icon={MapPin} label="Address" value="New Delhi, India" />
            </ul>
          </div>
          <div className="card p-6 bg-gradient-to-br from-primary-50 to-white">
            <h3 className="font-bold text-ink-900">Content contributions</h3>
            <p className="mt-2 text-sm text-ink-600">Are you an educator or subject expert interested in contributing syllabus content or practice questions? Mention "Contributor" in your subject line.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink-800">{label}{required && <span className="text-error-600"> *</span>}</span>
      {children}
    </label>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-50 text-primary-700 ring-1 ring-primary-200">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">{label}</p>
        <p className="font-medium text-ink-800">{value}</p>
      </div>
    </li>
  );
}
