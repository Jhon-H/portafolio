import React from 'react';
import Navbar from './containers/Navbar';
import Personalinfo from './containers/Personainfo';
import ProyectsSection from './containers/ProyectsSection';
import Services from './containers/Services';
import Testimonios from './containers/Testimonios';
import Contact from './containers/Contact';
import Footer from './containers/Footer';

function App (){
  return(
    <div>
      <Navbar />
      <Personalinfo />
      <ProyectsSection />
      <Services />
      <Testimonios />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;