import { useEffect, useRef, useState } from 'react';
import { Send, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    consent: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Success!',
      description: t('contact.success'),
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
        consent: false,
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const services = [
    'Metal Detection Systems',
    'CCTV Surveillance',
    'X-Ray Screening',
    'Access Control',
    'Military & Tactical Clothing',
    'Servers & PC Systems',
    'Printers & Accessories',
    'Complete Security Solution',
    'Consultation Request',
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isRTL ? 'font-arabic' : ''}`}
          >
            {t('contact.eyebrow')}
          </span>
          <h2
            className={`text-section font-bold text-foreground transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isRTL ? 'font-arabic' : 'font-display'}`}
            style={{ transitionDelay: '100ms' }}
          >
            {t('contact.headline')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="peer w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-4 text-foreground placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={t('contact.name')}
                  />
                  <label className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-4 text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary peer-valid:-top-6 peer-valid:text-sm ${isRTL ? 'font-arabic' : ''}`}>
                    {t('contact.name')}
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="peer w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-4 text-foreground placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={t('contact.email')}
                  />
                  <label className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-4 text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary peer-valid:-top-6 peer-valid:text-sm ${isRTL ? 'font-arabic' : ''}`}>
                    {t('contact.email')}
                  </label>
                </div>

                {/* Company */}
                <div className="relative md:col-span-2">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="peer w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-4 text-foreground placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={t('contact.company')}
                  />
                  <label className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-4 text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary peer-valid:-top-6 peer-valid:text-sm ${isRTL ? 'font-arabic' : ''}`}>
                    {t('contact.company')}
                  </label>
                </div>
              </div>

              {/* Service Select */}
              <div className="mt-6">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={`w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all ${isRTL ? 'font-arabic' : ''}`}
                >
                  <option value="">{t('contact.service')}</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="mt-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none ${isRTL ? 'font-arabic' : ''}`}
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              {/* Consent */}
              <div className="mt-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 rounded border-border bg-secondary/50 text-primary focus:ring-primary"
                  />
                  <span className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                    {t('contact.consent')}
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full mt-8 btn-premium text-primary-foreground flex items-center justify-center gap-2 disabled:opacity-70 ${isRTL ? 'font-arabic' : ''}`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span className="relative z-10">{t('contact.success')}</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">{t('contact.submit')}</span>
                    <Send className={`w-5 h-5 relative z-10 ${isRTL ? 'rotate-180' : ''}`} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="glass-card p-8 h-full">
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className={`text-sm text-muted-foreground mb-1 ${isRTL ? 'font-arabic' : ''}`}>
                      {t('contact.email.label')}
                    </p>
                    <a href="mailto:info@alphacs.sa" className="text-foreground font-medium hover:text-primary transition-colors">
                      info@alphacs.sa
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className={`text-sm text-muted-foreground mb-1 ${isRTL ? 'font-arabic' : ''}`}>
                      {t('contact.address.label')}
                    </p>
                    <p className={`text-foreground font-medium ${isRTL ? 'font-arabic' : ''}`}>
                      {t('contact.address.value')}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className={`text-sm text-muted-foreground mb-1 ${isRTL ? 'font-arabic' : ''}`}>
                      {t('contact.hours.label')}
                    </p>
                    <p className={`text-foreground font-medium ${isRTL ? 'font-arabic' : ''}`}>
                      {t('contact.hours.value')}
                    </p>
                  </div>
                </div>

                {/* Emergency */}
                <div className="pt-6 border-t border-border/30">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <p className={`text-primary font-medium ${isRTL ? 'font-arabic' : ''}`}>
                      {t('contact.emergency')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
