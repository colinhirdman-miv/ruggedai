import type { Metadata } from "next";
import RuggedUHvacClient from "./RuggedUHvacClient";

export const metadata: Metadata = {
  title: "RuggedU for HVAC — AI Training for HVAC Contractors",
  description: "A 3-week live workshop where HVAC contractors learn to use Claude and build an AI co-pilot for their business. Live, hands-on, $497.",
  // Hidden page: not linked anywhere and excluded from search indexing.
  robots: { index: false, follow: false },
};

export default function RuggedUHvacPage() {
  return <RuggedUHvacClient />;
}
