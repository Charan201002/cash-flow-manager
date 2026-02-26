import Navbar from "../components/Navbar";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name.trim()) {
            toast.error("Please enter your name");
            return;
        }

        if (!form.email.trim()) {
            toast.error("Please enter your email");
            return;
        }

        if (!form.message.trim()) {
            toast.error("Please enter your message");
            return;
        }

        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            toast.success("Message sent successfully 🚀");
            setForm({ name: "", email: "", message: "" });
            setLoading(false);
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0B2D72] via-[#081f4d] to-black text-white">

            <Navbar />

            {/* HERO */}
            <section className="pt-32 pb-16 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Get in Touch With Us
                </h1>

                <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                    Have questions about Money Manager? We're here to help you.
                </p>
            </section>

            {/* CONTACT SECTION */}
            <section className="px-6 pb-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                {/* FORM */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl">

                    <h2 className="text-2xl font-semibold mb-6">
                        Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:border-blue-500 transition"
                        />

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:border-blue-500 transition"
                        />

                        <textarea
                            rows="4"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:border-blue-500 transition"
                        ></textarea>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 rounded-xl font-semibold transition shadow-lg
                                bg-gradient-to-r from-purple-600 to-blue-600
                                hover:scale-105
                                ${loading ? "opacity-60 cursor-not-allowed" : ""}
                            `}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                    </form>

                </div>

                {/* INFO */}
                <div className="space-y-8">

                    <InfoCard
                        icon={<Mail />}
                        title="Email Support"
                        text="tempoxop@gmail.com"
                    />

                    <InfoCard
                        icon={<Phone />}
                        title="Phone"
                        text="+91 00000 00000"
                    />

                    <InfoCard
                        icon={<MapPin />}
                        title="Location"
                        text="Bengaluru, Karnataka, India"
                    />

                </div>

            </section>

            {/* FOOTER */}
            <footer className="border-t border-white/10 py-8 text-center text-white/60">
                © {new Date().getFullYear()} Cash Flow Manager. All rights reserved.
            </footer>

        </div>
    );
};

const InfoCard = ({ icon, title, text }) => (
    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 flex items-start gap-4 shadow-lg hover:-translate-y-1 transition">
        <div className="text-blue-400">{icon}</div>
        <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-white/70 text-sm mt-1">{text}</p>
        </div>
    </div>
);

export default Contact;