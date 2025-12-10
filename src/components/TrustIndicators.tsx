import { Award, Shield, Building2, Star, Clock, BadgeCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TrustIndicators = () => {
  const { t, isRTL } = useLanguage();

  const indicators = [
    { icon: Award, label: t('trust.years') },
    { icon: BadgeCheck, label: t('trust.iso') },
    { icon: Building2, label: t('trust.projects') },
    { icon: Star, label: t('trust.satisfaction') },
    { icon: Clock, label: t('trust.support') },
    { icon: Shield, label: t('trust.approved') },
  ];

  return (
    <section id="trust" className="relative py-8 bg-secondary/30 border-y border-border/30">
      <div className="container-premium">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {indicators.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center gap-3 py-4 px-3 rounded-xl transition-all duration-300 hover:bg-secondary/50 group cursor-default ${isRTL ? 'font-arabic' : ''}`}
            >
              <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium text-foreground/80 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
