import React from 'react';
import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip as ShadTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const data: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#EF5350' },
  { name: 'Behance', value: 1000, percentage: 40, color: '#FFCA28' },
  { name: 'Instagram', value: 1000, percentage: 10, color: '#26A69A' },
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#66BB6A' },
];

const SalesSourcePieChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="w-full h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-background p-2 border rounded-md shadow-lg">
                          <p className="font-bold">{`${payload[0].name}: ${payload[0].payload.percentage}%`}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {data.map((source) => (
              <div key={source.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span style={{ backgroundColor: source.color }} className="w-3 h-3 rounded-full"></span>
                  <span className="text-primaryText font-medium">{source.name}</span>
                </div>
                <div className="flex items-center gap-4 text-secondaryText font-medium">
                    <span className="text-primaryText font-semibold">${source.value.toLocaleString()}</span>
                    <TooltipProvider>
                        <ShadTooltip>
                            <TooltipTrigger asChild>
                                <span className="w-10 text-right cursor-pointer">{source.percentage}%</span>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>from leads total</p>
                            </TooltipContent>
                        </ShadTooltip>
                    </TooltipProvider>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesSourcePieChart;
