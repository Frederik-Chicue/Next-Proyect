import { useRouter } from "next/navigation";
import { useAuth } from "../../../store/AuthContext";
import { useTranslations } from "next-intl";

const SidebarFooter = () => {
    const { logout } = useAuth();
    const router = useRouter();
    const t = useTranslations("dashboard");

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    return (
        <div className="space-y-3 border-t pt-6 border-gray-200 dark:border-gray-700">
            {/* <button
                onClick={() => navigate("/settings")}
                className="flex items-center gap-x-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 w-full text-left"
            >
                <i className="bx bxs-cog bx-sm bx-spin-hover" />
                <span>{t("settings")}</span>
            </button> */}
            <button
                onClick={handleLogout}
                className="flex items-center gap-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900 text-sm w-full text-left"
            >
                <i className="bx bx-power-off bx-sm bx-burst-hover" />
                <span>{t("logout")}</span>
            </button>
        </div>
    );
};

export default SidebarFooter;
