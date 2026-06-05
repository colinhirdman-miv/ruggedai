import type { Metadata } from "next";
import RuggedUClient from "./RuggedUClient";

export const metadata: Metadata = {
  title: "RuggedU Workshop — AI Training for Trades Businesses",
  description: "3-week live workshop teaching HVAC, plumbing, electrical, and other trades to build real AI systems. $497. Lifetime access to future cohorts included.",
};

export default function RuggedUPage() {
  return <RuggedUClient />;
}
