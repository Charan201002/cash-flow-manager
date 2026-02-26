import Dashboard from "../components/Dashboard.jsx";
import { useUser } from "../hooks/useUser.jsx";
import InfoCard from "../components/InfoCard.jsx";
import { Coins, Wallet, WalletCards } from "lucide-react";
import { addThousandsSeparator } from "../util/util.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axiosConfig from "../util/axiosConfig.jsx";
import { API_ENDPOINTS } from "../util/apiEndpoints.js";
import toast from "react-hot-toast";
import RecentTransactions from "../components/RecentTransactions.jsx";
import FinanceOverview from "../components/FinanceOverview.jsx";
import Transactions from "../components/Transactions.jsx";
import { AppContext } from "../context/AppContext.jsx";

const Home = () => {
    // ✅ Fetch user (same logic as Sidebar)
    useUser();
    const { user } = useContext(AppContext);

    const navigate = useNavigate();
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchDashboardData = async () => {
        if (loading) return;

        setLoading(true);

        try {
            const response = await axiosConfig.get(API_ENDPOINTS.DASHBOARD_DATA);
            if (response.status === 200) {
                setDashboardData(response.data);
            }
        } catch (error) {
            console.error("Something went wrong while fetching dashboard data:", error);
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboardData();
        return () => {};
    }, []);

    return (
        <Dashboard activeMenu="Dashboard">

            {/* HEADER SECTION */}
            <div className="flex items-center justify-between mb-12">
                <div>
                    <h1 className="text-4xl font-semibold text-white">
                        Welcome back, {user?.fullName || "User"} 👋
                    </h1>
                    <p className="text-white/80 mt-2">
                        Here’s your financial summary for this month
                    </p>
                </div>
            </div>

            {/* STAT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <InfoCard
                    icon={<WalletCards />}
                    label="Total Balance"
                    value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
                    color="bg-[#0B2D72]"
                />

                <InfoCard
                    icon={<Wallet />}
                    label="Total Income"
                    value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
                    color="bg-green-700"
                />

                <InfoCard
                    icon={<Coins />}
                    label="Total Expense"
                    value={addThousandsSeparator(dashboardData?.totalExpense || 0)}
                    color="bg-red-700"
                />
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">

                <RecentTransactions
                    transactions={dashboardData?.recentTransactions}
                    onMore={() => navigate("/expense")}
                />

                <FinanceOverview
                    totalBalance={dashboardData?.totalBalance || 0}
                    totalIncome={dashboardData?.totalIncome || 0}
                    totalExpense={dashboardData?.totalExpense || 0}
                />

                <Transactions
                    transactions={dashboardData?.recent5Expenses || []}
                    onMore={() => navigate("/expense")}
                    type="expense"
                    title="Recent Expenses"
                />

                <Transactions
                    transactions={dashboardData?.recent5Incomes || []}
                    onMore={() => navigate("/income")}
                    type="income"
                    title="Recent Incomes"
                />

            </div>

        </Dashboard>
    );
};

export default Home;