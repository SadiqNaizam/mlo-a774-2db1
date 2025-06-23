import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader';

interface HeaderProps {
  className?: string;
}

/**
 * Layout Header component.
 * This component acts as a wrapper for the main application header content (`TopHeader`),
 * placing it correctly within the CSS Grid layout defined in `MainAppLayout`.
 */
const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    // The wrapper allows passing grid-specific classes from the main layout.
    <div className={cn('col-start-2 row-start-1', className)}>
      <TopHeader />
    </div>
  );
};

export default Header;
