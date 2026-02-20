import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, User, GraduationCap } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { scrollReveal } from '../../utils/animations';

// ══════════════════════════════════════════════════════════
//  EmailJS Configuration
//  Service ID provided by user. Template ID & Public Key
//  must be set after creating the template on emailjs.com
// ══════════════════════════════════════════════════════════
const EMAILJS_SERVICE_ID = 'service_96pw5ea';
const EMAILJS_TEMPLATE_ID = 'template_no8u8lc';
const EMAILJS_PUBLIC_KEY = 'qGepMec6qhQtWK6v_';

const classOptions = [
  { value: '', label: 'Select Class' },
  { value: 'Playgroup', label: 'Playgroup (1.5 – 2.5 years)' },
  { value: 'Nursery', label: 'Nursery (2.5 – 3.5 years)' },
  { value: 'LKG', label: 'LKG (3.5 – 4.5 years)' },
  { value: 'UKG', label: 'UKG (4.5 – 6 years)' },
];

export const CTA = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    parent_name: '',
    mobile: '',
    email: '',
    child_age: '',
    visit_date: '',
    visit_time: '',
    admission_class: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.parent_name.trim()) return 'Please enter your name.';
    if (!/^\d{10}$/.test(formData.mobile)) return 'Please enter a valid 10-digit mobile number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email address.';
    if (!formData.child_age || formData.child_age < 1 || formData.child_age > 10) return "Please enter the child's age (1–10).";
    if (!formData.visit_date) return 'Please select a preferred visit date.';
    if (!formData.visit_time) return 'Please select a preferred visit time.';
    if (!formData.admission_class) return 'Please select the admission class.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus('error');
      setErrorMsg(err);
      return;
    }

    setStatus('sending');
    try {
      // Template parameters sent to EmailJS
      const templateParams = {
        parent_name: formData.parent_name,
        mobile: formData.mobile,
        email: formData.email,
        child_age: formData.child_age,
        visit_date: formData.visit_date,
        visit_time: formData.visit_time,
        admission_class: formData.admission_class,
        to_email: 'gsriram207@gmail.com',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      setStatus('success');
      setFormData({
        parent_name: '',
        mobile: '',
        email: '',
        child_age: '',
        visit_date: '',
        visit_time: '',
        admission_class: '',
      });

      // Reset after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMsg('Failed to send your request. Please try again or call us directly.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  // Minimum date = today
  const today = new Date().toISOString().split('T')[0];

  // ── Shared input styles ──
  const inputBase =
    'w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-montessori-beige-200 text-montessori-beige-900 placeholder-montessori-beige-400 focus:outline-none focus:ring-2 focus:ring-montessori-terracotta-400 focus:border-transparent transition-all duration-200';

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-montessori-terracotta-500 via-montessori-dusty-500 to-montessori-sage-500 opacity-90" />

      {/* Decorative blobs */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ═══════════════ LEFT — Info Column ═══════════════ */}
          <motion.div {...scrollReveal} className="text-white">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full font-semibold text-sm mb-6">
              Schedule a Visit
            </span>

            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Begin Your Child's
              <br />
              Learning Journey
            </h2>

            <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-lg">
              Fill out the form and our admissions team will reach out to confirm
              your campus visit. Come experience our nurturing Montessori
              environment first-hand!
            </p>

            {/* Contact cards */}
            <div className="space-y-5">
              {[
                { icon: Phone, label: 'Call Us', value: '+91 98765 43210' },
                { icon: Mail, label: 'Email', value: 'gsriram207@gmail.com' },
                { icon: MapPin, label: 'Location', value: '123 Learning Street, Bangalore 560001' },
                { icon: Clock, label: 'Visit Hours', value: 'Mon – Fri, 9:00 AM – 1:00 PM' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">{label}</p>
                    <p className="font-semibold">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ═══════════════ RIGHT — Form Column ═══════════════ */}
          <motion.div
            {...scrollReveal}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20"
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-8">
              <Calendar className="inline mr-2 -mt-1" size={24} />
              Schedule Your Visit
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Parent Name */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">
                  <User className="inline mr-1 -mt-0.5" size={14} /> Parent / Guardian Name
                </label>
                <input
                  type="text"
                  name="parent_name"
                  value={formData.parent_name}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma"
                  className={inputBase}
                />
              </div>

              {/* Mobile & Email — side by side on desktop */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    <Phone className="inline mr-1 -mt-0.5" size={14} /> Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    maxLength={10}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    <Mail className="inline mr-1 -mt-0.5" size={14} /> Email ID
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputBase}
                  />
                </div>
              </div>

              {/* Child Age & Class — side by side */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    Child's Age
                  </label>
                  <input
                    type="number"
                    name="child_age"
                    value={formData.child_age}
                    onChange={handleChange}
                    placeholder="e.g. 3"
                    min={1}
                    max={10}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    <GraduationCap className="inline mr-1 -mt-0.5" size={14} /> Admission for Class
                  </label>
                  <select
                    name="admission_class"
                    value={formData.admission_class}
                    onChange={handleChange}
                    className={inputBase}
                  >
                    {classOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Visit Date & Time — side by side */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    <Calendar className="inline mr-1 -mt-0.5" size={14} /> Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    name="visit_date"
                    value={formData.visit_date}
                    onChange={handleChange}
                    min={today}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    <Clock className="inline mr-1 -mt-0.5" size={14} /> Preferred Time
                  </label>
                  <input
                    type="time"
                    name="visit_time"
                    value={formData.visit_time}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
              </div>

              {/* ── Status Feedback ── */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-400/30 rounded-xl text-green-100"
                  >
                    <CheckCircle size={22} />
                    <span className="font-medium">
                      Visit request sent! We'll confirm your slot shortly.
                    </span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-400/30 rounded-xl text-red-100"
                  >
                    <AlertCircle size={22} />
                    <span className="font-medium">{errorMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 ${
                  status === 'sending'
                    ? 'bg-montessori-terracotta-400 cursor-wait'
                    : 'bg-montessori-terracotta-600 hover:bg-montessori-terracotta-700'
                } text-white`}
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Schedule My Visit
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
