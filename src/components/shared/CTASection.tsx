import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  titleAr?: string;
  subtitle?: string;
  subtitleAr?: string;
  primaryButton?: string;
  primaryButtonAr?: string;
  primaryLink?: string;
  secondaryButton?: string;
  secondaryButtonAr?: string;
  secondaryLink?: string;
}

const CTASection = ({
  title,
  titleAr,
  subtitle,
  subtitleAr,
  primaryButton,
  primaryButtonAr,
  primaryLink = '/contact',
  secondaryButton,
  secondaryButtonAr,
  secondaryLink = '/services',
}: CTASectionProps) => {
  const { language, isRTL } = useLanguage();

  const displayTitle = language === 'ar' && titleAr ? titleAr : title;
  const displaySubtitle = language === 'ar' && subtitleAr ? subtitleAr : subtitle;
  const displayPrimary = language === 'ar' && primaryButtonAr ? primaryButtonAr : primaryButton;
  const displaySecondary = language === 'ar' && secondaryButtonAr ? secondaryButtonAr : secondaryButton;

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container-premium relative z-10 text-center">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 ${isRTL ? 'font-arabic' : 'font-display'}`}>
          {displayTitle}
        </h2>
        {displaySubtitle && (
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto mb-10 ${isRTL ? 'font-arabic' : ''}`}>
            {displaySubtitle}
          </p>
        )}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
          {displayPrimary && (
            <Link
              to={primaryLink}
              className="btn-premium text-primary-foreground flex items-center gap-2 group hover:scale-105 hover:shadow-[0_0_40px_hsl(197_100%_50%_/_0.4)]"
            >
              <span>{displayPrimary}</span>
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
            </Link>
          )}
          {displaySecondary && (
            <Link
              to={secondaryLink}
              className="btn-outline-premium flex items-center gap-2 hover:scale-105"
            >
              {displaySecondary}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
