import type { Metadata } from "next";
import HostClient from "./HostClient";

export const metadata: Metadata = {
  title: "Host an AI Session for Your Contractors — RuggedAI",
  description: "For trades suppliers: host a free, no-pitch AI session for the contractors who buy from you. We bring the content; you bring the room — and the loyalty that comes with it.",
  // Targeted send, not general traffic: kept out of search indexing.
  robots: { index: false, follow: false },
};

export default function HostPage() {
  return <HostClient />;
}
