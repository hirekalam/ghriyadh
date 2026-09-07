import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="مسار التنقل" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-brand"
          >
            <Home className="h-4 w-4" />
            الرئيسية
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4 text-lime" aria-hidden="true" />
              {item.href && !isLast ? (
                <Link href={item.href} className="text-muted transition-colors hover:text-brand">
                  {item.label}
                </Link>
              ) : (
                <span className="text-brand-gradient font-semibold" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
