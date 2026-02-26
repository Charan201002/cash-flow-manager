import { useEffect, useState } from "react";
import Input from "./Input.jsx";
import EmojiPickerPopup from "./EmojiPickerPopup.jsx";
import { LoaderCircle } from "lucide-react";

const AddCategoryForm = ({ onAddCategory, initialCategoryData, isEditing }) => {
    const [category, setCategory] = useState({
        name: "",
        type: "income",
        icon: ""
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isEditing && initialCategoryData) {
            setCategory(initialCategoryData);
        } else {
            setCategory({ name: "", type: "income", icon: "" });
        }
    }, [isEditing, initialCategoryData]);

    const categoryTypeOptions = [
        { value: "income", label: "Income" },
        { value: "expense", label: "Expense" },
    ];

    const handleChange = (key, value) => {
        setCategory({ ...category, [key]: value });
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            await onAddCategory(category);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#0B2D72]
                        rounded-3xl
                        border border-white/20
                        shadow-2xl
                        p-6 sm:p-8">

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                {isEditing ? "Update Category" : "Add New Category"}
            </h2>

            {/* Emoji Picker */}
            <div className="mb-6">
                <EmojiPickerPopup
                    icon={category.icon}
                    onSelect={(selectedIcon) =>
                        handleChange("icon", selectedIcon)
                    }
                />
            </div>

            {/* Inputs */}
            <div className="space-y-6">

                <Input
                    value={category.name}
                    onChange={({ target }) =>
                        handleChange("name", target.value)
                    }
                    label="Category Name"
                    placeholder="e.g., Freelance, Salary, Groceries"
                    type="text"
                />

                <Input
                    label="Category Type"
                    value={category.type}
                    onChange={({ target }) =>
                        handleChange("type", target.value)
                    }
                    isSelect={true}
                    options={categoryTypeOptions}
                />

            </div>

            {/* Button */}
            <div className="flex justify-end mt-8">
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="px-6 py-2.5
                               bg-white
                               text-[#0B2D72]
                               font-semibold
                               rounded-xl
                               shadow-lg
                               hover:scale-[1.05]
                               transition-all duration-300
                               disabled:opacity-60">

                    {loading ? (
                        <div className="flex items-center gap-2">
                            <LoaderCircle className="w-4 h-4 animate-spin" />
                            {isEditing ? "Updating..." : "Adding..."}
                        </div>
                    ) : (
                        isEditing ? "Update Category" : "Add Category"
                    )}
                </button>
            </div>

        </div>
    );
};

export default AddCategoryForm;