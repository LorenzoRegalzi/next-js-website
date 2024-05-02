import Link from 'next/link';
"use client"
import { useEffect, useState } from 'react';
import ArrowDownIcon from '../icon/arrow-down';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenKH, setIsOpenKH] = useState(false);
    const [isOpenProd, setIsOpenProd] = useState(false);
    const [isOpenContact, setIsOpenContact] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const toggleMenuKH = () => {
      setIsOpenKH(!isOpenKH);
    };

    const toggleMenuProd = () => {
      setIsOpenProd(!isOpenProd);
    };

    const toggleMenuContact = () => {
      setIsOpenContact(!isOpenContact);
    };

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      // Aggiungi un listener per lo scroll
      window.addEventListener('scroll', handleScroll);
  
      // Pulisci il listener quando il componente viene smontato
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
const navbarClass = scrollY > 0 ? 'bg-customBlueRgb' : '';
    return (
<nav className={`fixed top-0 w-full z-10 transition-colors duration-300 ${navbarClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0">
            {/* Your logo */}
            <a href="/">
              <img className="h-8 w-auto" src="https://www.deltats.eu/wp-content/uploads/2019/02/logo-w.png" alt="" data-no-retina=""></img>
            </a>
          </div>
          {/* Navbar links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            
              <div className="relative" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
                <button className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex h-100 flex items-center">
                  <a href="/company">Azienda</a>
                  <ArrowDownIcon />
                </button>
                {isOpen && (
                  <div className="bg-customWhite absolute z-10 left-0 w-40 bg-white divide-y divide-gray-100 shadow-lg">
                    <a href="code-of-ethics" className="text-customBlack block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Codice Etico</a>
                  </div>
                )}
              </div>
              <a href="/products" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Prodotti</a>
              <div className="relative" onMouseEnter={toggleMenuKH} onMouseLeave={toggleMenuKH}>
                <button className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center">
                <a href="/know-how">  Know How</a>
                  <ArrowDownIcon />
                </button>
                {isOpenKH && (
                  <div className="bg-customWhite absolute z-10 left-0 w-40 bg-white divide-y divide-gray-100 shadow-lg">
                    <a href="/co-engineering" className="text-customBlack block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Co-engineering</a>
                    <a href="/analysis-and-study-of-materials" className="text-customBlack block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Analisi e studio dei materiali</a>
                  </div>
                )}
              </div>
              <a href="/molds" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Stampi</a>
              
              <div className="relative" onMouseEnter={toggleMenuProd} onMouseLeave={toggleMenuProd}>
                <button className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center">
                  <a href="/production">Produzione</a>
                  <ArrowDownIcon />
                </button>
                {isOpenProd && (
                  <div className="bg-customWhite absolute z-10 left-0 w-40 bg-white divide-y divide-gray-100  shadow-lg">
                    <a href="/machines" className="text-customBlack block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Macchinari</a>
                    <a href="/industry-4-0" className="text-customBlack block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Industria 4.0</a>
                  </div>
                )}
              </div>
              <a href="/quality" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Qualità</a>
            

              <div className="relative" onMouseEnter={toggleMenuContact} onMouseLeave={toggleMenuContact}>
                <button className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center">
                
                  <a href="/contact">Contatti</a>
                  <ArrowDownIcon />
                </button>
                {isOpenContact && (
                  <div className="bg-customWhite absolute z-10 left-0 w-40 bg-white divide-y divide-gray-100 shadow-lg">
                    <a href="/job-opportunity" className="text-customBlack block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Job Opportunity</a>
                  </div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;