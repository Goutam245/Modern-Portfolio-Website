import { useEffect, useRef, useState } from 'react';
import { Building, Plane, Hospital, Factory, GraduationCap, Hotel } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Clients = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sectors = [
    {
      icon: Building,
      title: t('clients.government'),
      desc: t('clients.governmentDesc'),
    },
    {
      icon: Plane,
      title: t('clients.aviation'),
      desc: t('clients.aviationDesc'),
    },
    {
      icon: Hospital,
      title: t('clients.healthcare'),
      desc: t('clients.healthcareDesc'),
    },
    {
      icon: Factory,
      title: t('clients.energy'),
      desc: t('clients.energyDesc'),
    },
    {
      icon: GraduationCap,
      title: t('clients.education'),
      desc: t('clients.educationDesc'),
    },
    {
      icon: Hotel,
      title: t('clients.hospitality'),
      desc: t('clients.hospitalityDesc'),
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <polygon points="10,0 20,10 10,20 0,10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#islamic-pattern)" />
        </svg>
      </div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isRTL ? 'font-arabic' : ''}`}
          >
            {t('clients.eyebrow')}
          </span>
          <h2
            className={`text-section font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isRTL ? 'font-arabic' : 'font-display'}`}
            style={{ transitionDelay: '100ms' }}
          >
            {t('clients.headline')}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isRTL ? 'font-arabic' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            {t('clients.subheadline')}
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`glass-card p-8 card-hover group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                  <sector.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold text-foreground mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                    {sector.title}
                  </h3>
                  <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                    {sector.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Counter Badge */}
        <div
          className={`mt-16 flex justify-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="inline-flex items-center gap-6 glass-card px-8 py-5">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="font-display text-3xl font-bold gradient-text">100+</span>
            </div>
            <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
              Facilities Secured
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
