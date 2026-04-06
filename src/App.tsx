import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Scale, 
  Gavel, 
  FileText, 
  Users, 
  ShieldCheck, 
  ChevronRight, 
  Menu, 
  X, 
  Star,
  TrainFront,
  ArrowRight,
  Mail,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#' },
    { name: 'Τομείς Εξειδίκευσης', href: '#practice-areas' },
    { name: 'Το Γραφείο', href: '#about' },
    { name: 'Κριτικές', href: '#testimonials' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className={`font-serif text-xl md:text-2xl font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-primary md:text-white'}`}>
            Ι. Ν. ΠΕΤΡΑΚΗΣ
          </span>
          <span className={`text-[10px] uppercase tracking-[0.2em] font-medium ${isScrolled ? 'text-accent' : 'text-accent md:text-white/80'}`}>
            & ΣΥΝΕΡΓΑΤΕΣ
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="tel:2109766988" className="btn-primary py-2 px-6 text-sm">
            <Phone size={16} />
            210 9766988
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? 'text-primary' : 'text-primary md:text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-primary py-2 border-b border-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:2109766988" className="btn-primary justify-center mt-4">
              <Phone size={18} />
              Κλήση Τώρα
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Law Office" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck size={14} />
            Εξειδικευμένη Νομική Υποστήριξη
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Δικαιοσύνη με <span className="text-accent italic">Προσωπική</span> Δέσμευση.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
            Στο γραφείο μας, κάθε υπόθεση είναι μοναδική. Συνδυάζουμε την υψηλή νομική κατάρτιση με την προσωπική ενασχόληση, χτίζοντας σχέσεις εμπιστοσύνης που αντέχουν στο χρόνο.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary text-lg px-10 py-4">
              Προγραμματίστε Ραντεβού
              <ArrowRight size={20} />
            </a>
            <a href="#practice-areas" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-4">
              Οι Υπηρεσίες μας
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-slate-200 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-sm text-slate-400">
              <div className="flex text-accent mb-1">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
              </div>
              <span className="text-white font-medium">500+ Ικανοποιημένοι Πελάτες</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-accent rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const PracticeAreas = () => {
  const areas = [
    {
      title: 'Αστικό Δίκαιο',
      description: 'Διαφορές ακινήτων, μισθώσεις, οικογενειακό δίκαιο και κληρονομικές υποθέσεις.',
      icon: <Users className="text-accent" size={32} />,
    },
    {
      title: 'Ποινικό Δίκαιο',
      description: 'Υπεράσπιση σε όλα τα στάδια της ποινικής διαδικασίας με στρατηγική και συνέπεια.',
      icon: <Gavel className="text-accent" size={32} />,
    },
    {
      title: 'Εμπορικό Δίκαιο',
      description: 'Σύσταση εταιρειών, συμβάσεις, εμπορικά σήματα και πτωχευτικό δίκαιο.',
      icon: <Scale className="text-accent" size={32} />,
    },
    {
      title: 'Διοικητικό Δίκαιο',
      description: 'Διαφορές με το Δημόσιο, φορολογικές υποθέσεις και προσφυγές.',
      icon: <FileText className="text-accent" size={32} />,
    },
    {
      title: 'Εργατικό Δίκαιο',
      description: 'Εργατικές διαφορές, αποζημιώσεις και συμβάσεις εργασίας.',
      icon: <Users className="text-accent" size={32} />,
    },
    {
      title: 'Τροχαία Ατυχήματα',
      description: 'Διεκδίκηση αποζημιώσεων από τροχαία ατυχήματα και ασφαλιστικές διαφορές.',
      icon: <ShieldCheck className="text-accent" size={32} />,
    },
  ];

  return (
    <section id="practice-areas" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Εξειδίκευση</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Τομείς Νομικής Δράσης</h3>
          <p className="text-slate-600 text-lg">
            Παρέχουμε ολοκληρωμένες νομικές υπηρεσίες καλύπτοντας ένα ευρύ φάσμα του δικαίου, πάντα με γνώμονα το συμφέρον του εντολέα μας.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 border border-slate-100 rounded-sm bg-surface hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
            >
              <div className="mb-6 p-4 bg-white inline-block rounded-sm shadow-sm group-hover:bg-primary transition-colors">
                {React.cloneElement(area.icon as React.ReactElement, { 
                  className: "group-hover:text-white transition-colors" 
                })}
              </div>
              <h4 className="text-xl font-bold mb-4">{area.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {area.description}
              </p>
              <a href="#contact" className="text-accent font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
                ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  return (
    <section id="about" className="section-padding bg-primary text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1000" 
              alt="Legal Library and Books" 
              className="rounded-sm shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent rounded-sm z-0 hidden md:block"></div>
            <div className="absolute -top-8 -left-8 border-2 border-accent w-48 h-48 rounded-sm z-0 hidden md:block"></div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Γιατί Εμάς</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-8">Προσωπική Ενασχόληση & Αποτελεσματικότητα</h3>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Users size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Ανθρωποκεντρική Προσέργιση</h4>
                <p className="text-slate-400">Δεν είστε απλώς ένας αριθμός υπόθεσης. Ακούμε με προσοχή και στεκόμαστε δίπλα σας σε κάθε βήμα.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Scale size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Νομική Αριστεία</h4>
                <p className="text-slate-400">Συνεχής ενημέρωση για τις νομοθετικές εξελίξεις και στρατηγική σκέψη για το καλύτερο αποτέλεσμα.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Διαφάνεια & Ειλικρίνεια</h4>
                <p className="text-slate-400">Σας ενημερώνουμε ρεαλιστικά για τις πιθανότητες επιτυχίας και το κόστος της υπόθεσής σας.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-sm italic text-slate-300">
            "Η επιτυχία μας μετριέται από την εμπιστοσύνη των ανθρώπων που μας επέλεξαν να τους εκπροσωπήσουμε στις πιο δύσκολες στιγμές τους."
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Πέτρος Μπούνας',
      text: 'Εξαιρετικός ο Γιάννης σε όλα τα επίπεδα! Επαγγελματισμός, γνώση και πάνω από όλα άνθρωπος. Τον συστήνω ανεπιφύλακτα.',
      rating: 5,
    },
    {
      name: 'Μαρία Κωνσταντίνου',
      text: 'Πολύ καλή συνεργασία, άμεση ανταπόκριση και αποτελεσματικότητα. Το γραφείο είναι δίπλα στο μετρό, κάτι που βολεύει πολύ.',
      rating: 5,
    },
    {
      name: 'Γιώργος Παπαδόπουλος',
      text: 'Σοβαρότητα και ειλικρίνεια. Με βοήθησαν σε μια δύσκολη κληρονομική υπόθεση με τον καλύτερο τρόπο.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Social Proof</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Τι Λένε οι Πελάτες μας</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 relative"
            >
              <div className="flex text-accent mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <span className="font-bold text-primary">{review.name}</span>
              </div>
              <div className="absolute -top-4 -right-4 text-slate-100 z-0">
                <FileText size={80} />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="h-5" referrerPolicy="no-referrer" />
            <span className="font-bold text-slate-700">4.9/5</span>
            <div className="flex text-accent">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
            </div>
            <span className="text-slate-400 text-sm ml-2">Βασισμένο σε 120+ κριτικές</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Επικοινωνία</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Σχεδιάστε την Επίσκεψή σας</h3>
          <p className="text-slate-600 text-lg">
            Το γραφείο μας βρίσκεται σε ένα από τα πιο προσβάσιμα σημεία της Αθήνας, ακριβώς δίπλα στο Μετρό Δάφνης.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 bg-surface border border-slate-100 rounded-sm flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-accent mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Phone size={28} />
            </div>
            <h4 className="text-xl font-bold mb-2">Τηλεφωνική Επικοινωνία</h4>
            <p className="text-slate-500 mb-6">Διαθέσιμοι για άμεση υποστήριξη και ραντεβού.</p>
            <a href="tel:2109766988" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
              210 9766988
            </a>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 bg-primary text-white rounded-sm flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <TrainFront size={120} />
            </div>
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <MapPin size={28} />
            </div>
            <h4 className="text-xl font-bold mb-2">Η Διεύθυνσή μας</h4>
            <p className="text-slate-300 mb-6">Μεγάλου Αλεξάνδρου 8, Δάφνη (Τ.Κ. 172 35)</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-bold">
              <TrainFront size={16} />
              2' ΑΠΟ ΜΕΤΡΟ ΔΑΦΝΗΣ
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 bg-surface border border-slate-100 rounded-sm flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-accent mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Mail size={28} />
            </div>
            <h4 className="text-xl font-bold mb-2">Ηλεκτρονική Αλληλογραφία</h4>
            <p className="text-slate-500 mb-6">Απαντάμε σε όλα τα αιτήματα εντός 24 ωρών.</p>
            <a href="mailto:info@petrakis-law.gr" className="text-lg font-bold text-primary hover:text-accent transition-colors break-all">
              info@petrakis-law.gr
            </a>
          </motion.div>
        </div>

        {/* Modern Map Placeholder / Visual */}
        <div className="relative h-[400px] rounded-sm overflow-hidden shadow-inner border border-slate-200">
          <img 
            src="https://images.unsplash.com/photo-1449156059431-787c5d7139b8?auto=format&fit=crop&q=80&w=2000" 
            alt="Urban Architecture Visual" 
            className="w-full h-full object-cover grayscale opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-sm shadow-2xl border border-slate-100 max-w-md text-center relative z-10">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <MapPin size={24} />
              </div>
              <h5 className="text-xl font-bold mb-2">Εύκολη Πρόσβαση</h5>
              <p className="text-slate-600 mb-6">
                Βρισκόμαστε στην καρδιά της Δάφνης. Η πρόσβαση είναι εξαιρετικά εύκολη μέσω της Γραμμής 2 του Μετρό (Στάση Δάφνη).
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Μεγάλου+Αλεξάνδρου+8+Δάφνη" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Οδηγίες στους Χάρτες
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-3xl font-bold tracking-tight">Ι. Ν. ΠΕΤΡΑΚΗΣ</span>
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-accent">ΔΙΚΗΓΟΡΙΚΟ ΓΡΑΦΕΙΟ & ΣΥΝΕΡΓΑΤΕΣ</span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
              Παρέχουμε υψηλού επιπέδου νομικές υπηρεσίες με εξειδίκευση σε όλο το φάσμα του δικαίου. Η έδρα μας βρίσκεται στη Δάφνη, σε κομβικό σημείο δίπλα στο Μετρό.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <Users size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <ShieldCheck size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-6 border-b border-accent/30 pb-2 inline-block">Γρήγοροι Σύνδεσμοι</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-accent transition-colors">Αρχική</a></li>
              <li><a href="#practice-areas" className="hover:text-accent transition-colors">Τομείς Εξειδίκευσης</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">Το Γραφείο</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Κριτικές</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Επικοινωνία</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-6 border-b border-accent/30 pb-2 inline-block">Ωράριο Λειτουργίας</h5>
            <ul className="space-y-4 text-slate-400">
              <li className="flex justify-between">
                <span>Δευτέρα - Παρασκευή:</span>
                <span className="text-white">09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Σάββατο:</span>
                <span className="text-white italic">Κατόπιν Ραντεβού</span>
              </li>
              <li className="flex justify-between">
                <span>Κυριακή:</span>
                <span className="text-accent">Κλειστά</span>
              </li>
            </ul>
            <div className="mt-8 flex items-center gap-3 text-accent animate-pulse">
              <Clock size={18} />
              <span className="text-sm font-bold uppercase tracking-wider">Διαθέσιμοι για επείγοντα</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:row-reverse md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Δικηγορικό Γραφείο Ι. Ν. Πετράκη. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Πολιτική Απορρήτου</a>
            <a href="#" className="hover:text-white transition-colors">Όροι Χρήσης</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PracticeAreas />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Action Button for Mobile */}
      <a 
        href="tel:2109766988" 
        className="fixed bottom-6 right-6 w-16 h-16 bg-accent text-white rounded-full shadow-2xl flex items-center justify-center md:hidden z-40 animate-bounce"
      >
        <PhoneCall size={28} />
      </a>
    </div>
  );
}
