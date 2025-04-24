import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import React from 'react'
import { CiCalendar, CiClock2 } from 'react-icons/ci';
import { AvatarGroup } from '../UI/AvatarGroup';
import Button from '../UI/Button';
import { IoIosArrowRoundForward } from 'react-icons/io';


interface GroupCardsProps {
    backgroundImageUrl: string;
    title: string;
    category: string;
    text: string;
    date: string;
    time: string;
    studygroup: string;
    categoryClassName: string,
    categoryNotificationClassName: string,
    buttonClassName?: string,
}

const GroupCards = ({ backgroundImageUrl, title, category, text, date, time, studygroup, categoryClassName, categoryNotificationClassName, buttonClassName }: GroupCardsProps) => {

    const { isDark } = useTheme()

    const mentors = [
        { src: '/images/avatar/avatar1.png', alt: 'User 1' },
        { src: '/images/avatar/avatar1.png', alt: 'User 2' },
        { src: '/images/avatar/avatar1.png', alt: 'User 3' },
    ];

    return (
        <div className='w-full lg:max-w-[400px] rounded-lg shadow-lg p-6 bg-[var(--color-CardBackground)] h-fit'>
            <Image
                alt={`Image showing ${title}`}
                src={backgroundImageUrl}
                width={465}
                height={200}
                className='w-full h-32 rounded-lg object-cover'
            />
            <div className={`${categoryClassName} w-fit rounded-full px-2 text-[12px] my-2 flex items-center justify-center font-semibold`}>
                <span className={`${categoryNotificationClassName} h-[6px] w-[6px] rounded-full`}></span>
                <p className='pl-1'>{category}</p>
            </div>
            <p className={`${isDark ? "text-white" : "text-[#595564]"} text-md`}>{text}</p>
            <hr className='w-full my-2' color='#D0D5DD' />
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-1'>
                    <CiCalendar size={18} color={isDark ? 'white' : 'black'} />
                    <p className={`${isDark ? "text-white" : "text-[#595564]"} text-sm`}>{date}</p>
                </div>
                {/* Pipe */}
                <p className='w-1 h-4 border-r'></p>
                <div className='flex items-center space-x-2'>
                    <CiClock2 size={18} color={isDark ? 'white' : 'black'} />
                    <p className={`${isDark ? "text-white" : "text-[#595564]"} text-sm`}>{time}</p>
                </div>
            </div>
            <div className='flex items-center justify-between mt-3'>
                <div className='flex items-end space-x-3'>
                    <Image
                        src={"/images/groupcalls/studygroup.png"}
                        alt='Image of study group'
                        width={1500}
                        height={1500}
                        className='w-8 h-8 rounded-full'
                    />
                    <div>
                        <p className='text-[#A195C0] text-[11px]'>Study Group</p>
                        <p className='text-sm'>{studygroup}</p>
                    </div>
                </div>
                <div>
                    <p className='text-[#A195C0] text-[11px]'>Mentors</p>
                    <AvatarGroup avatars={mentors} size={28} overlap={0.2} />
                </div>
            </div>
            {/* Button */}
            <div className='flex items-center justify-between mt-2'>
                <Button text="View Participants" className='text-[#6F01D0] border border-[#6F01D0] cursor-pointer rounded-lg px-3 py-2 hover:bg-[#6F01D033] text-sm' />
                <Button text='Join Now' icon={IoIosArrowRoundForward} className={`text-white px-3 py-2 rounded-lg cursor-pointer flex items-center justify-center text-sm ${buttonClassName}`} />
            </div>
        </div>
    )
}

export default GroupCards