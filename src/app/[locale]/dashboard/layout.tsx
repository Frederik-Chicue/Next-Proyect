'use client';

import { useState } from 'react';
import Sidebar from '../components/layouts/sidebar/page';
import Navbar from '../components/layouts/navbar/page';

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col bg-body">
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="mt-16 lg:pl-64">
                <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
                    {children}
                </main>
            </div>
        </div>
        </div>
    );
}
