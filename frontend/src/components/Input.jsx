import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({
    label,
    value,
    onChange,
    placeholder,
    type,
    isSelect,
    options
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="mb-5">
            <label className="text-sm text-white font-medium block mb-2">
                {label}
            </label>

            <div className="relative">
                {isSelect ? (
                    <select
                        className="w-full
                                   bg-white/15
                                   border border-white/30
                                   rounded-xl
                                   py-3 px-4
                                   text-white
                                   focus:outline-none
                                   focus:ring-2
                                   focus:ring-white/40"
                        value={value}
                        onChange={(e) => onChange(e)}
                    >
                        {options.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                                className="text-black"
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        className="w-full
                                   bg-white/15
                                   border border-white/30
                                   rounded-xl
                                   py-3 px-4 pr-10
                                   text-white
                                   placeholder-white/60
                                   focus:outline-none
                                   focus:ring-2
                                   focus:ring-white/40"
                        type={
                            type === "password"
                                ? showPassword
                                    ? "text"
                                    : "password"
                                : type
                        }
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => onChange(e)}
                    />
                )}

                {type === "password" && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white/70">
                        {showPassword ? (
                            <Eye
                                size={20}
                                onClick={toggleShowPassword}
                            />
                        ) : (
                            <EyeOff
                                size={20}
                                onClick={toggleShowPassword}
                            />
                        )}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Input;