import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../store/AuthContext';

type NavbarProps = {
    toggleSidebar: () => void;
};

const Navbar = ({ toggleSidebar }: NavbarProps) => {
    const [isDark, setIsDark] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const { logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    const renderThemeToggle = () => (
        <button
        onClick={() => setIsDark((prev) => !prev)}
        className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[rgb(var(--box-border))]"
        >
        <i
            className={`bx ${isDark ? 'bxs-sun text-yellow-400' : 'bxs-moon text-heading-3'} text-xl`}
        />
        </button>
    );

    const renderUserMenu = () => (
        <div className="relative">
        <button
            onClick={() => setOpenMenu((prev) => !prev)}
            className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-blue-500"
        >
            <img
            src="https://placehold.co/100x100"
            alt="User"
            className="object-cover w-full h-full"
            />
        </button>

        {openMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-box-bg border border-[rgb(var(--box-border))] rounded-md shadow-lg z-50">
            <ul className="py-2 text-sm text-heading-2">
                <li>
                <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900"
                >
                    Cerrar sesión
                </button>
                </li>
            </ul>
            </div>
        )}
        </div>
    );

    return (
        <header className="fixed top-0 left-0 lg:left-64 right-0 z-40 h-auto bg-box-bg shadow px-4 py-2 flex flex-wrap items-center justify-between gap-y-2 transition-all border border-[rgb(var(--box-border))]">
        <div className="flex items-center gap-2 w-full lg:w-auto flex-1">
            <button
            onClick={toggleSidebar}
            className="lg:hidden text-2xl text-heading-1"
            >
            <i className="bx bx-menu" />
            </button>
        </div>

        <div className="flex items-center gap-3 ml-auto">
            {renderThemeToggle()}
            {renderUserMenu()}
        </div>
        </header>
    );
};

export default Navbar;
