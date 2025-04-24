import React from 'react'
import DashboardCardHeader from '../UI/DashboardCardHeader'
import recentactivities from '@/data/recentactivities.json'
import RecentCard from './RecentCard'


const Recent = () => {
    return (
        <div className='flex flex-col gap-y-6 bg-[var(--color-backgroundProgram)] rounded-lg py-6'>
            <DashboardCardHeader title='Recent Activities' />
            {recentactivities.map((activity) => (
                <div key={activity.id} className='px-6 3xl:px-12'>
                    <RecentCard
                        key={activity.id}
                        profilImageUrl={activity.profileImage}
                        title={activity.title}
                        message={activity.message}
                        time={activity.time}
                    />
                </div>
            ))}
        </div>
    )
}

export default Recent