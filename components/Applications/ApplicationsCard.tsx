import Image from 'next/image';
import React from 'react'
import Button from '../UI/Button';
import { useTheme } from '@/context/ThemeContext';


interface ApplicationsCardProps {
    profileUrl: string;
    name: string;
    mail: string;
    category: string;
    jobdescription?: string;
    experience?: number;
    location?: string;
    timezone?: string
}

const ApplicationsCard = ({ profileUrl, name, mail, category, jobdescription, experience, location, timezone }: ApplicationsCardProps) => {

    const { isDark } = useTheme()

    return (
        <div className='w-full flex items-center space-x-1 1374:space-x-3 3xl:space-x-5'>
            <input type="checkbox" className='h-4 w-4 hover:cursor-pointer accent-[#6F01D0] transition-all duration-300 ease-in-out' />
            <div className='flex w-full flex-col space-y-4'>
                {/* Personal Information */}
                <div className='flex items-center space-x-2 justify-between'>
                    <div className='space-x-2 flex items-center'>
                        <Image src={profileUrl} alt="Profile Image" width={50} height={50} className='rounded-full w-8 h-8' />
                        <div>
                            <p className={` font-semibold${isDark ? "text-white" : "text-[#4F4F4F]"} `}>{name}</p>
                            <p className='text-[#7D8DA6] text-[11px]'>{mail}</p>
                        </div>
                    </div>
                    <div className='space-x-2 3xl:space-x-4'>
                        <Button text='Reject' className='text-[#D83535] bg-[#FFEDED] border border-[#D09696] rounded-lg px-3 1374:px-4 3xl:px-6 py-2 hover:cursor-pointer text-sm' />
                        <Button text='Accept' className='text-white bg-[#6F01D0] px-3 1374:px-4 3xl:px-6 py-2 rounded-lg hover:cursor-pointer text-sm hover:bg-[#5A01AA]' />
                    </div>
                </div>
                {/* Job Information */}
                {category === 'mentor' && (
                    <div className="flex items-center 1374:justify-between space-x-1 3xl:space-x-0">
                        <p className='px-2 py-0.5 bg-[#F3ECF9] border border-[#DDCEEE] text-[#9985A7] text-[10px] rounded-[5.19px]'>{jobdescription}</p>
                        <p className='px-2 py-0.5 bg-[#E8FDFB] border border-[#A1BDBA] text-[#58948E] text-[10px] rounded-[5.19px]'>{experience}years Experience</p>
                        <p className='px-2 py-0.5 bg-[#E3ECF9] border border-[#ABBEE0] text-[#8196B5] text-[10px] rounded-[5.19px]'>{location}</p>
                        <p className='px-2 py-0.5 bg-[#F4F4F4] border border-[#C8C8C8] text-[#595564] text-[10px] rounded-[5.19px]'>{timezone}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ApplicationsCard