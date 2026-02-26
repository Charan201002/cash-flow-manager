import { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", to: "/home" },
        { name: "About us", to: "/about" },
        { name: "Contact us", to: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img src={assets.logo} alt="logo" className="h-10 w-10" />
                        <span className="text-xl font-semibold text-white tracking-wide">
                            Cash Flow Manager
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                to={link.to}
                                key={link.name}
                                className="text-white/70 hover:text-white transition duration-300 font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side Buttons */}
                    <div className="flex items-center space-x-4">

                        <div className="hidden sm:flex items-center space-x-4">
                            <Link
                                to="/login"
                                className="text-white/70 hover:text-white transition duration-300"
                            >
                                Login
                            </Link>

                            <Link
                                to="/signup"
                                className="bg-[#0B2D72] hover:bg-[#123a8f]
                                           text-white px-5 py-2 rounded-xl
                                           font-semibold shadow-lg
                                           transition-all duration-300
                                           hover:scale-105"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-white/80 hover:text-white transition"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden backdrop-blur-xl bg-white/10 border-t border-white/20">
                    <div className="px-6 py-5 flex flex-col space-y-4">

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                className="text-white/70 hover:text-white transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="pt-4 border-t border-white/20 flex flex-col gap-3">
                            <Link
                                to="/login"
                                className="text-white/70 hover:text-white"
                            >
                                Login
                            </Link>

                            <Link
                                to="/signup"
                                className="bg-[#0B2D72] text-white px-4 py-2 rounded-lg text-center"
                            >
                                Get Started
                            </Link>
                        </div>

                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;