'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <nav>
      <div className="navbar-container" style={{ justifyContent: 'center' }}>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Mobile menu button (hidden for now) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="nav-link"
          style={{ display: 'none' }}
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 