import type { Metadata } from "next";
import HostClient from "./HostClient";

export const metadata: Metadata = {
  title: "Host an AI for the Trades Event — RuggedAI",
  description: "Partner with RuggedAI to host a free, no-pitch AI education session for the trades businesses you serve. We bring the content; you bring the room.",
  // Targeted send, not general traffic: kept out of search indexing.
  robots: { index: false, follow: false },
};

export default function HostPage() {
  return <HostClient />;
}
