import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon
            as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: Mail, title: 'Email', detail: 'hello@skillswitch.com', sub: 'We reply within 24 hours' },
              { icon: Phone, title: 'Phone', detail: '+1 (555) 123-4567', sub: 'Mon–Fri, 9 AM – 6 PM EST' },
              { icon: MapPin, title: 'Office', detail: '123 Innovation Way', sub: 'San Francisco, CA 94105' },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.detail}</p>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <div className="card overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card p-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                <p className="text-gray-500 mb-6">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }} className="btn-secondary text-sm">
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="card p-8"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
