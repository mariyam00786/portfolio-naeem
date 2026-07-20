import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

const navItems = [
  { label: 'Showreel', href: '#showreel' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Brands', href: '#brands' },
  { label: 'Art Direction', href: '#art-direction' },
  { label: 'BTS', href: '#bts' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/95 via-black/60 to-transparent backdrop-blur-md pt-6 pb-12 transition-all">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" className="font-extrabold tracking-wide text-lg text-textPrimary hover:opacity-80 transition-opacity">
          NAEEM
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className="text-sm font-normal text-textSecondary hover:text-textPrimary transition-all relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-textPrimary focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-borderDark shadow-sm">
          <ul className="flex flex-col py-6 px-6 space-y-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg text-textPrimary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
