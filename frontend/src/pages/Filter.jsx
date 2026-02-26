import Dashboard from "../components/Dashboard.jsx";
import {useUser} from "../hooks/useUser.jsx";
import {Search} from "lucide-react";
import {useState} from "react";
import axiosConfig from "../util/axiosConfig.jsx";
import {API_ENDPOINTS} from "../util/apiEndpoints.js";
import toast from "react-hot-toast";
import TransactionInfoCard from "../components/TransactionInfoCard.jsx";
import moment from "moment";

const Filter = () => {
    useUser();
    const [type, setType] = useState("income");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [keyword, setKeyword] = useState("");
    const [sortField, setSortField] = useState("date");
    const [sortOrder, setSortOrder] = useState("asc");
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axiosConfig.post(API_ENDPOINTS.APPLY_FILTERS, {
                type,
                startDate,
                endDate,
                keyword,
                sortField,
                sortOrder
            });
            console.log('transactions: ', response.data);
            setTransactions(response.data);
        }catch (error) {
            console.error('Failed to fetch transactions: ', error);
            toast.error(error.message || "Failed to fetch transactions. Please try again.");
        }finally {
            setLoading(false);
        }

    }

    return (
        <Dashboard activeMenu="Filters">
            <div className="my-6 mx-auto max-w-7xl">

                {/* Title */}
                <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                        Filter Transactions
                    </h2>
                    <p className="text-white/60 text-sm mt-1">
                        Apply filters to view specific income or expense records
                    </p>
                </div>

                {/* Filter Card */}
                <div className="bg-[#0B2D72]
                                rounded-3xl
                                border border-white/20
                                shadow-2xl
                                p-6 mb-6">

                    <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

                        {/* Type */}
                        <div>
                            <label className="block text-sm text-white mb-2">
                                Type
                            </label>
                            <select
                                value={type}
                                onChange={e => setType(e.target.value)}
                                className="w-full bg-white/15 border border-white/30
                                           text-white rounded-xl px-4 py-3
                                           focus:outline-none focus:ring-2
                                           focus:ring-white/40"
                            >
                                <option value="income" className="text-black">Income</option>
                                <option value="expense" className="text-black">Expense</option>
                            </select>
                        </div>

                        {/* Start Date */}
                        <div>
                            <label className="block text-sm text-white mb-2">
                                Start Date
                            </label>
                            <input
                                type="date"
                                value={startDate}
                                onChange={e => setStartDate(e.target.value)}
                                className="w-full bg-white/15 border border-white/30
                                           text-white rounded-xl px-4 py-3
                                           focus:outline-none focus:ring-2
                                           focus:ring-white/40"
                            />
                        </div>

                        {/* End Date */}
                        <div>
                            <label className="block text-sm text-white mb-2">
                                End Date
                            </label>
                            <input
                                type="date"
                                value={endDate}
                                onChange={e => setEndDate(e.target.value)}
                                className="w-full bg-white/15 border border-white/30
                                           text-white rounded-xl px-4 py-3
                                           focus:outline-none focus:ring-2
                                           focus:ring-white/40"
                            />
                        </div>

                        {/* Sort Field */}
                        <div>
                            <label className="block text-sm text-white mb-2">
                                Sort Field
                            </label>
                            <select
                                value={sortField}
                                onChange={e => setSortField(e.target.value)}
                                className="w-full bg-white/15 border border-white/30
                                           text-white rounded-xl px-4 py-3
                                           focus:outline-none focus:ring-2
                                           focus:ring-white/40"
                            >
                                <option value="date" className="text-black">Date</option>
                                <option value="amount" className="text-black">Amount</option>
                                <option value="category" className="text-black">Category</option>
                            </select>
                        </div>

                        {/* Sort Order */}
                        <div>
                            <label className="block text-sm text-white mb-2">
                                Sort Order
                            </label>
                            <select
                                value={sortOrder}
                                onChange={e => setSortOrder(e.target.value)}
                                className="w-full bg-white/15 border border-white/30
                                           text-white rounded-xl px-4 py-3
                                           focus:outline-none focus:ring-2
                                           focus:ring-white/40"
                            >
                                <option value="asc" className="text-black">Ascending</option>
                                <option value="desc" className="text-black">Descending</option>
                            </select>
                        </div>

                        {/* Keyword + Search */}
                        <div className="flex items-end gap-3">
                            <div className="flex-1">
                                <label className="block text-sm text-white mb-2">
                                    Search
                                </label>
                                <input
                                    type="text"
                                    value={keyword}
                                    onChange={e => setKeyword(e.target.value)}
                                    placeholder="Search..."
                                    className="w-full bg-white/15 border border-white/30
                                               text-white placeholder-white/60
                                               rounded-xl px-4 py-3
                                               focus:outline-none focus:ring-2
                                               focus:ring-white/40"
                                />
                            </div>

                            <button
                                onClick={handleSearch}
                                className="h-[50px] w-[50px]
                                           bg-white text-[#0B2D72]
                                           rounded-xl flex items-center justify-center
                                           hover:scale-[1.05]
                                           transition-all duration-300 shadow-lg"
                            >
                                <Search size={20} />
                            </button>
                        </div>

                    </form>
                </div>

                {/* Transactions Card */}
                <div className="bg-[#0B2D72]
                                rounded-3xl
                                border border-white/20
                                shadow-2xl
                                p-6">

                    <h5 className="text-lg font-semibold text-white mb-4">
                        Transactions
                    </h5>

                    {transactions.length === 0 && !loading && (
                        <p className="text-white/60">
                            Select filters and click search
                        </p>
                    )}

                    {loading && (
                        <p className="text-white/60">Loading transactions...</p>
                    )}

                    {transactions.map((transaction) => (
                        <TransactionInfoCard
                            key={transaction.id}
                            title={transaction.name}
                            icon={transaction.icon}
                            date={moment(transaction.date).format('Do MMM YYYY')}
                            amount={transaction.amount}
                            type={type}
                            hideDeleteBtn
                        />
                    ))}
                </div>

            </div>
        </Dashboard>
    );
}

export default Filter;