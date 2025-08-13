import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';

// components
// import Dot from './components/Dot';

// Define TS types for sidebar entries
type SidebarClickHandler = (...args: any[]) => void;

interface SidebarBase {
  id?: number;
  label?: string;
  type?: 'divider' | 'title' | 'nested' | 'margin';
  badge?: string;
  badgeColor?: 'success' | 'secondary' | string;
  link?: string;
  icon?: unknown;
  ext?: boolean;
  click?: SidebarClickHandler;
  children?: SidebarItem[];
}

type SidebarItem = SidebarBase;

// If you want more strict types, you can narrow (optional).

const structure: SidebarItem[] = [
  { id: 100, label: 'Profile', link: '/app/profile' },
  { id: 0, label: 'Dashboard', link: '/app/dashboard' },
  {
    id: 1,
    label: 'E-commerce',
    badge: 'NodeJS',
    badgeColor: 'success',
    link: '/app/ecommerce',
    icon: ShoppingCartIcon,
    children: [
      {
        label: 'Product Manage',
        link: '/app/ecommerce/management',
      },
      {
        label: 'Products Grid',
        link: '/app/ecommerce/gridproducts',
      },
      {
        label: 'Product Page',
        link: '/app/ecommerce/product',
      },
    ],
  },
  {
    id: 2,
    label: 'User',
    link: '/app/user',
    badge: 'New',
    badgeColor: 'secondary',
    children: [
      {
        label: 'User List',
        link: '/app/users',
      },
      {
        label: 'User Add',
        link: '/app/user/new',
      },
      {
        label: 'User Edit',
        link: '/app/user/edit',
      },
    ],
  },
];

export default structure;
