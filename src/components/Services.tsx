import { useEffect, useRef, useState } from 'react';
import { Scan, Camera, Radio, Fingerprint, ArrowRight, Shield, Server, Printer } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const services = [
    {
      icon: Scan,
      title: t('services.metal.title'),
      desc: t('services.metal.desc'),
      clients: t('services.metal.clients'),
      tags: ['Multi-zone', 'AI Analysis', 'Real-time Alerts'],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Camera,
      title: t('services.cctv.title'),
      desc: t('services.cctv.desc'),
      clients: t('services.cctv.clients'),
      tags: ['4K+ Resolution', 'Facial Recognition', 'Cloud Storage'],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Radio,
      title: t('services.xray.title'),
      desc: t('services.xray.desc'),
      clients: t('services.xray.clients'),
      tags: ['Dual-energy', 'Explosive Detection', 'Network Ready'],
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Fingerprint,
      title: t('services.access.title'),
      desc: t('services.access.desc'),
      clients: t('services.access.clients'),
      tags: ['Biometrics', 'RFID/NFC', 'Mobile Credentials'],
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Shield,
      title: t('services.military.title'),
      desc: t('services.military.desc'),
      clients: t('services.military.clients'),
      tags: ['Camouflage', 'Tactical Vests', 'Custom Embroidery'],
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Server,
      title: t('services.servers.title'),
      desc: t('services.servers.desc'),
      clients: t('services.servers.clients'),
      tags: ['Dell/HP/Lenovo', 'Custom Config', 'Network Integration'],
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Printer,
      title: t('services.printers.title'),
      desc: t('services.printers.desc'),
      clients: t('services.printers.clients'),
      tags: ['HP/Canon/Xerox', 'Toner & Ink', 'Maintenance'],
      color: 'from-teal-500 to-cyan-600',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isRTL ? 'font-arabic' : ''}`}
          >
            {t('services.eyebrow')}
          </span>
          <h2
            className={`text-section font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isRTL ? 'font-arabic' : 'font-display'}`}
            style={{ transitionDelay: '100ms' }}
          >
            {t('services.headline')}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isRTL ? 'font-arabic' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            {t('services.subheadline')}
          </p>
        </div>

        {/* Services Grid - Updated for 7 services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative glass-card overflow-hidden card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20`} />
              </div>

              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold text-foreground mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                  {service.title}
                </h3>
                <p className={`text-muted-foreground mb-4 leading-relaxed text-sm ${isRTL ? 'font-arabic' : ''}`}>
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-secondary/80 text-foreground/70 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Client Metric */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <span className={`text-sm text-primary font-medium ${isRTL ? 'font-arabic' : ''}`}>
                    {service.clients}
                  </span>
                  <a
                    href="#contact"
                    className={`flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group/link ${isRTL ? 'font-arabic flex-row-reverse' : ''}`}
                  >
                    {t('services.learnMore')}
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover/link:${isRTL ? '-translate-x-1' : 'translate-x-1'}`} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
