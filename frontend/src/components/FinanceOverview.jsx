import CustomPieChart from "./CustomPieChart.jsx";
import { addThousandsSeparator } from "../util/util.js";

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {

    const COLORS = ["#7C3AED", "#DC2626", "#059669"];

    const balanceData = [
        { name: "Balance", amount: totalBalance },
        { name: "Expenses", amount: totalExpense },
        { name: "Income", amount: totalIncome },
    ];

    return (
        <div className="p-8 rounded-2xl
                        bg-white/20
                        border border-white/30
                        backdrop-blur-xl
                        shadow-lg">

            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-white tracking-wide">
                    Financial Overview
                </h3>
                <p className="text-sm text-white/70 mt-1">
                    Income vs Expenses distribution
                </p>
            </div>

            {/* Chart */}
            <div className="flex justify-center items-center">
                <CustomPieChart
                    data={balanceData}
                    label="Total Balance"
                    totalAmount={`₹${addThousandsSeparator(totalBalance)}`}
                    colors={COLORS}
                    showTextAnchor
                />
            </div>

        </div>
    );
};

export default FinanceOverview;