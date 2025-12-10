import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, Check, ChevronDown, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#mission', label: t('nav.mission') },
    { href: '#services', label: t('nav.services') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const handleLanguageChange = (newLang: 'en' | 'ar') => {
    // Add transition class
    document.body.classList.add('language-transitioning');
    
    setLanguage(newLang);
    setIsLangDropdownOpen(false);
    
    // Update HTML dir attribute
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
    
    // Save preference
    localStorage.setItem('preferred-language', newLang);
    
    // Remove transition class after animation
    setTimeout(() => {
      document.body.classList.remove('language-transitioning');
    }, 350);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-premium">
          <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Logo with Trust Badge */}
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a href="#home" className="flex items-center gap-3 group">
                <img
                  src={logo}
                  alt="Alpha Core Solutions"
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              {/* Trust Badge - Desktop Only */}
              <span className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-primary bg-primary/10 border border-primary/20">
                <Shield className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'KSA Trusted Partner' : 'شريك موثوق'}</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium animated-underline transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {/* Language Dropdown */}
              <div ref={langDropdownRef} className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/50 hover:border-primary/50 bg-background/50 backdrop-blur-sm transition-all duration-300 group"
                >
                  <Globe className={`w-4 h-4 text-primary transition-transform duration-500 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="text-sm font-medium text-foreground/90">
                    {language === 'en' ? 'العربية' : 'English'}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full mt-2 ${isRTL ? 'left-0' : 'right-0'} w-40 rounded-xl border border-border/50 bg-card/95 backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300 ${
                    isLangDropdownOpen
                      ? 'opacity-100 translate-y-0 visible'
                      : 'opacity-0 -translate-y-2 invisible'
                  }`}
                >
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-primary/10 ${
                      language === 'en' ? 'text-primary bg-primary/5' : 'text-foreground/80'
                    }`}
                  >
                    {language === 'en' && <Check className="w-4 h-4" />}
                    <span className={language === 'en' ? '' : 'ml-7'}>English</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange('ar')}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-primary/10 ${
                      language === 'ar' ? 'text-primary bg-primary/5' : 'text-foreground/80'
                    }`}
                  >
                    {language === 'ar' && <Check className="w-4 h-4" />}
                    <span className={language === 'ar' ? '' : 'ml-7'}>العربية</span>
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Full Screen */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-background/98 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-3 text-foreground hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-bold text-foreground hover:text-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Language Toggle */}
          <div className="mt-12 flex gap-4">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`px-6 py-3 rounded-xl border transition-all duration-300 ${
                language === 'en'
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border/50 text-foreground/70 hover:border-primary/50'
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange('ar')}
              className={`px-6 py-3 rounded-xl border transition-all duration-300 ${
                language === 'ar'
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border/50 text-foreground/70 hover:border-primary/50'
              }`}
            >
              العربية
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
