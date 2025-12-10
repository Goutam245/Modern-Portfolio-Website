import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Stats = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 15, suffix: '+', label: t('stats.yearsLabel') },
    { value: 100, suffix: 'K+', label: t('stats.devicesLabel') },
    { value: 98, suffix: '%', label: t('stats.satisfactionLabel') },
    { value: 150, suffix: '+', label: t('stats.projectsLabel') },
    { value: 24, suffix: '/7', label: t('stats.supportLabel') },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate counts
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(current);
                return newCounts;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-card via-secondary/50 to-card" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <h2
          className={`text-section font-bold text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isRTL ? 'font-arabic' : 'font-display'}`}
        >
          <span className="gradient-text">{t('stats.headline')}</span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative inline-block mb-4">
                {/* Glow behind number */}
                <div className="absolute inset-0 blur-2xl bg-primary/30 scale-150 group-hover:scale-175 transition-transform duration-500" />
                <span className="relative font-display text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">
                  {counts[index]}
                  <span className="text-3xl md:text-4xl">{stat.suffix}</span>
                </span>
              </div>
              <p className={`text-muted-foreground font-medium ${isRTL ? 'font-arabic' : ''}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Certification Badge */}
        <div
          className={`mt-16 flex justify-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="glass-card px-8 py-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-foreground">ISO 9001</p>
              <p className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                {t('stats.certifiedLabel')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
