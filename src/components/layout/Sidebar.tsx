import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

/**
 * Layout Sidebar component.
 * This component wraps the primary navigation (`SidebarNav`) and ensures it is correctly
 * positioned within the application's main grid layout.
 */
const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    // The <aside> element is semantically appropriate for a sidebar.
    // The className is passed down from MainAppLayout to control grid positioning (e.g., row-span).
    <aside className={cn('col-start-1 row-start-1', className)}>
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
