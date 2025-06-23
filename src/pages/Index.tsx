import React from 'react';

import MainAppLayout from '../components/layout/MainAppLayout';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import RevenueChart from '../components/Dashboard/RevenueChart';
import SalesSourcePieChart from '../components/Dashboard/SalesSourcePieChart';
import LeadsLostReasons from '../components/Dashboard/LeadsLostReasons';
import AdditionalStatsCards from '../components/Dashboard/AdditionalStatsCards';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * Dashboard Overview Page
 * 
 * This page serves as the main entry point for the dashboard, aggregating various data visualization components.
 * It utilizes the `MainAppLayout` for the overall structure (Sidebar and Header) and arranges 
 * specific dashboard widgets within the main content area.
 */
const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col gap-6">
        {/* Tab navigation for different views like Sales or Leads */}
        <Tabs defaultValue="leads" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-[200px] bg-muted p-1 h-auto">
            <TabsTrigger value="sales" className="data-[state=active]:bg-card data-[state=active]:text-primaryText data-[state=active]:shadow-sm">
              Sales
            </TabsTrigger>
            <TabsTrigger value="leads" className="data-[state=active]:bg-card data-[state=active]:text-primaryText data-[state=active]:shadow-sm">
              Leads
            </TabsTrigger>
          </TabsList>

          {/* Content for the 'Sales' tab */}
          <TabsContent value="sales">
            <div className="flex items-center justify-center h-96 border-dashed border-2 rounded-lg">
              <p className="text-muted-foreground">Sales data and components would be displayed here.</p>
            </div>
          </TabsContent>

          {/* Content for the 'Leads' tab, which is the main dashboard view */}
          <TabsContent value="leads" className="mt-4">
            <div className="flex flex-col gap-6">
              {/* Top Row: Funnel Count and Sources */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2">
                  <StatsCardGrid />
                </div>
                <div className="lg:col-span-1">
                  <SalesSourcePieChart />
                </div>
              </div>

              {/* Middle Row: Leads Tracking Chart */}
              <RevenueChart />

              {/* Bottom Row: Lost Reasons and Other Data */}
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 items-start">
                <div className="xl:col-span-2">
                  <LeadsLostReasons />
                </div>
                <div className="xl:col-span-3">
                  <AdditionalStatsCards />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainAppLayout>
  );
};

export default DashboardPage;
