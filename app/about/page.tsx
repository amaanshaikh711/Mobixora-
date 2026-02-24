import Link from "next/link";

const stats = [
    { value: "500+", label: "Phone Models", icon: "📱" },
    { value: "12", label: "Premium Brands", icon: "🏆" },
    { value: "2M+", label: "Happy Customers", icon: "😊" },
    { value: "99.2%", label: "Satisfaction Rate", icon: "⭐" },
];

const values = [
    {
        icon: "🔬",
        title: "Authenticity",
        desc: "Every device we sell is 100% genuine, sourced directly from authorized brand distributors with full warranty.",
        color: "#6366f1",
    },
    {
        icon: "⚡",
        title: "Speed",
        desc: "Same-day dispatch on in-stock items. Express delivery to 500+ cities across India within 24 hours.",
        color: "#f59e0b",
    },
    {
        icon: "🛡️",
        title: "Trust",
        desc: "14-day no-questions-asked returns, transparent pricing, and lifetime after-sales support.",
        color: "#10b981",
    },
    {
        icon: "💡",
        title: "Expert Guidance",
        desc: "Our team of tech enthusiasts helps you find the perfect phone for your budget and lifestyle.",
        color: "#a855f7",
    },
];

const team = [
    { name: "Arjun Sharma", role: "Founder & CEO", emoji: "👨‍💼", bg: "from-indigo-500 to-purple-600" },
    { name: "Priya Patel", role: "Head of Technology", emoji: "👩‍💻", bg: "from-pink-500 to-rose-600" },
    { name: "Rohan Mehta", role: "Chief Buying Officer", emoji: "👨‍🔧", bg: "from-amber-500 to-orange-600" },
    { name: "Sneha Kapoor", role: "Customer Experience", emoji: "👩‍🎨", bg: "from-teal-500 to-emerald-600" },
];

const milestones = [
    { year: "2019", event: "Mobixora founded in Bangalore with a vision to democratize premium smartphones." },
    { year: "2020", event: "Expanded to 10 cities. Launched no-cost EMI across 15 banks." },
    { year: "2021", event: "Crossed 5 lakh orders. Introduced same-day delivery in metro cities." },
    { year: "2022", event: "Onboarded all 12 major brands. Launched our mobile app." },
    { year: "2023", event: "Crossed ₹500 crore GMV. Opened first experience centre in Bangalore." },
    { year: "2025", event: "2 million customers strong. Expanded to 500+ cities across India." },
];

export default function AboutPage() {
    return (
        <main>
            {/* ── Hero ── */}
            <section
                className="relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)" }}
            >
                {/* Decorative blobs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)", filter: "blur(60px)" }} />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)", filter: "blur(60px)" }} />

                <div className="relative max-w-7xl mx-auto px-4 py-28 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6" style={{ background: "rgba(99,102,241,0.2)", color: "#a5b4fc", border: "1px solid rgba(99,102,241,0.3)" }}>
                        🇮🇳 India's Premier Mobile Marketplace
                    </span>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
                        We Are{" "}
                        <span style={{ background: "linear-gradient(90deg, #a855f7, #6366f1, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            Mobixora
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-white/60 font-medium leading-relaxed mb-10">
                        Born from a passion for technology, we've built India's most trusted destination for premium smartphones — bringing the world's best phones to your doorstep.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/products" className="px-8 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:scale-105" style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}>
                            Shop Now →
                        </Link>
                        <Link href="/contact" className="px-8 py-3.5 rounded-xl font-bold text-sm border text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Stats ── */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ background: "linear-gradient(135deg, #fafafa 0%, #f0f4ff 100%)" }}>
                                <div className="text-4xl mb-3">{s.icon}</div>
                                <div className="text-4xl font-black text-gray-900 mb-1">{s.value}</div>
                                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Story ── */}
            <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)" }}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-xs font-black tracking-widest uppercase text-indigo-500 mb-3">Our Story</p>
                            <h2 className="text-4xl font-black text-gray-900 leading-tight mb-6">
                                Started with a Simple Mission — Make Premium Accessible
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-5">
                                In 2019, our founder Arjun walked into a mobile store and couldn't find a single salesperson who genuinely understood the technology they were selling. He left without buying a phone — and started Mobixora.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Today, we're India's fastest-growing mobile marketplace, trusted by over 2 million customers across 500+ cities. We obsess over every detail — from hand-testing each batch of devices to offering real-time delivery tracking.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}>
                                    👨‍💼
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Arjun Sharma</p>
                                    <p className="text-sm text-gray-500">Founder & CEO, Mobixora</p>
                                </div>
                            </div>
                        </div>
                        {/* Timeline */}
                        <div className="space-y-4">
                            {milestones.map((m, i) => (
                                <div key={m.year} className="flex gap-5 items-start group">
                                    <div className="flex flex-col items-center shrink-0">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-black text-white shrink-0" style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}>
                                            {m.year}
                                        </div>
                                        {i < milestones.length - 1 && <div className="w-0.5 h-8 bg-gradient-to-b from-indigo-200 to-transparent mt-1" />}
                                    </div>
                                    <div className="pt-2.5">
                                        <p className="text-sm text-gray-700 leading-relaxed">{m.event}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Values ── */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-xs font-black tracking-widest uppercase text-indigo-500 mb-2">What We Stand For</p>
                        <h2 className="text-4xl font-black text-gray-900">Our Core Values</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v) => (
                            <div key={v.title} className="p-8 rounded-2xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform" style={{ background: `${v.color}18` }}>
                                    {v.icon}
                                </div>
                                <h3 className="text-lg font-black text-gray-900 mb-3">{v.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                                <div className="mt-4 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-16" style={{ background: v.color }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Team ── */}
            <section className="py-20 px-4" style={{ background: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)" }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-xs font-black tracking-widest uppercase mb-2" style={{ color: "#a5b4fc" }}>The Humans Behind It</p>
                        <h2 className="text-4xl font-black text-white">Meet Our Team</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((t) => (
                            <div key={t.name} className="text-center p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                                <div className={`w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-4xl bg-gradient-to-br ${t.bg}`}>
                                    {t.emoji}
                                </div>
                                <h3 className="font-black text-white text-lg">{t.name}</h3>
                                <p className="text-sm mt-1 font-medium" style={{ color: "#a5b4fc" }}>{t.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20 px-4 bg-white text-center">
                <div className="max-w-2xl mx-auto">
                    <div className="text-5xl mb-4">📱</div>
                    <h2 className="text-3xl font-black text-gray-900 mb-4">Ready to Find Your Perfect Phone?</h2>
                    <p className="text-gray-500 mb-8">Browse 500+ models from 12 top brands. Free delivery. No-cost EMI. 14-day returns.</p>
                    <Link href="/products" className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-white text-sm hover:scale-105 transition-transform" style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}>
                        Shop All Phones →
                    </Link>
                </div>
            </section>
        </main>
    );
}
