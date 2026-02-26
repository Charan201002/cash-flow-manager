import Navbar from "../components/Navbar";
import { Target, Lightbulb, Rocket, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0B2D72] via-[#081f4d] to-black text-white">

            <Navbar />

            {/* HERO */}
            <section className="pt-32 pb-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold">
                    About Cash Flow Manager
                </h1>

                <p className="text-white/70 mt-6 max-w-3xl mx-auto text-lg">
                    Cash Flow Manager is a modern fintech web application designed
                    to help individuals take full control of their personal finances
                    through smart tracking, clean analytics, and powerful insights.
                </p>
            </section>

            {/* MISSION SECTION */}
            <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                <InfoBlock
                    icon={<Target />}
                    title="Our Mission"
                    text="To empower individuals with clarity, control, and confidence over their financial decisions through intelligent digital tools."
                />

                <InfoBlock
                    icon={<Lightbulb />}
                    title="The Problem We Solve"
                    text="Most people struggle to track where their money goes. Without proper insights, budgeting becomes guesswork. We eliminate that confusion."
                />

            </section>

            {/* WHY WE BUILT THIS */}
            <section className="py-24 px-6 bg-white/5 backdrop-blur-xl border-y border-white/10">
                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-3xl font-bold mb-10">
                        Why We Built Cash Flow Manager
                    </h2>

                    <p className="text-white/70 text-lg leading-relaxed">
                        Managing personal finance should not require spreadsheets or
                        complex tools. Cash Flow Manager was built to combine
                        simplicity with powerful financial analytics — making money
                        management accessible for everyone.
                    </p>

                </div>
            </section>

            {/* FEATURES */}
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-16">
                    Core Capabilities
                </h2>

                <div className="grid md:grid-cols-3 gap-10">

                    <FeatureCard
                        title="Income & Expense Tracking"
                        text="Easily record transactions and categorize spending."
                    />

                    <FeatureCard
                        title="Visual Analytics Dashboard"
                        text="Understand financial patterns using charts and summaries."
                    />

                    <FeatureCard
                        title="Secure Authentication"
                        text="Protected login system ensuring data privacy."
                    />

                </div>
            </section>

            {/* TECH STACK */}
            <section className="py-24 px-6 bg-white/5 border-y border-white/10">
                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-3xl font-bold mb-10">
                        Technology Behind the Platform
                    </h2>

                    <p className="text-white/70 text-lg">
                        Built using React (Vite) for the frontend, Spring Boot for
                        backend services, MySQL database integration, and secure API
                        architecture — ensuring performance, scalability, and security.
                    </p>

                </div>
            </section>

            {/* VISION */}
            <section className="py-24 px-6 max-w-5xl mx-auto text-center">
                <div className="flex justify-center mb-6 text-blue-400">
                    <Rocket size={40} />
                </div>

                <h2 className="text-3xl font-bold mb-6">
                    Our Vision
                </h2>

                <p className="text-white/70 text-lg">
                    To evolve into a complete financial intelligence platform —
                    offering AI-driven insights, budgeting automation, and
                    predictive financial planning.
                </p>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Ready to Take Control of Your Finances?
                </h2>

                <button
                    onClick={() => navigate("/signup")}
                    className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition font-semibold shadow-lg"
                >
                    Get Started Now
                </button>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-white/10 py-8 text-center text-white/60">
                © {new Date().getFullYear()} Cash Flow Manager. All rights reserved.
            </footer>

        </div>
    );
};

const InfoBlock = ({ icon, title, text }) => (
    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition">
        <div className="text-blue-400 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-white/70">{text}</p>
    </div>
);

const FeatureCard = ({ title, text }) => (
    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-white/70">{text}</p>
    </div>
);

export default About;