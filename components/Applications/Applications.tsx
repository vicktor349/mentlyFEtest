import React from 'react'
import applicationsdata from '@/data/applications.json'
import ApplicationsCard from './ApplicationsCard'
import HorizontalRule from '../UI/HorizontalRule'
import DashboardCardHeader from '../UI/DashboardCardHeader'

const Applications = () => {


    return (
        <div className='w-full h-full 3xl:w-full xl:max-w-[390px] 1374:max-w-[450px] 3xl:min-w-[600px] flex flex-col items-center justify-center gap-y-6 bg-[var(--color-backgroundProgram)] rounded-lg py-6 px-1 1374:px-3'>
            {/* PROGRAMS HEADER */}
            <DashboardCardHeader title='Applications' />
            <div className='w-full px-3'>
                {/* MENTOR */}
                <p className='text-[#7D8DA6] text-sm pt-8 pb-4'>Mentors</p>
                {applicationsdata.map((application) => (
                    application.category === 'mentor' && (
                        <div key={application.id} className='py-4'>
                            <ApplicationsCard
                                profileUrl={application.profileUrl}
                                name={application.name}
                                mail={application.mail}
                                category={application.category}
                                jobdescription={application.jobdescription}
                                experience={application.experience}
                                location={application.location}
                                timezone={application.timezone}
                            />
                        </div>
                    )
                ))}
                <HorizontalRule />
                {/* STUDENTS */}
                <p className='text-[#7D8DA6] text-sm py-6 w-full'>Students</p>
                {applicationsdata.map((application) => (
                    application.category === 'student' && (
                        <div key={application.id}>
                            <div className='py-7'>
                                <ApplicationsCard
                                    profileUrl={application.profileUrl}
                                    name={application.name}
                                    mail={application.mail}
                                    category={application.category}
                                />
                            </div>
                            <HorizontalRule />
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

export default Applications