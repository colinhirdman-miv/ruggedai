"use server";

import { Resend } from "resend";

export type ContactState = {
  success: boolean;
  error?: string;
} | null;

export async function submitContact(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { success: false, error: "Please fill out all fields." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "RuggedAI <noreply@send.ruggedai.ai>", // requires send.ruggedai.ai verified in Resend
      to: "colin.hirdman@ruggedai.ai",
      subject: `New message from ${name} via RuggedAI`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function submitBuild(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const business = (formData.get("business") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !business) {
    return { success: false, error: "Please fill out all required fields." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "RuggedAI <noreply@send.ruggedai.ai>", // requires send.ruggedai.ai verified in Resend
      to: "colin.hirdman@ruggedai.ai",
      replyTo: email,
      subject: `New RuggedAI inquiry from ${name} (${business})`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nBusiness: ${business}\n\nMessage:\n${message || "—"}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Business:</strong> ${business}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${(message || "—").replace(/\n/g, "<br />")}</p>
      `,
    });

    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function submitHost(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const business = (formData.get("business") as string)?.trim();
  const audience = (formData.get("audience") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !business) {
    return { success: false, error: "Please fill out all required fields." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "RuggedAI <noreply@send.ruggedai.ai>", // requires send.ruggedai.ai verified in Resend
      to: "colin.hirdman@ruggedai.ai",
      replyTo: email,
      subject: `New event host inquiry from ${name} (${business})`,
      text: `Name: ${name}\nEmail: ${email}\nBusiness: ${business}\nAudience: ${audience || "—"}\n\nMessage:\n${message || "—"}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business / Organization:</strong> ${business}</p>
        <p><strong>Audience:</strong> ${audience || "—"}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${(message || "—").replace(/\n/g, "<br />")}</p>
      `,
    });

    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
