import Link from "next/link";
import { MapPin } from "lucide-react";
import { neighborhoods } from "@/lib/neighborhoods";

export default function LocalAreas() {
  return (
    <div className="card-surface p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-tint text-brand">
          <MapPin className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-lg font-bold text-ink">نخدم جميع أحياء الرياض</h3>
          <p className="text-sm text-muted">
            من شمال الرياض إلى جنوبها، نصل إلى مساحتك أينما كانت.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {neighborhoods.map((area) => (
          <span
            key={area}
            className="rounded-2xl border border-forest/10 bg-tint/50 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand/30 hover:bg-tint"
          >
            {area}
          </span>
        ))}
      </div>
      <div className="mt-6 border-t border-forest/10 pt-5 text-sm text-muted">
        هل تسكن خارج هذه الأحياء؟{" "}
        <Link href="/contact" className="font-semibold text-brand hover:underline">
          تواصل معنا
        </Link>{" "}
        لنتأكد من تغطية موقعك.
      </div>
    </div>
  );
}
