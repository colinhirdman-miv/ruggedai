import type { Metadata } from "next";
import RuggedUHvacClient from "./RuggedUHvacClient";

export const metadata: Metadata = {
  title: "RuggedU for HVAC — AI Training for HVAC Contractors",
  description: "A 3-week live workshop teaching HVAC contractors to build real AI into their business — after-hours call handling, estimate follow-up, and more. $497.",
  // Hidden page: not linked anywhere and excluded from search indexing.
  robots: { index: false, follow: false },
};

export default function RuggedUHvacPage() {
  return <RuggedUHvacClient />;
}
