import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { User } from "lucide-react";
import { SIDE_BAR_DATA } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activeMenu }) => {
    const { user } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className="w-64 h-full
                        bg-white/10
                        backdrop-blur-xl
                        border-r border-white/20
                        p-6">

            {/* Profile */}
            <div className="flex flex-col items-center gap-3 mb-10">
                {user?.profileImageUrl ? (
                    <img
                        src={user.profileImageUrl}
                        alt="profile"
                        className="w-20 h-20 rounded-full object-cover border border-white/30"
                    />
                ) : (
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                        <User className="w-8 h-8 text-white" />
                    </div>
                )}

                <h5 className="text-white font-medium">
                    {user?.fullName}
                </h5>
            </div>

            {/* Menu Items */}
            <div className="space-y-2">
                {SIDE_BAR_DATA.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => navigate(item.path)}
                        className={`w-full flex items-center gap-4
                                    py-3 px-4 rounded-xl transition
                                    ${
                                        activeMenu === item.label
                                            ? "bg-[#0B2D72] text-white"
                                            : "text-white/70 hover:bg-white/10 hover:text-white"
                                    }`}
                    >
                        <item.icon className="text-lg" />
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;