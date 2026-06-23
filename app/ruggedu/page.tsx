import type { Metadata } from "next";
import RuggedUClient from "./RuggedUClient";

const title = "RuggedU Workshop — AI Training for Trades Businesses";
const description =
  "3-week live workshop teaching HVAC, plumbing, electrical, and other trades to build real AI systems. $497. Lifetime access to future cohorts included.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/ruggedu",
    siteName: "RuggedAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RuggedUPage() {
  return <RuggedUClient />;
}
