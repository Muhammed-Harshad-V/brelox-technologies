import type { Metadata } from "next";
import { Suspense } from "react";
import { FadeIn } from "@/components/MotionPrimitives";
import { PhoneCard } from "@/components/PhoneCard";
import { ContactForm } from "@/components/ContactForm";
import { SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Brelox Technologies directly by phone (+91 98090 01008 or +91 77369 56379) or submit a project inquiry online.",
};

export default function ContactPage() {
  return (
    <div className="bg-storm-100">
      {/* Header */}
      <section className="border-b border-storm-300/80 bg-storm-100 bg-storm-grid bg-grid py-16 lg:py-20">
        <div className="section-container">
          <FadeIn>
            <div className="max-w-3xl space-y-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-safety-600">
                Contact Brelox Technologies
              </p>
              <h1 className="text-4xl font-extrabold text-matte-950 sm:text-5xl">
                Let&apos;s talk about what you&apos;re building.
              </h1>
              <p className="text-base leading-relaxed text-storm-700 sm:text-lg">
                We operate fully remotely so you can reach us directly without
                delay. Call either of our numbers below or send your project
                details through the inquiry form.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Direct Phone Numbers + Inquiry Form (No Physical Location) */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Column: Direct Phone Cards */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <FadeIn>
                <div className="space-y-1.5 lg:min-h-[58px]">
                  <h2 className="text-xl font-bold text-matte-950">
                    Direct Phone Lines
                  </h2>
                  <p className="text-sm text-storm-600">
                    Reach us directly via phone call or WhatsApp for quick
                    project discussions.
                  </p>
                </div>
              </FadeIn>

              <div className="flex-1 flex flex-col gap-5">
                {SITE_CONFIG.phones.map((phone, idx) => (
                  <FadeIn
                    key={phone.href}
                    delay={0.08 * (idx + 1)}
                    className="flex-1 flex flex-col"
                  >
                    <PhoneCard phone={phone} className="h-full" />
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Right Column: Project Inquiry Form */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <FadeIn delay={0.12}>
                <div className="space-y-1.5 lg:min-h-[58px]">
                  <h2 className="text-xl font-bold text-matte-950">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-sm text-storm-600">
                    Share a brief overview of what you are building and we will follow up
                    with a clear plan.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.16} className="flex-1 flex flex-col">
                <Suspense
                  fallback={
                    <div className="h-full rounded-2xl border border-storm-300 bg-storm-50 p-8 text-sm text-storm-600">
                      Loading inquiry form...
                    </div>
                  }
                >
                  <ContactForm />
                </Suspense>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
