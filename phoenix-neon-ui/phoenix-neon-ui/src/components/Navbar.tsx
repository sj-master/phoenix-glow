/* Phoenix UI Kit © Skyler J. Jones */

// Navbar.tsx
import React, { useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logo: string;
  links: NavLink[];
}

export const Navbar: React.FC<NavbarProps> = ({ logo, links }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav 
      className="phoenix-navbar phoenix-core bg-[#1F1F1F] border-b border-[#2D2D2D]"
      data-phoenix-kit="true"
      data-phoenix-component="navbar"
      data-phoenix-author="sjones"
      data-phoenix-version="1.0"
    >
      <div className="phoenix-navbar-container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="phoenix-navbar-brand flex items-center gap-2">
            <div className="phoenix-navbar-logo w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF4D4F] to-[#FFAA1D]" />
            <span className="phoenix-navbar-brand-text text-xl font-bold text-white">{logo}</span>
          </div>

          <div className="phoenix-navbar-desktop hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="phoenix-navbar-link text-gray-400 hover:text-[#FF4D4F] transition-colors"
                data-phoenix-kit="true"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="phoenix-navbar-toggle md:hidden text-gray-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-phoenix-kit="true"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="phoenix-navbar-mobile md:hidden py-4 space-y-2 border-t border-[#2D2D2D]">
            {links.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="phoenix-navbar-link-mobile block py-2 text-gray-400 hover:text-[#FF4D4F]"
                data-phoenix-kit="true"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};