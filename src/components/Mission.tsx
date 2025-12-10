import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Users, Flag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Mission = () => {
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

  const values = [
    {
      icon: Lightbulb,
      title: t('mission.value1.title'),
      desc: t('mission.value1.desc'),
    },
    {
      icon: Users,
      title: t('mission.value2.title'),
      desc: t('mission.value2.desc'),
    },
    {
      icon: Flag,
      title: t('mission.value3.title'),
      desc: t('mission.value3.desc'),
    },
  ];

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="section-padding relative bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            } ${isRTL ? 'lg:order-2' : ''}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-primary/10 animate-pulse-glow" />
                </div>
                <div className="relative z-10 text-center p-8">
                  <Shield className="w-24 h-24 text-primary mx-auto mb-6" />
                  <p className="text-xl font-semibold text-foreground">Security Excellence</p>
                  <p className="text-muted-foreground">Since 2009</p>
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-card border border-border rounded-2xl p-4 shadow-card animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold gradient-text font-display">15+</p>
                  <p className="text-sm text-muted-foreground">{t('stats.yearsLabel')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`${isRTL ? 'lg:order-1' : ''}`}>
            <span
              className={`inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${isRTL ? 'font-arabic' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              {t('mission.eyebrow')}
            </span>

            <h2
              className={`text-section font-bold text-foreground mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${isRTL ? 'font-arabic' : 'font-display'}`}
              style={{ transitionDelay: '300ms' }}
            >
              {t('mission.headline')}
            </h2>

            <div
              className={`space-y-4 mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className={`text-body-lg text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                {t('mission.body')}
              </p>
              <p className={`text-body-lg text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                {t('mission.body2')}
              </p>
              <p className={`text-body-lg text-foreground font-medium ${isRTL ? 'font-arabic' : ''}`}>
                {t('mission.commitment')}
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`glass-card p-5 card-hover transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <value.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className={`font-semibold text-foreground mb-1 ${isRTL ? 'font-arabic' : ''}`}>
                    {value.title}
                  </h3>
                  <p className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper icons for missing imports
const Shield = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const Award = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

export default Mission;
