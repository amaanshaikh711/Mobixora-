"use client";

import { useState } from "react";

const contactMethods = [
    { icon: "📞", title: "Call Us", detail: "+91 98765 43210", sub: "Mon–Sat, 9 AM – 8 PM IST", color: "#6366f1", bg: "#6366f108" },
    { icon: "✉️", title: "Email Us", detail: "support@mobixora.in", sub: "We reply within 2–4 hours", color: "#a855f7", bg: "#a855f708" },
    { icon: "💬", title: "Live Chat", detail: "Chat with an Expert", sub: "Available 24 × 7 via website", color: "#10b981", bg: "#10b98108" },
    { icon: "📍", title: "Visit Us", detail: "Koramangala, Bangalore", sub: "Experience Centre — Open 10–7", color: "#f59e0b", bg: "#f59e0b08" },
];

const faqs = [
    { q: "How long does delivery take?", a: "Metro cities receive same-day or next-day delivery. For other cities, 2–5 business days depending on your pin code." },
    { q: "Do you offer genuine products with warranty?", a: "100% yes. Every phone is sourced directly from the brand or authorized distributor and comes with the full manufacturer's warranty." },
    { q: "What is your return policy?", a: "We offer a 14-day no-questions-asked return policy. Simply raise a return request from your account or call our support team." },
    { q: "Can I pay with EMI?", a: "Absolutely! We offer No Cost EMI on 15+ banks including HDFC, ICICI, Axis, SBI, and more. Tenure from 3–24 months." },
    { q: "Do you buy or exchange old phones?", a: "Yes! Get an instant exchange value estimate online and apply it toward your new phone. We pick up the old device for free." },
];

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <main>
            {/* ── Hero ── */}
            <section
                className="relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0f0c29 0%, #24243e 50%, #302b63 100%)" }}
            >
                <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)", filter: "blur(60px)" }} />
                <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6" style={{ background: "rgba(99,102,241,0.2)", color: "#a5b4fc", border: "1px solid rgba(99,102,241,0.3)" }}>
                        We're Here For You
                    </span>
                    <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-5">
                        Get In{" "}
                        <span style={{ background: "linear-gradient(90deg, #a855f7, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            Touch
                        </span>
                    </h1>
                    <p className="max-w-xl mx-auto text-white/55 text-lg font-medium leading-relaxed">
                        Questions about a product, order support, or just want expert advice? Our team is available across multiple channels.
                    </p>
                </div>
            </section>

            {/* ── Contact Methods ── */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {contactMethods.map((c) => (
                            <div
                                key={c.title}
                                className="p-7 rounded-2xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                                style={{ background: c.bg }}
                            >
                                <div className="text-3xl mb-4">{c.icon}</div>
                                <h3 className="font-black text-gray-900 text-base mb-1">{c.title}</h3>
                                <p className="font-bold text-sm mb-1" style={{ color: c.color }}>{c.detail}</p>
                                <p className="text-xs text-gray-400 font-medium">{c.sub}</p>
                                <div className="mt-4 h-0.5 w-6 rounded-full group-hover:w-12 transition-all duration-300" style={{ background: c.color }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Form + Map ── */}
            <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)" }}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-12">

                        {/* Form */}
                        <div className="lg:col-span-3">
                            <p className="text-xs font-black tracking-widest uppercase text-indigo-500 mb-2">Send a Message</p>
                            <h2 className="text-3xl font-black text-gray-900 mb-8">We'd Love to Hear From You</h2>

                            {sent ? (
                                <div className="text-center py-20 rounded-2xl border border-emerald-100 bg-emerald-50">
                                    <div className="text-6xl mb-4">✅</div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-500">We'll get back to you within 2–4 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name *</label>
                                            <input
                                                required
                                                type="text"
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                placeholder="Arjun Sharma"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white transition"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address *</label>
                                            <input
                                                required
                                                type="email"
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                placeholder="you@example.com"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white transition"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number</label>
                                            <input
                                                type="tel"
                                                value={form.phone}
                                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                placeholder="+91 98765 43210"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white transition"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Subject *</label>
                                            <select
                                                required
                                                value={form.subject}
                                                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white transition"
                                            >
                                                <option value="">Select a topic</option>
                                                <option>Product Inquiry</option>
                                                <option>Order Support</option>
                                                <option>Return / Exchange</option>
                                                <option>EMI & Payment</option>
                                                <option>Technical Issue</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1.5">Message *</label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            placeholder="Tell us how we can help you..."
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white transition resize-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 rounded-xl font-black text-white text-sm hover:scale-[1.01] active:scale-100 transition-transform"
                                        style={{ background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)" }}
                                    >
                                        Send Message →
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Side Info */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Map Placeholder */}
                            <div
                                className="rounded-2xl overflow-hidden flex items-center justify-center"
                                style={{ height: "220px", background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)" }}
                            >
                                <div className="text-center">
                                    <div className="text-5xl mb-2">🗺️</div>
                                    <p className="text-white font-bold text-sm">Koramangala, Bangalore</p>
                                    <p className="text-white/50 text-xs mt-1">Karnataka — 560034</p>
                                </div>
                            </div>

                            {/* Office hours */}
                            <div className="p-6 rounded-2xl border border-gray-100 bg-white">
                                <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2">🕒 Business Hours</h3>
                                {[
                                    { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
                                    { day: "Saturday", time: "10:00 AM – 6:00 PM" },
                                    { day: "Sunday", time: "Closed (Chat Support Only)" },
                                ].map((h) => (
                                    <div key={h.day} className="flex justify-between py-2.5 border-b border-gray-50 last:border-0">
                                        <span className="text-sm text-gray-600 font-medium">{h.day}</span>
                                        <span className="text-sm font-bold text-gray-900">{h.time}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Social */}
                            <div className="p-6 rounded-2xl border border-gray-100 bg-white">
                                <h3 className="font-black text-gray-900 mb-4">Follow Us</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { name: "Instagram", icon: "📸", color: "#e1306c" },
                                        { name: "Twitter / X", icon: "🐦", color: "#1da1f2" },
                                        { name: "YouTube", icon: "▶️", color: "#ff0000" },
                                    ].map((s) => (
                                        <button
                                            key={s.name}
                                            className="p-3 rounded-xl text-center hover:scale-105 transition-transform"
                                            style={{ background: `${s.color}12`, border: `1px solid ${s.color}25` }}
                                        >
                                            <div className="text-xl mb-1">{s.icon}</div>
                                            <p className="text-[10px] font-bold text-gray-600">{s.name}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="py-20 px-4" style={{ background: "linear-gradient(135deg, #0f0c29 0%, #24243e 100%)" }}>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-xs font-black tracking-widest uppercase mb-2" style={{ color: "#a5b4fc" }}>Quick Answers</p>
                        <h2 className="text-4xl font-black text-white">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-3">
                        {faqs.map((f, i) => (
                            <div
                                key={i}
                                className="rounded-2xl overflow-hidden transition-all duration-300"
                                style={{ background: openFaq === i ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.05)", border: openFaq === i ? "1px solid rgba(99,102,241,0.4)" : "1px solid rgba(255,255,255,0.08)" }}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                                >
                                    <span className="font-bold text-white text-sm pr-4">{f.q}</span>
                                    <span className="text-2xl text-white/40 shrink-0 transition-transform duration-300" style={{ transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-5">
                                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{f.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
