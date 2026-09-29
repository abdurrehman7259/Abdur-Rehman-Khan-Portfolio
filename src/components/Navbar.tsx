"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ShieldAlert, ArrowUpRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cyber-surface/85 backdrop-blur-md border-b border-cyber-border py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="w-8 h-8 rounded-md bg-cyber-card border border-cyber-accent/30 flex items-center justify-center text-cyber-accent group-hover:border-cyber-accent transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,242,255,0.4)]">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <span className="font-mono text-lg font-bold tracking-tight text-white">
              <span className="text-cyber-accent">ARK</span>
              <span className="text-cyber-muted group-hover:text-white transition-colors">
                .SEC
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`text-sm font-medium transition-all duration-200 relative py-1 hover:text-cyber-accent focus:outline-none ${
                        isActive
                          ? "text-cyber-accent font-semibold"
                          : "text-cyber-muted"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyber-accent shadow-[0_0_8px_#00f2ff] rounded-full" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="h-4 w-[1px] bg-cyber-border" />

            {/* Quick Action Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono font-semibold rounded border border-cyber-accent/50 text-cyber-accent bg-cyber-accent/5 hover:bg-cyber-accent hover:text-cyber-bg transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(0,242,255,0.35)]"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-cyber-muted hover:text-white hover:bg-cyber-card transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-cyber-accent" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cyber-surface/95 backdrop-blur-xl border-b border-cyber-border px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left py-2 text-base font-medium text-cyber-text hover:text-cyber-accent transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="font-mono text-xs text-cyber-muted">
                    #_
                  </span>
                </button>
              </li>
            ))}
            <li className="pt-2 border-t border-cyber-border">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="w-full text-center py-2.5 px-4 rounded bg-cyber-accent text-cyber-bg font-mono font-semibold text-sm block"
              >
                Hire Me / Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
