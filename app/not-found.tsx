import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-sand">
      <div className="container-site py-20 text-center">
        <p className="font-latin text-7xl font-bold text-forest/15">404</p>
        <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
          الصفحة غير موجودة
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          عذراً، يبدو أن الصفحة التي تبحث عنها غير متوفرة أو تم نقلها. يمكنك العودة
          للرئيسية أو تصفح خدماتنا.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            <Home className="h-5 w-5" />
            العودة للرئيسية
          </Link>
          <Link href="/services" className="btn-secondary">
            استكشف خدماتنا
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
