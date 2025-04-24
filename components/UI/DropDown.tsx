import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";

export default function DropDown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Active");
    const options = ["Active", "Inactive", "Pending"];

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1 text-sm bg-gray-100 hover:cursor-pointer text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none"
            >
                {selected}
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <BiChevronDown size={16} />
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-[999] mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg"
                    >
                        {options.map((option) => (
                            <li
                                key={option}
                                onClick={() => {
                                    setSelected(option);
                                    setIsOpen(false);
                                }}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700] text-black"
                            >
                                {option}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
