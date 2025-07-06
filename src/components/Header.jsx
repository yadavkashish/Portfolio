import React, { useState, useEffect } from 'react';

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md px-6 py-4 flex justify-between items-center shadow-sm transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <a href="#home" className="text-3xl font-bold text-white">
        <span className="drop-shadow-[0_0_10px_rgb(82,157,232)]">Kashish Yadav</span>
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center space-x-8 text-white text-[1.1rem] font-medium">
        <a href="#home" className="hover:text-[#529de8]">Home</a>
<a href="#about" className="hover:text-[#529de8]">About</a>
<a href="#skills" className="hover:text-[#529de8]">Skills</a>
<a href="#projects" className="hover:text-[#529de8]">Projects</a>
<a href="#experience" className="hover:text-[#529de8]">Experience</a>
<a href="#contact" className="hover:text-[#529de8]">Contact</a>

      </nav>

      {/* Mobile menu icon */}
      <div
        className="md:hidden text-3xl text-[#529de8] cursor-pointer"
        onClick={toggleMenu}
      >
        &#9776;
      </div>

      {/* Mobile nav */}
      {isOpen && (
       <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 text-lg md:hidden">
  <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
  <a href="#about" onClick={() => setIsOpen(false)}>About</a>
  <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
  <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
  <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
  <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
</div>


      )}
    </header>
  );
}
