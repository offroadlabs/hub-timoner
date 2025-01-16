"use client";

import { Phone } from "lucide-react";
import {
  handlePhoneClick,
  type PhoneClickInput,
} from "@/lib/actions/phone-click";
import { useState } from "react";

export function PhoneButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const data: PhoneClickInput = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      };
      const phoneNumber = await handlePhoneClick(data);
      console.log(phoneNumber);
      window.location.href = `tel:${phoneNumber}`;
    } catch (error) {
      console.error("Error getting phone number:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Phone className="w-4 h-4 text-brand-blue" />
      <button
        onClick={handleClick}
        disabled={isLoading}
        className="hover:text-brand-green transition-colors disabled:opacity-50"
      >
        {isLoading ? "Chargement..." : "Appeler"}
      </button>
    </div>
  );
}
