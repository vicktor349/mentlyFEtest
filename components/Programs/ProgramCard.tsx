import { AvatarGroup } from '../UI/AvatarGroup';
import Button from '../UI/Button';

interface ProgramCardProps {
    backgroundImageUrl: string;
    title: string;
    category: string;
    text: string;
    categoryClassName: string,
    categoryNotificationClassName: string,

}

const mentors = [
    { src: '/images/avatar/avatar1.png', alt: 'User 1' },
    { src: '/images/avatar/avatar1.png', alt: 'User 2' },
    { src: '/images/avatar/avatar1.png', alt: 'User 3' },
];

const ProgramCard = ({ backgroundImageUrl, title, category, text, categoryClassName, categoryNotificationClassName }: ProgramCardProps) => {
    return (
        <div className='w-full 3xl:max-w-[470px] rounded-lg shadow-lg p-6 bg-[var(--color-CardBackground)] '>
            {/* Image Div */}
            <div className="relative w-full rounded-lg h-40 overflow-hidden">
                <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover h-full"
                    style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
                    <div className="absolute bg-black opacity-100"></div>
                </div>
                <div className="relative flex flex-col p-4 z-10 text-white">
                    <p className="font-bold text-2xl w-[280px]">{title}</p>
                    <div className={`${categoryClassName} w-fit rounded-full px-2 text-[12px] mt-5 flex items-center justify-center font-semibold`}>
                        <span className={`${categoryNotificationClassName} h-[6px] w-[6px] rounded-full`}></span>
                        <p className='pl-1'>{category}</p>
                    </div>
                </div>
            </div>
            <div className='w-full text-[15px] py-4'>
                {text}
            </div>
            <div className='flex items-center justify-between'>
                <AvatarGroup avatars={mentors} size={28} overlap={0.2} />
                <div className='flex items-center space-x-5'>
                    <Button text='View Details' className='border border-[#6F01D0] text-[#6F01D0] rounded-sm px-[15.77px] py-[5.26px] hover:cursor-pointer text-sm hover:bg-[#6F01D033]' />
                    <Button text='Analysis' className="bg-[#6F01D0] text-white rounded-sm px-[24px] py-[7px] hover:cursor-pointer hover:bg-[#5A01AA] text-sm" />
                </div>
            </div>
        </div>
    )
}

export default ProgramCard;