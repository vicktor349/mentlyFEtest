import React from 'react'

const Message = () => {
    return (
        <div className={`bg-[var(--color-messagebackgroundColor)] h-[51px] rounded-sm flex items-center justify-between px-4 w-full mb-4`}>
            <p className='text-white text-base lg:text-2xl font-semibold'>Welcome Aboard, Blessing 👋</p>
            <p className='text-[#BDBDBD] hidden md:flex text-sm lg:text-base font-semibold'>We&apos;re thrilled to have you join Techrity Team!</p>
            <button className='font-semibold px-3  lg:px-6 py-2 rounded-lg hover:cursor-pointer bg-[var(--color-messageUpdateButtonColor)] hover:bg-[#340260] hover:text-white transition-all duration-300'>
                Update Profile
            </button>
        </div>
    )
}

export default Message