import { useEffect, useState, useRef } from 'react';
import { Shield, Award, Users, Building, CheckCircle, Target, Eye, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/layout/PageHero';
import CTASection from '@/components/shared/CTASection';

const About = () => {
  const { language, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = language === 'ar' 
      ? 'من نحن | ألفا كور سوليوشنز' 
      : 'About Us | Alpha Core Solutions';
    setIsVisible(true);
  }, [language]);

  const content = {
    en: {
      heroTitle: 'Protecting the Kingdom Since 2009',
      heroSubtitle: 'Your trusted partner in advanced security solutions',
      storyTitle: 'Our Story',
      storyContent: [
        "Alpha Core Solutions was founded in 2009 with a clear mission: to bring world-class security technology to Saudi Arabia. What started as a small team of security professionals has grown into the Kingdom's most trusted provider of integrated security and IT solutions.",
        "Today, we serve over 150 major facilities across Saudi Arabia, from international airports to government ministries, healthcare institutions to petrochemical plants. Our success is built on three pillars: cutting-edge technology, local expertise, and unwavering commitment to client satisfaction.",
        "We don't just supply security equipment—we engineer comprehensive safety ecosystems. Our team of certified security professionals combines international expertise with deep understanding of Saudi security requirements, ensuring every solution is tailored to meet the unique challenges of our clients."
      ],
      missionTitle: 'Mission & Vision',
      mission: 'To provide world-class physical security solutions that give our clients absolute peace of mind.',
      vision: 'To be the Middle East\'s most trusted security solutions provider, setting the standard for innovation, reliability, and excellence.',
      valuesTitle: 'Our Values',
      values: [
        { icon: Target, title: 'Innovation', desc: 'Continuously adopting the latest security technologies' },
        { icon: Shield, title: 'Integrity', desc: 'Building trust through transparent partnerships' },
        { icon: Award, title: 'Excellence', desc: 'Delivering beyond expectations, every time' },
        { icon: Heart, title: 'Saudi Pride', desc: 'Proudly serving and protecting the Kingdom' },
      ],
      certsTitle: 'Certifications & Awards',
      certs: [
        'ISO 9001:2015 Certified',
        'Saudi Government Approved Vendor',
        'Industry Excellence Award 2023',
        'Customer Service Excellence 2022',
        'SASO Certified Products',
        'International Security Standards Compliance'
      ],
      whyUsTitle: 'Why Partner With Us',
      whyUs: [
        'Proven track record with 150+ successful projects',
        'Local expertise, international standards',
        '24/7 support and rapid response',
        'Certified and trained professionals',
        'Comprehensive end-to-end solutions',
        'Competitive pricing and flexible terms',
        'Ongoing training and support',
        'Long-term partnership approach',
        'Saudi-owned and operated',
        'Commitment to innovation'
      ],
      facilitiesTitle: 'Our Facilities',
      facilities: [
        { title: 'Head Office', desc: 'Riyadh, Kingdom of Saudi Arabia' },
        { title: 'Warehouse & Logistics', desc: 'State-of-the-art distribution center' },
        { title: 'Training Facility', desc: 'Comprehensive training programs' },
        { title: '24/7 Support Center', desc: 'Round-the-clock technical assistance' },
      ],
    },
    ar: {
      heroTitle: 'نحمي المملكة منذ 2009',
      heroSubtitle: 'شريكك الموثوق في الحلول الأمنية المتقدمة',
      storyTitle: 'قصتنا',
      storyContent: [
        "تأسست ألفا كور سوليوشنز في عام 2009 بمهمة واضحة: جلب تكنولوجيا الأمان العالمية إلى المملكة العربية السعودية. ما بدأ كفريق صغير من المتخصصين الأمنيين نما ليصبح المزود الأكثر ثقة في المملكة للحلول الأمنية وتقنية المعلومات المتكاملة.",
        "اليوم، نخدم أكثر من 150 منشأة رئيسية في جميع أنحاء المملكة العربية السعودية، من المطارات الدولية إلى الوزارات الحكومية، ومؤسسات الرعاية الصحية إلى مصانع البتروكيماويات. يقوم نجاحنا على ثلاثة ركائز: التكنولوجيا المتطورة، والخبرة المحلية، والالتزام الثابت برضا العملاء.",
        "نحن لا نوفر معدات أمنية فحسب - بل نهندس أنظمة سلامة شاملة. يجمع فريقنا من المتخصصين الأمنيين المعتمدين بين الخبرة الدولية والفهم العميق لمتطلبات الأمان السعودية."
      ],
      missionTitle: 'المهمة والرؤية',
      mission: 'تقديم حلول أمنية مادية عالمية المستوى تمنح عملائنا راحة البال المطلقة.',
      vision: 'أن نكون المزود الأكثر ثقة لحلول الأمان في الشرق الأوسط، ووضع معايير الابتكار والموثوقية والتميز.',
      valuesTitle: 'قيمنا',
      values: [
        { icon: Target, title: 'الابتكار', desc: 'اعتماد أحدث تقنيات الأمان باستمرار' },
        { icon: Shield, title: 'النزاهة', desc: 'بناء الثقة من خلال الشراكات الشفافة' },
        { icon: Award, title: 'التميز', desc: 'تقديم ما يفوق التوقعات دائماً' },
        { icon: Heart, title: 'الفخر السعودي', desc: 'نخدم ونحمي المملكة بفخر' },
      ],
      certsTitle: 'الشهادات والجوائز',
      certs: [
        'معتمد ISO 9001:2015',
        'مورد معتمد حكومياً',
        'جائزة التميز في الصناعة 2023',
        'جائزة التميز في خدمة العملاء 2022',
        'منتجات معتمدة من ساسو',
        'الامتثال لمعايير الأمان الدولية'
      ],
      whyUsTitle: 'لماذا تشاركنا',
      whyUs: [
        'سجل حافل مع أكثر من 150 مشروع ناجح',
        'خبرة محلية، معايير دولية',
        'دعم 24/7 واستجابة سريعة',
        'متخصصون معتمدون ومدربون',
        'حلول شاملة من البداية إلى النهاية',
        'أسعار تنافسية وشروط مرنة',
        'تدريب ودعم مستمر',
        'نهج الشراكة طويلة الأجل',
        'مملوكة ومدارة سعودياً',
        'الالتزام بالابتكار'
      ],
      facilitiesTitle: 'منشآتنا',
      facilities: [
        { title: 'المقر الرئيسي', desc: 'الرياض، المملكة العربية السعودية' },
        { title: 'المستودع واللوجستيات', desc: 'مركز توزيع حديث' },
        { title: 'مرفق التدريب', desc: 'برامج تدريب شاملة' },
        { title: 'مركز الدعم 24/7', desc: 'مساعدة تقنية على مدار الساعة' },
      ],
    }
  };

  const t = content[language];

  return (
    <PageLayout>
      <PageHero
        eyebrow={language === 'ar' ? 'من نحن' : 'ABOUT US'}
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
      />

      {/* Our Story */}
      <section className="section-padding" ref={sectionRef}>
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-8 ${isRTL ? 'font-arabic text-right' : 'font-display'}`}>
              {t.storyTitle}
            </h2>
            <div className={`space-y-6 ${isRTL ? 'text-right' : ''}`}>
              {t.storyContent.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-lg text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="container-premium">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-12 ${isRTL ? 'font-arabic' : 'font-display'}`}>
            {t.missionTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-cyan-400 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'المهمة' : 'Mission'}
              </h3>
              <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                {t.mission}
              </p>
            </div>
            <div className="glass-card p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'الرؤية' : 'Vision'}
              </h3>
              <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                {t.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-premium">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-12 ${isRTL ? 'font-arabic' : 'font-display'}`}>
            {t.valuesTitle}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((value, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className={`text-xl font-bold text-foreground mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                  {value.title}
                </h3>
                <p className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-secondary/30">
        <div className="container-premium">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-12 ${isRTL ? 'font-arabic' : 'font-display'}`}>
            {t.certsTitle}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {t.certs.map((cert, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <Award className="w-5 h-5 text-primary flex-shrink-0" />
                <span className={`text-foreground font-medium ${isRTL ? 'font-arabic' : ''}`}>
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="section-padding">
        <div className="container-premium">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-12 ${isRTL ? 'font-arabic' : 'font-display'}`}>
            {t.whyUsTitle}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {t.whyUs.map((reason, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-4 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className={`text-foreground ${isRTL ? 'font-arabic' : ''}`}>
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="section-padding bg-secondary/30">
        <div className="container-premium">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-12 ${isRTL ? 'font-arabic' : 'font-display'}`}>
            {t.facilitiesTitle}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.facilities.map((facility, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <Building className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className={`text-lg font-bold text-foreground mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                  {facility.title}
                </h3>
                <p className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                  {facility.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Growing Client Family"
        titleAr="انضم إلى عائلة عملائنا المتنامية"
        subtitle="Let's discuss how we can secure your facility"
        subtitleAr="دعنا نناقش كيف يمكننا تأمين منشأتك"
        primaryButton="Contact Us"
        primaryButtonAr="اتصل بنا"
        secondaryButton="View Services"
        secondaryButtonAr="عرض الخدمات"
      />
    </PageLayout>
  );
};

export default About;
