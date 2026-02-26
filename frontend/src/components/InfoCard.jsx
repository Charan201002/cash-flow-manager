const InfoCard = ({ icon, label, value, color }) => {
    return (
        <div className="flex items-center gap-5
                        p-6 rounded-2xl
                        bg-white/10
                        border border-white/20
                        backdrop-blur-xl
                        transition-all duration-300
                        hover:bg-white/15">

            {/* Icon */}
            <div className={`w-14 h-14 flex items-center justify-center
                            text-xl text-white rounded-xl
                            ${color}`}>
                {icon}
            </div>

            {/* Content */}
            <div>
                <p className="text-sm text-white/70">
                    {label}
                </p>
                <h2 className="text-2xl font-semibold text-white">
                    ₹{value}
                </h2>
            </div>
        </div>
    );
};

export default InfoCard;