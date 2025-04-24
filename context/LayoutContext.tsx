import { createContext, useContext, useState, ReactNode } from 'react';

type LayoutType = 'grid' | 'list';

interface LayoutContextProps {
    layout: LayoutType;
    setLayout: (layout: LayoutType) => void;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
    const [layout, setLayout] = useState<LayoutType>('grid');

    return (
        <LayoutContext.Provider value={{ layout, setLayout }}>
            {children}
        </LayoutContext.Provider>
    );
};

export const useLayout = () => {
    const context = useContext(LayoutContext);
    if (!context) throw new Error('useLayout must be used within LayoutProvider');
    return context;
};