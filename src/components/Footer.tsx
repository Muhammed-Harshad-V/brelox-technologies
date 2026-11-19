import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SERVICES, SITE_CONFIG } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-matte-950 text-storm-200 border-t border-matte-700">
      <div className="section-container py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-11 w-12 rounded-lg bg-storm-100 p-1.5 shrink-0">
                <Image
                  src="/images/brelox-logo.png"
                  alt="Brelox Technologies logo"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-tight text-white">
                  BRELOX
                </span>
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-storm-400">
                  Technologies
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-storm-400 max-w-sm">
              {SITE_CONFIG.description}
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-matte-700 bg-matte-900 px-3.5 py-1.5 text-xs font-mono text-storm-300">
              <span className="h-2 w-2 rounded-full bg-safety-500" />
              <span>Remote-First Software Studio</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-storm-400">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-storm-300 transition-colors hover:text-safety-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-storm-400">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-storm-300 transition-colors hover:text-safety-400"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact (Phone Only — No Physical Location) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-storm-400">
              Direct Contact
            </h3>
            <div className="space-y-3">
              {SITE_CONFIG.phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="group flex items-start gap-3 rounded-xl border border-matte-700 bg-matte-900/80 p-3.5 transition-colors hover:border-safety-500/60"
                >
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-safety-500"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-storm-400">
                      {phone.label}
                    </p>
                    <p className="font-mono text-sm font-semibold text-white group-hover:text-safety-400 transition-colors">
                      {phone.display}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-safety-400 hover:text-safety-500 transition-colors"
            >
              <span>Send a project inquiry</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-matte-700/80 pt-6 text-xs text-storm-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-storm-500">
            Websites &middot; Web Apps &middot; Mobile &middot; Custom Software &middot; AI &middot; Cloud
          </p>
        </div>
      </div>
    </footer>
  );
}
