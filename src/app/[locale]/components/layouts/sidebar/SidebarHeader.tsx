import logo from "@/../public/images/Logo.png";
import Image from "next/image";

const SidebarHeader = () => {
    return (
        <div className="flex items-center gap-x-3 mb-6 select-none cursor-default">
        <Image src={logo} alt="Logo" className="h-10 w-10 object-contain" />
        <span className="text-xl font-bold">LastHit Legends</span>
        </div>
    );
};

export default SidebarHeader;
