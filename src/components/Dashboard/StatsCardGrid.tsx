import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  name: 'Discovery' | 'Qualified' | 'In conversation' | 'Negotiations' | 'Closed won';
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '5 days', color: 'bg-indigo-400' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-400' },
];

const totalFunnelCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

const StatsCardGrid: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2 mb-4">
          <p className="text-5xl font-bold">600</p>
          <p className="text-secondaryText">active leads</p>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-6 flex overflow-hidden">
          {funnelData.map(stage => (
            <div
              key={stage.name}
              className={`${stage.color} h-2`}
              style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }}
            ></div>
          ))}
        </div>

        <div className="space-y-3 text-sm">
          {funnelData.map((stage) => (
            <div key={stage.name} className="grid grid-cols-4 items-center gap-4 text-secondaryText font-medium">
              <div className="flex items-center col-span-2 sm:col-span-1">
                <span className={`w-3 h-3 rounded-full mr-3 ${stage.color}`}></span>
                <span className="text-primaryText">{stage.name}</span>
              </div>
              <div className="text-right sm:text-left text-primaryText font-semibold">{stage.count}</div>
              <div className="hidden sm:block text-primaryText font-semibold">$ {stage.value}</div>
               <div className="text-right sm:text-left">
                {stage.name === 'In conversation' ? (
                   <TooltipProvider>
                     <Tooltip>
                       <TooltipTrigger asChild>
                         <span className="cursor-pointer">{stage.duration}</span>
                       </TooltipTrigger>
                       <TooltipContent>
                         <p>average time on this stage</p>
                       </TooltipContent>
                     </Tooltip>
                   </TooltipProvider>
                ) : (
                  <span>{stage.duration}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCardGrid;
