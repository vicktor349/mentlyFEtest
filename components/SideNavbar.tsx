'use client';  // ensure this is treated as a client component

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Questions from './Questions';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/context/ThemeContext';
import { RxHamburgerMenu } from 'react-icons/rx';

const SideNavbar = () => {
    const { isDark } = useTheme();
    const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('sidebarCollapsed');
            if (saved !== null) return JSON.parse(saved);
            return window.innerWidth < 1536;
        }
        return false;
    });
    const [isOpened, setIsOpened] = useState<boolean>(false);

    useEffect(() => {
        localStorage.setItem('sidebarCollapsed', JSON.stringify(isCollapsed));
    }, [isCollapsed]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            setIsCollapsed(window.innerWidth < 1536);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleCollapse = () => setIsCollapsed(prev => !prev);
    const toggleMenuOpen = () => setIsOpened(prev => !prev);

    const navLinks = [
        { id: 1, name: 'Dashboard', icon: '/images/dashboard.svg' },
        { id: 2, name: 'Programs', icon: '/images/programs.svg' },
        { id: 3, name: 'Activities', icon: '/images/activicties.svg' },
        { id: 4, name: 'Users', icon: '/images/users.svg' },
        { id: 5, name: 'Forums', icon: '/images/forums.svg' },
        { id: 6, name: 'Finances', icon: '/images/finances.svg' },
        { id: 7, name: 'Rewards', icon: '/images/rewards.svg' },
        { id: 8, name: 'Analytics', icon: '/images/analytics.svg' },
        { id: 9, name: 'Settings', icon: '/images/setting.svg' },
        { id: 10, name: 'Logout', icon: '/images/logout.svg' },
    ];

    return (
        <>
            <div className={`min-h-full bg-[var(--color-sideNavBackground)] transition-all duration-300 ${isCollapsed ? 'w-20' : '2xl:w-60  3xl:w-64 w-20 lg:w-48 xl:w-56 hidden xl:flex xl:flex-col'}`}>
                <div className={`py-5 ${isCollapsed ? 'px-3' : 'px-3 xl:px-4'}`}>
                    {/* Logo & collapse button */}
                    <div className={`flex items-center justify-center xl:justify-between ${isCollapsed ? 'flex-col' : 'flex-row'} transition-all duration-300`}>
                        <Image
                            src="/images/techrity.svg"
                            priority alt="Techrity Logo"
                            width={1500} height={1500}
                            className="w-[116px] h-[27px] hidden sm:flex"
                        />
                        <Image
                            src="/images/menucollapse.svg" alt="Collapse"
                            priority width={1500} height={1500}
                            className="w-[24px] h-[24px] cursor-pointer"
                            onClick={toggleCollapse}
                        />
                    </div>
                    {/* Navigation links */}
                    <div className="flex flex-col mt-4">
                        {navLinks.map(link => (
                            <div
                                key={link.id} className={`flex items-center gap-3 mt-4 cursor-pointer hover:bg-white rounded-md p-4 text-[#C2C2C2] ${link.name === 'Dashboard' ? 'bg-white text-black' : ''} hover:text-black hover:font-semibold duration-200`}>
                                <Image
                                    src={link.icon} alt={link.name}
                                    priority width={1500} height={1500}
                                    className="w-[24px] h-[24px]"
                                />
                                <span className={`text-[var(--color-sideNavText)] text-sm font-medium hidden lg:flex ${isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-300`}>
                                    {link.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Questions */}
                    <div className={`${isCollapsed ? 'hidden' : 'hidden lg:block'}`}>
                        <Questions />
                    </div>

                    {/* Theme toggle */}
                    <div className={`${isCollapsed ? 'flex items-center justify-center mt-10' : 'text-[12px] text-white items-center justify-between mt-4 flex xl:items-center 2xl:mt-10 xl:mt-7 xl:justify-between'}`}>
                        <p className={`${isCollapsed ? 'hidden' : 'hidden lg:block'}`}>
                            {isDark ? 'Switch to Classic Mode' : 'Switch to Dark Mode'}
                        </p>
                        <ThemeToggle />
                    </div>
                </div>
            </div>

            {/* Mobile hamburger */}
            <div className="absolute top-24 flex sm:hidden">
                <div className="h-12 w-10 rounded-r-full sticky flex items-center bg-[var(--color-sideNavBackground)]">
                    <RxHamburgerMenu size={28} color="white" className="pl-1" onClick={toggleMenuOpen} />
                </div>
            </div>
        </>
    );
};

export default SideNavbar;
