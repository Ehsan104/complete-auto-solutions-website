import React, { useState, useEffect } from "react";

// Business data
const CompleteAutoSolutions = {
  name: "Complete Auto Solutions",
  fullName: "Complete Auto Solutions",
  phone: "(408) 605-5014",
  email: "Completeautosolutionss@gmail.com",
  address: "14000 Blossom Hill Road, Los Gatos, CA 95032",
  tagline: "unleash your vehicle's true potential",
  services: "Foreign & Domestic Car Service"
};

// Navigation data
const nav = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" }
];

// Services offered
const services = [
  {
    id: "oil-service",
    title: "Oil Service",
    description: "Professional oil changes and fluid maintenance",
    image: "🛢️"
  },
  {
    id: "maintenance-intervals",
    title: "30K - 60K - 90K Maintenance",
    description: "Comprehensive maintenance interval service",
    image: "🔧"
  },
  {
    id: "tune-up",
    title: "Tune Up",
    description: "Complete engine tune-up and diagnostics",
    image: "⚙️"
  },
  {
    id: "tires",
    title: "Tires - Mounting + Balancing",
    description: "Tire installation, mounting, and balancing services",
    image: "🛞"
  },
  {
    id: "ac-service",
    title: "A/C Freon Service",
    description: "Air conditioning system maintenance and repair",
    image: "❄️"
  },
  {
    id: "suspension",
    title: "Suspension Work",
    description: "Coil over installs, lowering springs, suspension upgrades",
    image: "🔩"
  },
  {
    id: "exhaust",
    title: "Exhaust Work",
    description: "Bolt-on exhaust systems (no welding services)",
    image: "💨"
  },
  {
    id: "timing-belts",
    title: "Timing Belts/Chains",
    description: "Timing belt and chain replacement services",
    image: "⛓️"
  },
  {
    id: "bmw-specialty",
    title: "BMW Specialty Work",
    description: "Crankhubs, poly rear differential, subframe bushings",
    image: "🚗"
  }
];

// Instagram posts data - Replace these with your actual Instagram posts
// You can either:
// 1. Manually add your Instagram post images and captions here
// 2. Connect to Instagram Basic Display API for automatic updates
const instagramPosts = [
  {
    id: 1,
    image: "/instagram-placeholder-1.jpg", // Replace with your actual Instagram post image
    caption: "Your Instagram post caption here... #CompleteAutoSolutions #AutoRepair",
    likes: 0, // Will be updated with real data
    comments: 0, // Will be updated with real data
    date: "Recently"
  },
  {
    id: 2,
    image: "/instagram-placeholder-2.jpg", // Replace with your actual Instagram post image
    caption: "Your Instagram post caption here... #CompleteAutoSolutions #AutoRepair",
    likes: 0,
    comments: 0,
    date: "Recently"
  },
  {
    id: 3,
    image: "/instagram-placeholder-3.jpg", // Replace with your actual Instagram post image
    caption: "Your Instagram post caption here... #CompleteAutoSolutions #AutoRepair",
    likes: 0,
    comments: 0,
    date: "Recently"
  },
  {
    id: 4,
    image: "/instagram-placeholder-4.jpg", // Replace with your actual Instagram post image
    caption: "Your Instagram post caption here... #CompleteAutoSolutions #AutoRepair",
    likes: 0,
    comments: 0,
    date: "Recently"
  },
  {
    id: 5,
    image: "/instagram-placeholder-5.jpg", // Replace with your actual Instagram post image
    caption: "Your Instagram post caption here... #CompleteAutoSolutions #AutoRepair",
    likes: 0,
    comments: 0,
    date: "Recently"
  },
  {
    id: 6,
    image: "/instagram-placeholder-6.jpg", // Replace with your actual Instagram post image
    caption: "Your Instagram post caption here... #CompleteAutoSolutions #AutoRepair",
    likes: 0,
    comments: 0,
    date: "Recently"
  }
];

// Container component
function Container({ children, className = "" }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

// Section component
function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      {children}
    </section>
  );
}

// Header component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white text-black sticky top-0 z-50 border-b border-gray-200">
      <Container>
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Complete Auto Solutions Logo" 
              className="h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 object-contain"
            />
          </div>
          <nav className="hidden lg:flex space-x-8">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-black hover:text-gray-600 transition-colors font-medium tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center">
            <a 
              href="https://yelp.com/biz/complete-auto-solutions-los-gatos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 text-base font-semibold hover:bg-gray-800 transition-colors tracking-wide"
            >
              Review Us
            </a>
          </div>
          <button
            className="lg:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 border-t border-gray-200">
            <div className="pt-4 space-y-4">
              {nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-black hover:text-gray-600 transition-colors font-medium w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <a 
                  href="https://yelp.com/biz/complete-auto-solutions-los-gatos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-black text-white px-8 py-3 text-base font-semibold hover:bg-gray-800 transition-colors tracking-wide text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Review Us
                </a>
              </div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}

// Hero section
function Hero() {
  return (
    <div 
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white bg-black"
      style={{
        backgroundImage: `url('/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 tracking-tight drop-shadow-2xl">
          {CompleteAutoSolutions.name}
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 text-gray-200 tracking-wide drop-shadow-lg">
          {CompleteAutoSolutions.services}
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-12 sm:mb-16 text-gray-200 tracking-wide drop-shadow-lg">
          {CompleteAutoSolutions.tagline}
        </h3>
        <div className="flex justify-center">
          <a 
            href={`tel:${CompleteAutoSolutions.phone}`}
            className="bg-white text-black px-12 py-4 text-lg font-semibold hover:bg-gray-200 transition-colors tracking-wide shadow-xl inline-block"
          >
            Call to Book
          </a>
        </div>
      </div>
    </div>
  );
}

// Instagram Feed component
function InstagramFeed() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % instagramPosts.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % instagramPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + instagramPosts.length) % instagramPosts.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Section className="bg-black">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Follow Our Work
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            See our latest projects and builds on Instagram
          </p>
          <a 
            href="https://instagram.com/completeautosolutions_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-white font-semibold hover:text-gray-300 transition-colors"
          >
            @completeautosolutions_
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
            </svg>
          </a>
        </div>

        {/* Instagram Slideshow */}
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-2xl bg-white shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Main Image Display */}
            <div className="relative aspect-square">
              <img
                src={instagramPosts[currentSlide].image}
                alt={`Instagram post ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
              

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {instagramPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Instagram Grid Preview */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-8">
            {instagramPosts.slice(0, 6).map((post, index) => (
              <button
                key={post.id}
                onClick={() => goToSlide(index)}
                className={`aspect-square rounded-lg overflow-hidden transition-all ${
                  index === currentSlide ? 'ring-2 ring-black' : 'hover:opacity-80'
                }`}
              >
                <img
                  src={post.image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// Services section
function Services() {
  return (
    <Section id="services" className="bg-black">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional automotive services for foreign and domestic vehicles
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors">
              <div className="bg-gray-800 aspect-square rounded-lg mb-6 flex items-center justify-center text-6xl hover:scale-105 transition-transform shadow-sm">
                {service.image}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{service.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// About section
function About() {
  const businessHours = [
    { day: "Sunday", hours: "Closed" },
    { day: "Monday", hours: "8:30 AM–5:30 PM" },
    { day: "Tuesday", hours: "8:30 AM–5:30 PM" },
    { day: "Wednesday", hours: "8:30 AM–5:30 PM" },
    { day: "Thursday", hours: "8:30 AM–5:30 PM" },
    { day: "Friday", hours: "8:30 AM–5:30 PM" },
    { day: "Saturday", hours: "9 AM–4 PM" }
  ];

  return (
    <Section id="about" className="bg-black text-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 tracking-tight">About the shop</h2>
            <div className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              <p className="mb-6">
                <strong className="text-white">From One-Man Dream to Trusted Local Shop</strong>
              </p>
              <p>
                Complete Auto Solutions was founded in June 2023 by Gharib—known by most as Shani—with one simple mission: 
                treat every vehicle like it's our own and every customer like family. What started as a one-man operation with 
                just a set of tools and a vision has grown into a trusted local repair shop serving drivers across the community. 
                With deep expertise in European vehicles and a passion for all makes and models, our team delivers dealer-level 
                quality at up to three times lower cost. Whether you're in for a quick oil change, diagnostic work, or a complex 
                repair, we believe in doing things the right way—honest, skilled, and fair. We work quickly, communicate clearly, 
                and make sure every customer drives away with confidence in their car and in us.
              </p>
              <p className="text-2xl font-semibold text-white mt-8">
                At Complete Auto Solutions, it's not just about fixing cars—it's about building trust, one repair at a time.
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl font-bold mb-8 tracking-wide">Business Hours</h3>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-800 last:border-b-0">
                    <span className="text-lg font-medium text-gray-300">{schedule.day}</span>
                    <span className={`text-lg font-semibold ${schedule.hours === "Closed" ? "text-red-400" : "text-white"}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-8 tracking-wide">Why Choose Us</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 rounded-full p-2 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Expert Technicians</h4>
                    <p className="text-gray-300">Certified professionals with years of experience in foreign and domestic vehicles</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 rounded-full p-2 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Quality Service</h4>
                    <p className="text-gray-300">We use only premium parts and follow manufacturer specifications</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 rounded-full p-2 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Convenient Location</h4>
                    <p className="text-gray-300">Located in Los Gatos with easy access and parking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// Contact section with map
function Contact() {
  return (
    <Section id="contact" className="bg-black">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">Contact Us</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8 tracking-wide">Get In Touch</h3>
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h4 className="font-semibold text-white text-lg lg:text-2xl mb-2 lg:mb-3">Phone</h4>
                <p className="text-gray-300 text-lg lg:text-2xl break-words">{CompleteAutoSolutions.phone}</p>
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg lg:text-2xl mb-2 lg:mb-3">Email</h4>
                <p className="text-gray-300 text-lg lg:text-2xl break-words">{CompleteAutoSolutions.email}</p>
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg lg:text-2xl mb-2 lg:mb-3">Address</h4>
                <p className="text-gray-300 text-lg lg:text-2xl break-words leading-relaxed">{CompleteAutoSolutions.address}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8 tracking-wide">Find Us</h3>
            <iframe
              title="Map"
              className="w-full h-[300px] sm:h-[350px] lg:h-[420px] rounded-lg"
              src="https://maps.google.com/maps?q=Complete+Auto+Solutions+Los+Gatos&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

// Footer component
function Footer() {
  const footerLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-black text-white py-16">
      <Container>
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4 tracking-wider">{CompleteAutoSolutions.name}</div>
            <div className="text-white text-xl font-semibold mb-4 tracking-wide">
              Quality Auto Repair. Honest Service. Trusted Results.
            </div>
          </div>
          <div>
            <div className="text-white font-semibold text-lg mb-6">Quick Links</div>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} {CompleteAutoSolutions.name}
            </div>
            <div className="text-gray-400 text-sm">
              Powered by React & Vite
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// Back to top button
function BackToTop() {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  if (!show) return null;
  
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 rounded-full px-6 py-4 text-lg font-semibold bg-white text-black shadow-xl hover:bg-gray-200 transition-colors tracking-wide"
      aria-label="Back to top"
    >
      ↑ Top
    </button>
  );
}

// Main App component
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <InstagramFeed />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
