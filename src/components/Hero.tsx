import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.png';
import logo from '@/assets/logo.jpg';

const heroVideoUrl = '/videos/hero-video.mp4';

const Hero = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
    setIsMobile(window.innerWidth < 768);
    
    // Aggressive video preload
    if (videoRef.current && window.innerWidth >= 768) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
    
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {/* Video Background - Desktop Only with Instant Loading */}
        {!isMobile && (
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={heroBg}
            onLoadedData={() => setVideoLoaded(true)}
            onCanPlay={() => setVideoLoaded(true)}
          >
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
        )}
        
        {/* Fallback Image - Mobile or while video loads */}
        <img
          src={heroBg}
          alt=""
          className={`w-full h-full object-cover transition-opacity duration-500 ${!isMobile && videoLoaded ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background animate-hero-breathe" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(197_100%_50%_/_0.05)_0%,_transparent_60%)]" />
      </div>

      {/* Logo Watermark Background - Ultra Subtle */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
        <img
          src={logo}
          alt=""
          className="w-[80vw] max-w-[1000px] h-auto opacity-[0.04] object-contain select-none"
          style={{
            filter: 'blur(1px) drop-shadow(0 0 60px rgba(74, 158, 255, 0.08))',
          }}
        />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container-premium text-center">
        {/* Pre-headline - Removed from here, now in Navbar as trust badge */}

        {/* Main Headline */}
        <h1 className={`font-display text-hero font-bold mb-6 ${isRTL ? 'font-arabic' : ''}`}>
          <span
            className={`block text-foreground transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {t('hero.headline1')}
          </span>
          <span
            className={`block gradient-text transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {t('hero.headline2')}
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isRTL ? 'font-arabic' : ''}`}
          style={{ transitionDelay: '800ms' }}
        >
          {t('hero.subheadline')}
        </p>

        {/* Description */}
        <p
          className={`text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isRTL ? 'font-arabic' : ''}`}
          style={{ transitionDelay: '900ms' }}
        >
          {t('hero.description')}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 hero-buttons ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isRTL ? 'sm:flex-row-reverse' : ''}`}
          style={{ transitionDelay: '1000ms' }}
        >
          <a
            href="#services"
            className="btn-premium text-primary-foreground flex items-center gap-2 group hover:scale-105 hover:shadow-[0_0_40px_hsl(197_100%_50%_/_0.4)]"
          >
            <span className="relative z-10">{t('hero.cta.primary')}</span>
            <ArrowRight className={`w-5 h-5 relative z-10 transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
          </a>
          <a
            href="#contact"
            className="btn-outline-premium flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_30px_hsl(197_100%_50%_/_0.25)]"
          >
            {t('hero.cta.secondary')}
          </a>
        </div>

        {/* Trust Badge */}
        <div
          className={`flex items-center justify-center gap-3 text-sm text-muted-foreground transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isRTL ? 'font-arabic' : ''}`}
          style={{ transitionDelay: '1200ms' }}
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>{t('hero.trust')}</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '1400ms' }}
      >
        <a
          href="#trust"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full animate-scroll-bounce" />
          </div>
          <ChevronDown className="w-5 h-5 animate-bounce opacity-60" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
