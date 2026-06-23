'use strict';

/* ============================================
   Translations (EN / AR)
   ============================================ */
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',

    'hero.badge': 'Software Development Agency',
    'hero.title': 'Building Powerful Digital Solutions for Modern Businesses',
    'hero.desc': 'Net Code specializes in creating websites, mobile applications, full-stack systems, and UML-based software solutions.',
    'hero.weDo': 'We do',
    'hero.startBtn': 'Start Your Project',
    'hero.servicesBtn': 'Explore Services',
    'hero.statProjects': 'Projects',
    'hero.statClients': 'Clients',
    'hero.statYears': 'Years Experience',
    'hero.statSupport': 'Support',
    'hero.scroll': 'Scroll Down',

    'about.badge': 'Who We Are',
    'about.title': 'Crafting Digital Excellence Since Day One',
    'about.para1': 'Net Code is a Tiaret-based software development agency passionate about creating impactful digital solutions. We combine technical expertise with creative thinking to deliver products that drive real business results.',
    'about.para2': 'From startups to established enterprises, we partner with clients to bring their visions to life through clean code, thoughtful design, and reliable architecture.',
    'about.yearsLabel': 'Years of Excellence',
    'about.counterProjects': 'Projects Completed',
    'about.counterClients': 'Happy Clients',
    'about.counterYears': 'Years Experience',
    'about.counterTechs': 'Technologies Used',

    'skills.badge': 'Our Expertise',
    'skills.title': 'Our Skills & Expertise',
    'skills.web': 'Web Development',
    'skills.mobile': 'Mobile Development',
    'skills.fullstack': 'Full Stack Development',
    'skills.uiux': 'UI/UX Design',
    'skills.api': 'API Development',
    'skills.uml': 'UML Analysis & Design',

    'arch.badge': 'Our Architecture',
    'arch.title': 'How We Build Projects',
    'arch.monolithic': 'Monolithic',
    'arch.monolithicDesc': 'Traditional all-in-one architecture for simpler projects with unified codebases.',
    'arch.microservices': 'Microservices',
    'arch.microservicesDesc': 'Decoupled services for scalable, maintainable enterprise-grade applications.',
    'arch.serverless': 'Serverless',
    'arch.serverlessDesc': 'Event-driven cloud architecture with auto-scaling and pay-per-use pricing.',
    'arch.eventDriven': 'Event-Driven',
    'arch.eventDrivenDesc': 'Async communication between components for real-time reactive systems.',
    'arch.frameworksLabel': 'Frameworks & Technologies We Use',

    'services.badge': 'What We Do',
    'services.title': 'Our Service',
    'services.card1.title': 'One-Page Business Websites',
    'services.card1.desc': 'Modern, responsive single-page websites that capture your brand essence and convert visitors into customers.',
    'services.card2.title': 'Corporate Websites',
    'services.card2.desc': 'Multi-page corporate platforms with CMS integration, built to scale with your growing business needs.',
    'services.card3.title': 'Full-Stack Web Applications',
    'services.card3.desc': 'End-to-end web applications with robust backends, modern frontends, and scalable database architecture.',
    'services.card4.title': 'Mobile Applications',
    'services.card4.desc': 'Native and cross-platform mobile apps for iOS and Android using Flutter, React Native, and Swift.',
    'services.card5.title': 'UML Analysis & System Design',
    'services.card5.desc': 'Professional UML modeling, system architecture design, and software requirement analysis for complex projects.',
    'services.card6.title': 'Maintenance & Technical Support',
    'services.card6.desc': 'Ongoing maintenance, security updates, performance optimization, and 24/7 technical support services.',

    'portfolio.badge': 'Our Work',
    'portfolio.title': 'Featured Projects',
    'portfolio.project1.title': 'E-Commerce Platform',
    'portfolio.project1.cat': 'Web Application',
    'portfolio.project2.title': 'Health Tracker App',
    'portfolio.project2.cat': 'Mobile Application',
    'portfolio.project3.title': 'SaaS Dashboard',
    'portfolio.project3.cat': 'Full-Stack Application',
    'portfolio.project4.title': 'Logistics Platform',
    'portfolio.project4.cat': 'Web Application',
    'portfolio.project5.title': 'Food Delivery App',
    'portfolio.project5.cat': 'Mobile Application',
    'portfolio.project6.title': 'API Gateway System',
    'portfolio.project6.cat': 'Backend System',
    'portfolio.details': 'View Details',

    'testimonials.badge': 'Testimonials',
    'testimonials.title': 'What Our Clients Say',
    'testimonials.quote1': '"Net Code transformed our online presence completely. The team was professional, responsive, and delivered beyond our expectations. Highly recommended!"',
    'testimonials.quote2': '"Working with Net Code on our mobile app was a great experience. They understood our vision and delivered a sleek, high-performance application on time."',
    'testimonials.quote3': '"The UML analysis and system design provided by Net Code was thorough and professional. They turned our complex requirements into a clear, actionable plan."',
    'testimonials.project1': 'E-Commerce Platform',
    'testimonials.project2': 'Health Tracker App',
    'testimonials.project3': 'Logistics Platform',

    'contact.badge': 'Get In Touch',
    'contact.title': "Let's Build Something Great Together",
    'contact.address': 'Address',
    'contact.addressVal': 'Tiaret, Algeria',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Working Hours',
    'contact.hoursVal': 'Sun - Thu, 8:00 AM - 5:00 PM',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.nameError': 'Please enter your name',
    'contact.form.emailError': 'Please enter a valid email',
    'contact.form.subjectError': 'Please enter a subject',
    'contact.form.messageError': 'Please enter your message',
    'contact.form.send': 'Send Message',
    'contact.form.success': 'Your message has been sent successfully!',
    'contact.form.error': 'Something went wrong. Please try again later.',

    'footer.desc': 'A Tiaret-based software development agency building powerful digital solutions for modern businesses.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterDesc': 'Subscribe to get the latest updates.',
    'footer.emailPlaceholder': 'Your email',
    'footer.copyright': '\u00A9 2026 Net Code. All rights reserved.',
  },

  ar: {
    'nav.home': '\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629',
    'nav.about': '\u0645\u0646 \u0646\u062D\u0646',
    'nav.skills': '\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A',
    'nav.services': '\u0627\u0644\u062E\u062F\u0645\u0627\u062A',
    'nav.portfolio': '\u0623\u0639\u0645\u0627\u0644\u0646\u0627',
    'nav.testimonials': '\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621',
    'nav.contact': '\u0627\u062A\u0635\u0644 \u0628\u0646\u0627',

    'hero.badge': '\u0648\u0643\u0627\u0644\u0629 \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0627\u062A',
    'hero.title': '\u0646\u0628\u0646\u064A \u062D\u0644\u0648\u0644\u0627\u064B \u0631\u0642\u0645\u064A\u0629 \u0642\u0648\u064A\u0629 \u0644\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0639\u0635\u0631\u064A\u0629',
    'hero.desc': '\u0646\u064A\u062A \u0643\u0648\u062F \u0645\u062A\u062E\u0635\u0635\u0629 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0648\u0627\u0642\u0639\u060C \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u062C\u0648\u0627\u0644\u060C \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629\u060C \u0648\u062D\u0644\u0648\u0644 UML \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0629.',
    'hero.weDo': '\u0646\u0642\u0648\u0645 \u0628\u0640',
    'hero.startBtn': '\u0627\u0628\u062F\u0623 \u0645\u0634\u0631\u0648\u0639\u0643',
    'hero.servicesBtn': '\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u062E\u062F\u0645\u0627\u062A',
    'hero.statProjects': '\u0645\u0634\u0631\u0648\u0639\u0627\u064B',
    'hero.statClients': '\u0639\u0645\u064A\u0644\u0627\u064B',
    'hero.statYears': '\u0633\u0646\u0629 \u062E\u0628\u0631\u0629',
    'hero.statSupport': '\u062F\u0639\u0645',
    'hero.scroll': '\u0627\u0646\u0632\u0644 \u0644\u0644\u0623\u0633\u0641\u0644',

    'about.badge': '\u0645\u0646 \u0646\u062D\u0646',
    'about.title': '\u0646\u0628\u062F\u0639 \u0627\u0644\u062A\u0645\u064A\u0632 \u0627\u0644\u0631\u0642\u0645\u064A \u0645\u0646\u0630 \u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0623\u0648\u0644',
    'about.para1': '\u0646\u064A\u062A \u0643\u0648\u062F \u0647\u064A \u0648\u0643\u0627\u0644\u0629 \u062A\u0637\u0648\u064A\u0631 \u0628\u0631\u0645\u062C\u064A\u0627\u062A \u0641\u064A \u062A\u064A\u0627\u0631\u062A\u060C \u0634\u063A\u0648\u0641\u0629 \u0628\u0625\u064A\u062C\u0627\u062F \u062D\u0644\u0648\u0644 \u0631\u0642\u0645\u064A\u0629 \u0645\u0624\u062B\u0631\u0629. \u0646\u062C\u0645\u0639 \u0628\u064A\u0646 \u0627\u0644\u062E\u0628\u0631\u0629 \u0627\u0644\u062A\u0642\u0646\u064A\u0629 \u0648\u0627\u0644\u062A\u0641\u0643\u064A\u0631 \u0627\u0644\u0625\u0628\u062F\u0627\u0639\u064A \u0644\u062A\u0642\u062F\u064A\u0645 \u0645\u0646\u062A\u062C\u0627\u062A \u062A\u062D\u0642\u0642 \u0646\u062A\u0627\u0626\u062C \u062A\u062C\u0627\u0631\u064A\u0629 \u062D\u0642\u064A\u0642\u064A\u0629.',
    'about.para2': '\u0645\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0627\u0634\u0626\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062A \u0627\u0644\u0642\u0627\u0626\u0645\u0629\u060C \u0646\u062A\u0639\u0627\u0648\u0646 \u0645\u0639 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0644\u062A\u062D\u0642\u064A\u0642 \u0631\u0624\u0627\u0647\u0645 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0628\u0631\u0645\u062C\u064A\u0627\u062A \u0646\u0638\u064A\u0641\u0629 \u0648\u062A\u0635\u0645\u064A\u0645 \u0645\u062F\u0631\u0648\u0633 \u0648\u0647\u0646\u062F\u0633\u0629 \u0645\u0648\u062B\u0648\u0642\u0629.',
    'about.yearsLabel': '\u0633\u0646\u0648\u0627\u062A \u0645\u0646 \u0627\u0644\u062A\u0645\u064A\u0632',
    'about.counterProjects': '\u0645\u0634\u0631\u0648\u0639 \u0645\u0646\u062C\u0632',
    'about.counterClients': '\u0639\u0645\u064A\u0644 \u0633\u0639\u064A\u062F',
    'about.counterYears': '\u0633\u0646\u0629 \u062E\u0628\u0631\u0629',
    'about.counterTechs': '\u062A\u0642\u0646\u064A\u0629 \u0645\u0633\u062A\u062E\u062F\u0645\u0629',

    'skills.badge': '\u062E\u0628\u0631\u0627\u062A\u0646\u0627',
    'skills.title': '\u0645\u0647\u0627\u0631\u0627\u062A\u0646\u0627 \u0648\u062E\u0628\u0631\u0627\u062A\u0646\u0627',
    'skills.web': '\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628',
    'skills.mobile': '\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u0645\u062D\u0645\u0648\u0644\u0629',
    'skills.fullstack': '\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u062D\u0648\u0644 \u0627\u0644\u0643\u0627\u0645\u0644\u0629',
    'skills.uiux': '\u062A\u0635\u0645\u064A\u0645 UI/UX',
    'skills.api': '\u062A\u0637\u0648\u064A\u0631 API',
    'skills.uml': '\u062A\u062D\u0644\u064A\u0644 \u0648\u062A\u0635\u0645\u064A\u0645 UML',

    'arch.badge': '\u0647\u0646\u062F\u0633\u062A\u0646\u0627',
    'arch.title': '\u0643\u064A\u0641 \u0646\u0628\u0646\u064A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639',
    'arch.monolithic': '\u0627\u0644\u0647\u0646\u062F\u0633\u0629 \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644\u0629',
    'arch.monolithicDesc': '\u0647\u0646\u062F\u0633\u0629 \u062A\u0642\u0644\u064A\u062F\u064A\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0644\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0623\u0628\u0633\u0637 \u0628\u0642\u0648\u0627\u0639\u062F \u0628\u0631\u0645\u062C\u064A\u0629 \u0645\u0648\u062D\u062F\u0629.',
    'arch.microservices': '\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u0635\u063A\u0631\u0629',
    'arch.microservicesDesc': '\u062E\u062F\u0645\u0627\u062A \u0645\u0641\u0635\u0648\u0644\u0629 \u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0648\u0633\u0639 \u0648\u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0639\u0644\u0649 \u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062A.',
    'arch.serverless': '\u0628\u062F\u0648\u0646 \u062E\u0627\u062F\u0645',
    'arch.serverlessDesc': '\u0647\u0646\u062F\u0633\u0629 \u0633\u062D\u0627\u0628\u064A\u0629 \u0645\u0628\u0646\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u062D\u062F\u0627\u062B \u0645\u0639 \u062A\u0648\u0633\u0639 \u062A\u0644\u0642\u0627\u0626\u064A \u0648\u062A\u0633\u0639\u064A\u0631 \u062D\u0633\u0628 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645.',
    'arch.eventDriven': '\u0645\u0628\u0646\u064A \u0639\u0644\u0649 \u0627\u0644\u0623\u062D\u062F\u0627\u062B',
    'arch.eventDrivenDesc': '\u062A\u0648\u0627\u0635\u0644 \u063A\u064A\u0631 \u0645\u062A\u0632\u0627\u0645\u0646 \u0628\u064A\u0646 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062A \u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u062D\u0642\u064A\u0642\u064A \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629.',
    'arch.frameworksLabel': '\u0627\u0644\u0623\u0637\u0631 \u0648\u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u062A\u064A \u0646\u0633\u062A\u062E\u062F\u0645\u0647\u0627',

    'services.badge': '\u0645\u0627 \u0646\u0642\u062F\u0645\u0647',
    'services.title': '\u062E\u062F\u0645\u0627\u062A\u0646\u0627',
    'services.card1.title': '\u0645\u0648\u0627\u0642\u0639 \u0623\u0639\u0645\u0627\u0644 \u0645\u0646 \u0635\u0641\u062D\u0629 \u0648\u0627\u062D\u062F\u0629',
    'services.card1.desc': '\u0645\u0648\u0627\u0642\u0639 \u062d\u062F\u064A\u062B\u0629 \u0645\u062A\u062C\u0627\u0648\u0628\u0629 \u062a\u0644\u062A\u0642\u0637 \u062C\u0648\u0647\u0631 \u0639\u0644\u0627\u0645\u062A\u0643 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0648\u062A\u062D\u0648\u0644 \u0627\u0644\u0632\u0648\u0627\u0631 \u0625\u0644\u0649 \u0639\u0645\u0644\u0627\u0621.',
    'services.card2.title': '\u0645\u0648\u0627\u0642\u0639 \u0634\u0631\u0643\u0627\u062A',
    'services.card2.desc': '\u0645\u0646\u0635\u0627\u062A \u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u0635\u0641\u062D\u0627\u062A \u0645\u0639 \u062A\u0643\u0627\u0645\u0644 CMS\u060C \u0645\u0628\u0646\u064A\u0629 \u0644\u0644\u0646\u0645\u0648 \u0645\u0639 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0639\u0645\u0644\u0643 \u0627\u0644\u0645\u062A\u0632\u0627\u064A\u062F\u0629.',
    'services.card3.title': '\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0648\u064A\u0628 \u0643\u0627\u0645\u0644\u0629',
    'services.card3.desc': '\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0634\u0627\u0645\u0644\u0629 \u0645\u0639 \u0628\u0627\u0643\u064A\u0646\u062F \u0642\u0648\u064A \u0648\u0648\u0627\u062C\u0647\u0627\u062A \u062d\u062F\u064A\u062B\u0629 \u0648\u0642\u0648\u0627\u0639\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0648\u0633\u0639.',
    'services.card4.title': '\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u062C\u0648\u0627\u0644',
    'services.card4.desc': '\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0623\u0635\u0644\u064A\u0629 \u0648\u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u0645\u0646\u0635\u0627\u062A \u0644\u0640 iOS \u0648 Android \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 Flutter \u0648 React Native \u0648 Swift.',
    'services.card5.title': '\u062A\u062D\u0644\u064A\u0644 \u0648\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 UML',
    'services.card5.desc': '\u0646\u0645\u0630\u062C\u0629 UML \u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629\u060C \u062A\u0635\u0645\u064A\u0645 \u0647\u0646\u062F\u0633\u0629 \u0627\u0644\u0646\u0638\u0627\u0645\u060C \u0648\u062A\u062D\u0644\u064A\u0644 \u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0627\u062A \u0644\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0645\u0639\u0642\u062F\u0629.',
    'services.card6.title': '\u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0648\u0627\u0644\u062F\u0639\u0645 \u0627\u0644\u0641\u0646\u064A',
    'services.card6.desc': '\u0635\u064A\u0627\u0646\u0629 \u0645\u0633\u062A\u0645\u0631\u0629\u060C \u062A\u062D\u062F\u064A\u062B\u0627\u062A \u0623\u0645\u0627\u0646\u060C \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0623\u062F\u0627\u0621\u060C \u0648\u062E\u062F\u0645\u0627\u062A \u062F\u0639\u0645 \u0641\u0646\u064A 24/7.',

    'portfolio.badge': '\u0623\u0639\u0645\u0627\u0644\u0646\u0627',
    'portfolio.title': '\u0645\u0634\u0627\u0631\u064A\u0639 \u0645\u0645\u064A\u0632\u0629',
    'portfolio.project1.title': '\u0645\u0646\u0635\u0629 \u062A\u062C\u0627\u0631\u0629 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629',
    'portfolio.project1.cat': '\u062A\u0637\u0628\u064A\u0642 \u0648\u064A\u0628',
    'portfolio.project2.title': '\u062A\u0637\u0628\u064A\u0642 \u062A\u062A\u0628\u0639 \u0627\u0644\u0635\u062D\u0629',
    'portfolio.project2.cat': '\u062A\u0637\u0628\u064A\u0642 \u062C\u0648\u0627\u0644',
    'portfolio.project3.title': '\u0644\u0648\u062D\u0629 SaaS',
    'portfolio.project3.cat': '\u062A\u0637\u0628\u064A\u0642 \u0643\u0627\u0645\u0644',
    'portfolio.project4.title': '\u0645\u0646\u0635\u0629 \u0644\u0648\u062C\u0633\u062A\u064A\u0643',
    'portfolio.project4.cat': '\u062A\u0637\u0628\u064A\u0642 \u0648\u064A\u0628',
    'portfolio.project5.title': '\u062A\u0637\u0628\u064A\u0642 \u062A\u0648\u0635\u064A\u0644 \u0637\u0639\u0627\u0645',
    'portfolio.project5.cat': '\u062A\u0637\u0628\u064A\u0642 \u062C\u0648\u0627\u0644',
    'portfolio.project6.title': '\u0646\u0638\u0627\u0645 API Gateway',
    'portfolio.project6.cat': '\u0646\u0638\u0627\u0645 \u062E\u0644\u0641\u064A',
    'portfolio.details': '\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644',

    'testimonials.badge': '\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621',
    'testimonials.title': '\u0645\u0627 \u064A\u0642\u0648\u0644\u0647 \u0639\u0645\u0644\u0627\u0624\u0646\u0627',
    'testimonials.quote1': '\u0646\u064A\u062A \u0643\u0648\u062F \u062D\u0648\u0644\u062A \u062D\u0636\u0648\u0631\u0646\u0627 \u0627\u0644\u0631\u0642\u0645\u064A \u0628\u0634\u0643\u0644 \u0643\u0627\u0645\u0644. \u0627\u0644\u0641\u0631\u064A\u0642 \u0643\u0627\u0646 \u0645\u062D\u062A\u0631\u0641\u0627\u064B \u0648\u0645\u062A\u062C\u0627\u0648\u0628\u0627\u064B \u0648\u0642\u062F\u0645 \u0623\u0643\u062B\u0631 \u0645\u0645\u0627 \u062A\u0648\u0642\u0639\u0646\u0627\u0647. \u0623\u0648\u0635\u064A \u0628\u0647 \u0628\u0634\u062F\u0629!',
    'testimonials.quote2': '\u0627\u0644\u0639\u0645\u0644 \u0645\u0639 \u0646\u064A\u062A \u0643\u0648\u062F \u0639\u0644\u0649 \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u062C\u0648\u0627\u0644 \u0643\u0627\u0646 \u062A\u062C\u0631\u0628\u0629 \u0631\u0627\u0626\u0639\u0629. \u0641\u0647\u0645\u0648\u0627 \u0631\u0624\u064A\u062A\u0646\u0627 \u0648\u0642\u062F\u0645\u0648\u0627 \u062A\u0637\u0628\u064A\u0642\u0627\u064B \u0623\u0646\u064A\u0642\u0627\u064B \u0639\u0627\u0644\u064A \u0627\u0644\u0623\u062F\u0627\u0621 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u062D\u062F\u062F.',
    'testimonials.quote3': '\u0643\u0627\u0646 \u062A\u062D\u0644\u064A\u0644 UML \u0648\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0630\u064A \u0642\u062F\u0645\u0647 \u0646\u064A\u062A \u0643\u0648\u062F \u0634\u0627\u0645\u0644\u0627\u064B \u0648\u0645\u0647\u0646\u064A\u0627\u064B. \u0642\u062F\u0645\u0648\u0627 \u0645\u062A\u0637\u0644\u0628\u0627\u062A\u0646\u0627 \u0627\u0644\u0645\u0639\u0642\u062F\u0629 \u0625\u0644\u0649 \u062E\u0637\u0629 \u0648\u0627\u0636\u062D\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0646\u0641\u064A\u0630.',
    'testimonials.project1': '\u0645\u0646\u0635\u0629 \u062A\u062C\u0627\u0631\u0629 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629',
    'testimonials.project2': '\u062A\u0637\u0628\u064A\u0642 \u062A\u062A\u0628\u0639 \u0627\u0644\u0635\u062D\u0629',
    'testimonials.project3': '\u0645\u0646\u0635\u0629 \u0644\u0648\u062C\u0633\u062A\u064A\u0643',

    'contact.badge': '\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627',
    'contact.title': '\u062F\u0639\u0646\u0627 \u0646\u0628\u0646\u064A \u0634\u064A\u0626\u0627\u064B \u0639\u0638\u064A\u0645\u0627\u064B \u0645\u0639\u0627\u064B',
    'contact.address': '\u0627\u0644\u0639\u0646\u0648\u0627\u0646',
    'contact.addressVal': '\u062A\u064A\u0627\u0631\u062A\u060C \u0627\u0644\u062C\u0632\u0627\u0626\u0631',
    'contact.phone': '\u0647\u0627\u062A\u0641',
    'contact.email': '\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A',
    'contact.hours': '\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644',
    'contact.hoursVal': '\u0627\u0644\u0623\u062D\u062F - \u0627\u0644\u062E\u0645\u064A\u0633\u060C 8:00 \u0635\u0628\u0627\u062D\u0627\u064B - 5:00 \u0645\u0633\u0627\u0621\u064B',
    'contact.form.name': '\u0627\u0633\u0645\u0643',
    'contact.form.email': '\u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A',
    'contact.form.subject': '\u0627\u0644\u0645\u0648\u0636\u0648\u0639',
    'contact.form.message': '\u0631\u0633\u0627\u0644\u062A\u0643',
    'contact.form.nameError': '\u0627\u0644\u0631\u062C\u0627\u0621 \u0625\u062F\u062E\u0627\u0644 \u0627\u0633\u0645\u0643',
    'contact.form.emailError': '\u0627\u0644\u0631\u062C\u0627\u0621 \u0625\u062F\u062E\u0627\u0644 \u0628\u0631\u064A\u062F \u0635\u0627\u0644\u062D',
    'contact.form.subjectError': '\u0627\u0644\u0631\u062C\u0627\u0621 \u0625\u062F\u062E\u0627\u0644 \u0645\u0648\u0636\u0648\u0639',
    'contact.form.messageError': '\u0627\u0644\u0631\u062C\u0627\u0621 \u0625\u062F\u062E\u0627\u0644 \u0631\u0633\u0627\u0644\u062A\u0643',
    'contact.form.send': '\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629',
    'contact.form.success': '\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u062A\u0643 \u0628\u0646\u062C\u0627\u062D!',
    'contact.form.error': '\u062D\u062F\u062B \u062E\u0637\u0623\u060C \u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.',

    'footer.desc': '\u0648\u0643\u0627\u0644\u0629 \u062A\u0637\u0648\u064A\u0631 \u0628\u0631\u0645\u062C\u064A\u0627\u062A \u0641\u064A \u062A\u064A\u0627\u0631\u062A \u062A\u0628\u0646\u064A \u062D\u0644\u0648\u0644\u0627\u064B \u0631\u0642\u0645\u064A\u0629 \u0642\u0648\u064A\u0629 \u0644\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0639\u0635\u0631\u064A\u0629.',
    'footer.quickLinks': '\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064A\u0639\u0629',
    'footer.services': '\u0627\u0644\u062E\u062F\u0645\u0627\u062A',
    'footer.newsletter': '\u0627\u0644\u0646\u0634\u0631\u0629 \u0627\u0644\u0628\u0631\u064A\u062F\u064A\u0629',
    'footer.newsletterDesc': '\u0627\u0634\u062A\u0631\u0643 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0622\u062E\u0631 \u0627\u0644\u062A\u062D\u062F\u064A\u062B\u0627\u062A.',
    'footer.emailPlaceholder': '\u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A',
    'footer.copyright': '\u00A9 2026 \u0646\u064A\u062A \u0643\u0648\u062F. \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629.',
  }
};

/* ============================================
   DOM Ready
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
     Dark Mode
     ========================================== */
  (function initDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const sidebarSmallLogo = document.getElementById('sidebarSmallLogo');
    const sidebarLogo = document.getElementById('sidebarBigLogo');
    const footerLogo = document.getElementById('footerLogo');
    const stored = localStorage.getItem('netcode-theme');
    let theme;

    if (stored) {
      theme = stored;
    } else {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function updateLogos(t) {
      const bigSrc = 'images/icons/' + (t === 'dark' ? 'logo-dark.png' : 'logo-white.png');
      const smallSrc = 'images/icons/icom symbol ' + (t === 'dark' ? '(white)' : '(color)') + '.png';
      if (sidebarLogo) sidebarLogo.src = bigSrc;
      if (footerLogo) footerLogo.src = bigSrc;
      if (sidebarSmallLogo) sidebarSmallLogo.src = smallSrc;
    }

    document.documentElement.setAttribute('data-theme', theme);
    updateLogos(theme);

    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('netcode-theme', next);
      updateLogos(next);
    });
  })();

  /* ==========================================
     Language System
     ========================================== */
  (function initLanguage() {
    const langSwitch = document.getElementById('langSwitch');
    let lang = localStorage.getItem('netcode-lang') || 'en';

    function applyLanguage(l) {
      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[l] && translations[l][key]) {
          // Handle placeholder
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            const ph = el.getAttribute('data-i18n-placeholder');
            if (ph && translations[l][ph]) {
              el.setAttribute('placeholder', translations[l][ph]);
            }
          }
          el.textContent = translations[l][key];
        }
      });

      // Handle placeholders separately
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[l] && translations[l][key]) {
          el.setAttribute('placeholder', translations[l][key]);
        }
      });

      // Update html lang and dir
      document.documentElement.lang = l;
      document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';

      // Toggle body RTL class
      if (l === 'ar') {
        document.body.classList.add('rtl');
      } else {
        document.body.classList.remove('rtl');
      }

      // Set font family
      if (l === 'ar') {
        document.body.style.fontFamily = "'Cairo', sans-serif";
      } else {
        document.body.style.fontFamily = "'Montserrat', sans-serif";
      }

      localStorage.setItem('netcode-lang', l);
    }

    applyLanguage(lang);

    langSwitch.addEventListener('click', () => {
      const current = document.documentElement.lang;
      const next = current === 'en' ? 'ar' : 'en';
      applyLanguage(next);
    });
  })();

  /* ==========================================
     Typing Animation
     ========================================== */
  (function initTyping() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;

    const phrases = [
      'Web Development',
      'Mobile Applications',
      'Full-Stack Solutions',
      'UML Analysis & Design',
      'Software Consulting'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function type() {
      const current = phrases[phraseIndex];

      if (isPaused) {
        setTimeout(type, 2000);
        isPaused = false;
        return;
      }

      if (!isDeleting) {
        typingText.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
          isPaused = true;
          isDeleting = true;
          setTimeout(type, 2000);
          return;
        }
        setTimeout(type, 80);
      } else {
        typingText.textContent = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, 500);
          return;
        }
        setTimeout(type, 40);
      }
    }

    type();
  })();

  /* ==========================================
     Particles
     ========================================== */
  (function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 120; i++) {
      const p = document.createElement('div');
      p.className = 'particle star';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.animationDuration = (8 + Math.random() * 12) + 's';
      p.style.animationDelay = Math.random() * 5 + 's';
      const size = 1 + Math.random() * 3;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.setProperty('--twinkle-duration', (2 + Math.random() * 3) + 's');
      p.style.setProperty('--twinkle-delay', Math.random() * 3 + 's');
      container.appendChild(p);
    }
  })();

  /* ==========================================
     Sidebar Active Link Tracking
     ========================================== */
  (function initSidebarScroll() {
    const sections = document.querySelectorAll('section[id]');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    function updateSidebar() {
      let current = '';
      sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = section.getAttribute('id');
        }
      });

      sidebarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', updateSidebar, { passive: true });
    updateSidebar();
  })();

  /* ==========================================
     Sidebar Mobile Toggle
     ========================================== */
  (function initSidebarMobile() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebarMobileToggle');
    const overlay = document.getElementById('sidebarOverlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    function openSidebar() {
      sidebar.classList.add('open');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      toggleBtn.querySelector('.hamburger').classList.add('open');
    }

    function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      toggleBtn.querySelector('.hamburger').classList.remove('open');
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        if (sidebar.classList.contains('open')) {
          closeSidebar();
        } else {
          openSidebar();
        }
      });
    }

    if (overlay) {
      overlay.addEventListener('click', closeSidebar);
    }

    sidebarLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 991.98) {
          closeSidebar();
        }
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98 && sidebar.classList.contains('open')) {
        closeSidebar();
      }
    });
  })();

  /* ==========================================
     Intersection Observer - Animations
     ========================================== */
  (function initAnimations() {
    const animateElements = document.querySelectorAll('[data-animation]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay');
          if (delay) {
            entry.target.style.transitionDelay = delay + 's';
          }
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => observer.observe(el));
  })();

  /* ==========================================
     Counter Animation
     ========================================== */
  (function initCounters() {
    const counters = document.querySelectorAll('[data-count]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'));
          let current = 0;
          const increment = Math.ceil(target / 60);
          const duration = 2000;
          const stepTime = Math.floor(duration / target);

          function update() {
            current += increment;
            if (current >= target) {
              el.textContent = target;
              observer.unobserve(el);
              return;
            }
            el.textContent = current;
            requestAnimationFrame(update);
          }
          update();
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  })();

  /* ==========================================
     Progress Bar Animation
     ========================================== */
  (function initProgressBars() {
    const bars = document.querySelectorAll('.skill-progress .progress-bar');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute('data-width');
          bar.style.width = width + '%';
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });

    bars.forEach(el => observer.observe(el));
  })();

  /* ==========================================
     Contact Form
     ========================================== */
  (function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('formSuccess');
    const errorMsg = document.getElementById('formError');
    const originalHtml = submitBtn.innerHTML;

    emailjs.init('2AdEZTCjtIIMhR32d');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const fields = form.querySelectorAll('[required]');

      fields.forEach(field => {
        const feedback = field.parentElement.querySelector('.invalid-feedback');
        if (!field.value.trim()) {
          field.classList.add('is-invalid');
          isValid = false;
        } else if (field.type === 'email' && !isValidEmail(field.value)) {
          field.classList.add('is-invalid');
          isValid = false;
        } else {
          field.classList.remove('is-invalid');
        }
      });

      if (!isValid) return;

      successMsg.classList.add('d-none');
      errorMsg.classList.add('d-none');

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="loading-spinner"></span> Sending...';

      const templateParams = {
        to_email: 'benallouaziz1414@gmail.com',
        title: document.getElementById('subject').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
      };

      emailjs.send('service_mrihaf9', 'template_0ll0oln', templateParams)
        .then(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHtml;
          form.reset();
          successMsg.classList.remove('d-none');
          const lang = document.documentElement.lang;
          if (lang === 'ar') {
            const btnSpan = submitBtn.querySelector('[data-i18n]');
            if (btnSpan) btnSpan.textContent = translations['ar']['contact.form.send'];
          }
          setTimeout(() => successMsg.classList.add('d-none'), 5000);
        })
        .catch(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHtml;
          errorMsg.classList.remove('d-none');
          const lang = document.documentElement.lang;
          if (lang === 'ar') {
            const btnSpan = submitBtn.querySelector('[data-i18n]');
            if (btnSpan) btnSpan.textContent = translations['ar']['contact.form.send'];
          }
          setTimeout(() => errorMsg.classList.add('d-none'), 5000);
        });
    });

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.querySelectorAll('.form-control').forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('is-invalid');
      });
    });
  })();

});