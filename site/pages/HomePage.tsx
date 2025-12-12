import React from 'react';
import Lander from '../components/Lander';
import SwitchSection from '../components/SwitchSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Lander />
      <SwitchSection />
      <Footer />
    </>
  );
};

export default HomePage;