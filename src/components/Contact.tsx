import React, { useState } from 'react';
import { Mail, Phone, Send, Copy, Check, ExternalLink, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { personalInfo } from '../data/personal';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 8) {
      errs.message = 'Message must be at least 8 characters long';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setStatusMessage('Transmitting message securely...');

    try {
      const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || 'https://codefreeform.com/api/contact-api/';
      const accessKey = import.meta.env.VITE_EMAIL_API_KEY || '0BDAD5';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Inquiry] From ${formData.name}`,
          message: formData.message,
          reply_to: formData.email,
          recipient: personalInfo.contact.email,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Your transmission has been delivered to Rehan. Thank you!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(
          `[Portfolio Inquiry] From ${formData.name}`
        )}&body=${encodeURIComponent(formData.message)}`;
        window.location.href = mailtoUrl;

        setStatus('success');
        setStatusMessage('Email client triggered. Thank you for connecting!');
      }
    } catch {
      const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] From ${formData.name}`
      )}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoUrl;

      setStatus('success');
      setStatusMessage('Prepared transmission in your email client. Thank you!');
    }
  };

  return (
    <section id="contact" className="pt-16 pb-12 scroll-mt-20">
      {/* Header matching Image 4 */}
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Contact
        </h2>
        <p className="text-sm sm:text-base text-cyan-400/90 font-medium mt-1.5">
          Open for internships, full-stack & backend engineering discussions, software projects, and collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Stacked Contact Cards */}
        <div className="lg:col-span-5 space-y-3.5">
          
          {/* Card 1: PHONE & WHATSAPP */}
          <div className="p-4 rounded-xl tech-card flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  PHONE & WHATSAPP
                </span>
                <span className="text-sm font-bold text-white font-mono">
                  {personalInfo.contact.phone}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personalInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
              >
                WhatsApp
              </a>
              <button
                onClick={() => copyToClipboard(personalInfo.contact.phone, 'phone')}
                className="p-1.5 rounded-md text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors cursor-pointer"
                title="Copy phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Card 2: DIRECT EMAIL */}
          <div className="p-4 rounded-xl tech-card flex items-center justify-between group">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  DIRECT EMAIL
                </span>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors font-mono truncate block"
                >
                  {personalInfo.contact.email}
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(personalInfo.contact.email, 'email')}
              className="p-1.5 rounded-md text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors cursor-pointer shrink-0 ml-2"
              title="Copy email"
            >
              {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Card 3: LINKEDIN PROFILE */}
          <div className="p-4 rounded-xl tech-card flex items-center justify-between group">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <LinkedinIcon size={18} />
              </div>
              <div className="overflow-hidden">
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  LINKEDIN PROFILE
                </span>
                <a
                  href={personalInfo.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-medium text-white hover:text-cyan-300 transition-colors font-mono truncate block"
                >
                  {personalInfo.contact.linkedinUsername}
                </a>
              </div>
            </div>

            <a
              href={personalInfo.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors shrink-0 ml-2"
              title="Open LinkedIn"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card 4: GITHUB PROFILE */}
          <div className="p-4 rounded-xl tech-card flex items-center justify-between group">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <GithubIcon size={18} />
              </div>
              <div className="overflow-hidden">
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  GITHUB PROFILE
                </span>
                <a
                  href={personalInfo.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-medium text-white hover:text-cyan-300 transition-colors font-mono truncate block"
                >
                  {personalInfo.contact.githubUsername}
                </a>
              </div>
            </div>

            <a
              href={personalInfo.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors shrink-0 ml-2"
              title="Open GitHub"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Right Column: Send a Message Form matching Image 4 */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl tech-card border border-cyan-500/25">
            <h3 className="text-xl font-bold text-white mb-6">
              Send a Message
            </h3>

            {/* Success Banner */}
            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/50 flex items-start gap-3 text-emerald-200 text-xs sm:text-sm animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-emerald-300">Message Delivered!</p>
                  <p className="mt-1 text-emerald-200/90">{statusMessage}</p>
                </div>
              </div>
            )}

            {/* Error Banner */}
            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-rose-950/70 border border-rose-500/50 flex items-start gap-3 text-rose-200 text-xs sm:text-sm animate-in fade-in">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-rose-300">Notice</p>
                  <p className="mt-1 text-rose-200/90">{statusMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Your Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#03060f]/90 border text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all ${
                      errors.name ? 'border-rose-500/70' : 'border-slate-800 focus:border-cyan-500/60'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                </div>

                {/* Your Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#03060f]/90 border text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all ${
                      errors.email ? 'border-rose-500/70' : 'border-slate-800 focus:border-cyan-500/60'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Rehan, I'd like to discuss an opportunity / project..."
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#03060f]/90 border text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all resize-y ${
                    errors.message ? 'border-rose-500/70' : 'border-slate-800 focus:border-cyan-500/60'
                  }`}
                />
                {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
              </div>

              {/* Full Width SEND MESSAGE Button matching Image 4 */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 px-6 rounded-xl font-bold font-mono text-xs sm:text-sm text-slate-950 bg-white hover:bg-slate-100 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer tracking-wider"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-900" />
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-slate-900" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
