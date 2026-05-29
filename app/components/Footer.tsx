"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitContact } from "@/actions/contact.action";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "RuggedU", href: "/ruggedu" },
  { label: "Consulting", href: "/work-with-us" },
];

export default function Footer() {
  const [state, action, pending] = useActionState(submitContact, null);

  return (
    <footer className="bg-brand-black border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Left — Brand + Nav */}
        <div>
          <Link href="/" className="font-display font-black text-2xl uppercase tracking-wider inline-block mb-4">
            <span className="text-brand-red">Rugged</span><span className="text-white">AI</span><sup className="text-white text-[0.5rem] align-super ml-0.5 font-bold">™</sup>
          </Link>
          <p className="text-brand-steel text-sm mb-8 leading-relaxed max-w-xs">
            AI that works as hard as you do. Built for the trades.
          </p>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display font-semibold text-xs uppercase tracking-widest text-brand-iron hover:text-white transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right — Contact Form */}
        <div>
          <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-5">
            Get in Touch
          </p>
          <h3 className="font-display font-black text-2xl uppercase text-white mb-6 leading-tight">
            Have a Question?
          </h3>

          {state?.success ? (
            <div className="border border-brand-red bg-[#130000] px-6 py-8">
              <p className="font-display font-black text-white text-sm uppercase tracking-wide mb-1">
                Message Received.
              </p>
              <p className="text-brand-steel text-sm leading-relaxed">
                We'll get back to you within one business day.
              </p>
            </div>
          ) : (
            <form action={action} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-iron mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-brand-dark border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-iron mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-brand-dark border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm"
                    placeholder="john@yourcompany.com"
                  />
                </div>
              </div>
              <div>
                <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-iron mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-brand-dark border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              {state?.error && (
                <p className="text-brand-red text-xs uppercase tracking-wide">{state.error}</p>
              )}
              <button
                type="submit"
                disabled={pending}
                className="font-display font-black text-sm uppercase tracking-widest bg-brand-red text-white px-8 py-3 hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {pending ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1a1a] px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-brand-steel text-xs uppercase tracking-widest">
            AI that works as hard as you do.
          </p>
          <p className="text-brand-steel text-xs">
            &copy; {new Date().getFullYear()} RuggedAI™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
