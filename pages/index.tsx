import SideNavbar from '@/components/SideNavbar';
import Head from 'next/head';
import React from 'react'
import { Chivo } from 'next/font/google';
import Navbar from '@/components/Navbar';
import LayoutToggle from '@/components/LayoutToggle';
import Message from '@/components/UI/Message';
import Programs from '@/components/Programs/Programs';
import GroupCalls from '@/components/Groups/GroupCalls';
import Applications from '@/components/Applications/Applications';
import Mentor from '@/components/Mentors/Mentor';
import Recent from '@/components/RecentActivities/Recent';
import Chart from '@/components/Chart';

const chivo = Chivo({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Techrity | Home
        </title>
      </Head>
      <div className={`w-full flex ${chivo.className} max-w-[1920px]`}>
        <div>
          <SideNavbar />
        </div>
        <div className="flex-1 min-w-0 flex flex-col">
          <Navbar />
          <div className='px-4 3xl:px-10 py-5'>
            <div className="flex flex-col items-center">
              <div className='flex ml-auto items-center space-x-5 pb-5'>
                <LayoutToggle />
                <p className='font-semibold'>Manage Widgets</p>
              </div>
            </div>
            <Message />
            <div className='lg:flex space-x-4 3xl:space-x-6 overflow-hidden'>
              <div className='flex flex-col gap-y-4 3xl:gap-y-6'>
                <Programs />
                <Chart />
              </div>
              <div className='flex-1 min-w-0 flex flex-col gap-y-1 3xl:gap-y-6'>
                <GroupCalls />
                <div className='xl:flex flex-wrap xl:flex-nowrap 3xl:space-y-6 space-x-4 3xl:space-x-6 mt-4 3xl:mt-6'>
                  <Applications />
                  <div className='flex-1 min-w-0 flex flex-col gap-y-6'>
                    <Mentor />
                    <Recent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
