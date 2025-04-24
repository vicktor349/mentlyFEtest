'use client';

import { CiBoxList, CiGrid41 } from 'react-icons/ci';
import { useLayout } from '../context/LayoutContext';

export default function LayoutToggle() {
    const { layout, setLayout } = useLayout();

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={() => setLayout('list')}
                className={`w-[30px] h-[30px] flex items-center justify-center rounded-sm transition-colors duration-300 hover:cursor-pointer ${layout === 'list' ? 'bg-[#6F01D01C] border-[#6F01D0] border text-[#6F01D0]' : ''
                    }`}
            >
                <CiBoxList size={18} />
            </button>
            <button
                onClick={() => setLayout('grid')}
                className={`w-[30px] h-[30px] flex items-center justify-center rounded-sm transition-colors duration-300 hover:cursor-pointer ${layout === 'grid' ? 'bg-[#6F01D01C] border-[#6F01D0] border text-[#6F01D0]' : ''
                    }`}
            >
                <CiGrid41 size={18} />
            </button>
        </div>
    );
}
