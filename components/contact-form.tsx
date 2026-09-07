"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/lib/services";
import { neighborhoods } from "@/lib/neighborhoods";
import { whatsappLink } from "@/lib/site";
import { trackEvent } from "./analytics";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    neighborhood: "",
    message: "",
    contactTime: "",
    images: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = "الرجاء إدخال الاسم";
    if (!formData.phone.trim()) next.phone = "الرجاء إدخال رقم الجوال";
    else if (!/^[0-9+\s-]{9,15}$/.test(formData.phone.trim()))
      next.phone = "الرجاء إدخال رقم جوال صحيح";
    if (!formData.service) next.service = "الرجاء اختيار الخدمة";
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setState("loading");
    trackEvent("contact_form_submit", { service: formData.service });

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        service: formData.service,
        neighborhood: formData.neighborhood,
        message: formData.message,
        contactTime: formData.contactTime,
      };
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setState("success");
    } catch {
      setState("error");
    }
  }

  const inputClass = (hasError?: string) =>
    `w-full rounded-2xl border bg-white px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/40 ${
      hasError ? "border-red-400" : "border-forest/15"
    }`;

  if (state === "success") {
    return (
      <div className="card-surface flex flex-col items-center p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-tint text-brand">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 text-2xl font-bold text-ink">تم استلام طلبك</h3>
        <p className="mt-3 max-w-md text-muted">
          شكراً لثقتك بالبيت الأخضر. سنراجع طلبك ونتواصل معك خلال وقت عملنا، ويمكنك
          أيضاً مراسلتنا مباشرة عبر واتساب لتسريع الرد.
        </p>
        <a
          href={whatsappLink(
            `السلام عليكم، أنا ${formData.name || "عميل البيت الأخضر"}، أرسلت طلب استشارة بخصوص خدمة ${formData.service || "تنسيق الحدائق"}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-6"
          onClick={() => trackEvent("whatsapp_click", { label: "form-success" })}
        >
          مراسلتنا عبر واتساب
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card-surface p-7 sm:p-9">
      <h3 className="text-2xl font-bold text-ink">اطلب استشارتك</h3>
      <p className="mt-2 text-muted">
        أخبرنا عن مساحتك وسنتواصل معك لتحديد موعد المعاينة والتصور.
      </p>

      {state === "error" && (
        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          حدث خطأ في إرسال النموذج. يرجى المحاولة مرة أخرى أو مراسلتنا عبر واتساب.
        </div>
      )}

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
            الاسم
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="اسمك الكريم"
            className={inputClass(errors.name)}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-ink">
            رقم الجوال
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            dir="ltr"
            value={formData.phone}
            onChange={handleChange}
            placeholder="05xxxxxxxx"
            className={`${inputClass(errors.phone)} text-right`}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-semibold text-ink">
            نوع الخدمة
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={inputClass(errors.service)}
            aria-invalid={!!errors.service}
          >
            <option value="">اختر الخدمة المطلوبة</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="أخرى">خدمة أخرى</option>
          </select>
          {errors.service && (
            <p className="mt-1.5 text-xs text-red-600">{errors.service}</p>
          )}
        </div>

        <div>
          <label htmlFor="neighborhood" className="mb-2 block text-sm font-semibold text-ink">
            الحي
          </label>
          <select
            id="neighborhood"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleChange}
            className={inputClass()}
          >
            <option value="">اختر الحي (اختياري)</option>
            {neighborhoods.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
            <option value="حي آخر">حي آخر</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
            وصف مختصر للمشروع
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="مثال: حديقة فيلا مساحتها 300 متر مربع، أرغب في جلسة خارجية ومسطح ثيل ونافورة صغيرة."
            className={inputClass()}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="images" className="mb-2 block text-sm font-semibold text-ink">
            رفع صور للمساحة (اختياري)
          </label>
          <input
            id="images"
            name="images"
            type="text"
            value={formData.images}
            onChange={handleChange}
            placeholder="يمكنك إرسال صور المساحة عبر واتساب بعد إرسال الطلب"
            className={inputClass()}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contactTime" className="mb-2 block text-sm font-semibold text-ink">
            أفضل وقت للتواصل
          </label>
          <select
            id="contactTime"
            name="contactTime"
            value={formData.contactTime}
            onChange={handleChange}
            className={inputClass()}
          >
            <option value="">اختر الوقت المناسب (اختياري)</option>
            <option value="صباحاً">صباحاً</option>
            <option value="ظهراً">ظهراً</option>
            <option value="مساءً">مساءً</option>
            <option value="أي وقت">أي وقت</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            جارٍ الإرسال...
          </>
        ) : (
          <>
            اطلب استشارتك
            <Send className="h-5 w-5" />
          </>
        )}
      </button>
      <p className="mt-4 text-center text-xs text-muted">
        بإرسالك النموذج فأنت توافق على سياسة الخصوصية الخاصة بنا.
      </p>
    </form>
  );
}
