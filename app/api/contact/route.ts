import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  service?: string;
  neighborhood?: string;
  message?: string;
  contactTime?: string;
};

export async function POST(request: Request) {
  let payload: ContactPayload = {};
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "بيانات غير صالحة" },
      { status: 400 }
    );
  }

  const name = (payload.name ?? "").trim();
  const phone = (payload.phone ?? "").trim();

  if (!name || !phone) {
    return NextResponse.json(
      { error: "الاسم ورقم الجوال مطلوبان" },
      { status: 400 }
    );
  }

  if (!/^[0-9+\s-]{9,15}$/.test(phone)) {
    return NextResponse.json(
      { error: "رقم الجوال غير صحيح" },
      { status: 400 }
    );
  }

  const emailUser = process.env.CONTACT_EMAIL_USER;
  const emailPass = process.env.CONTACT_EMAIL_PASS;
  const emailTo = process.env.CONTACT_EMAIL_TO;

  const summary = {
    name,
    phone,
    service: payload.service ?? "",
    neighborhood: payload.neighborhood ?? "",
    message: payload.message ?? "",
    contactTime: payload.contactTime ?? "",
  };

  if (emailUser && emailPass && emailTo) {
    try {
      await sendEmail(summary, emailUser, emailPass, emailTo);
      return NextResponse.json({ ok: true, delivered: true });
    } catch {
      return NextResponse.json(
        { ok: true, delivered: false },
        { status: 200 }
      );
    }
  }

  return NextResponse.json({ ok: true, delivered: false });
}

async function sendEmail(
  data: Record<string, string>,
  user: string,
  pass: string,
  to: string
) {
  const nodemailer = await import("nodemailer");
  const transporter = nodemailer.default.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const lines = Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  await transporter.sendMail({
    from: user,
    to,
    subject: `طلب جديد من موقع البيت الأخضر — ${data.name}`,
    text: lines,
  });
}
