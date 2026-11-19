import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const service = body.service?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !phone || !message) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please provide your name, phone number, and project details.",
        },
        { status: 400 }
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please enter a valid email address or leave it blank.",
        },
        { status: 400 }
      );
    }

    // Production integration hook:
    // Connect Resend, Nodemailer/SMTP, Telegram/WhatsApp webhook, or a database here.
    console.info("[Brelox Contact Inquiry]", {
      timestamp: new Date().toISOString(),
      name,
      phone,
      email: email || "not provided",
      service,
      messageLength: message.length,
    });

    return NextResponse.json({
      ok: true,
      message:
        "Thank you! Your inquiry has been received. Our team will reach out shortly.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid request payload. Please try again.",
      },
      { status: 400 }
    );
  }
}
