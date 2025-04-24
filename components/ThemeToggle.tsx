'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`relative w-[29.23px] h-[14.82px] rounded-full transition-colors duration-500 ${isDark ? 'bg-purple-900' : 'bg-gray-300'}`}
        >
            <div
                className={`absolute inset-y-0 my-auto left-[2px] w-[11.69px] h-[11.69px] rounded-full transition-all duration-500 
            ${isDark ? 'translate-x-[13.5px] bg-purple-500' : 'translate-x-0 bg-white'}`}
            />
        </button>

    );
}
