import type { Metadata } from "next";
import ApplyClient from "./ApplyClient";

export const metadata: Metadata = {
  title: "Apply — Get Started with RuggedAI",
  description: "Apply to RuggedU or RuggedConsulting. Tell us about your trades business and we'll follow up within one business day to discuss next steps.",
};

export default function ApplyPage() {
  return <ApplyClient />;
}
