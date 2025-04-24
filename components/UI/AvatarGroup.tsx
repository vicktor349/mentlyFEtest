
import Image from 'next/image';
import React from 'react';

export interface AvatarProps {
    src: string;
    alt: string;
    size?: number;
}

interface AvatarGroupProps {
    avatars: AvatarProps[];
    maxDisplay?: number;
    size?: number;
    overlap?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 48 }) => {
    return (
        <div
            className="relative rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm"
            style={{ width: size, height: size }}
        >
            <Image
                src={src}
                alt={alt}
                width={1500}
                height={1500}
                className="w-full h-full object-cover"
                loading="eager"
            />
        </div>
    );
};

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
    avatars,
    maxDisplay = 5,
    size = 48,
    overlap = 0.4,
}) => {
    if (!avatars || avatars.length === 0) {
        return null;
    }

    const displayAvatars = avatars.slice(0, maxDisplay);
    const extraAvatars = avatars.length > maxDisplay ? avatars.length - maxDisplay : 0;

    const overlapMargin = overlap * 100;

    const totalWidth = avatars.length === 1
        ? size
        : size + (displayAvatars.length - 1) * (size * (1 - overlap));

    return (
        <div className="flex relative" style={{ width: totalWidth }}>
            {displayAvatars.map((avatar, index) => (
                <div
                    key={index}
                    className="flex-shrink-0 relative"
                    style={{
                        marginLeft: index === 0 ? 0 : `-${overlapMargin}%`,
                        zIndex: displayAvatars.length - index,
                    }}
                >
                    <Avatar
                        src={avatar.src}
                        alt={avatar.alt}
                        size={size}
                    />
                </div>
            ))}

            {extraAvatars > 0 && (
                <div
                    className="flex-shrink-0 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-semibold text-sm border-2 border-white shadow-sm"
                    style={{
                        width: size,
                        height: size,
                        marginLeft: `-${overlapMargin}%`,
                        zIndex: 0
                    }}
                >
                    <span>+{extraAvatars}</span>
                </div>
            )}
        </div>
    );
};