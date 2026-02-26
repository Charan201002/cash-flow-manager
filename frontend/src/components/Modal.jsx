import React from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-xl mx-4">

                <div className="bg-[#0B2D72]
                                rounded-3xl
                                border border-white/20
                                shadow-2xl">

                    {/* Header */}
                    <div className="flex items-center justify-between
                                    px-6 py-5
                                    border-b border-white/10">

                        <h3 className="text-lg sm:text-xl font-semibold text-white">
                            {title}
                        </h3>

                        <button
                            type="button"
                            className="text-white/70 hover:text-white
                                       bg-white/10 hover:bg-white/20
                                       rounded-lg w-9 h-9 flex justify-center items-center
                                       transition duration-200"
                            onClick={onClose}
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="px-6 py-6">
                        {children}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Modal;