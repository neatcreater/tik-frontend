// assets
import { IconDashboard, IconDeviceAnalytics,IconCalendarEvent,IconUsers,IconBrandYoutube } from '@tabler/icons';

// constant
const icons = {
    IconDashboard: IconDashboard,
    IconDeviceAnalytics
};

//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//

export const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons['IconDashboard'],
            breadcrumbs: false
        },
        {
            id: 'scheduledpost',
            title: 'New Post',
            type: 'item',
            url: '/dashboard/newpost',
            icon: icons['IconBrandYoutube'],
            breadcrumbs: false
        },
        {
            id: 'scheduledpost',
            title: 'Scheduled Posts',
            type: 'item',
            url: '/dashboard/scheduledpost',
            icon: icons['IconCalendarEvent'],
            breadcrumbs: false
        },
        {
            id: 'accounts',
            title: 'Current Accounts',
            type: 'item',
            url: '/dashboard/accounts',
            icon: icons['IconUsers'],
            breadcrumbs: false
        }
    ]
};
