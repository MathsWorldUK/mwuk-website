'use client';

import {useState, useEffect} from 'react';
import styles from './sections.module.css';

type Section = {
  id: string;
  title: string;
};

type SectionsProps = Readonly<{
  children: React.ReactNode;
  sections: readonly Section[];
}>;

export default function Sections({children, sections}: SectionsProps) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const {offsetTop, offsetHeight} = element;
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
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <div className={styles.sections}>
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
    </div>
  );
}
