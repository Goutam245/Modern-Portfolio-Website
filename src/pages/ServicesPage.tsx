import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scan, Camera, Radio, Fingerprint, Shield, Server, Printer, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/layout/PageHero';
import CTASection from '@/components/shared/CTASection';

const ServicesPage = () => {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    document.title = language === 'ar' 
      ? 'خدماتنا | ألفا كور سوليوشنز' 
      : 'Our Services | Alpha Core Solutions';
  }, [language]);

  const content = {
    en: {
      heroTitle: 'Comprehensive Security & IT Solutions',
      heroSubtitle: 'End-to-end security and technology solutions tailored to Saudi Arabia\'s unique requirements',
      intro: 'Alpha Core Solutions provides complete security and IT infrastructure solutions for government, enterprise, and critical infrastructure. From advanced detection systems to enterprise IT, we deliver solutions that protect and empower.',
      services: [
        {
          slug: 'metal-detection',
          icon: Scan,
          title: 'Advanced Metal Detection Systems',
          desc: 'State-of-the-art walk-through gates, handheld scanners, and under-vehicle inspection systems. Trusted by international airports, government facilities, and critical infrastructure across Saudi Arabia.',
          features: ['Multi-zone Detection', 'AI Analysis', 'Real-time Alerts', 'Weather Resistant'],
          color: 'from-cyan-500 to-blue-600',
        },
        {
          slug: 'cctv',
          icon: Camera,
          title: 'AI-Powered CCTV Surveillance',
          desc: 'Next-generation surveillance systems with artificial intelligence, facial recognition, behavior analysis, and predictive threat detection. 24/7 monitoring with instant alerts.',
          features: ['4K+ Resolution', 'Facial Recognition', 'Cloud Storage', 'Night Vision'],
          color: 'from-blue-500 to-indigo-600',
        },
        {
          slug: 'xray',
          icon: Radio,
          title: 'X-Ray Screening Solutions',
          desc: 'High-resolution baggage and cargo screening for airports, seaports, and high-security checkpoints. Advanced threat detection with operator-friendly interfaces.',
          features: ['Dual-energy', 'Explosive Detection', 'Network Ready', 'Fast Throughput'],
          color: 'from-indigo-500 to-purple-600',
        },
        {
          slug: 'access-control',
          icon: Fingerprint,
          title: 'Intelligent Access Control',
          desc: 'Comprehensive access management with biometric authentication, smart cards, mobile credentials, and time-attendance integration. Control who enters, when, and where.',
          features: ['Biometrics', 'RFID/NFC', 'Mobile Credentials', 'Time Tracking'],
          color: 'from-purple-500 to-pink-600',
        },
        {
          slug: 'military-clothing',
          icon: Shield,
          title: 'Military & Tactical Clothing',
          desc: 'Premium military uniforms, tactical gear, and specialized clothing for security personnel, military units, and law enforcement agencies. Durable, comfortable, and compliant with Saudi military standards.',
          features: ['Camouflage Patterns', 'Tactical Vests', 'Boots & Accessories', 'Custom Embroidery'],
          color: 'from-green-500 to-emerald-600',
        },
        {
          slug: 'servers-pcs',
          icon: Server,
          title: 'Servers & PC Systems',
          desc: 'Enterprise-grade servers, workstations, and personal computers for government and corporate use. High-performance hardware with complete setup, configuration, and ongoing technical support.',
          features: ['Dell/HP/Lenovo', 'Custom Config', 'Warranty Support', 'Network Integration'],
          color: 'from-orange-500 to-red-600',
        },
        {
          slug: 'printers',
          icon: Printer,
          title: 'Printers & Accessories',
          desc: 'Complete printing solutions including laser printers, multifunction devices, scanners, and genuine consumables. From desktop printers to high-volume production systems for all business needs.',
          features: ['HP/Canon/Xerox', 'Toner & Ink', 'Maintenance', 'Document Management'],
          color: 'from-teal-500 to-cyan-600',
        },
      ],
    },
    ar: {
      heroTitle: 'حلول أمنية وتقنية شاملة',
      heroSubtitle: 'حلول أمنية وتكنولوجية متكاملة مصممة لتلبية المتطلبات الفريدة للمملكة العربية السعودية',
      intro: 'تقدم ألفا كور سوليوشنز حلولاً كاملة للأمان والبنية التحتية لتقنية المعلومات للحكومة والمؤسسات والبنية التحتية الحيوية. من أنظمة الكشف المتقدمة إلى تقنية المعلومات المؤسسية، نقدم حلولاً تحمي وتمكّن.',
      services: [
        {
          slug: 'metal-detection',
          icon: Scan,
          title: 'أنظمة كشف المعادن المتقدمة',
          desc: 'بوابات مرور حديثة وماسحات محمولة وأنظمة فحص تحت المركبات. موثوق بها من قبل المطارات الدولية والمنشآت الحكومية والبنية التحتية الحيوية.',
          features: ['كشف متعدد المناطق', 'تحليل ذكاء اصطناعي', 'تنبيهات فورية', 'مقاومة للطقس'],
          color: 'from-cyan-500 to-blue-600',
        },
        {
          slug: 'cctv',
          icon: Camera,
          title: 'مراقبة بكاميرات تعمل بالذكاء الاصطناعي',
          desc: 'أنظمة مراقبة من الجيل التالي مع الذكاء الاصطناعي والتعرف على الوجوه وتحليل السلوك واكتشاف التهديدات التنبؤي.',
          features: ['دقة 4K+', 'التعرف على الوجوه', 'تخزين سحابي', 'رؤية ليلية'],
          color: 'from-blue-500 to-indigo-600',
        },
        {
          slug: 'xray',
          icon: Radio,
          title: 'حلول فحص الأشعة السينية',
          desc: 'فحص أمتعة وبضائع عالي الدقة للمطارات والموانئ ونقاط التفتيش عالية الأمان.',
          features: ['طاقة مزدوجة', 'كشف المتفجرات', 'جاهز للشبكة', 'إنتاجية سريعة'],
          color: 'from-indigo-500 to-purple-600',
        },
        {
          slug: 'access-control',
          icon: Fingerprint,
          title: 'التحكم الذكي في الوصول',
          desc: 'إدارة وصول شاملة مع المصادقة البيومترية والبطاقات الذكية وبيانات اعتماد الهاتف المحمول.',
          features: ['بيومترية', 'RFID/NFC', 'بيانات الهاتف', 'تتبع الوقت'],
          color: 'from-purple-500 to-pink-600',
        },
        {
          slug: 'military-clothing',
          icon: Shield,
          title: 'الملابس العسكرية والتكتيكية',
          desc: 'زي عسكري متميز ومعدات تكتيكية وملابس متخصصة لأفراد الأمن والوحدات العسكرية.',
          features: ['أنماط التمويه', 'سترات تكتيكية', 'أحذية وإكسسوارات', 'تطريز مخصص'],
          color: 'from-green-500 to-emerald-600',
        },
        {
          slug: 'servers-pcs',
          icon: Server,
          title: 'السيرفرات وأنظمة الكمبيوتر',
          desc: 'سيرفرات من الدرجة المؤسسية ومحطات عمل وأجهزة كمبيوتر شخصية للاستخدام الحكومي والشركات.',
          features: ['Dell/HP/Lenovo', 'تكوين مخصص', 'دعم الضمان', 'تكامل الشبكة'],
          color: 'from-orange-500 to-red-600',
        },
        {
          slug: 'printers',
          icon: Printer,
          title: 'الطابعات والملحقات',
          desc: 'حلول طباعة كاملة تشمل طابعات ليزر وأجهزة متعددة الوظائف وماسحات ضوئية ومواد استهلاكية أصلية.',
          features: ['HP/Canon/Xerox', 'حبر وتونر', 'صيانة', 'إدارة المستندات'],
          color: 'from-teal-500 to-cyan-600',
        },
      ],
    }
  };

  const t = content[language];

  return (
    <PageLayout>
      <PageHero
        eyebrow={language === 'ar' ? 'خدماتنا' : 'OUR SERVICES'}
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
      />

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-premium">
          <p className={`text-xl text-muted-foreground max-w-4xl mx-auto text-center leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
            {t.intro}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-0">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, index) => (
              <Link
                key={index}
                to={`/services/${service.slug}`}
                className="group glass-card overflow-hidden card-hover block"
              >
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
                    {service.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="px-3 py-1 text-xs font-medium bg-secondary/80 text-foreground/70 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* View Details */}
                  <div className={`flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-4 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>{language === 'ar' ? 'عرض التفاصيل' : 'View Details'}</span>
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Custom Solution?"
        titleAr="تحتاج حلاً مخصصاً؟"
        subtitle="Our experts are ready to design a security solution tailored to your needs"
        subtitleAr="خبراؤنا جاهزون لتصميم حل أمني مخصص لاحتياجاتك"
        primaryButton="Request Consultation"
        primaryButtonAr="اطلب استشارة"
        secondaryButton="Contact Us"
        secondaryButtonAr="اتصل بنا"
      />
    </PageLayout>
  );
};

export default ServicesPage;
