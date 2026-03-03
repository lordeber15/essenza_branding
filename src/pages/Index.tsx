import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ValueProposition />
      <Services />
      <Differentials />
      <Process />
      <Testimonials />
      <CtaSection />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
