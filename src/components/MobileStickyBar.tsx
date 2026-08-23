import { Phone, MessageCircle } from 'lucide-react';

const MobileStickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/90 backdrop-blur-md border-t border-charcoal/10 px-4 py-3 flex items-center gap-3 shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/966557401773"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-full font-bold text-sm hover:opacity-95 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span>واتساب</span>
      </a>

      {/* Call Button */}
      <a
        href="tel:0557401773"
        className="flex-1 flex items-center justify-center gap-2 bg-primary-deep text-warm-white py-3 px-4 rounded-full font-bold text-sm hover:bg-botanical active:scale-95 transition-all duration-200"
      >
        <Phone className="w-4 h-4 fill-warm-white" />
        <span>اتصال</span>
      </a>
      
    </div>
  );
};

export default MobileStickyBar;
