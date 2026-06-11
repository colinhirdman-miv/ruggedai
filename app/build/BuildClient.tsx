"use client";

import { useActionState, useState } from "react";
import { submitBuild } from "@/actions/contact.action";

export default function BuildClient() {
  const [state, formAction, pending] = useActionState(submitBuild, null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <main>
      <section className="pt-36 pb-24 px-6 bg-brand-black">
        <div className="max-w-3xl mx-auto">
          <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-4">
            Get Started
          </p>
          <h1
            className="font-display font-black uppercase leading-none text-white mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", letterSpacing: "-0.01em" }}
          >
            Let's Build.
          </h1>
          <p className="text-brand-steel text-base md:text-lg max-w-xl mb-12 leading-relaxed">
            Tell us about your business and we&apos;ll follow up within one business day to talk through the best fit.
          </p>

          {state?.success ? (
            <div className="border border-brand-red bg-[#130000] p-10">
              <h2 className="font-display font-black text-3xl uppercase text-white mb-4">
                Message Received.
              </h2>
              <p className="text-brand-steel text-base leading-relaxed">
                Thanks for reaching out. We&apos;ll follow up within one business day to talk through the best fit for your business.
              </p>
            </div>
          ) : (
            <form action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-iron mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-iron mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm"
                    placeholder="john@yourcompany.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-iron mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm"
                    placeholder="(555) 555-5555"
                  />
                </div>
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-iron mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="business"
                    required
                    value={form.business}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm"
                    placeholder="Smith HVAC LLC"
                  />
                </div>
              </div>

              <div>
                <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-iron mb-2">
                  Anything Else?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-brand-dark border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm resize-none"
                  placeholder="Tell us whatever you'd like — questions, what you're hoping to get out of this, or anything else."
                />
              </div>

              {state?.error && (
                <p className="text-brand-red text-sm uppercase tracking-wide">{state.error}</p>
              )}
              <button
                type="submit"
                disabled={pending}
                className="font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-10 py-4 hover:bg-red-700 transition-colors w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {pending ? "Sending..." : "Submit →"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
