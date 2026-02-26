import Sidebar from "./Sidebar.jsx";
import Menubar from "./Menubar.jsx";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

const Dashboard = ({ children, activeMenu }) => {
    const { user } = useContext(AppContext);

    if (!user) return null;

    return (
        <div className="flex min-h-screen bg-transparent">

            {/* Desktop Sidebar */}
            <div className="hidden lg:block fixed left-0 top-0 h-screen w-64 z-40">
                <Sidebar activeMenu={activeMenu} />
            </div>

            {/* Main Section */}
            <div className="flex-1 lg:ml-64 flex flex-col">

                <Menubar activeMenu={activeMenu} />

                <main className="p-4 sm:p-6 lg:p-10">
                    {children}
                </main>

            </div>
        </div>
    );
};

export default Dashboard;