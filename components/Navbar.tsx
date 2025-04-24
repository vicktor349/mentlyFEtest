import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-center items-center py-4 px-4 md:px-10 xl:px-16 bg-[var(--color-navbarBackground)] shadow-lg h-[82px] '>
            <div className='flex items-center space-x-8 ml-auto'>
                <Image src="/images/notifications.svg" alt='Notification Image' width={1500} height={1500} className='w-6 h-6' priority />

                {/* Profile Information */}
                <div className='flex sm:space-x-4 sm:items-center'>
                    <div className='flex items-center justify-center bg-[#8B72FC] w-[44.44px] h-11 rounded-full'>
                        <Image src="/images/navbarimages/profile.svg" alt='User Image' width={1500} height={1500} className='w-8 h-[24.96px]' />
                    </div>
                    <div className='hidden sm:flex sm:flex-col'>
                        <p className='truncate text-[14px] text-[var(--color-navbarText)]'>Techrity Founder</p>
                        <p className='text-[12px] text-[var(--color-navbarProfileText)]'>Member</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar