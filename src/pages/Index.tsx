import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import QuoteForm from "@/components/QuoteForm";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import AreasServed from "@/components/AreasServed";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <Team />
    <Services />
    <Packages />
    <Projects />
    <Testimonials />
    <QuoteForm />
    <AreasServed />
    <Footer />
    <FloatingWhatsApp />
  </>
);

export default Index;
