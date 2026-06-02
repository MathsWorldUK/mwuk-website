'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import styles from './sections.module.css';

export interface SidebarNavLink {
  href: string;
  label: string;
}

interface SidebarNavProps {
  links: SidebarNavLink[];
}

const normalizePath = (path: string) => {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path;
};

export function SidebarNav({links}: SidebarNavProps) {
  const pathname = normalizePath(usePathname() ?? '/');

  return (
    <nav>
      {links.map((link) => {
        const isActive = pathname === normalizePath(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={isActive ? styles.active : undefined}
            aria-current={isActive ? 'page' : undefined}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
