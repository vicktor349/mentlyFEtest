// pages/Dashboard.tsx
'use client';

import { useLayout } from '../context/LayoutContext';
import LayoutToggle from '../components/LayoutToggle';
import { motion, AnimatePresence } from 'framer-motion';

const programs = [
    { title: 'Fundamentals of UI & UX', mentor: 'Faith Debola' },
    { title: 'Colour Hack Practical Call', mentor: 'Self' },
];

export default function Dashboard() {
    const { layout } = useLayout();

    return (
        <div>
            <AnimatePresence mode="wait">
                {layout === 'grid' ? (
                    <motion.div
                        key="grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {programs.map((program, i) => (
                            <div key={i} className="p-4 bg-white rounded-xl shadow">
                                <h2 className="font-medium text-lg">{program.title}</h2>
                                <p className="text-sm text-gray-500">Mentor: {program.mentor}</p>
                                <button className="mt-2 px-4 py-1 bg-purple-600 text-white rounded">View Details</button>
                            </div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-4"
                    >
                        {programs.map((program, i) => (
                            <div key={i} className="p-4 bg-white rounded-xl shadow flex justify-between items-center">
                                <div>
                                    <h2 className="font-medium text-lg">{program.title}</h2>
                                    <p className="text-sm text-gray-500">Mentor: {program.mentor}</p>
                                </div>
                                <button className="px-4 py-1 bg-purple-600 text-white rounded">View Details</button>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
