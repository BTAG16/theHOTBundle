import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Home() {
  const handleNavigation = (section: string) => {
    console.log(`Navigating to: ${section}`);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    console.log('Get Started clicked');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header onNavigate={handleNavigation} />
        
        <main>
          <Hero onGetStarted={handleGetStarted} />
          <About />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}