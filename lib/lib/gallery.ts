export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  label: string;
  tall?: boolean;
};

export const galleryCategories = [
  "الكل",
  "حدائق",
  "فلل",
  "جلسات خارجية",
  "شلالات",
  "نوافير",
  "ثيل طبيعي",
  "ثيل صناعي",
  "برجولات",
  "ري",
  "مساحات أسطح",
];

export const galleryItems: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
    alt: "تصميم حديقة سكنية خضراء بمسطح عشبي",
    category: "حدائق",
    label: "تصميم حديقة سكنية",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
    alt: "واجهة فيلا حديثة بمساحة خارجية منسقة",
    category: "فلل",
    label: "مساحة خارجية لفيلا",
  },
  {
    src: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=1200&q=80",
    alt: "جلسة خارجية عصرية مع مسطح أخضر",
    category: "جلسات خارجية",
    label: "جلسة خارجية عصرية",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    alt: "نافورة مائية بتصميم معماري حديث",
    category: "نوافير",
    label: "نافورة بتصميم عصري",
  },
  {
    src: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1200&q=80",
    alt: "مسطح ثيل طبيعي في حديقة منزلية",
    category: "ثيل طبيعي",
    label: "مسطح ثيل طبيعي",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "حديقة معتنى بها مع ممرات مشاة",
    category: "حدائق",
    label: "حديقة بممرات أنيقة",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    alt: "برجولة خشبية توفر الظل لجلسة خارجية",
    category: "برجولات",
    label: "برجولة خشبية",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    alt: "مساحة سطح منسقة بنباتات صحراوية",
    category: "مساحات أسطح",
    label: "تنسيق سطح خارجي",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80",
    alt: "مساحة ثيل صناعي أخضر للحدائق والملاعب",
    category: "ثيل صناعي",
    label: "مساحة ثيل صناعي",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    alt: "ممر تصاميم شلال في حديقة راقية",
    category: "شلالات",
    label: "شلال حديقة",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&w=1200&q=80",
    alt: "نظام ري يعمل على مسطح أخضر",
    category: "ري",
    label: "نظام ري آلي",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    alt: "داخلية فيلا عصرية بجلسة خارجية",
    category: "فلل",
    label: "جلسة فيلا عصرية",
  },
];
