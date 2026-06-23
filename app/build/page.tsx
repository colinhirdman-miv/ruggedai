import type { Metadata } from "next";
import BuildClient from "./BuildClient";

export const metadata: Metadata = {
  title: "Let's Build — Get Started with RuggedAI",
  description: "Tell us about your trades business and we'll follow up within one business day to discuss next steps.",
};

export default async function BuildPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const { from } = await searchParams;
  return <BuildClient interest={from === "ruggedu" ? "ruggedu" : undefined} />;
}
