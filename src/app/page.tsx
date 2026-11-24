import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Zap,
  Terminal,
} from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/MotionPrimitives";
import { ServiceIcon } from "@/components/ServiceIcon";
import {
  CORE_PRINCIPLES,
  PROCESS_STEPS,
  SERVICES,
} from "@/lib/site-data";

export default function HomePage() {

  return (
    <div className="bg-storm-100">
      {/* HERO SECTION — 60% Storm Grey Canvas, 30% Matte Black Panel, 10% Safety Orange Accents */}
      <section className="relative overflow-hidden border-b border-storm-300/80 bg-storm-100 bg-storm-grid bg-grid">
        <div className="section-container py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Editorial Column */}
            <div className="lg:col-span-7 space-y-7">
              <FadeIn>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-storm-300 bg-storm-50/90 px-4 py-1.5 text-xs font-mono font-medium uppercase tracking-wider text-storm-700 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-safety-500" />
                  <span>Brelox Technologies &middot; Software Engineering Studio</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <h1 className="text-4xl font-extrabold leading-[1.08] text-matte-950 sm:text-5xl lg:text-6xl">
                  Precision software built for{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">modern growth.</span>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-1 left-0 right-0 h-3 bg-safety-500/20 -z-0"
                    />
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.14}>
                <p className="max-w-2xl text-base leading-relaxed text-storm-700 sm:text-lg">
                  We design and engineer websites, web applications, mobile
                  apps, custom software, AI solutions, and resilient cloud
                  infrastructure—crafted for clarity, speed, and long-term
                  reliability.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-safety-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-safety-600 active:scale-[0.98]"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-matte-900 bg-matte-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-matte-800 active:scale-[0.98]"
                  >
                    <span>Explore Services</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.26}>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-3 text-xs font-mono text-storm-600">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-safety-500" aria-hidden="true" />
                    100% Responsive Engineering
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-safety-500" aria-hidden="true" />
                    Remote-First Direct Collaboration
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-safety-500" aria-hidden="true" />
                    End-to-End Delivery
                  </span>
                </div>
              </FadeIn>
            </div>

            {/* Right Matte Black Architectural Capability Card (30% Matte Black anchor) */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.18} y={24}>
                <div className="relative rounded-2xl border border-matte-700 bg-matte-900 p-6 sm:p-8 text-white shadow-xl">
                  <div className="flex items-center justify-between border-b border-matte-700 pb-4">
                    <div className="flex items-center gap-2.5">
                      <Terminal
                        className="h-4 w-4 text-safety-500"
                        aria-hidden="true"
                      />
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-storm-300">
                        Capability Matrix
                      </span>
                    </div>
                    <span className="rounded-md bg-safety-500/15 px-2.5 py-1 font-mono text-[11px] font-semibold text-safety-400">
                      6 Core Domains
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services#${service.id}`}
                        className="group flex items-center gap-3 rounded-xl border border-matte-700/90 bg-matte-950/70 p-3.5 transition-all duration-200 hover:border-safety-500/70 hover:bg-matte-800"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-matte-800 text-safety-400 transition-colors group-hover:bg-safety-500 group-hover:text-white">
                          <ServiceIcon name={service.icon} className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium text-storm-100 group-hover:text-white">
                          {service.shortTitle}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-matte-700 bg-matte-950/90 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-storm-400">
                          Direct Engineering Contact
                        </p>
                        <p className="text-xs text-storm-300 mt-0.5">
                          Reach us directly via phone, WhatsApp, or online inquiry.
                        </p>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-matte-700 bg-matte-800 px-3.5 py-1.5 text-xs font-semibold text-safety-400 transition-colors hover:border-safety-500/70 hover:text-white"
                      >
                        <span>Contact Page &rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW SECTION — Storm Grey Surface */}
      <section className="py-20 lg:py-24 bg-storm-100">
        <div className="section-container">
          <FadeIn>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl space-y-3">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-safety-600">
                  What We Build
                </p>
                <h2 className="text-3xl font-bold text-matte-950 sm:text-4xl">
                  Full-spectrum engineering across web, mobile, AI, and cloud.
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-matte-900 hover:text-safety-600 transition-colors"
              >
                <span>View detailed service breakdown</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <StaggerItem key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-storm-300 bg-storm-50 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-matte-900 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-matte-900 text-safety-400 transition-colors duration-200 group-hover:bg-safety-500 group-hover:text-white">
                        <ServiceIcon name={service.icon} className="h-5 w-5" />
                      </div>
                      <ArrowUpRight
                        className="h-5 w-5 text-storm-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-safety-500"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-matte-950">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-storm-600">
                      {service.summary}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-storm-200 pt-4">
                    <span className="font-mono text-xs font-medium text-storm-700 group-hover:text-safety-600 transition-colors">
                      Explore deliverables &rarr;
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* PROCESS SECTION — 30% Matte Black Structural Band */}
      <section className="bg-matte-900 bg-matte-grid bg-grid py-20 lg:py-24 text-white border-y border-matte-700">
        <div className="section-container">
          <FadeIn>
            <div className="max-w-2xl space-y-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-safety-400">
                How We Work
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                A disciplined process from first call to production.
              </h2>
              <p className="text-sm leading-relaxed text-storm-300 sm:text-base">
                No black boxes or bloated handoffs. Every engagement follows a
                structured engineering workflow designed for transparency and
                clean delivery.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <StaggerItem key={item.step}>
                <div className="h-full rounded-2xl border border-matte-700 bg-matte-950/90 p-6 transition-colors hover:border-safety-500/60">
                  <span className="font-mono text-2xl font-bold text-safety-500">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-storm-300">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* WHY BRELOX — Storm Grey Secondary Band */}
      <section className="py-20 lg:py-24 bg-storm-200/70">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 space-y-4">
              <FadeIn>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-safety-600">
                  Why Brelox Technologies
                </p>
                <h2 className="mt-2 text-3xl font-bold text-matte-950 sm:text-4xl">
                  Built by engineers who care about design and durability.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-storm-700 sm:text-base">
                  We combine thoughtful UI/UX craftsmanship with solid systems
                  architecture so your product looks refined on day one and
                  stays maintainable as your business grows.
                </p>
                <div className="pt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-xl border border-matte-900 px-5 py-3 text-sm font-semibold text-matte-900 transition-colors hover:bg-matte-900 hover:text-white"
                  >
                    <span>Learn About Us</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </FadeIn>
            </div>

            <StaggerContainer className="lg:col-span-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {CORE_PRINCIPLES.map((principle, idx) => {
                const Icon =
                  idx === 0
                    ? Layers
                    : idx === 1
                    ? ShieldCheck
                    : idx === 2
                    ? Zap
                    : Terminal;
                return (
                  <StaggerItem key={principle.title}>
                    <div className="h-full rounded-2xl border border-storm-300 bg-storm-50 p-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-storm-200 text-matte-900">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-matte-950">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-storm-600">
                        {principle.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BAND */}
      <section className="py-16 lg:py-20 bg-storm-100">
        <div className="section-container">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-matte-700 bg-matte-900 px-6 py-12 text-white shadow-xl sm:px-12 lg:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-safety-500/15 blur-3xl"
              />
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl space-y-3">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-safety-400">
                    Ready When You Are
                  </p>
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Have a software project in mind? Let&apos;s build it right.
                  </h2>
                  <p className="text-sm leading-relaxed text-storm-300 sm:text-base">
                    Call us directly or send a brief message. We will review
                    your requirements and map out a clear path forward.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-safety-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-safety-600 active:scale-[0.98]"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
