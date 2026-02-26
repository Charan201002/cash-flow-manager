import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-white">
                    💰 Cash Flow Manager
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8 text-white/80 font-medium">
                    <Link to="/about" className="hover:text-white transition">About</Link>
                    <Link to="/contact" className="hover:text-white transition">Contact</Link>
                    <Link to="/login" className="hover:text-white transition">Login</Link>
                    <Link
                        to="/signup"
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition text-white"
                    >
                        Sign Up
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;