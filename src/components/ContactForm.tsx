"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/site-data";

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  phone: "",
  email: "",
  service: SERVICES[0].title,
  message: "",
};

interface ContactFormProps {
  showHeader?: boolean;
}

export function ContactForm({ showHeader = false }: ContactFormProps) {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");
  const [whatsappHref, setWhatsappHref] = useState<string>("");

  useEffect(() => {
    const requestedService = searchParams.get("service");
    if (requestedService) {
      const match = SERVICES.find(
        (s) => s.id === requestedService || s.title === requestedService
      );
      if (match) {
        setForm((prev) => ({ ...prev, service: match.title }));
      }
    }
  }, [searchParams]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback("");

    const trimmedName = form.name.trim();
    const trimmedPhone = form.phone.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName || !trimmedPhone || !trimmedMessage) {
      setStatus("error");
      setFeedback("Please fill in your name, phone number, and project details.");
      return;
    }

    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setStatus("error");
      setFeedback("Please enter a valid email address or leave it blank.");
      return;
    }

    const primaryContact =
      SITE_CONFIG.phones.find((p) => p.isPrimary) ?? SITE_CONFIG.phones[0];
    const targetDigits = primaryContact.rawDigits;

    const messageLines = [
      "Hello Brelox Technologies,",
      "",
      "I would like to inquire about a project:",
      `• *Name:* ${trimmedName}`,
      `• *Phone:* ${trimmedPhone}`,
      trimmedEmail
        ? `• *Email:* ${trimmedEmail}`
        : `• *Email:* (Not provided)`,
      `• *Service Needed:* ${form.service}`,
      "",
      "*Project Details:*",
      trimmedMessage,
    ];

    const whatsappText = messageLines.join("\n");
    const whatsappUrl = `https://wa.me/${targetDigits}?text=${encodeURIComponent(
      whatsappText
    )}`;
    setWhatsappHref(whatsappUrl);

    // Background log of inquiry to API (non-blocking)
    try {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }).catch(() => {
        // Non-blocking
      });
    } catch {
      // Non-blocking
    }

    setStatus("success");
    setFeedback("Redirecting to WhatsApp with your project inquiry...");

    // Immediate redirection to WhatsApp
    const openedWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
    if (
      !openedWindow ||
      openedWindow.closed ||
      typeof openedWindow.closed === "undefined"
    ) {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 flex flex-col justify-between h-full rounded-2xl border border-storm-300 bg-storm-50 p-6 sm:p-8 shadow-sm gap-5"
      noValidate
    >
      {showHeader && (
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-matte-900">
            Tell Us About Your Project
          </h2>
          <p className="text-sm text-storm-600">
            Share a brief overview of what you are building and we will follow up
            with a clear plan.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="contact-name"
            className="block text-xs font-mono font-semibold uppercase tracking-wider text-storm-700"
          >
            Your Name *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Full name or company"
            className="w-full min-h-[46px] rounded-xl border border-storm-300 bg-white px-4 py-2.5 text-sm text-matte-900 placeholder:text-storm-400 transition-colors focus:border-safety-500 focus:outline-none focus:ring-2 focus:ring-safety-500/20"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="contact-phone"
            className="block text-xs font-mono font-semibold uppercase tracking-wider text-storm-700"
          >
            Phone Number *
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 00000 00000"
            className="w-full min-h-[46px] rounded-xl border border-storm-300 bg-white px-4 py-2.5 text-sm text-matte-900 placeholder:text-storm-400 transition-colors focus:border-safety-500 focus:outline-none focus:ring-2 focus:ring-safety-500/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="contact-email"
            className="block text-xs font-mono font-semibold uppercase tracking-wider text-storm-700"
          >
            Email Address (Optional)
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            className="w-full min-h-[46px] rounded-xl border border-storm-300 bg-white px-4 py-2.5 text-sm text-matte-900 placeholder:text-storm-400 transition-colors focus:border-safety-500 focus:outline-none focus:ring-2 focus:ring-safety-500/20"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="contact-service"
            className="block text-xs font-mono font-semibold uppercase tracking-wider text-storm-700"
          >
            Service Needed *
          </label>
          <select
            id="contact-service"
            name="service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full min-h-[46px] rounded-xl border border-storm-300 bg-white px-4 py-2.5 text-sm text-matte-900 transition-colors focus:border-safety-500 focus:outline-none focus:ring-2 focus:ring-safety-500/20"
          >
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Multiple Services / Not Sure Yet">
              Multiple Services / Not Sure Yet
            </option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5 flex-1 flex flex-col">
        <label
          htmlFor="contact-message"
          className="block text-xs font-mono font-semibold uppercase tracking-wider text-storm-700"
        >
          Project Details *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Briefly describe your goals, key features, and ideal timeline..."
          className="w-full flex-1 min-h-[100px] rounded-xl border border-storm-300 bg-white px-4 py-3 text-sm text-matte-900 placeholder:text-storm-400 transition-colors focus:border-safety-500 focus:outline-none focus:ring-2 focus:ring-safety-500/20 resize-y"
        />
      </div>

      {status === "success" && (
        <div
          role="status"
          className="flex flex-col gap-2 rounded-xl border border-matte-700 bg-matte-900 p-4 text-sm text-storm-100"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-safety-500"
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold text-white">Opening WhatsApp...</p>
              <p className="text-xs text-storm-300 mt-0.5">
                If WhatsApp didn&apos;t open automatically, click below to send your inquiry:
              </p>
            </div>
          </div>
          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-safety-400 hover:text-safety-300 hover:underline pl-8"
            >
              Continue to WhatsApp &rarr;
            </a>
          )}
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-safety-500/50 bg-safety-50 p-4 text-sm text-matte-900"
        >
          <AlertCircle
            className="mt-0.5 h-5 w-5 shrink-0 text-safety-600"
            aria-hidden="true"
          />
          <p>{feedback}</p>
        </div>
      )}

      <div>
        <button
          type="submit"
          className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-safety-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-safety-600 active:scale-[0.99] sm:w-auto"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          <span>Send Project Inquiry</span>
        </button>
      </div>
    </form>
  );
}
