import type { Metadata } from "next";
import RuggedUClient from "./RuggedUClient";

export const metadata: Metadata = {
  title: "RuggedU Workshop — AI Training for Trades Businesses",
  description: "4-week live workshop teaching HVAC, plumbing, and home service owners to build real AI systems. $997, capped at 20 professionals per cohort. Lifetime access included.",
};

export default function RuggedUPage() {
  return <RuggedUClient />;
}
