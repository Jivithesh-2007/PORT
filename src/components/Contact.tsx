import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle, AlertCircle, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ErrorsState {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<ErrorsState>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const tempErrors: ErrorsState = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Please enter your name.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Please enter your email.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address.';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = 'Please enter a message subject.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Please type a message.';
      isValid = false;
    } else if (formData.message.trim().length < 15) {
      tempErrors.message = 'Your message should be at least 15 characters long.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors inline as user edits
    if (errors[name as keyof ErrorsState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Mock asynchronous message transmission delay
    await new Promise((resolve) => setTimeout(resolve, 1800));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 transition-colors duration-1000 overflow-hidden"
    >
      {/* Dynamic background element orbs */}
      <div className="absolute left-1/4 top-1/3 w-96 h-96 bg-[#F27D26]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading Panel */}
        <div id="contact-heading" className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-4"
          >
            Get In <span className="text-[#F27D26]">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-[#F27D26] rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm font-mono tracking-widest text-[#F27D26] uppercase"
          >
            LET'S DISCUSS COLLABORATION & PIPELINES
          </motion.p>
        </div>

        {/* Layout Grid columns split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left instructions block */}
          <motion.div
            id="contact-info-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-8"
          >
            <div>
              <span className="font-mono text-[#F27D26] font-bold text-xs tracking-widest uppercase block mb-1">
                CONTACT DETAILS
              </span>
              <h3 className="text-2xl font-sans font-black text-white tracking-tight leading-tight">
                Let's co-create the digital future.
              </h3>
              <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
                Whether you have an upcoming responsive project requiring complex UI animation or want to talk micro-architectures, send me a ping!
              </p>
            </div>

            {/* Quick text channels */}
            <div className="space-y-4">
              <div id="contact-ch-email" className="p-5 rounded-2xl bg-[#121212] border border-white/5 flex items-center gap-4 hover:border-[#F27D26]/12 transition-all">
                <div className="p-3 rounded-xl bg-[#F27D26]/12 text-[#F27D26]">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-sans font-bold text-xs text-zinc-500 tracking-wide uppercase leading-none mb-1">
                    Direct Email
                  </h4>
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="text-sm sm:text-base font-semibold text-zinc-200 hover:text-[#F27D26] block truncate transition-colors"
                  >
                    {personalInfo.socials.email}
                  </a>
                </div>
              </div>

              {/* Protocol status panel */}
              <div id="contact-ch-terminal" className="p-5 rounded-2xl bg-[#121212] flex items-center gap-4 border border-white/5">
                <div className="p-3 rounded-xl bg-[#1a1a1a] text-zinc-500">
                  <Terminal className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-zinc-500 tracking-wide uppercase leading-none mb-1.5 animate-pulse">
                    Transmission Mode
                  </h4>
                  <span className="text-xs font-mono text-green-500 font-semibold uppercase">
                    SSL SECURE // PORT 443
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right actual contact form container */}
          <motion.div
            id="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-[#121212] border border-white/5 hover:shadow-lg transition-all duration-350 hover:border-[#F27D26]/15"
          >
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  noValidate
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="space-y-2 relative">
                      <label htmlFor="name" className="text-xs font-mono font-bold text-zinc-400 tracking-widest uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-5 py-3.5 rounded-xl border bg-[#050505] text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#F27D26]/10 focus:bg-[#050505] transition-all ${
                          errors.name 
                            ? 'border-rose-500' 
                            : 'border-white/5 hover:border-white/20 focus:border-[#F27D26]/40'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <div className="absolute right-3 bottom-3 flex items-center text-rose-500" title={errors.name}>
                          <AlertCircle className="w-4 h-4" />
                        </div>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="space-y-2 relative">
                      <label htmlFor="email" className="text-xs font-mono font-bold text-zinc-400 tracking-widest uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-3.5 rounded-xl border bg-[#050505] text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#F27D26]/10 focus:bg-[#050505] transition-all ${
                          errors.email 
                            ? 'border-rose-500' 
                            : 'border-white/5 hover:border-white/20 focus:border-[#F27D26]/40'
                        }`}
                        placeholder="hello@domain.com"
                      />
                      {errors.email && (
                        <div className="absolute right-3 bottom-3 flex items-center text-rose-500" title={errors.email}>
                          <AlertCircle className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Subject input */}
                  <div className="space-y-2 relative">
                    <label htmlFor="subject" className="text-xs font-mono font-bold text-zinc-400 tracking-widest uppercase">
                      Message Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-5 py-3.5 rounded-xl border bg-[#050505] text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#F27D26]/10 focus:bg-[#050505] transition-all ${
                        errors.subject 
                          ? 'border-rose-500' 
                          : 'border-white/5 hover:border-white/20 focus:border-[#F27D26]/40'
                      }`}
                      placeholder="Project launch engagement details..."
                    />
                    {errors.subject && (
                      <div className="absolute right-3 bottom-3 flex items-center text-rose-500" title={errors.subject}>
                        <AlertCircle className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Message body input */}
                  <div className="space-y-2 relative">
                    <label htmlFor="message" className="text-xs font-mono font-bold text-zinc-400 tracking-widest uppercase">
                      Message Body
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border bg-[#050505] text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#F27D26]/10 focus:bg-[#050505] transition-all resize-none ${
                        errors.message 
                          ? 'border-rose-500' 
                          : 'border-white/5 hover:border-white/20 focus:border-[#F27D26]/40'
                      }`}
                      placeholder="Hi Jivithesh, I would love to partner on designing..."
                    />
                    {errors.message && (
                      <div className="absolute right-3 bottom-3 flex items-center text-rose-500" title={errors.message}>
                        <AlertCircle className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Submit Button panel */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#F27D26] hover:bg-[#F27D26]/90 text-black font-extrabold text-sm flex items-center justify-center gap-2 group transition-all duration-300 shadow-lg shadow-[#F27D26]/10 cursor-pointer disabled:opacity-80 focus:ring-2 focus:ring-[#F27D26]/25"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Encoding Packet...
                        </>
                      ) : (
                        <>
                          Transmit Message 
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="submit-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="p-4 rounded-full bg-[#F27D26]/12 text-[#F27D26] mb-6 border border-[#F27D26]/20"
                  >
                    <CheckCircle className="w-12 h-12" />
                  </motion.div>
                  
                  <span className="font-mono text-xs font-semibold text-[#F27D26] tracking-widest uppercase block mb-2">
                    TRANSMISSION BROADCAST SUCCESSFUL
                  </span>
                  <h3 className="text-2xl font-sans font-black text-white tracking-tight mb-3">
                    Thank you for reaching out!
                  </h3>
                  <p className="max-w-md text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
                    Your transmission has been processed and routed. I typically process received envelopes and replies within one commercial business cycle.
                  </p>

                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs tracking-wide uppercase transition-colors cursor-pointer"
                  >
                    Send Another Envelope
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
