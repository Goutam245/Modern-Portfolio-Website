import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight, Scan, Camera, Radio, Fingerprint, Shield, Server, Printer } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/layout/PageLayout';
import CTASection from '@/components/shared/CTASection';

const serviceData = {
  'metal-detection': {
    icon: Scan,
    color: 'from-cyan-500 to-blue-600',
    en: {
      title: 'Advanced Metal Detection Systems',
      subtitle: 'Protecting Saudi Arabia\'s Critical Entry Points',
      overview: 'Our metal detection solutions represent the pinnacle of security screening technology. Trusted by major Saudi airports, government facilities, and critical infrastructure, our systems combine cutting-edge detection capabilities with user-friendly operation. We offer a complete range of metal detection solutions, from high-throughput walk-through gates for airports to precise handheld scanners for security checkpoints. Every system is backed by our 24/7 support and comprehensive training programs.',
      categories: [
        {
          title: 'Walk-Through Metal Detectors',
          desc: 'Multi-zone detection (6-33 zones), AI-powered threat analysis, quick pass-through (30+ people/minute), weatherproof for outdoor use.',
          ideal: 'Airports, government buildings, events'
        },
        {
          title: 'Handheld Metal Detectors',
          desc: 'Pinpoint accuracy, lightweight and ergonomic, long battery life, audio/visual/vibration alerts.',
          ideal: 'Security checkpoints, venue screening'
        },
        {
          title: 'Under-Vehicle Inspection Systems',
          desc: 'Complete vehicle undercarriage scanning, high-resolution imaging, permanent or portable installation.',
          ideal: 'Military bases, embassies, VIP facilities'
        }
      ],
      features: ['AI-Powered Threat Detection', 'Zero False Alarms Technology', 'Multi-Language Interface', 'Remote Monitoring Capability', 'Weather Resistant Design', 'Easy Integration'],
      applications: ['International & Domestic Airports', 'Government Ministries & Buildings', 'Military Facilities', 'Commercial Office Buildings', 'Event Venues & Stadiums', 'Educational Institutions', 'Hotels & Resorts'],
      faqs: [
        { q: 'What\'s the difference between walk-through and handheld detectors?', a: 'Walk-through detectors are fixed units for high-volume screening, while handheld detectors provide portable, precise secondary screening for individual inspection.' },
        { q: 'Are your systems compliant with international standards?', a: 'Yes, all our metal detection systems comply with ICAO, TSA, and EU aviation security standards, as well as Saudi GACA regulations.' },
        { q: 'What maintenance is required?', a: 'Our systems require minimal maintenance. We provide annual maintenance contracts that include regular calibration, software updates, and preventive maintenance.' },
        { q: 'How long is the installation process?', a: 'Installation typically takes 1-3 days depending on the complexity. We handle everything from site assessment to training.' }
      ],
      relatedServices: ['cctv', 'xray', 'access-control']
    },
    ar: {
      title: 'أنظمة كشف المعادن المتقدمة',
      subtitle: 'حماية نقاط الدخول الحيوية في المملكة العربية السعودية',
      overview: 'تمثل حلول الكشف عن المعادن لدينا قمة تقنية الفحص الأمني. موثوق بها من قبل المطارات السعودية الكبرى والمنشآت الحكومية والبنية التحتية الحيوية، تجمع أنظمتنا بين قدرات الكشف المتطورة والتشغيل سهل الاستخدام.',
      categories: [
        {
          title: 'بوابات الكشف عن المعادن',
          desc: 'كشف متعدد المناطق (6-33 منطقة)، تحليل تهديدات بالذكاء الاصطناعي، مرور سريع (30+ شخص/دقيقة).',
          ideal: 'المطارات، المباني الحكومية، الفعاليات'
        },
        {
          title: 'أجهزة الكشف المحمولة',
          desc: 'دقة عالية، خفيف الوزن ومريح، عمر بطارية طويل، تنبيهات صوتية/بصرية.',
          ideal: 'نقاط التفتيش، فحص الأماكن'
        },
        {
          title: 'أنظمة فحص أسفل المركبات',
          desc: 'مسح كامل لأسفل المركبة، تصوير عالي الدقة، تركيب دائم أو متنقل.',
          ideal: 'القواعد العسكرية، السفارات، منشآت VIP'
        }
      ],
      features: ['كشف التهديدات بالذكاء الاصطناعي', 'تقنية عدم الإنذارات الكاذبة', 'واجهة متعددة اللغات', 'قدرة المراقبة عن بعد', 'تصميم مقاوم للطقس', 'تكامل سهل'],
      applications: ['المطارات الدولية والمحلية', 'الوزارات والمباني الحكومية', 'المنشآت العسكرية', 'المباني التجارية', 'أماكن الفعاليات والملاعب', 'المؤسسات التعليمية', 'الفنادق والمنتجعات'],
      faqs: [
        { q: 'ما الفرق بين أجهزة الكشف الثابتة والمحمولة؟', a: 'أجهزة الكشف الثابتة للفحص عالي الحجم، بينما توفر المحمولة فحصاً ثانوياً دقيقاً للأفراد.' },
        { q: 'هل أنظمتكم متوافقة مع المعايير الدولية؟', a: 'نعم، جميع أنظمتنا متوافقة مع معايير ICAO وTSA والاتحاد الأوروبي ولوائح GACA السعودية.' },
        { q: 'ما الصيانة المطلوبة؟', a: 'أنظمتنا تتطلب صيانة بسيطة. نوفر عقود صيانة سنوية تشمل المعايرة وتحديثات البرامج والصيانة الوقائية.' },
        { q: 'كم تستغرق عملية التركيب؟', a: 'التركيب يستغرق عادة 1-3 أيام حسب التعقيد. نتولى كل شيء من تقييم الموقع إلى التدريب.' }
      ],
      relatedServices: ['cctv', 'xray', 'access-control']
    }
  },
  'cctv': {
    icon: Camera,
    color: 'from-blue-500 to-indigo-600',
    en: {
      title: 'AI-Powered CCTV Surveillance',
      subtitle: '24/7 Intelligent Monitoring for Complete Security',
      overview: 'Transform your security operations with our next-generation CCTV systems. Featuring artificial intelligence, facial recognition, and predictive analytics, our surveillance solutions provide unmatched protection for your facilities. From single-site installations to enterprise-wide deployments, we deliver scalable solutions backed by 24/7 monitoring capabilities.',
      categories: [
        { title: 'IP Camera Systems', desc: 'High-resolution IP cameras with 4K+ capability, night vision, and weather resistance for any environment.', ideal: 'All facility types' },
        { title: 'AI Video Analytics', desc: 'Intelligent video analysis for facial recognition, behavior detection, and automated threat alerts.', ideal: 'High-security facilities' },
        { title: 'Cloud & Hybrid Storage', desc: 'Flexible storage solutions with cloud backup, on-premise servers, or hybrid configurations.', ideal: 'Enterprise deployments' }
      ],
      features: ['4K+ Ultra HD Resolution', 'AI Facial Recognition', 'Behavior Analysis', 'Cloud Storage Integration', 'Mobile App Access', 'Night Vision Technology'],
      applications: ['Corporate Offices', 'Retail & Shopping Centers', 'Industrial Facilities', 'Residential Compounds', 'Public Spaces', 'Transportation Hubs'],
      faqs: [
        { q: 'How does AI facial recognition work?', a: 'Our AI systems analyze facial features in real-time, comparing against databases to identify authorized personnel or potential threats.' },
        { q: 'Can I access footage remotely?', a: 'Yes, our systems include mobile apps and web portals for secure remote access to live and recorded footage.' },
        { q: 'What\'s the storage capacity?', a: 'Storage is customizable based on your needs, from 30 days to years of continuous recording with our cloud and hybrid solutions.' }
      ],
      relatedServices: ['metal-detection', 'access-control', 'xray']
    },
    ar: {
      title: 'مراقبة CCTV بالذكاء الاصطناعي',
      subtitle: 'مراقبة ذكية على مدار الساعة لأمان كامل',
      overview: 'حوّل عمليات الأمان الخاصة بك مع أنظمة CCTV من الجيل التالي. تتميز بالذكاء الاصطناعي والتعرف على الوجوه والتحليلات التنبؤية، توفر حلول المراقبة لدينا حماية لا مثيل لها.',
      categories: [
        { title: 'أنظمة كاميرات IP', desc: 'كاميرات IP عالية الدقة بقدرة 4K+، رؤية ليلية، ومقاومة للطقس.', ideal: 'جميع أنواع المنشآت' },
        { title: 'تحليلات الفيديو بالذكاء الاصطناعي', desc: 'تحليل فيديو ذكي للتعرف على الوجوه وكشف السلوك والتنبيهات الآلية.', ideal: 'المنشآت عالية الأمان' },
        { title: 'التخزين السحابي والهجين', desc: 'حلول تخزين مرنة مع نسخ احتياطي سحابي أو خوادم محلية.', ideal: 'نشر المؤسسات' }
      ],
      features: ['دقة Ultra HD 4K+', 'التعرف على الوجوه بالذكاء الاصطناعي', 'تحليل السلوك', 'تكامل التخزين السحابي', 'الوصول عبر تطبيق الجوال', 'تقنية الرؤية الليلية'],
      applications: ['المكاتب التجارية', 'المتاجر ومراكز التسوق', 'المنشآت الصناعية', 'المجمعات السكنية', 'الأماكن العامة', 'مراكز النقل'],
      faqs: [
        { q: 'كيف يعمل التعرف على الوجوه بالذكاء الاصطناعي؟', a: 'تحلل أنظمتنا ملامح الوجه في الوقت الفعلي، مقارنة مع قواعد البيانات لتحديد الموظفين المصرح لهم.' },
        { q: 'هل يمكنني الوصول للتسجيلات عن بعد؟', a: 'نعم، تشمل أنظمتنا تطبيقات جوال وبوابات ويب للوصول الآمن عن بعد.' },
        { q: 'ما سعة التخزين؟', a: 'التخزين قابل للتخصيص حسب احتياجاتك، من 30 يوماً إلى سنوات من التسجيل المستمر.' }
      ],
      relatedServices: ['metal-detection', 'access-control', 'xray']
    }
  },
  'xray': {
    icon: Radio,
    color: 'from-indigo-500 to-purple-600',
    en: {
      title: 'X-Ray Screening Solutions',
      subtitle: 'Advanced Threat Detection for Maximum Security',
      overview: 'Our X-ray screening systems provide the highest level of inspection capability for baggage, cargo, and packages. Designed for airports, seaports, and high-security checkpoints, these systems combine advanced imaging technology with operator-friendly interfaces for fast, accurate threat detection.',
      categories: [
        { title: 'Baggage X-Ray Systems', desc: 'High-resolution screening for carry-on and checked baggage with automatic threat detection.', ideal: 'Airports, government buildings' },
        { title: 'Cargo Screening', desc: 'Large-scale systems for shipping containers and freight with explosive detection.', ideal: 'Seaports, logistics centers' },
        { title: 'Parcel & Mail Screening', desc: 'Compact systems for screening mail and packages in corporate and government settings.', ideal: 'Mailrooms, distribution centers' }
      ],
      features: ['Dual-Energy Imaging', 'Explosive Detection', 'Automatic Threat Recognition', 'High Throughput', 'Color-Coded Alerts', 'Network Integration'],
      applications: ['Airports', 'Seaports', 'Government Buildings', 'Corporate Mailrooms', 'Event Venues', 'Border Crossings'],
      faqs: [
        { q: 'What can X-ray systems detect?', a: 'Our systems detect explosives, weapons, drugs, and contraband using advanced dual-energy imaging and AI-powered analysis.' },
        { q: 'How fast is the screening process?', a: 'Depending on the model, our systems can screen 200-1800 bags per hour without compromising detection accuracy.' }
      ],
      relatedServices: ['metal-detection', 'cctv', 'access-control']
    },
    ar: {
      title: 'حلول فحص الأشعة السينية',
      subtitle: 'كشف التهديدات المتقدم لأقصى درجات الأمان',
      overview: 'توفر أنظمة الفحص بالأشعة السينية لدينا أعلى مستوى من قدرة التفتيش للأمتعة والبضائع والطرود. مصممة للمطارات والموانئ ونقاط التفتيش عالية الأمان.',
      categories: [
        { title: 'أنظمة فحص الأمتعة', desc: 'فحص عالي الدقة للأمتعة المحمولة والمسجلة مع كشف تلقائي للتهديدات.', ideal: 'المطارات، المباني الحكومية' },
        { title: 'فحص البضائع', desc: 'أنظمة واسعة النطاق لحاويات الشحن والبضائع مع كشف المتفجرات.', ideal: 'الموانئ، مراكز اللوجستيات' },
        { title: 'فحص الطرود والبريد', desc: 'أنظمة مدمجة لفحص البريد والطرود.', ideal: 'غرف البريد، مراكز التوزيع' }
      ],
      features: ['تصوير مزدوج الطاقة', 'كشف المتفجرات', 'التعرف الآلي على التهديدات', 'إنتاجية عالية', 'تنبيهات ملونة', 'تكامل الشبكة'],
      applications: ['المطارات', 'الموانئ', 'المباني الحكومية', 'غرف البريد', 'أماكن الفعاليات', 'المعابر الحدودية'],
      faqs: [
        { q: 'ما الذي يمكن لأنظمة الأشعة السينية كشفه؟', a: 'تكشف أنظمتنا المتفجرات والأسلحة والمخدرات والممنوعات باستخدام التصوير المزدوج والتحليل بالذكاء الاصطناعي.' },
        { q: 'ما سرعة عملية الفحص؟', a: 'حسب الطراز، يمكن لأنظمتنا فحص 200-1800 حقيبة في الساعة دون المساس بدقة الكشف.' }
      ],
      relatedServices: ['metal-detection', 'cctv', 'access-control']
    }
  },
  'access-control': {
    icon: Fingerprint,
    color: 'from-purple-500 to-pink-600',
    en: {
      title: 'Intelligent Access Control',
      subtitle: 'Complete Control Over Who Enters, When, and Where',
      overview: 'Our intelligent access control systems provide comprehensive security management for any facility. From biometric authentication to mobile credentials, we deliver solutions that secure your premises while providing seamless access for authorized personnel.',
      categories: [
        { title: 'Biometric Systems', desc: 'Fingerprint, facial, and iris recognition for the highest security levels.', ideal: 'Secure facilities, data centers' },
        { title: 'Smart Card Systems', desc: 'RFID and NFC card-based access with anti-cloning protection.', ideal: 'Corporate offices, campuses' },
        { title: 'Mobile Access', desc: 'Smartphone-based credentials using Bluetooth and NFC technology.', ideal: 'Modern workplaces, flexible access' }
      ],
      features: ['Multi-Factor Authentication', 'Time & Attendance Integration', 'Visitor Management', 'Anti-Tailgating', 'Emergency Lockdown', 'Audit Trail'],
      applications: ['Data Centers', 'Corporate Headquarters', 'Government Facilities', 'Healthcare Facilities', 'Educational Institutions', 'Residential Buildings'],
      faqs: [
        { q: 'Can access control integrate with other systems?', a: 'Yes, our systems integrate with CCTV, fire alarms, elevators, and building management systems.' },
        { q: 'How secure are mobile credentials?', a: 'Mobile credentials use encrypted communication and cannot be copied or shared, providing higher security than traditional cards.' }
      ],
      relatedServices: ['cctv', 'metal-detection', 'servers-pcs']
    },
    ar: {
      title: 'التحكم الذكي في الوصول',
      subtitle: 'تحكم كامل في من يدخل ومتى وأين',
      overview: 'توفر أنظمة التحكم الذكي في الوصول لدينا إدارة أمنية شاملة لأي منشأة. من المصادقة البيومترية إلى بيانات اعتماد الجوال، نقدم حلولاً تؤمن مقراتك.',
      categories: [
        { title: 'الأنظمة البيومترية', desc: 'التعرف على البصمة والوجه والقزحية لأعلى مستويات الأمان.', ideal: 'المنشآت الآمنة، مراكز البيانات' },
        { title: 'أنظمة البطاقات الذكية', desc: 'وصول قائم على بطاقات RFID وNFC مع حماية ضد الاستنساخ.', ideal: 'المكاتب، الحرم الجامعي' },
        { title: 'الوصول عبر الجوال', desc: 'بيانات اعتماد قائمة على الهاتف الذكي باستخدام Bluetooth وNFC.', ideal: 'أماكن العمل الحديثة' }
      ],
      features: ['مصادقة متعددة العوامل', 'تكامل الحضور والانصراف', 'إدارة الزوار', 'مضاد للتتبع', 'إغلاق الطوارئ', 'سجل المراجعة'],
      applications: ['مراكز البيانات', 'المقرات الرئيسية', 'المنشآت الحكومية', 'مرافق الرعاية الصحية', 'المؤسسات التعليمية', 'المباني السكنية'],
      faqs: [
        { q: 'هل يمكن لنظام التحكم في الوصول التكامل مع أنظمة أخرى؟', a: 'نعم، تتكامل أنظمتنا مع CCTV وأجهزة الإنذار والمصاعد وأنظمة إدارة المباني.' },
        { q: 'ما مدى أمان بيانات اعتماد الجوال؟', a: 'تستخدم بيانات اعتماد الجوال اتصالاً مشفراً ولا يمكن نسخها أو مشاركتها.' }
      ],
      relatedServices: ['cctv', 'metal-detection', 'servers-pcs']
    }
  },
  'military-clothing': {
    icon: Shield,
    color: 'from-green-500 to-emerald-600',
    en: {
      title: 'Military & Tactical Clothing',
      subtitle: 'Premium Gear for Security Professionals',
      overview: 'We provide comprehensive military and tactical clothing solutions for security personnel, military units, and law enforcement agencies across Saudi Arabia. Our products meet the highest standards for durability, comfort, and compliance with Saudi military requirements.',
      categories: [
        { title: 'Military Uniforms', desc: 'Complete uniform sets including combat and ceremonial wear.', ideal: 'Military, law enforcement' },
        { title: 'Tactical Gear', desc: 'Vests, belts, holsters, and protective equipment.', ideal: 'Security operations' },
        { title: 'Boots & Accessories', desc: 'Combat boots, gloves, and protective accessories.', ideal: 'All security personnel' }
      ],
      features: ['Saudi Standards Compliant', 'Durable Materials', 'Custom Embroidery', 'Bulk Orders', 'Fast Delivery', 'Quality Assured'],
      applications: ['Military Units', 'Police Forces', 'Private Security', 'Government Agencies', 'Event Security', 'VIP Protection'],
      faqs: [
        { q: 'Do you offer custom embroidery?', a: 'Yes, we provide custom embroidery for organization logos, names, and badges on all clothing items.' },
        { q: 'What are your minimum order quantities?', a: 'We accommodate orders of all sizes, from individual items to large-scale uniform deployments.' }
      ],
      relatedServices: ['access-control', 'metal-detection', 'cctv']
    },
    ar: {
      title: 'الملابس العسكرية والتكتيكية',
      subtitle: 'معدات متميزة لمحترفي الأمن',
      overview: 'نوفر حلول ملابس عسكرية وتكتيكية شاملة لأفراد الأمن والوحدات العسكرية ووكالات إنفاذ القانون في جميع أنحاء المملكة العربية السعودية.',
      categories: [
        { title: 'الزي العسكري', desc: 'مجموعات زي كاملة تشمل الزي القتالي والاحتفالي.', ideal: 'العسكريون، إنفاذ القانون' },
        { title: 'المعدات التكتيكية', desc: 'سترات وأحزمة وحوامل ومعدات واقية.', ideal: 'العمليات الأمنية' },
        { title: 'الأحذية والإكسسوارات', desc: 'أحذية قتالية وقفازات وإكسسوارات واقية.', ideal: 'جميع أفراد الأمن' }
      ],
      features: ['متوافق مع المعايير السعودية', 'مواد متينة', 'تطريز مخصص', 'طلبات بالجملة', 'توصيل سريع', 'جودة مضمونة'],
      applications: ['الوحدات العسكرية', 'قوات الشرطة', 'الأمن الخاص', 'الوكالات الحكومية', 'أمن الفعاليات', 'حماية الشخصيات'],
      faqs: [
        { q: 'هل تقدمون تطريزاً مخصصاً؟', a: 'نعم، نوفر تطريزاً مخصصاً لشعارات المؤسسات والأسماء والشارات على جميع الملابس.' },
        { q: 'ما الحد الأدنى للطلب؟', a: 'نستوعب طلبات من جميع الأحجام، من القطع الفردية إلى نشر الزي الموحد واسع النطاق.' }
      ],
      relatedServices: ['access-control', 'metal-detection', 'cctv']
    }
  },
  'servers-pcs': {
    icon: Server,
    color: 'from-orange-500 to-red-600',
    en: {
      title: 'Servers & PC Systems',
      subtitle: 'Enterprise IT Infrastructure Solutions',
      overview: 'We provide enterprise-grade servers, workstations, and personal computers for government and corporate clients across Saudi Arabia. Our IT solutions include complete setup, configuration, and ongoing technical support.',
      categories: [
        { title: 'Enterprise Servers', desc: 'Rack servers, tower servers, and blade systems from Dell, HP, and Lenovo.', ideal: 'Data centers, enterprises' },
        { title: 'Workstations', desc: 'High-performance workstations for engineering, design, and specialized applications.', ideal: 'Technical departments' },
        { title: 'Desktop & Laptop', desc: 'Business-class computers with enterprise support.', ideal: 'All business users' }
      ],
      features: ['Dell/HP/Lenovo Partners', 'Custom Configurations', 'Extended Warranty', 'On-site Support', 'Network Integration', 'Data Migration'],
      applications: ['Government Offices', 'Corporate IT', 'Data Centers', 'Healthcare', 'Education', 'Financial Services'],
      faqs: [
        { q: 'Do you provide installation services?', a: 'Yes, we provide complete installation including hardware setup, OS installation, network configuration, and data migration.' },
        { q: 'What warranty options are available?', a: 'We offer manufacturer warranties plus extended support contracts with on-site service options.' }
      ],
      relatedServices: ['printers', 'access-control', 'cctv']
    },
    ar: {
      title: 'السيرفرات وأنظمة الكمبيوتر',
      subtitle: 'حلول البنية التحتية لتقنية المعلومات المؤسسية',
      overview: 'نوفر سيرفرات من الدرجة المؤسسية ومحطات عمل وأجهزة كمبيوتر شخصية للعملاء الحكوميين والشركات في جميع أنحاء المملكة العربية السعودية.',
      categories: [
        { title: 'سيرفرات المؤسسات', desc: 'سيرفرات رف وبرج وأنظمة blade من Dell وHP وLenovo.', ideal: 'مراكز البيانات، المؤسسات' },
        { title: 'محطات العمل', desc: 'محطات عمل عالية الأداء للهندسة والتصميم والتطبيقات المتخصصة.', ideal: 'الأقسام التقنية' },
        { title: 'سطح المكتب والمحمول', desc: 'أجهزة كمبيوتر بمستوى الأعمال مع دعم مؤسسي.', ideal: 'جميع مستخدمي الأعمال' }
      ],
      features: ['شركاء Dell/HP/Lenovo', 'تكوينات مخصصة', 'ضمان ممتد', 'دعم في الموقع', 'تكامل الشبكة', 'ترحيل البيانات'],
      applications: ['المكاتب الحكومية', 'تقنية المعلومات للشركات', 'مراكز البيانات', 'الرعاية الصحية', 'التعليم', 'الخدمات المالية'],
      faqs: [
        { q: 'هل تقدمون خدمات التركيب؟', a: 'نعم، نوفر تركيباً كاملاً يشمل إعداد الأجهزة وتثبيت نظام التشغيل وتكوين الشبكة وترحيل البيانات.' },
        { q: 'ما خيارات الضمان المتاحة؟', a: 'نوفر ضمانات الشركة المصنعة بالإضافة إلى عقود دعم ممتدة مع خيارات الخدمة في الموقع.' }
      ],
      relatedServices: ['printers', 'access-control', 'cctv']
    }
  },
  'printers': {
    icon: Printer,
    color: 'from-teal-500 to-cyan-600',
    en: {
      title: 'Printers & Accessories',
      subtitle: 'Complete Printing Solutions for Business',
      overview: 'We offer complete printing solutions including laser printers, multifunction devices, scanners, and genuine consumables. From desktop printers to high-volume production systems, we serve all business printing needs.',
      categories: [
        { title: 'Laser Printers', desc: 'Single-function and multifunction laser printers for all office sizes.', ideal: 'All businesses' },
        { title: 'Production Printers', desc: 'High-volume printing systems for print rooms and production.', ideal: 'Large organizations' },
        { title: 'Supplies & Parts', desc: 'Genuine toner, ink, drums, and replacement parts.', ideal: 'All printer users' }
      ],
      features: ['HP/Canon/Xerox/Ricoh', 'Genuine Consumables', 'Maintenance Contracts', 'Next-Day Delivery', 'Technical Support', 'Trade-In Programs'],
      applications: ['Corporate Offices', 'Government Departments', 'Healthcare', 'Education', 'Legal Firms', 'Financial Institutions'],
      faqs: [
        { q: 'Do you provide maintenance contracts?', a: 'Yes, we offer comprehensive maintenance contracts including regular service, parts replacement, and emergency support.' },
        { q: 'Can you help with printer fleet management?', a: 'We provide complete print fleet assessment, optimization, and managed print services.' }
      ],
      relatedServices: ['servers-pcs', 'access-control', 'cctv']
    },
    ar: {
      title: 'الطابعات والملحقات',
      subtitle: 'حلول طباعة كاملة للأعمال',
      overview: 'نوفر حلول طباعة كاملة تشمل طابعات ليزر وأجهزة متعددة الوظائف وماسحات ضوئية ومواد استهلاكية أصلية.',
      categories: [
        { title: 'طابعات ليزر', desc: 'طابعات ليزر أحادية ومتعددة الوظائف لجميع أحجام المكاتب.', ideal: 'جميع الشركات' },
        { title: 'طابعات الإنتاج', desc: 'أنظمة طباعة عالية الحجم لغرف الطباعة والإنتاج.', ideal: 'المؤسسات الكبيرة' },
        { title: 'المستلزمات والقطع', desc: 'حبر وتونر وأسطوانات وقطع غيار أصلية.', ideal: 'جميع مستخدمي الطابعات' }
      ],
      features: ['HP/Canon/Xerox/Ricoh', 'مستهلكات أصلية', 'عقود صيانة', 'توصيل في اليوم التالي', 'دعم فني', 'برامج استبدال'],
      applications: ['المكاتب التجارية', 'الإدارات الحكومية', 'الرعاية الصحية', 'التعليم', 'مكاتب المحاماة', 'المؤسسات المالية'],
      faqs: [
        { q: 'هل تقدمون عقود صيانة؟', a: 'نعم، نوفر عقود صيانة شاملة تتضمن الخدمة المنتظمة واستبدال القطع والدعم الطارئ.' },
        { q: 'هل يمكنكم المساعدة في إدارة أسطول الطابعات؟', a: 'نوفر تقييماً كاملاً لأسطول الطباعة وتحسينه وخدمات الطباعة المدارة.' }
      ],
      relatedServices: ['servers-pcs', 'access-control', 'cctv']
    }
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const { language, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  const service = serviceData[slug as keyof typeof serviceData];

  useEffect(() => {
    if (service) {
      document.title = `${service[language].title} | Alpha Core Solutions`;
    }
  }, [service, language]);

  if (!service) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
            <Link to="/services" className="text-primary hover:underline">
              View All Services
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  const t = service[language];
  const Icon = service.icon;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(197_100%_50%_/_0.08)_0%,_transparent_60%)]" />
        
        <div className="relative z-10 container-premium text-center py-20">
          <Link
            to="/services"
            className={`inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            <span>{language === 'ar' ? 'جميع الخدمات' : 'All Services'}</span>
          </Link>
          
          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-6`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : 'font-display'}`}>
            {t.title}
          </h1>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <p className={`text-lg text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic text-right' : ''}`}>
              {t.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-secondary/30">
        <div className="container-premium">
          <h2 className={`text-3xl font-bold text-foreground text-center mb-12 ${isRTL ? 'font-arabic' : 'font-display'}`}>
            {language === 'ar' ? 'فئات المنتجات' : 'Product Categories'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.categories.map((cat, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className={`text-xl font-bold text-foreground mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                  {cat.title}
                </h3>
                <p className={`text-muted-foreground mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                  {cat.desc}
                </p>
                <p className={`text-sm text-primary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'مثالي لـ: ' : 'Ideal for: '}{cat.ideal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding">
        <div className="container-premium">
          <h2 className={`text-3xl font-bold text-foreground text-center mb-12 ${isRTL ? 'font-arabic' : 'font-display'}`}>
            {language === 'ar' ? 'المميزات الرئيسية' : 'Key Features'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {t.features.map((feature, index) => (
              <div key={index} className={`flex items-center gap-3 p-4 rounded-xl bg-secondary/30 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className={`text-foreground ${isRTL ? 'font-arabic' : ''}`}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-secondary/30">
        <div className="container-premium">
          <h2 className={`text-3xl font-bold text-foreground text-center mb-12 ${isRTL ? 'font-arabic' : 'font-display'}`}>
            {language === 'ar' ? 'التطبيقات' : 'Applications'}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {t.applications.map((app, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full bg-background border border-border text-foreground ${isRTL ? 'font-arabic' : ''}`}
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-premium">
          <h2 className={`text-3xl font-bold text-foreground text-center mb-12 ${isRTL ? 'font-arabic' : 'font-display'}`}>
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {t.faqs.map((faq, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className={`text-lg font-bold text-foreground mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {faq.q}
                </h3>
                <p className={`text-muted-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-secondary/30">
        <div className="container-premium">
          <h2 className={`text-3xl font-bold text-foreground text-center mb-12 ${isRTL ? 'font-arabic' : 'font-display'}`}>
            {language === 'ar' ? 'خدمات ذات صلة' : 'Related Services'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {t.relatedServices.map((relatedSlug) => {
              const related = serviceData[relatedSlug as keyof typeof serviceData];
              if (!related) return null;
              return (
                <Link
                  key={relatedSlug}
                  to={`/services/${relatedSlug}`}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl bg-background border border-border hover:border-primary transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <related.icon className="w-5 h-5 text-primary" />
                  <span className={`font-medium text-foreground ${isRTL ? 'font-arabic' : ''}`}>
                    {related[language].title}
                  </span>
                  <ArrowRight className={`w-4 h-4 text-muted-foreground ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        titleAr="جاهز للبدء؟"
        subtitle="Contact us for a free consultation and quote"
        subtitleAr="اتصل بنا للحصول على استشارة مجانية وعرض سعر"
        primaryButton="Request Consultation"
        primaryButtonAr="اطلب استشارة"
        secondaryButton="View All Services"
        secondaryButtonAr="عرض جميع الخدمات"
        secondaryLink="/services"
      />
    </PageLayout>
  );
};

export default ServiceDetail;
