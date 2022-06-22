import React,{useEffect} from 'react'
import ScrollToTop from './components/ScrollToTop'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'
import Products from './components/Products'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import scrollreveal from "scrollreveal";

export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <>
      <ScrollToTop />
      <Navbar  />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonial />
      <Products />
      <Newsletter />
      <Footer />
    </>
  )
}