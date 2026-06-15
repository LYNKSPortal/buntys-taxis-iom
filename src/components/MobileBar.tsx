
import { Phone, MessageCircle } from "lucide-react";

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-black border-t border-white/10 flex">
      <a
        href="tel:+447624313151"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-colors duration-200"
      >
        <Phone size={18} className="text-[#29ABE2]" />
        Call
      </a>
      <div className="w-px bg-white/10" />
      <a
        href="https://wa.me/447624313151"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#29ABE2] text-white font-bold text-sm tracking-widest uppercase hover:bg-[#1a8bbf] transition-colors duration-200"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  );
}
