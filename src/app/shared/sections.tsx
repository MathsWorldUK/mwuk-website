"use client";

import { useState, useEffect } from 'react';
import styles from './sections.module.css';

export default function Sections({children}: Readonly<{children: React.ReactNode}>) {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'opening-hours', title: 'Opening Hours' },
    { id: 'directions', title: 'Directions' },
    { id: 'ticket-prices', title: 'Ticket Prices' },
    { id: 'accessibility', title: 'Accessibility' },
    { id: 'school-visits', title: 'School Visits' },
    { id: 'group-visits', title: 'Group Visits' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (<div className={styles.sections}>
    <nav>
      {sections.map((section) => (
        <button
          key={section.id}
          className={activeSection === section.id ? styles.active : ''}
          onClick={() => scrollToSection(section.id)}>
          {section.title}
        </button>
      ))}
    </nav>
    <div className={styles.body}>{children}</div>
  </div>);
}
