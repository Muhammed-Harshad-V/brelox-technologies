"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/site-data";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const primaryPhone = SITE_CONFIG.phones[0];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "bg-storm-100/95 backdrop-blur-md border-b border-storm-300/80 shadow-sm"
          : "bg-storm-100/80 backdrop-blur-sm border-b border-transparent"
        }`}
    >
      <div className="section-container">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-safety-500 rounded-lg py-1"
            aria-label={`${SITE_CONFIG.name} Home`}
          >
            <div className="relative h-10 w-12 shrink-0 transition-transform duration-200 group-hover:scale-[1.03]">
              <Image
                src="/images/brelox-logo.png"
                alt="Brelox Technologies logo"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-matte-900">
                BRELOX
              </span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-storm-600">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive
                      ? "text-matte-950"
                      : "text-storm-700 hover:text-matte-950 hover:bg-storm-200/70"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-x-3 -bottom-[2px] h-0.5 rounded-full bg-safety-500"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={primaryPhone.href}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-mono font-medium text-storm-700 hover:text-matte-950 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-safety-500" aria-hidden="true" />
              <span>{primaryPhone.display}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-safety-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-safety-600 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-safety-500 focus-visible:ring-offset-2 focus-visible:ring-offset-storm-100"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex md:hidden h-11 w-11 items-center justify-center rounded-lg border border-storm-300 bg-storm-50 text-matte-900 transition-colors hover:bg-storm-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-safety-500"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-b border-storm-300 bg-storm-50"
          >
            <div className="section-container py-5 space-y-4">
              <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors ${isActive
                          ? "bg-matte-900 text-white"
                          : "text-matte-900 hover:bg-storm-200/70"
                        }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-safety-500" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="border-t border-storm-200 pt-4 space-y-3">
                <a
                  href={primaryPhone.href}
                  className="flex items-center justify-center gap-2 rounded-lg border border-storm-300 bg-storm-100 px-4 py-3 text-sm font-mono font-medium text-matte-900"
                >
                  <Phone className="h-4 w-4 text-safety-500" aria-hidden="true" />
                  <span>Call {primaryPhone.display}</span>
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-lg bg-safety-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-safety-600"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
