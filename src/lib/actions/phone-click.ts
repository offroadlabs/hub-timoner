"use server";

import { z } from "zod";
import { after } from "next/server";

const phoneClickSchema = z.object({
  timestamp: z.string(),
  userAgent: z.string(),
});

export type PhoneClickInput = z.infer<typeof phoneClickSchema>;

async function sendNotification(data: PhoneClickInput) {
  const webhookUrl = process.env.NOTIFICATION_WEBHOOK_URL;
  if (!webhookUrl) {
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Sébastien Timoner",
        email: "sebastien@timoner.com",
        message: `Clic sur le numéro de téléphone\n\nDate: ${new Date(data.timestamp).toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}\nUser Agent: ${data.userAgent}\nSource: hub.timoner.com`,
      }),
    });

    if (!response.ok) {
      console.error("Failed to send notification");
    }
  } catch (error) {
    console.error("Error sending notification:", error);
  }
}

export async function handlePhoneClick(data: PhoneClickInput) {
  try {
    // Valider les données avec le schéma
    phoneClickSchema.parse(data);
    
    const phoneNumber = process.env.PHONE_NUMBER;
    if (!phoneNumber) {
      throw new Error("Phone number not configured");
    }

    const webhookUrl = process.env.NOTIFICATION_WEBHOOK_URL;
    if (webhookUrl) {
      after(() => sendNotification(data));
    }
    
    return phoneNumber;
  } catch (error) {
    console.error("Error handling phone click:", error);
    throw new Error("Failed to handle phone click");
  }
} 