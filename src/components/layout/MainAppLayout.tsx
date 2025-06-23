import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

/**
 * MainAppLayout defines the primary structure for the application using CSS Grid.
 * It follows the HLSB (Header, Left Sidebar) pattern.
 * - A fixed-width sidebar on the left.
 * - A fixed-height header at the top.
 * - A scrollable main content area that fills the remaining space.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div
      className={cn(
        'grid h-screen w-full bg-background',
        // Defines a 2-column grid: sidebar (auto width based on content) and main area (takes remaining space).
        'grid-cols-[auto_1fr]',
        // Defines a 2-row grid: header (auto height based on content) and main content (takes remaining space).
        'grid-rows-[auto_1fr]'
      )
    }>
      {/* Sidebar spans both rows of the grid to take up the full height. */}
      <Sidebar className="row-span-2" />

      {/* Header is placed in the first row of the second column. */}
      <Header />

      {/* Main content area is scrollable and has padding. It occupies the second row of the second column. */}
      <main className="overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
