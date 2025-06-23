import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  FileText,
  Receipt,
  ShoppingCart,
  Mail,
  Archive,
  Calendar,
  HelpCircle,
  Settings,
  Box
} from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
}

const mainNavItems: NavItem[] = [
  { href: '#', label: 'Dashboard', icon: LayoutGrid, active: true },
  { href: '#', label: 'Leads', icon: Users },
  { href: '#', label: 'Customers', icon: Users },
  { href: '#', label: 'Proposals', icon: FileText },
  { href: '#', label: 'Invoices', icon: Receipt },
  { href: '#', label: 'Items', icon: ShoppingCart },
  { href: '#', label: 'Mail', icon: Mail },
  { href: '#', label: 'Shoebox', icon: Archive },
  { href: '#', label: 'Calendar', icon: Calendar },
];

const helpNavItems: NavItem[] = [
  { href: '#', label: 'Help', icon: HelpCircle },
  { href: '#', label: 'Settings', icon: Settings },
];

const NavLink: React.FC<NavItem> = ({ href, label, icon: Icon, active = false }) => (
  <a
    href={href}
    className={cn(
      'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
      active
        ? 'bg-primary/10 text-primary'
        : 'text-secondaryText hover:bg-muted/50 hover:text-primaryText'
    )}
  >
    <Icon className="mr-3 h-5 w-5" />
    <span>{label}</span>
  </a>
);

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-64 bg-background border-r flex flex-col h-screen">
      <div className="h-16 flex items-center px-6 border-b">
        <Box className="h-8 w-8 text-primary" />
        <span className="ml-2 text-xl font-bold">bo</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4 space-y-2">
          {mainNavItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </nav>
      </div>
      <div className="p-4 mt-auto border-t">
        <div className="space-y-2">
          {helpNavItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidebarNav;
