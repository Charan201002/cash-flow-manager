import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { Plus, TrendingUp } from "lucide-react";
import { useMemo } from "react";

const IncomeOverview = ({ transactions, onAddIncome }) => {

    // Format & sort data by date
    const chartData = useMemo(() => {
        const sorted = [...transactions].sort(
            (a, b) => new Date(a.date) - new Date(b.date)
        );

        return sorted.map((item) => ({
            date: new Date(item.date).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short"
            }),
            amount: item.amount
        }));
    }, [transactions]);

    // Calculate totals
    const totalIncome = useMemo(() => {
        return transactions.reduce((sum, item) => sum + item.amount, 0);
    }, [transactions]);

    // Simple growth indicator
    const growth = useMemo(() => {
        if (chartData.length < 2) return 0;
        const first = chartData[0].amount;
        const last = chartData[chartData.length - 1].amount;
        return (((last - first) / first) * 100).toFixed(1);
    }, [chartData]);

    return (
        <div className="bg-[#0B2D72]
                        rounded-3xl
                        border border-white/20
                        shadow-2xl
                        p-5 sm:p-6 lg:p-8">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-white">
                        Income Overview
                    </h2>
                    <p className="text-white/60 text-sm">
                        Track your income performance
                    </p>
                </div>

                <button
                    onClick={onAddIncome}
                    className="flex items-center gap-2
                               bg-white
                               text-[#0B2D72]
                               px-4 py-2
                               rounded-xl
                               text-sm font-semibold
                               hover:scale-[1.05]
                               transition-all duration-300">
                    <Plus size={16} />
                    Add Income
                </button>
            </div>

            {/* Summary Section */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">

                <div>
                    <p className="text-white/60 text-sm">Total Income</p>
                    <h3 className="text-2xl font-bold text-white">
                        ₹{totalIncome.toLocaleString()}
                    </h3>
                </div>

                <div className="flex items-center gap-2 text-green-400">
                    <TrendingUp size={18} />
                    <span className="text-sm font-medium">
                        {growth}% Growth
                    </span>
                </div>

            </div>

            {/* Chart */}
            <div className="h-[260px] sm:h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>

                        <defs>
                            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
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
                            tick={{
                                fill: "rgba(255,255,255,0.6)",
                                fontSize: 12
                            }}
                            tickFormatter={(value) => `₹${value}`}
                        />

                        <Tooltip
                            formatter={(value) => `₹${value.toLocaleString()}`}
                            contentStyle={{
                                backgroundColor: "#0B2D72",
                                border: "1px solid rgba(255,255,255,0.2)",
                                borderRadius: "12px",
                                color: "white"
                            }}
                            labelStyle={{ color: "white" }}
                            cursor={{ stroke: "#22c55e", strokeWidth: 1 }}
                        />

                        <Area
                            type="monotone"
                            dataKey="amount"
                            stroke="#22c55e"
                            strokeWidth={3}
                            fill="url(#incomeGradient)"
                            animationDuration={1000}
                            dot={{
                                r: 4,
                                stroke: "#22c55e",
                                strokeWidth: 2,
                                fill: "#0B2D72"
                            }}
                            activeDot={{ r: 6 }}
                        />

                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default IncomeOverview;