import Image from 'next/image'
import React from 'react'
import Button from '../UI/Button';
import { useTheme } from '@/context/ThemeContext';

interface MentorCardProps {
    profilImageUrl: string;
    name: string;
    jobdescription: string;
}

const MentorsCard = ({ profilImageUrl, name, jobdescription }: MentorCardProps) => {

    const { isDark } = useTheme()

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
                <Image
                    src={profilImageUrl}
                    alt={`image of ${name}`}
                    width={250}
                    height={250}
                    className='w-12 h-12 rounded-full object-cover'
                />
                <div>
                    <p className={`font-semibold text-[13px] 1374:text-lg ${isDark ? 'text-white' : 'text-[#4F4F4F]'} `}>{name}</p>
                    <p className='text-[11px] text-[#7D8DA6]'>{jobdescription}</p>
                </div>
            </div>
            <Button text='Message' className='bg-[#6F01D0] text-white rounded-2xl text-sm px-5 hover:cursor-pointer py-2' />
        </div>
    )
}

export default MentorsCard