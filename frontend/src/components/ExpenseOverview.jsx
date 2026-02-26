import { useEffect, useMemo, useState } from "react";
import { Plus, TrendingDown } from "lucide-react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const ExpenseOverview = ({ transactions = [], onExpenseIncome }) => {

    const [chartData, setChartData] = useState([]);

    // Prepare chart data safely
    useEffect(() => {
        if (!transactions || transactions.length === 0) {
            setChartData([]);
            return;
        }

        const sorted = [...transactions].sort(
            (a, b) => new Date(a.date) - new Date(b.date)
        );

        const formatted = sorted.map((item) => ({
            date: new Date(item.date).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short"
            }),
            amount: Number(item.amount)
        }));

        setChartData(formatted);

    }, [transactions]);

    // Total Expense
    const totalExpense = useMemo(() => {
        return transactions.reduce(
            (sum, item) => sum + Number(item.amount || 0),
            0
        );
    }, [transactions]);

    // Growth calculation
    const growth = useMemo(() => {
        if (chartData.length < 2) return 0;

        const first = chartData[0]?.amount || 0;
        const last = chartData[chartData.length - 1]?.amount || 0;

        if (first === 0) return 0;

        return (((last - first) / first) * 100).toFixed(1);
    }, [chartData]);

    return (
        <div className="bg-[#0B2D72]
                        rounded-3xl
                        border border-white/20
                        shadow-2xl
                        p-5 sm:p-6 lg:p-8">

            {/* Header */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-white">
                        Expense Overview
                    </h2>
                    <p className="text-white/60 text-sm">
                        Track your spending trends over time
                    </p>
                </div>

                <button
                    onClick={onExpenseIncome}
                    className="flex items-center gap-2
                               bg-white
                               text-[#0B2D72]
                               px-4 py-2
                               rounded-xl
                               text-sm font-semibold
                               hover:scale-[1.05]
                               transition-all duration-300">
                    <Plus size={16} />
                    Add Expense
                </button>
            </div>

            {/* Summary */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div>
                    <p className="text-white/60 text-sm">Total Expenses</p>
                    <h3 className="text-2xl font-bold text-white">
                        ₹{totalExpense.toLocaleString()}
                    </h3>
                </div>

                <div className="flex items-center gap-2 text-red-400">
                    <TrendingDown size={18} />
                    <span className="text-sm font-medium">
                        {growth}% Change
                    </span>
                </div>
            </div>

            {/* Chart */}
            <div className="h-[260px] sm:h-[320px]">
                {chartData.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-white/60">
                        No expense data available
                    </div>
                ) : (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>

                            <defs>
                                <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                                </linearGradient>
                            </defs>

                            <CartesianGrid
                                strokeDasharray="4 4"
                                stroke="rgba(255,255,255,0.08)"
                            />

                            <XAxis
                                dataKey="date"
                                stroke="rgba(255,255,255,0.6)"
                                tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
                            />

                            <YAxis
                                stroke="rgba(255,255,255,0.6)"
                                tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
                                tickFormatter={(value) => `₹${value}`}
                            />

                            <Tooltip
                                formatter={(value) => `₹${Number(value).toLocaleString()}`}
                                contentStyle={{
                                    backgroundColor: "#0B2D72",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    borderRadius: "12px",
                                    color: "white"
                                }}
                                labelStyle={{ color: "white" }}
                                cursor={{ stroke: "#ef4444", strokeWidth: 1 }}
                            />

                            <Area
                                type="monotone"
                                dataKey="amount"
                                stroke="#ef4444"
                                strokeWidth={3}
                                fill="url(#expenseGradient)"
                                animationDuration={1000}
                                dot={{
                                    r: 4,
                                    stroke: "#ef4444",
                                    strokeWidth: 2,
                                    fill: "#0B2D72"
                                }}
                                activeDot={{ r: 6 }}
                            />

                        </AreaChart>
                    </ResponsiveContainer>
                )}
            </div>

        </div>
    );
};

export default ExpenseOverview;