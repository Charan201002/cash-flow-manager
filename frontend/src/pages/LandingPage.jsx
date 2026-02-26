import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Wallet, PieChart, BarChart3, ShieldCheck } from "lucide-react";

const LandingPage = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState(0);
    const [transactions, setTransactions] = useState(0);

    // Animated Counter
    useEffect(() => {
        let u = 0;
        let t = 0;
        const interval = setInterval(() => {
            if (u < 5000) u += 100;
            if (t < 120000) t += 2500;
            setUsers(u);
            setTransactions(t);
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#0B2D72] via-[#081f4d] to-black text-white">

            <Navbar />

            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

            {/* HERO */}
            <section className="pt-32 pb-24 px-6 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight">
                    Smarter Financial Decisions Start Here
                </h1>

                <p className="text-white/70 mt-6 text-lg max-w-2xl mx-auto">
                    A powerful personal finance dashboard to track, analyze,
                    and optimize your income and expenses in real-time.
                </p>

                <div className="mt-10 flex justify-center gap-4 flex-wrap">
                    <button
                        onClick={() => navigate("/signup")}
                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition font-semibold shadow-lg"
                    >
                        Get Started Free
                    </button>

                    <button
                        onClick={() => navigate("/login")}
                        className="px-8 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
                    >
                        Login
                    </button>
                </div>

                {/* Live Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
                    <Stat number={users} label="Active Users" />
                    <Stat number={transactions} label="Transactions Logged" />
                    <Stat number="99.9%" label="Uptime" />
                    <Stat number="Secure" label="Encrypted Data" />
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">
                <h2 className="text-3xl font-bold text-center mb-16">
                    Everything You Need To Manage Money
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                    <FeatureCard icon={<Wallet />}
                        title="Income & Expense Tracking"
                        desc="Log every transaction and categorize spending with ease." />

                    <FeatureCard icon={<PieChart />}
                        title="Interactive Analytics"
                        desc="Visual charts give clarity to your financial behavior." />

                    <FeatureCard icon={<BarChart3 />}
                        title="Monthly Reports"
                        desc="Compare trends and monitor financial progress." />

                    <FeatureCard icon={<ShieldCheck />}
                        title="Secure Authentication"
                        desc="Protected login system with encrypted data handling." />

                </div>
            </section>

            {/* DASHBOARD MOCK PREVIEW */}
            <section className="py-24 px-6 bg-white/5 backdrop-blur-xl border-y border-white/10 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Clean & Modern Dashboard</h2>

                    <div className="bg-black/40 border border-white/10 rounded-2xl p-10 shadow-2xl hover:scale-[1.02] transition">
                        <p className="text-white/70">
                            Designed with clarity and performance in mind —
                            responsive layout, smooth UI, and intuitive navigation.
                        </p>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">
                <h2 className="text-3xl font-bold text-center mb-16">
                    Trusted by Professionals
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <Testimonial name="Ravi Kumar"
                        text="Finally a finance app that feels modern and intuitive." />
                    <Testimonial name="Ananya R"
                        text="The dashboard insights helped me reduce overspending." />
                    <Testimonial name="Karthik S"
                        text="Clean UI, powerful features, and secure. Highly recommended." />
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 px-6 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Start Managing Your Money Today
                </h2>

                <p className="text-white/70 mt-4">
                    Join thousands improving their financial discipline.
                </p>

                <button
                    onClick={() => navigate("/signup")}
                    className="mt-8 px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition text-lg font-semibold shadow-lg"
                >
                    Create Free Account
                </button>
            </section>

            {/* FOOTER */}
            <footer className="bg-black/60 border-t border-white/10 py-12 px-6 relative z-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-white/70">

                    <div>
                        <h3 className="text-white font-semibold mb-4">Money Manager</h3>
                        <p>Smart personal finance tracking built for clarity and control.</p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li>Dashboard</li>
                            <li>Analytics</li>
                            <li>Reports</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li onClick={() => navigate("/about")} className="cursor-pointer hover:text-white">About</li>
                            <li onClick={() => navigate("/contact")} className="cursor-pointer hover:text-white">Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <p>Email: tempoxop@gmail.com</p>
                        <p>© {new Date().getFullYear()} Cash Flow Manager</p>
                    </div>

                </div>
            </footer>

        </div>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:-translate-y-2 transition shadow-lg">
        <div className="mb-4 text-blue-400">{icon}</div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-white/70 text-sm">{desc}</p>
    </div>
);

const Testimonial = ({ name, text }) => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg">
        <p className="text-white/70 text-sm">"{text}"</p>
        <p className="mt-4 font-semibold text-white">{name}</p>
    </div>
);

const Stat = ({ number, label }) => (
    <div>
        <h3 className="text-2xl font-bold text-white">{number}</h3>
        <p className="text-white/60 text-sm">{label}</p>
    </div>
);

export default LandingPage;