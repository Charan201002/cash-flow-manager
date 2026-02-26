import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import CustomTooltip from "./CustomTooltip.jsx";
import CustomLegend from "./CustomLegend.jsx";

const CustomPieChart = ({ data, label, totalAmount, showTextAnchor, colors }) => {

    return (
        <div className="w-full h-[300px] sm:h-[350px] lg:h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
            <PieChart>

                <Pie
                    data={data}
                    dataKey="amount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={135}
                    innerRadius={95}
                    paddingAngle={3}
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth={2}
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={colors[index % colors.length]}
                        />
                    ))}
                </Pie>

                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} />

                {/* Center Text */}
                {showTextAnchor && (
                    <>
                        <text
                            x="50%"
                            y="50%"
                            dy={-15}
                            textAnchor="middle"
                            fill="rgba(255,255,255,0.75)"
                            fontSize="14"
                            fontWeight="500"
                        >
                            {label}
                        </text>

                        <text
                            x="50%"
                            y="50%"
                            dy={15}
                            textAnchor="middle"
                            fill="#ffffff"
                            fontSize="22"
                            fontWeight="700"
                        >
                            {totalAmount}
                        </text>
                    </>
                )}

            </PieChart>
        </ResponsiveContainer>
        </div>
    );
};

export default CustomPieChart;