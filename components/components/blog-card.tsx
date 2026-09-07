import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group card-surface overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute top-4 right-4 rounded-2xl bg-white/95 px-3 py-1 text-xs font-semibold text-brand shadow-sm">
            {post.category}
          </span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString("ar-SA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
          <h3 className="mt-3 text-lg font-bold leading-snug text-ink transition-colors group-hover:text-brand-gradient">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
            {post.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors group-hover:text-brand-gradient">
            اقرأ المقال
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
