import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {assets} from "../assets/assets.js";
import Input from "../components/Input.jsx";
import {validateEmail} from "../util/validation.js";
import axiosConfig from "../util/axiosConfig.jsx";
import {API_ENDPOINTS} from "../util/apiEndpoints.js";
import {AppContext} from "../context/AppContext.jsx";
import {LoaderCircle} from "lucide-react";
import Navbar from "../components/Navbar.jsx";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {setUser} = useContext(AppContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        //basic validation
        if (!validateEmail(email)) {
            setError("Please enter valid email address");
            setIsLoading(false);
            return;
        }

        if (!password.trim()) {
            setError("Please enter your password");
            setIsLoading(false);
            return;
        }

        setError("");

        //LOGIN API call
        try {
            const response = await axiosConfig.post(API_ENDPOINTS.LOGIN, {
                email,
                password,
            });
            const {token, user} = response.data;
            if (token) {
                localStorage.setItem("token", token);
                setUser(user);
                navigate("/dashboard");
            }
        }catch(error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                console.error('Something went wrong', error);
                setError(error.message);
            }
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-[#0B2D72] via-[#081f4d] to-black text-white">
            <Navbar />

            <div className="flex-grow relative flex items-center justify-center px-6">

                {/* Background Image */}
                <img
                    src={assets.login_bg}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />

                {/* Glass Card */}
                <div className="relative z-10 w-full max-w-md">

                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 transition-all duration-500 hover:shadow-blue-900/40">

                        <h3 className="text-3xl font-semibold text-center mb-2">
                            Welcome Back 👋
                        </h3>

                        <p className="text-sm text-slate-300 text-center mb-8">
                            Login to manage your finances smarter
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                label="Email Address"
                                placeholder="name@example.com"
                                type="text"
                            />

                            <Input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                label="Password"
                                placeholder="*********"
                                type="password"
                            />

                            {error && (
                                <p className="text-red-400 text-sm text-center bg-red-500/10 border border-red-400/30 p-2 rounded-lg">
                                    {error}
                                </p>
                            )}

                            <button
                                disabled={isLoading}
                                className={`w-full py-3 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2
                                    bg-gradient-to-r from-blue-600 to-[#0B2D72]
                                    hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-900/40
                                    ${isLoading ? 'opacity-60 cursor-not-allowed' : ''}
                                `}
                                type="submit"
                            >
                                {isLoading ? (
                                    <>
                                        <LoaderCircle className="animate-spin w-5 h-5" />
                                        Logging in...
                                    </>
                                ) : (
                                    "Login"
                                )}
                            </button>

                            <p className="text-sm text-slate-300 text-center mt-6">
                                Don’t have an account?{" "}
                                <Link
                                    to="/signup"
                                    className="font-medium text-blue-400 hover:text-white transition-colors"
                                >
                                    Create Account
                                </Link>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;