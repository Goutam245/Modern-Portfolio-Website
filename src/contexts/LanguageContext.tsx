import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.mission': 'Our Mission',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.partners': 'Partners',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.preheadline': "Kingdom of Saudi Arabia's Trusted Security Partner",
    'hero.headline1': 'Securing Tomorrow,',
    'hero.headline2': 'Today',
    'hero.subheadline': 'Advanced Physical Security Solutions for Critical Infrastructure & Government Entities',
    'hero.description': 'Cutting-edge Metal Detection | AI-Powered CCTV | X-Ray Technology | Biometric Access Control',
    'hero.cta.primary': 'Explore Our Solutions',
    'hero.cta.secondary': 'Request Consultation',
    'hero.trust': 'ISO 9001 Certified | 15+ Years Excellence',
    
    // Trust Indicators
    'trust.years': '15+ Years Experience',
    'trust.iso': 'ISO 9001 Certified',
    'trust.projects': '100+ Saudi Projects',
    'trust.satisfaction': '98% Client Satisfaction',
    'trust.support': '24/7 Security Support',
    'trust.approved': 'Government Approved',
    
    // Mission
    'mission.eyebrow': 'OUR MISSION',
    'mission.headline': 'Protecting What Matters Most Through Innovation & Excellence',
    'mission.body': "At Alpha Core Solutions, we provide most security and IT products. We've been the trusted partner for Saudi Arabia's government ministries.",
    'mission.body2': "Our mission is simple yet profound: to provide world-class physical security solutions that give our clients absolute peace of mind. Through cutting-edge technology, expert deployment, and 24/7 support, we ensure that every person, asset, and facility under our protection is secured to the highest international standards.",
    'mission.commitment': "We are committed to innovation, reliability, and the safety of the Kingdom.",
    'mission.value1.title': 'Innovation First',
    'mission.value1.desc': 'Adopting latest security tech globally',
    'mission.value2.title': 'Client Trust',
    'mission.value2.desc': 'Building lasting partnerships',
    'mission.value3.title': 'Saudi Excellence',
    'mission.value3.desc': 'Proudly serving the Kingdom',
    
    // Services
    'services.eyebrow': 'OUR SERVICES',
    'services.headline': 'Comprehensive Security Solutions',
    'services.subheadline': 'Advanced security and IT solutions',
    
    'services.military.title': 'Military & Tactical Clothing',
    'services.military.desc': 'Premium military uniforms, tactical gear, and specialized clothing for security personnel, military units, and law enforcement agencies. Durable, comfortable, and compliant with Saudi military standards.',
    'services.military.clients': 'Saudi military compliant',
    
    'services.servers.title': 'Servers & PC Systems',
    'services.servers.desc': 'Enterprise-grade servers, workstations, and personal computers for government and corporate use. High-performance hardware with complete setup, configuration, and ongoing technical support.',
    'services.servers.clients': 'Enterprise solutions',
    
    'services.printers.title': 'Printers & Accessories',
    'services.printers.desc': 'Complete printing solutions including laser printers, multifunction devices, scanners, and genuine consumables. From desktop printers to high-volume production systems for all business needs.',
    'services.printers.clients': 'Full product range',
    
    'services.metal.title': 'Advanced Metal Detection Systems',
    'services.metal.desc': 'State-of-the-art walk-through gates, handheld scanners, and under-vehicle inspection systems. Trusted by international airports, government facilities, and critical infrastructure across Saudi Arabia.',
    'services.metal.clients': 'Deployed in 40+ Saudi facilities',
    
    'services.cctv.title': 'AI-Powered CCTV Surveillance',
    'services.cctv.desc': 'Next-generation surveillance systems with artificial intelligence, facial recognition, behavior analysis, and predictive threat detection. 24/7 monitoring with instant alerts.',
    'services.cctv.clients': '500,000+ cameras deployed',
    
    'services.xray.title': 'X-Ray Screening Solutions',
    'services.xray.desc': 'High-resolution baggage and cargo screening for airports, seaports, and high-security checkpoints. Advanced threat detection with operator-friendly interfaces.',
    'services.xray.clients': 'International aviation compliant',
    
    'services.access.title': 'Intelligent Access Control',
    'services.access.desc': 'Comprehensive access management with biometric authentication, smart cards, mobile credentials, and time-attendance integration. Control who enters, when, and where.',
    'services.access.clients': 'Seamless integration',
    
    'services.learnMore': 'Learn More',
    
    // Stats
    'stats.headline': 'Numbers That Speak',
    'stats.years': 'Years',
    'stats.yearsLabel': 'Industry Leadership',
    'stats.devices': 'Devices',
    'stats.devicesLabel': 'Security Devices Deployed',
    'stats.satisfaction': '%',
    'stats.satisfactionLabel': 'Client Satisfaction Rate',
    'stats.projects': '+',
    'stats.projectsLabel': 'Major Projects Completed',
    'stats.support': '/7',
    'stats.supportLabel': 'Monitoring & Support',
    'stats.certified': 'ISO 9001',
    'stats.certifiedLabel': 'Certified Excellence',
    
    // Clients
    'clients.eyebrow': 'TRUSTED BY',
    'clients.headline': 'Proudly Serving the Kingdom',
    'clients.subheadline': 'Trusted by Leading Saudi Institutions Across Critical Sectors',
    'clients.government': 'Government & Ministries',
    'clients.governmentDesc': 'Protecting sensitive government facilities and personnel',
    'clients.aviation': 'Aviation & Airports',
    'clients.aviationDesc': 'Securing international and domestic aviation hubs',
    'clients.healthcare': 'Healthcare Institutions',
    'clients.healthcareDesc': 'Safeguarding hospitals and medical facilities',
    'clients.energy': 'Energy & Petrochemicals',
    'clients.energyDesc': 'Defending critical national infrastructure',
    'clients.education': 'Education & Universities',
    'clients.educationDesc': 'Campus security for academic institutions',
    'clients.hospitality': 'Hospitality & Events',
    'clients.hospitalityDesc': 'VIP protection and event security management',
    
    // Testimonials
    'testimonials.eyebrow': 'SUCCESS STORIES',
    'testimonials.headline': 'What Our Clients Say',
    
    // Contact
    'contact.eyebrow': 'GET IN TOUCH',
    'contact.headline': "Let's Discuss Your Security Needs",
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.company': 'Company/Organization',
    'contact.service': 'Service Interest',
    'contact.message': 'Project Details',
    'contact.messagePlaceholder': 'Tell us about your security requirements...',
    'contact.consent': 'I agree to privacy policy and terms',
    'contact.submit': 'Request Consultation',
    'contact.success': 'Thank you! Our team will contact you within 24 hours.',
    'contact.phone.label': 'Phone',
    'contact.email.label': 'Email',
    'contact.address.label': 'Address',
    'contact.hours.label': 'Business Hours',
    'contact.address.value': 'Riyadh, Kingdom of Saudi Arabia',
    'contact.hours.value': 'Sunday - Thursday: 8:00 AM - 6:00 PM',
    'contact.emergency': 'Emergency Support: Available 24/7',
    
    // Footer
    'footer.tagline': 'Securing Tomorrow, Today',
    'footer.description': 'Leading provider of advanced physical security solutions in the Kingdom of Saudi Arabia.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.newsletter': 'Stay Updated',
    'footer.newsletterPlaceholder': 'Enter your email',
    'footer.subscribe': 'Subscribe',
    'footer.rights': '© 2025 Alpha Core Solutions Est. All Rights Reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    'footer.serving': 'Proudly Serving the Kingdom of Saudi Arabia',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.mission': 'مهمتنا',
    'nav.services': 'خدماتنا',
    'nav.projects': 'مشاريعنا',
    'nav.partners': 'شركاؤنا',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.preheadline': 'الشريك الأمني الموثوق للمملكة العربية السعودية',
    'hero.headline1': 'تأمين الغد،',
    'hero.headline2': 'اليوم',
    'hero.subheadline': 'حلول أمنية مادية متطورة للبنية التحتية الحيوية والجهات الحكومية',
    'hero.description': 'كشف معادن متطور | مراقبة بالذكاء الاصطناعي | تقنية الأشعة السينية | تحكم وصول بيومتري',
    'hero.cta.primary': 'استكشف حلولنا',
    'hero.cta.secondary': 'اطلب استشارة',
    'hero.trust': 'معتمد ISO 9001 | أكثر من 15 عاماً من التميز',
    
    // Trust Indicators
    'trust.years': 'أكثر من 15 عاماً خبرة',
    'trust.iso': 'معتمد ISO 9001',
    'trust.projects': 'أكثر من 100 مشروع سعودي',
    'trust.satisfaction': '98% رضا العملاء',
    'trust.support': 'دعم أمني 24/7',
    'trust.approved': 'معتمد حكومياً',
    
    // Mission
    'mission.eyebrow': 'مهمتنا',
    'mission.headline': 'حماية ما يهم أكثر من خلال الابتكار والتميز',
    'mission.body': 'في ألفا كور سوليوشنز، نوفر معظم منتجات الأمن وتكنولوجيا المعلومات. لقد كنا الشريك الموثوق لوزارات حكومة المملكة العربية السعودية.',
    'mission.body2': 'مهمتنا بسيطة ولكنها عميقة: تقديم حلول أمنية مادية عالمية المستوى تمنح عملائنا راحة البال المطلقة. من خلال التكنولوجيا المتطورة والنشر المتخصص والدعم على مدار الساعة طوال أيام الأسبوع، نضمن حماية كل شخص وأصل ومنشأة تحت حمايتنا بأعلى المعايير الدولية.',
    'mission.commitment': 'نحن ملتزمون بالابتكار والموثوقية وسلامة المملكة.',
    'mission.value1.title': 'الابتكار أولاً',
    'mission.value1.desc': 'اعتماد أحدث تقنيات الأمان عالمياً',
    'mission.value2.title': 'ثقة العملاء',
    'mission.value2.desc': 'بناء شراكات دائمة',
    'mission.value3.title': 'التميز السعودي',
    'mission.value3.desc': 'نفخر بخدمة المملكة',
    
    // Services
    'services.eyebrow': 'خدماتنا',
    'services.headline': 'حلول أمنية شاملة',
    'services.subheadline': 'حلول أمنية وتقنية متقدمة',
    
    'services.military.title': 'الملابس العسكرية والتكتيكية',
    'services.military.desc': 'زي عسكري متميز ومعدات تكتيكية وملابس متخصصة لأفراد الأمن والوحدات العسكرية ووكالات إنفاذ القانون. متينة ومريحة ومتوافقة مع المعايير العسكرية السعودية.',
    'services.military.clients': 'متوافق مع المعايير العسكرية السعودية',
    
    'services.servers.title': 'السيرفرات وأنظمة الكمبيوتر',
    'services.servers.desc': 'سيرفرات من الدرجة المؤسسية ومحطات عمل وأجهزة كمبيوتر شخصية للاستخدام الحكومي والشركات. أجهزة عالية الأداء مع إعداد كامل وتكوين ودعم فني مستمر.',
    'services.servers.clients': 'حلول مؤسسية',
    
    'services.printers.title': 'الطابعات والملحقات',
    'services.printers.desc': 'حلول طباعة كاملة تشمل طابعات ليزر وأجهزة متعددة الوظائف وماسحات ضوئية ومواد استهلاكية أصلية. من طابعات المكتب إلى أنظمة الإنتاج عالية الحجم لجميع احتياجات الأعمال.',
    'services.printers.clients': 'مجموعة منتجات كاملة',
    
    'services.metal.title': 'أنظمة كشف المعادن المتقدمة',
    'services.metal.desc': 'بوابات مرور حديثة وماسحات محمولة وأنظمة فحص تحت المركبات. موثوق بها من قبل المطارات الدولية والمنشآت الحكومية والبنية التحتية الحيوية في جميع أنحاء المملكة العربية السعودية.',
    'services.metal.clients': 'منتشرة في أكثر من 40 منشأة سعودية',
    
    'services.cctv.title': 'مراقبة بكاميرات تعمل بالذكاء الاصطناعي',
    'services.cctv.desc': 'أنظمة مراقبة من الجيل التالي مع الذكاء الاصطناعي والتعرف على الوجوه وتحليل السلوك واكتشاف التهديدات التنبؤي. مراقبة على مدار الساعة مع تنبيهات فورية.',
    'services.cctv.clients': 'أكثر من 500,000 كاميرا منتشرة',
    
    'services.xray.title': 'حلول فحص الأشعة السينية',
    'services.xray.desc': 'فحص أمتعة وبضائع عالي الدقة للمطارات والموانئ البحرية ونقاط التفتيش عالية الأمان. كشف تهديدات متقدم مع واجهات سهلة الاستخدام.',
    'services.xray.clients': 'متوافق مع معايير الطيران الدولية',
    
    'services.access.title': 'التحكم الذكي في الوصول',
    'services.access.desc': 'إدارة وصول شاملة مع المصادقة البيومترية والبطاقات الذكية وبيانات اعتماد الهاتف المحمول وتكامل الحضور والانصراف. تحكم في من يدخل ومتى وأين.',
    'services.access.clients': 'تكامل سلس',
    
    'services.learnMore': 'اعرف المزيد',
    
    // Stats
    'stats.headline': 'أرقام تتحدث',
    'stats.years': 'سنة',
    'stats.yearsLabel': 'ريادة الصناعة',
    'stats.devices': 'جهاز',
    'stats.devicesLabel': 'أجهزة أمان منتشرة',
    'stats.satisfaction': '%',
    'stats.satisfactionLabel': 'معدل رضا العملاء',
    'stats.projects': '+',
    'stats.projectsLabel': 'مشاريع كبرى منجزة',
    'stats.support': '/7',
    'stats.supportLabel': 'مراقبة ودعم',
    'stats.certified': 'ISO 9001',
    'stats.certifiedLabel': 'تميز معتمد',
    
    // Clients
    'clients.eyebrow': 'موثوق بنا من قبل',
    'clients.headline': 'نخدم المملكة بفخر',
    'clients.subheadline': 'موثوق بنا من المؤسسات السعودية الرائدة عبر القطاعات الحيوية',
    'clients.government': 'الحكومة والوزارات',
    'clients.governmentDesc': 'حماية المنشآت الحكومية الحساسة والموظفين',
    'clients.aviation': 'الطيران والمطارات',
    'clients.aviationDesc': 'تأمين مراكز الطيران الدولية والمحلية',
    'clients.healthcare': 'المؤسسات الصحية',
    'clients.healthcareDesc': 'حماية المستشفيات والمرافق الطبية',
    'clients.energy': 'الطاقة والبتروكيماويات',
    'clients.energyDesc': 'الدفاع عن البنية التحتية الوطنية الحيوية',
    'clients.education': 'التعليم والجامعات',
    'clients.educationDesc': 'أمن الحرم الجامعي للمؤسسات الأكاديمية',
    'clients.hospitality': 'الضيافة والفعاليات',
    'clients.hospitalityDesc': 'حماية الشخصيات المهمة وإدارة أمن الفعاليات',
    
    // Testimonials
    'testimonials.eyebrow': 'قصص النجاح',
    'testimonials.headline': 'ماذا يقول عملاؤنا',
    
    // Contact
    'contact.eyebrow': 'تواصل معنا',
    'contact.headline': 'لنناقش احتياجاتك الأمنية',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.company': 'الشركة/المؤسسة',
    'contact.service': 'الخدمة المطلوبة',
    'contact.message': 'تفاصيل المشروع',
    'contact.messagePlaceholder': 'أخبرنا عن متطلباتك الأمنية...',
    'contact.consent': 'أوافق على سياسة الخصوصية والشروط',
    'contact.submit': 'اطلب استشارة',
    'contact.success': 'شكراً لك! سيتواصل معك فريقنا خلال 24 ساعة.',
    'contact.phone.label': 'الهاتف',
    'contact.email.label': 'البريد الإلكتروني',
    'contact.address.label': 'العنوان',
    'contact.hours.label': 'ساعات العمل',
    'contact.address.value': 'الرياض، المملكة العربية السعودية',
    'contact.hours.value': 'الأحد - الخميس: 8:00 صباحاً - 6:00 مساءً',
    'contact.emergency': 'الدعم الطارئ: متاح 24/7',
    
    // Footer
    'footer.tagline': 'تأمين الغد، اليوم',
    'footer.description': 'المزود الرائد لحلول الأمان المادي المتقدمة في المملكة العربية السعودية.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.services': 'الخدمات',
    'footer.contact': 'اتصل بنا',
    'footer.newsletter': 'ابق على اطلاع',
    'footer.newsletterPlaceholder': 'أدخل بريدك الإلكتروني',
    'footer.subscribe': 'اشترك',
    'footer.rights': '© 2024 مؤسسة ألفا كور سوليوشنز. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.cookies': 'سياسة ملفات تعريف الارتباط',
    'footer.serving': 'نفخر بخدمة المملكة العربية السعودية',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
