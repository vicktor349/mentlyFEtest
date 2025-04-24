import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'
import React from 'react'

interface RecentCardProps {
    profilImageUrl: string
    title: string
    message: string,
    time: string
}


const RecentCard = ({ profilImageUrl, title, message, time }: RecentCardProps) => {

    const { isDark } = useTheme()

    return (
        <div className='flex items-start gap-x-2'>
            <Image
                src={profilImageUrl}
                alt="Profile Image"
                width={50}
                height={50}
                className='rounded-full w-12 h-12'
            />
            <div>
                <p className={`font-semibold ${isDark ? "text-white" : "text-[#011627]"}`}>{title}</p>
                <p className='text-[#707991] text-[13px]'>{message}</p>
                <p className='text-[#707991] text-[13px]'>{time}</p>
            </div>
        </div>
    )
}

export default RecentCard