import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      quote: "Alpha Core Solutions delivered beyond our expectations. Their team's technical expertise and commitment to excellence is unmatched in the Kingdom. The security system they implemented has performed flawlessly for three years.",
      name: 'Ahmed Al-Rashid',
      title: 'Director of Facilities Management',
      company: 'Government Sector',
    },
    {
      quote: "Working with Alpha Core was a game-changer for our facility. They didn't just install equipment—they designed a comprehensive security strategy. Response time, support quality, and system reliability are all exceptional.",
      name: 'Dr. Fatima Al-Qahtani',
      title: 'Chief Security Officer',
      company: 'Healthcare Institution',
    },
    {
      quote: "After evaluating multiple providers, Alpha Core stood out for their understanding of Saudi regulations and international standards. Two years later, our security infrastructure operates with zero downtime.",
      name: 'Khalid Al-Mutairi',
      title: 'VP of Operations',
      company: 'Aviation Sector',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isRTL ? 'font-arabic' : ''}`}
          >
            {t('testimonials.eyebrow')}
          </span>
          <h2
            className={`text-section font-bold text-foreground transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isRTL ? 'font-arabic' : 'font-display'}`}
            style={{ transitionDelay: '100ms' }}
          >
            {t('testimonials.headline')}
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === activeIndex
                    ? 'opacity-100 translate-y-0 relative'
                    : 'opacity-0 translate-y-10 absolute inset-0'
                }`}
              >
                <div className="glass-card p-10 md:p-12 text-center">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="text-lg font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.title}</p>
                    <p className="text-primary text-sm font-medium mt-1">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
