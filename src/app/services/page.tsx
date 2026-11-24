import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/MotionPrimitives";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SERVICES, TECH_STACK } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Brelox Technologies services: Website Development, Web Applications, Mobile Applications, Custom Software, AI Solutions, and Cloud & Infrastructure.",
};

export default function ServicesPage() {

  return (
    <div className="bg-storm-100">
      {/* Page Header */}
      <section className="border-b border-storm-300/80 bg-storm-100 bg-storm-grid bg-grid py-16 lg:py-20">
        <div className="section-container">
          <FadeIn>
            <div className="max-w-3xl space-y-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-safety-600">
                Services &amp; Capabilities
              </p>
              <h1 className="text-4xl font-extrabold text-matte-950 sm:text-5xl">
                End-to-end engineering for every layer of your product.
              </h1>
              <p className="text-base leading-relaxed text-storm-700 sm:text-lg">
                Whether you need a high-clarity company website, a full-scale
                web or mobile platform, bespoke business software, AI
                automation, or resilient cloud infrastructure, we deliver clean,
                production-ready systems.
              </p>
            </div>
          </FadeIn>

          {/* Quick Jump Pills */}
          <FadeIn delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {SERVICES.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-storm-300 bg-storm-50 px-3.5 py-2 text-xs font-medium text-matte-900 transition-colors hover:border-safety-500 hover:bg-matte-900 hover:text-white"
                >
                  <ServiceIcon name={service.icon} className="h-3.5 w-3.5" />
                  <span>{service.title}</span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Detailed Service Cards */}
      <section className="py-16 lg:py-20">
        <div className="section-container space-y-8">
          {SERVICES.map((service, index) => {
            const isDarkHighlight = index % 3 === 2;
            return (
              <FadeIn key={service.id}>
                <article
                  id={service.id}
                  className={`scroll-mt-24 rounded-2xl border p-6 sm:p-8 lg:p-10 transition-colors ${
                    isDarkHighlight
                      ? "border-matte-700 bg-matte-900 text-white shadow-lg"
                      : "border-storm-300 bg-storm-50 text-matte-900 shadow-sm"
                  }`}
                >
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                    {/* Left Column */}
                    <div className="lg:col-span-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                            isDarkHighlight
                              ? "bg-safety-500 text-white"
                              : "bg-matte-900 text-safety-400"
                          }`}
                        >
                          <ServiceIcon name={service.icon} className="h-5 w-5" />
                        </div>
                        <span
                          className={`font-mono text-xs font-semibold uppercase tracking-widest ${
                            isDarkHighlight
                              ? "text-safety-400"
                              : "text-storm-500"
                          }`}
                        >
                          0{index + 1} / Capability
                        </span>
                      </div>

                      <h2
                        className={`text-2xl font-bold sm:text-3xl ${
                          isDarkHighlight ? "text-white" : "text-matte-950"
                        }`}
                      >
                        {service.title}
                      </h2>

                      <p
                        className={`text-sm leading-relaxed sm:text-base ${
                          isDarkHighlight ? "text-storm-300" : "text-storm-600"
                        }`}
                      >
                        {service.description}
                      </p>

                      <div
                        className={`rounded-xl border p-4 text-xs sm:text-sm ${
                          isDarkHighlight
                            ? "border-matte-700 bg-matte-950/70 text-storm-300"
                            : "border-storm-200 bg-storm-100/80 text-storm-700"
                        }`}
                      >
                        <span
                          className={`font-mono text-[11px] font-semibold uppercase tracking-wider ${
                            isDarkHighlight
                              ? "text-safety-400"
                              : "text-matte-900"
                          }`}
                        >
                          Ideal For:{" "}
                        </span>
                        {service.idealFor}
                      </div>
                    </div>

                    {/* Right Column: Deliverables */}
                    <div className="lg:col-span-6 flex flex-col justify-between space-y-6 lg:pl-4">
                      <div className="space-y-3">
                        <h3
                          className={`font-mono text-xs font-semibold uppercase tracking-widest ${
                            isDarkHighlight
                              ? "text-storm-400"
                              : "text-storm-600"
                          }`}
                        >
                          Key Deliverables
                        </h3>
                        <ul className="space-y-3">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm leading-relaxed"
                            >
                              <CheckCircle2
                                className="mt-0.5 h-4 w-4 shrink-0 text-safety-500"
                                aria-hidden="true"
                              />
                              <span
                                className={
                                  isDarkHighlight
                                    ? "text-storm-200"
                                    : "text-matte-800"
                                }
                              >
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <Link
                          href={`/contact?service=${service.id}`}
                          className={`inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all active:scale-[0.98] ${
                            isDarkHighlight
                              ? "bg-safety-500 text-white hover:bg-safety-600"
                              : "bg-matte-900 text-white hover:bg-safety-500"
                          }`}
                        >
                          <span>Inquire About {service.shortTitle}</span>
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="border-t border-storm-300 bg-storm-200/70 py-16 lg:py-20">
        <div className="section-container">
          <FadeIn>
            <div className="max-w-2xl space-y-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-safety-600">
                Modern Stack
              </p>
              <h2 className="text-3xl font-bold text-matte-950">
                Proven technologies chosen for longevity.
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TECH_STACK.map((group) => (
              <StaggerItem key={group.category}>
                <div className="h-full rounded-2xl border border-storm-300 bg-storm-50 p-6">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-matte-900">
                    {group.category}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-storm-300 bg-storm-100 px-3 py-1.5 text-xs font-medium text-matte-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-storm-100">
        <div className="section-container">
          <FadeIn>
            <div className="flex flex-col gap-6 rounded-2xl border border-matte-700 bg-matte-900 p-8 text-white sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1.5">
                <h2 className="text-2xl font-bold">
                  Not sure which architecture fits your needs?
                </h2>
                <p className="text-sm text-storm-300">
                  Talk directly with our engineering team and get practical
                  technical advice.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-safety-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-safety-600 transition-colors"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
