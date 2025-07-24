import classNames from 'classnames';
import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarMain';
import SidebarFooter from './SidebarFooter';

type Props = {
    isOpen: boolean;
    toggleSidebar: () => void;
};

const Sidebar: React.FC<Props> = ({ isOpen, toggleSidebar }) => {
    return (
        <>
        <div
            className={classNames(
            'fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity',
            { hidden: !isOpen }
            )}
            onClick={toggleSidebar}
        />

        <aside
            className={classNames(
            'fixed top-0 left-0 h-full w-64 z-50 shadow-md',
            'bg-box-bg text-heading-1',
            'flex flex-col justify-between transform transition-transform duration-300',
            {
                '-translate-x-full': !isOpen,
                'translate-x-0': isOpen,
                'lg:translate-x-0': true,
            }
            )}
        >
            <div className="p-6 space-y-6">
            <SidebarHeader />
            <SidebarNav />
            </div>

            <div className="p-6">
            <SidebarFooter />
            </div>
        </aside>
        </>
    );
};

export default Sidebar;
