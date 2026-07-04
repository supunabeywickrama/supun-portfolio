import React, { useState, useEffect } from 'react';
import { Section } from '../ui/Section';
import { Mail, Github, Linkedin } from 'lucide-react';

const topics = ['Hiring / Recruitment', 'Project Collaboration', 'Just saying Hi'];

const templates: Record<string, string> = {
  'Hiring / Recruitment':
    "Hi Supun,\n\nI came across your portfolio and I'm interested in discussing a potential opportunity that aligns with your AI/ML background.\n\nWould you be open to a conversation?",
  'Project Collaboration':
    "Hi Supun,\n\nI have a project idea involving [AI/ML / Computer Vision / LLM systems] and I think your skills would be a great fit.\n\nWould love to explore working together.",
  'Just saying Hi':
    "Hi Supun,\n\nI came across your work and just wanted to reach out. Really impressed by what you've built!",
};

export function Contact() {
  const [topic, setTopic] = useState(topics[0]);
  const [messageEdited, setMessageEdited] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: templates[topics[0]],
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (!messageEdited) {
      setFormData((prev) => ({ ...prev, message: templates[topic] }));
    }
  }, [topic, messageEdited]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const data = new FormData();
    data.append('access_key', '1fc74ea6-cb3b-41cb-9635-e890700bf7b4');
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('subject', topic);
    data.append('message', formData.message);

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: templates[topic] });
        setMessageEdited(false);
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-navy-800/50 border border-navy-700 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-navy-600 transition-colors font-sans';

  const channels = [
    {
      label: 'Email',
      value: 'supuun2001@gmail.com',
      href: 'mailto:supuun2001@gmail.com',
      icon: Mail,
    },
    {
      label: 'GitHub',
      value: 'supunabeywickrama',
      href: 'https://github.com/supunabeywickrama',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      value: 'supun-tharaka',
      href: 'https://www.linkedin.com/in/supun-tharaka-6bb8b5278/',
      icon: Linkedin,
    },
  ];

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-8 lg:gap-14 items-start">
        {/* Left: topic + channels */}
        <div className="space-y-6">
          {/* Topic selector */}
          <div>
            <p className="text-[9.5px] font-mono text-slate-600 uppercase tracking-[0.2em] mb-3">
              What's this about?
            </p>
            <div className="space-y-2">
              {topics.map((t) => {
                const isActive = t === topic;
                return (
                  <button
                    key={t}
                    onClick={() => setTopic(t)}
                    className={`w-full flex items-center justify-between px-5 py-4 border rounded-xl text-left transition-all duration-300 ${
                      isActive
                        ? 'border-cyan-500/40 bg-navy-800/60 text-white shadow-[0_0_16px_rgba(0,217,255,0.06)]'
                        : 'border-navy-700 bg-navy-800/20 text-slate-500 hover:border-navy-600 hover:text-slate-300'
                    }`}
                  >
                    <span className="text-[13px] font-semibold tracking-wide">{t}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Direct channels */}
          <div>
            <p className="text-[9.5px] font-mono text-slate-600 uppercase tracking-[0.2em] mb-3">
              Direct Channels
            </p>
            <div className="space-y-2">
              {channels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target={ch.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-navy-700 bg-navy-800/20 hover:border-navy-600 hover:bg-navy-800/50 rounded-xl p-4 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center shrink-0">
                      <ch.icon className="h-4 w-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                    </div>
                    <span className="text-[9.5px] font-mono font-bold text-slate-600 group-hover:text-slate-500 tracking-widest uppercase">
                      {ch.label}
                    </span>
                  </div>
                  <span className="text-[12px] font-mono text-slate-500 group-hover:text-slate-300 transition-colors truncate ml-3">
                    {ch.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form card */}
        <form
          onSubmit={handleSubmit}
          className="border border-navy-700 rounded-2xl p-6 sm:p-8 bg-navy-800/20 space-y-5 hover:border-navy-600 transition-colors"
        >
          <h3 className="text-lg font-bold text-white tracking-tight">Send a Message</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[9.5px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-[9.5px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-[9.5px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              required
              rows={6}
              value={formData.message}
              onChange={(e) => {
                setMessageEdited(true);
                setFormData((p) => ({ ...p, message: e.target.value }));
              }}
              className={`${inputClass} resize-none leading-relaxed`}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-3.5 bg-cyan-400 text-navy-900 text-xs font-bold rounded-xl hover:bg-cyan-300 disabled:opacity-50 transition-colors uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
          >
            {status === 'idle' && 'Send Message'}
            {status === 'sending' && (
              <>
                <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Sending…
              </>
            )}
            {status === 'success' && '✓ Message Sent'}
            {status === 'error' && 'Error — Try Again'}
          </button>
        </form>
      </div>
    </Section>
  );
}
