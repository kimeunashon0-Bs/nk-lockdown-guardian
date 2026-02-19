import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "254700000000";
const WHATSAPP_MSG = encodeURIComponent("Hello, I'm interested in your security services.");

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg animate-pulse-glow hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-background" />
    </a>
  );
}
