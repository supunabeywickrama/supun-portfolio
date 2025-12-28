import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Mail, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", "1fc74ea6-cb3b-41cb-9635-e890700bf7b4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        }, 3000);
      } else {
        console.error("Form submission error:", data);
        setIsSubmitting(false);
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      alert("There was an error submitting the form. Please try again.");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <Section id="contact" className="pb-32">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-mono mb-4"></p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg">
            I'm currently looking for new opportunities in AI, Computer Vision,
            and Embedded Systems. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
        </div>

        {isSubmitted ? <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} className="bg-navy-800/50 border border-cyan-500/30 rounded-lg p-8 text-center">
            <CheckCircle2 className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Message Sent!
            </h3>
            <p className="text-slate-400">
              Thanks for reaching out. I'll get back to you soon.
            </p>
          </motion.div> : <motion.form initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} onSubmit={handleSubmit} className="bg-navy-800/30 border border-navy-700 rounded-lg p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-slate-300 mb-2">
                  Name *
                </label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors" placeholder="Your name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-slate-300 mb-2">
                  Email *
                </label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors" placeholder="your.email@example.com" />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-mono text-slate-300 mb-2">
                Subject *
              </label>
              <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors" placeholder="What's this about?" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-mono text-slate-300 mb-2">
                Message *
              </label>
              <textarea id="message" name="message" required value={formData.message} onChange={handleChange} rows={6} className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none" placeholder="Your message..." />
            </div>

            <Button type="submit" icon={Send} disabled={isSubmitting} className="w-full">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.form>}

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-6">Or connect with me on</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:supuun2001@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://github.com/supunabeywickrama" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/supun-tharaka-6bb8b5278/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </Section>;
}