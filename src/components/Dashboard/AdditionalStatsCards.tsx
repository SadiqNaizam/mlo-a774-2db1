import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Stat {
  value: string;
  label: string;
  hasInfo?: boolean;
  infoText?: string;
}

const statsData: Stat[] = [
  { value: '900', label: 'total leads count' },
  { value: '12', label: 'days in average to convert lead' },
  { value: '30', label: 'inactive leads', hasInfo: true, infoText: 'Leads with no activity in the last 30 days.' },
];

const AdditionalStatsCards: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Other data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          {statsData.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold text-primaryText">{stat.value}</p>
              <div className="flex items-center justify-center sm:justify-start gap-1 mt-1 text-secondaryText">
                <span>{stat.label}</span>
                {stat.hasInfo && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{stat.infoText}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdditionalStatsCards;
