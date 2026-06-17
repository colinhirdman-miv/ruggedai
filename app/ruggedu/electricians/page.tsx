import type { Metadata } from "next";
import RuggedUElectriciansClient from "./RuggedUElectriciansClient";

export const metadata: Metadata = {
  title: "RuggedU for Electricians — AI Training for Electrical Contractors",
  description: "A 3-week live workshop where electrical contractors learn to use Claude and build an AI co-pilot for their business. Live, hands-on, $497.",
  // Hidden page: not linked anywhere and excluded from search indexing.
  robots: { index: false, follow: false },
};

export default function RuggedUElectriciansPage() {
  return <RuggedUElectriciansClient />;
}
