import type { Metadata } from "next";
import AssociationsClient from "./AssociationsClient";

export const metadata: Metadata = {
  title: "Bring an AI Session to Your Members — RuggedAI",
  description: "For trade associations: free, no-pitch AI programming for your members. We bring the content; you bring the room. Done-for-you member value.",
  // Targeted send, not general traffic: kept out of search indexing.
  robots: { index: false, follow: false },
};

export default function AssociationsPage() {
  return <AssociationsClient />;
}
