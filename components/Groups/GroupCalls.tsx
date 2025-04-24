import React from 'react'
import groupsdata from '@/data/groups.json'
import GroupCards from './GroupCards'
import DashboardCardHeader from '../UI/DashboardCardHeader'

const GroupCalls = () => {

    return (

        <div className='w-full flex flex-col h-fit gap-y-6 bg-[var(--color-backgroundProgram)] rounded-lg py-6'>
            {/* PROGRAMS HEADER */}
            <DashboardCardHeader title='Group Calls' />
            <div className='xl:flex gap-x-6 px-6'>
                {groupsdata.map((group) => (
                    <div key={group.id}>
                        <GroupCards
                            backgroundImageUrl={group.backgroundImageUrl}
                            title={group.title}
                            category={group.category}
                            text={group.text}
                            date={group.date}
                            time={group.time}
                            studygroup={group.studygroup}
                            categoryClassName={`${group.category === "Ongoing" ? "bg-[#2AC10033] text-[#1F8B01]" : "bg-[#E0DDFF] text-[#1C0AE1]"}`}
                            categoryNotificationClassName={`${group.category === "Ongoing" ? "bg-[#1F8B01]" : "bg-[#1C0AE1]"}`}
                            buttonClassName={`${group.category === "Ongoing" ? "bg-[#6F01D0] hover:bg-[#5A01AA] text-white" : "bg-[#6F01D04D] text-white"}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GroupCalls