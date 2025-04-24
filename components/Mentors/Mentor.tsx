import React from 'react'
import mentorsdata from '@/data/mentors.json'
import MentorsCard from './MentorsCard'
import HorizontalRule from '../UI/HorizontalRule'
import Button from '../UI/Button'
import DashboardCardHeader from '../UI/DashboardCardHeader'

const Mentor = () => {

    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-y-6 bg-[var(--color-backgroundProgram)] rounded-lg py-6 px-1 3xl:px-3'>
                {/* PROGRAMS HEADER */}
                <DashboardCardHeader title="Mentors" />
                <div className='w-full px-6 flex flex-col gap-y-6'>
                    {mentorsdata.map((mentor) => (
                        <div key={mentor.id} className='space-y-6'>
                            <MentorsCard
                                profilImageUrl={mentor.profileUrl}
                                name={mentor.name}
                                jobdescription={mentor.jobdescription}
                            />
                            <HorizontalRule />
                        </div>
                    ))}
                    <Button text="See all" className='bg-[#DDD6FB] text-[#6F01D0] w-full py-3 rounded-full hover:cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Mentor