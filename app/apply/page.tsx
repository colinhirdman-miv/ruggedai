"use client";

import { useState } from "react";

const services = [
  "RuggedGenius Workshop ($997)",
  "Rugged 1:1 Consulting",
  "Not sure yet",
];

const trades = [
  "HVAC",
  "Pest Control",
  "Plumbing",
  "Electrical",
  "Garage Doors",
  "Landscaping",
  "Other",
];

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    trade: "",
    service: "",
    revenue: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
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
            Apply Now.
          </h1>
          <p className="text-brand-steel text-base md:text-lg max-w-xl mb-12 leading-relaxed">
            Tell us about your business. We review every application and follow up within one business day.
          </p>

          {submitted ? (
            <div className="border border-brand-red bg-[#130000] p-10">
              <h2 className="font-display font-black text-3xl uppercase text-white mb-4">
                Application Received.
              </h2>
              <p className="text-brand-steel text-base leading-relaxed">
                We&apos;ll review your application and reach out within one business day. If you&apos;re a fit, we&apos;ll schedule a strategy call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-iron mb-2">
                    Trade *
                  </label>
                  <select
                    name="trade"
                    required
                    value={form.trade}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm appearance-none"
                  >
                    <option value="">Select your trade</option>
                    {trades.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-iron mb-2">
                    Interested In *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-iron mb-2">
                  Annual Revenue (approximate)
                </label>
                <select
                  name="revenue"
                  value={form.revenue}
                  onChange={handleChange}
                  className="w-full bg-brand-dark border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm appearance-none"
                >
                  <option value="">Select range</option>
                  <option>Under $250K</option>
                  <option>$250K–$500K</option>
                  <option>$500K–$1M</option>
                  <option>$1M–$3M</option>
                  <option>$3M+</option>
                </select>
              </div>

              <div>
                <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-iron mb-2">
                  Biggest Challenge Right Now
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-brand-dark border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm resize-none"
                  placeholder="What's the #1 thing in your business that AI could help with? What's slipping through the cracks?"
                />
              </div>

              <button
                type="submit"
                className="font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-10 py-4 hover:bg-red-700 transition-colors w-full md:w-auto"
              >
                Submit Application →
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
