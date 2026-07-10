"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={22} className="text-white" />
    </motion.a>
  );
}