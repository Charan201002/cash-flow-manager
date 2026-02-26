import { useState, useRef, useEffect, useContext } from "react";
import { User, LogOut, X, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";
import Sidebar from "./Sidebar.jsx";

const Menubar = ({ activeMenu }) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const { clearUser, user } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        if (showDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showDropdown]);

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/login");
    };

    return (
        <div className="flex items-center justify-between
                        bg-[#0B2D72]
                        sm:bg-[#0B2D72]/90
                        lg:bg-[#0B2D72]/85
                        backdrop-blur-none
                        sm:backdrop-blur-xl
                        border-b border-white/10
                        h-16 px-4 sm:px-6 lg:px-10
                        sticky top-0 z-40 shadow-md">

            {/* LEFT */}
            <div className="flex items-center gap-4">
                <button
                    className="block lg:hidden text-white p-2 rounded hover:bg-white/10 transition"
                    onClick={() => setOpenSideMenu(true)}
                >
                    <Menu className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-2">
                    <img src={assets.logo} alt="logo" className="h-8 w-8" />
                    <span className="text-white font-semibold text-lg hidden sm:block">
                        Cash Flow Manager
                    </span>
                </div>
            </div>

            {/* RIGHT */}
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-10 h-10 rounded-full
                               bg-white/20 hover:bg-white/30
                               transition flex items-center justify-center"
                >
                    {user?.profileImageUrl ? (
                        <img
                            src={user.profileImageUrl}
                            alt="profile"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    ) : (
                        <User className="w-5 h-5 text-white" />
                    )}
                </button>

                {showDropdown && (
                    <div className="absolute right-0 mt-3 w-56
                                    bg-[#0B2D72]/95
                                    backdrop-blur-xl
                                    border border-white/10
                                    rounded-xl shadow-2xl py-2 z-50">

                        <div className="px-4 py-3 border-b border-white/10">
                            <p className="text-sm font-medium text-white">
                                {user?.fullName}
                            </p>
                            <p className="text-xs text-white/60">
                                {user?.email}
                            </p>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full
                                       px-4 py-2 text-sm text-white/80
                                       hover:bg-white/10 transition"
                        >
                            <LogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </div>
                )}
            </div>

            {/* MOBILE DRAWER */}
            {openSideMenu && (
                <div className="fixed inset-0 z-50 lg:hidden">

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/60"
                        onClick={() => setOpenSideMenu(false)}
                    />

                    {/* Drawer */}
                   <div className="absolute left-0 top-0 h-full
                                  w-[80%] max-w-[320px]
                                   bg-[#0B2D72]
                                   sm:bg-[#0B2D72]/95
                                   backdrop-blur-none sm:backdrop-blur-xl
                                   border-r border-white/10
                                   p-0 animate-slideIn shadow-2xl">

                        <button
                            className="mb-6 text-white"
                            onClick={() => setOpenSideMenu(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <Sidebar activeMenu={activeMenu} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menubar;