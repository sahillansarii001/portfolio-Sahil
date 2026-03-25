import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Internships from "@/components/Internships";
import Navbar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WhatsApp from "@/components/Whatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      {/* <Internships /> */}
      <Certifications />
      <Contact />
      <Footer />
      <WhatsApp />
    </>
  );
}
