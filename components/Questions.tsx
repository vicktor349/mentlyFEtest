import Image from 'next/image'
import React from 'react'

const Questions = () => {
    return (
        <div className='flex flex-col space-y-4 p-4 w-full h-fit rounded-lg bg-[#FFFFFF1F] mt-2'>
            <Image src={"/images/user-tag.svg"} alt='Question Tag' width={500} height={500} className='w-5 h-5' />
            <p className='text-[12px] font-semibold text-white'>Got some questions, enquiries or need help?</p>
            <p className='underline text-[#F0C074]  text-[11px]'>Visit Mently Help Desk Here</p>
        </div>
    )
}

export default Questions