import { Linkedin, Twitter, Instagram, Youtube, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#mission', label: t('nav.mission') },
    { href: '#services', label: t('nav.services') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const services = [
    'Metal Detection',
    'CCTV Surveillance',
    'X-Ray Screening',
    'Access Control',
    'Military Clothing',
    'Servers & PCs',
    'Printers & Accessories',
  ];

  const socials = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-card border-t border-border/30">
      {/* Gold Accent Line */}
      <div className="h-1 gradient-primary" />

      <div className="container-premium py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <img src={logo} alt="Alpha Core Solutions" className="h-16 w-auto" />
            </a>
            <p className={`text-muted-foreground mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.tagline')}
            </p>
            <p className={`text-sm text-muted-foreground/70 mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.description')}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold text-foreground mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-muted-foreground hover:text-primary transition-colors ${isRTL ? 'font-arabic' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`font-semibold text-foreground mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.services')}
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className={`font-semibold text-foreground mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.newsletter')}
            </h4>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder={t('footer.newsletterPlaceholder')}
                  className={`w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-all ${isRTL ? 'font-arabic pr-4 pl-12' : 'pl-4 pr-12'}`}
                />
                <button
                  type="submit"
                  className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'left-3' : 'right-3'} w-8 h-8 rounded-lg gradient-primary flex items-center justify-center hover:opacity-90 transition-opacity`}
                >
                  <Send className={`w-4 h-4 text-primary-foreground ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </form>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <a href="mailto:info@alphacs.sa" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                info@alphacs.sa
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.rights')}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className={`text-sm text-muted-foreground hover:text-primary transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                {t('footer.privacy')}
              </a>
              <a href="#" className={`text-sm text-muted-foreground hover:text-primary transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                {t('footer.terms')}
              </a>
              <a href="#" className={`text-sm text-muted-foreground hover:text-primary transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                {t('footer.cookies')}
              </a>
            </div>
          </div>
          <p className={`text-center text-sm text-primary mt-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('footer.serving')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
