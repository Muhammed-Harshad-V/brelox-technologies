"use client";

import { useState } from "react";
import { Phone, Copy, Check, MessageSquare } from "lucide-react";
import type { PhoneContact } from "@/lib/site-data";

interface PhoneCardProps {
  phone: PhoneContact;
  className?: string;
}

export function PhoneCard({ phone, className = "" }: PhoneCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phone.display);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard permissions are blocked
    }
  };

  return (
    <div
      className={`rounded-2xl border p-6 transition-all duration-200 flex flex-col justify-between ${
        phone.isPrimary
          ? "border-matte-700 bg-matte-900 text-white shadow-lg"
          : "border-storm-300 bg-storm-50 text-matte-900 shadow-sm"
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider ${
              phone.isPrimary
                ? "bg-safety-500/15 text-safety-400 border border-safety-500/30"
                : "bg-storm-200 text-storm-700"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                phone.isPrimary ? "bg-safety-500" : "bg-storm-500"
              }`}
            />
            {phone.label}
          </span>
          <p
            className={`pt-1 text-sm ${
              phone.isPrimary ? "text-storm-300" : "text-storm-600"
            }`}
          >
            {phone.role}
          </p>
        </div>
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
            phone.isPrimary
              ? "bg-safety-500 text-white"
              : "bg-matte-900 text-white"
          }`}
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <p className="mt-5 font-mono text-2xl font-bold tracking-tight sm:text-3xl">
        {phone.display}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2.5">
        <a
          href={phone.href}
          className={`inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all active:scale-[0.98] ${
            phone.isPrimary
              ? "bg-safety-500 text-white hover:bg-safety-600"
              : "bg-matte-900 text-white hover:bg-matte-800"
          }`}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/${phone.rawDigits}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${
            phone.isPrimary
              ? "border-matte-700 bg-matte-800 text-storm-100 hover:border-storm-500"
              : "border-storm-300 bg-storm-100 text-matte-900 hover:bg-storm-200"
          }`}
        >
          <MessageSquare className="h-4 w-4" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${phone.display}`}
          className={`inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border px-3.5 py-2.5 text-sm font-medium transition-colors ${
            phone.isPrimary
              ? "border-matte-700 bg-matte-950 text-storm-300 hover:text-white"
              : "border-storm-300 bg-white text-storm-700 hover:text-matte-900"
          }`}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-safety-500" aria-hidden="true" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" aria-hidden="true" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
