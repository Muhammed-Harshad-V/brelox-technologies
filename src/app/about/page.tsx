import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/MotionPrimitives";
import {
  CORE_PRINCIPLES,
  PROCESS_STEPS,
  SERVICES,
  SITE_CONFIG,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Brelox Technologies—our remote-first engineering philosophy, core principles, and commitment to building reliable digital products.",
};

export default function AboutPage() {
  const primaryPhone = SITE_CONFIG.phones[0];

  return (
    <div className="bg-storm-100">
      {/* Header Section */}
      <section className="border-b border-storm-300/80 bg-storm-100 bg-storm-grid bg-grid py-16 lg:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-5">
              <FadeIn>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-safety-600">
                  About Brelox Technologies
                </p>
                <h1 className="mt-2 text-4xl font-extrabold text-matte-950 sm:text-5xl">
                  Focused software engineering, without the agency overhead.
                </h1>
                <p className="mt-4 text-base leading-relaxed text-storm-700 sm:text-lg">
                  Brelox Technologies was built on a straightforward idea:
                  businesses deserve clean, well-architected software and direct
                  access to the people building it. We operate as a remote-first
                  digital engineering studio, partnering with clients to ship
                  dependable websites, applications, custom systems, AI tools,
                  and cloud infrastructure.
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-5">
              <FadeIn delay={0.14}>
                <div className="rounded-2xl border border-matte-700 bg-matte-900 p-8 text-white shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-20 shrink-0 rounded-xl bg-storm-100 p-2">
                      <Image
                        src="/images/brelox-logo.png"
                        alt="Brelox Technologies brand mark"
                        fill
                        sizes="80px"
                        className="object-contain p-1.5"
                      />
                    </div>
                    <div>
                      <p className="font-display text-xl font-bold text-white">
                        {SITE_CONFIG.name}
                      </p>
                      <p className="font-mono text-xs uppercase tracking-widest text-safety-400">
                        Remote-First Digital Studio
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3 border-t border-matte-700 pt-6 text-sm text-storm-300">
                    <p className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-safety-500"
                        aria-hidden="true"
                      />
                      <span>
                        Direct technical communication from initial discovery to
                        launch
                      </span>
                    </p>
                    <p className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-safety-500"
                        aria-hidden="true"
                      />
                      <span>
                        100% digital collaboration—no physical office friction
                        or unnecessary layers
                      </span>
                    </p>
                    <p className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-safety-500"
                        aria-hidden="true"
                      />
                      <span>
                        Clean codebases engineered for readability, security,
                        and scalability
                      </span>
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 lg:py-24 bg-storm-100">
        <div className="section-container">
          <FadeIn>
            <div className="max-w-2xl space-y-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-safety-600">
                Engineering Ethos
              </p>
              <h2 className="text-3xl font-bold text-matte-950 sm:text-4xl">
                Principles that guide every build.
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {CORE_PRINCIPLES.map((principle, idx) => (
              <StaggerItem key={principle.title}>
                <div className="h-full rounded-2xl border border-storm-300 bg-storm-50 p-7">
                  <span className="font-mono text-xs font-semibold text-safety-600">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-matte-950">
                    {principle.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-storm-600">
                    {principle.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Delivery Lifecycle */}
      <section className="bg-matte-900 py-16 lg:py-24 text-white border-y border-matte-700">
        <div className="section-container">
          <FadeIn>
            <div className="max-w-2xl space-y-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-safety-400">
                Collaboration Model
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Built for seamless remote execution.
              </h2>
              <p className="text-sm leading-relaxed text-storm-300 sm:text-base">
                Because we work 100% remotely, our workflow is structured around
                clear milestones, live staging previews, and responsive phone
                and digital communication.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.step}>
                <div className="h-full rounded-2xl border border-matte-700 bg-matte-950 p-6">
                  <p className="font-mono text-xl font-bold text-safety-500">
                    {step.step}
                  </p>
                  <h3 className="mt-3 text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-storm-300">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Capabilities Recap + CTA */}
      <section className="py-16 lg:py-20 bg-storm-200/60">
        <div className="section-container">
          <FadeIn>
            <div className="rounded-2xl border border-storm-300 bg-storm-50 p-8 sm:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl space-y-3">
                  <h2 className="text-2xl font-bold text-matte-950 sm:text-3xl">
                    Ready to partner with Brelox Technologies?
                  </h2>
                  <p className="text-sm leading-relaxed text-storm-600 sm:text-base">
                    We cover {SERVICES.map((s) => s.title.toLowerCase()).join(", ")}.
                    Reach out by phone or through our contact form to discuss
                    your roadmap.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-safety-500 px-6 py-3 text-sm font-semibold text-white hover:bg-safety-600 transition-colors"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <a
                    href={primaryPhone.href}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-matte-900 bg-matte-900 px-6 py-3 font-mono text-sm font-semibold text-white hover:bg-matte-800 transition-colors"
                  >
                    <Phone
                      className="h-4 w-4 text-safety-500"
                      aria-hidden="true"
                    />
                    <span>{primaryPhone.display}</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
