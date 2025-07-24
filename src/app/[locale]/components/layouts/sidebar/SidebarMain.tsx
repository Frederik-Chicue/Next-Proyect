import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl'; // importante
import SidebarNavItem from './SidebarMainItem';

const SidebarNav = () => {
    const pathname = usePathname();
    const t = useTranslations('dashboard');
    const locale = useLocale();

    const isChampionDetail = /^\/[^/]+\/dashboard\/champions\/[^/]+$/.test(
        pathname
    );

    return (
        <ul className="space-y-2">
        <li>
            <SidebarNavItem
            to={`/${locale}/dashboard`}
            icon="bxs-dashboard"
            label={t('dashboard')}
            isActiveOverride={pathname === `/${locale}/dashboard`}
            />
        </li>
        <li>
            <SidebarNavItem
            to={`/${locale}/dashboard/champions`}
            icon="bx-street-view"
            label={t('champions')}
            isActiveOverride={
                pathname === `/${locale}/dashboard/champions` || isChampionDetail
            }
            />
        </li>
        <li>
            <SidebarNavItem
            to={`/${locale}/sinergias`}
            icon="bxs-brain"
            label={t('synergies')}
            />
        </li>
        <li>
            <SidebarNavItem
            to={`/${locale}/entrenamiento`}
            icon="bx-dumbbell"
            label={t('training')}
            />
        </li>
        </ul>
    );
};

export default SidebarNav;
