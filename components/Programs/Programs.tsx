import React from 'react'
import ProgramCard from './ProgramCard'
import programdata from '@/data/programs.json'
import DropDown from '../UI/DropDown'
import DashboardCardHeader from '../UI/DashboardCardHeader'


const Programs = () => {

    return (
        <div className='w-full lg:max-w-[420px] 3xl:max-w-[470px] flex flex-col items-center justify-center gap-y-6 bg-[var(--color-backgroundProgram)] rounded-lg py-6 px-4 h-fit'>
            {/* PROGRAMS HEADER */}
            <DashboardCardHeader title='Programs' />
            {/* FILTER SECTION */}
            <div className='flex w-full px-6'>
                <div className='flex items-center ml-auto space-x-2'>
                    <p className='text-[#918C9C] text-[13px]'>Filter</p>
                    <DropDown />
                </div>
            </div>
            {programdata.map((program) => (
                <div key={program.id} >
                    <ProgramCard
                        backgroundImageUrl={program.backgroundImageUrl}
                        title={program.title}
                        category={program.category}
                        text={program.text}
                        categoryClassName={`${program.category === "Bootcamp" ? "bg-[#D4E0F3] text-[#0077FF]" : "bg-[#D4F3D4] text-[#008000]"}`}
                        categoryNotificationClassName={`${program.category === "Bootcamp" ? "bg-[#0077FF]" : "bg-[#008000]"}`}
                    />
                </div>
            ))}
        </div>
    )
}

export default Programs