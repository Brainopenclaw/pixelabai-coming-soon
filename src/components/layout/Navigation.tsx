"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

interface NavigationProps {
  links: NavLink[];
  className?: string;
}

export default function Navigation({ links, className = "" }: NavigationProps) {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    links.forEach((link) => {
      if (link.href.startsWith("#")) {
        const el = document.querySelector(link.href);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [links]);

  return (
    <nav className={`flex items-center gap-6 ${className}`} aria-label="Navigation">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-small transition-colors ${
            activeHash === link.href ? "text-primary" : "text-text-muted hover:text-text"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
