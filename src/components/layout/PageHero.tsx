import { useLanguage } from '@/contexts/LanguageContext';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero = ({ eyebrow, title, subtitle, backgroundImage }: PageHeroProps) => {
  const { isRTL } = useLanguage();

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-background via-secondary to-background" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(197_100%_50%_/_0.08)_0%,_transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-premium text-center py-20">
        {eyebrow && (
          <span className={`inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {eyebrow}
          </span>
        )}
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 ${isRTL ? 'font-arabic' : 'font-display'}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
