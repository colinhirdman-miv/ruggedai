import type { Metadata } from "next";
import RuggedUElectriciansClient from "./RuggedUElectriciansClient";

export const metadata: Metadata = {
  title: "RuggedU for Electricians — AI Training for Electrical Contractors",
  description: "A 4-week live workshop teaching electrical contractors to build real AI into their business — after-hours call handling, estimate follow-up, and more. $497.",
  // Hidden page: not linked anywhere and excluded from search indexing.
  robots: { index: false, follow: false },
};

export default function RuggedUElectriciansPage() {
  return <RuggedUElectriciansClient />;
}
