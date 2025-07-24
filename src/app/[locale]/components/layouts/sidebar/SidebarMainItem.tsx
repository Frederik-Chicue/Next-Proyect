// SidebarNavItem.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type Props = {
    to: string;
    icon: string;
    label: string;
    end?: boolean;
    isActiveOverride?: boolean;
};

const SidebarNavItem: React.FC<Props> = ({
    to,
    icon,
    label,
    isActiveOverride,
    }) => {
    const pathname = usePathname();

    const isActive = isActiveOverride ?? pathname === to;

    const activeClass = isActive
    ? 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white font-semibold'
    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'

    return (
        <Link
        href={to}
        className={clsx(
            'flex items-center gap-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors',
            activeClass
        )}
        >
        <i className={`bx ${icon} bx-sm`} />
        <span>{label}</span>
        </Link>
    );
};

export default SidebarNavItem;
