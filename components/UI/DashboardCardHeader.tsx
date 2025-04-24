import { useTheme } from '@/context/ThemeContext';
import React from 'react'
import { IoEllipsisVertical } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

interface HeaderProps {
    title: string;
}


const DashboardCardHeader = ({ title }: HeaderProps) => {
    const { isDark } = useTheme()
    return (
        <div className='flex items-center justify-between w-full px-3'>
            <div className='flex items-center space-x-4'>
                <RxHamburgerMenu size={18} color={isDark ? "white" : "black"} className='hover:cursor-pointer' />
                <p className={`font-semibold ${isDark ? "text-white" : "text-[#B0B0B0] "}`}>{title}</p>
            </div>
            <div className='flex items-center space-x-4'>
                <p className='text-[#6F01D0] font-semibold hover:underline hover:cursor-pointer'>See all</p>
                <IoEllipsisVertical size={18} color={isDark ? "white" : "black"} className='hover:cursor-pointer' />
            </div>
        </div>
    )
}

export default DashboardCardHeader;