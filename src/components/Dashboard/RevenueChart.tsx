import React, { useState } from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const chartData = [
  { name: 'March', closedWon: 65, closedLost: 68 },
  { name: 'April', closedWon: 25, closedLost: 45 },
  { name: 'May', closedWon: 62, closedLost: 95 },
  { name: 'June', closedWon: 81, closedLost: 5 },
  { name: 'July', closedWon: 88, closedLost: 42 },
  { name: 'August', closedWon: 30, closedLost: 98 },
];

type ActiveTab = 'Leads Converted' | 'Leads came' | 'Total deals size';

const RevenueChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('Leads Converted');

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-border rounded-md shadow-lg">
          <p className="font-bold">{label}</p>
          <p className="text-[#00C851]">{`Closed won: ${payload[0].value}`}</p>
          <p className="text-[#E53E3E]">{`Closed lost: ${payload[1].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader className="flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-primaryText">Leads tracking</h2>
          <div className="flex items-baseline gap-4 mt-1">
            <p className="text-3xl font-bold text-primaryText">680 <span className="text-sm font-normal text-secondaryText">total closed</span></p>
            <p className="text-3xl font-bold text-primaryText">70 <span className="text-sm font-normal text-secondaryText">total lost</span></p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <div className="flex items-center bg-muted p-1 rounded-md">
                <Button size="sm" variant={activeTab === 'Leads came' ? 'secondary' : 'ghost'} onClick={() => setActiveTab('Leads came')} className="h-7">Leads came</Button>
                <Button size="sm" variant={activeTab === 'Leads Converted' ? 'secondary' : 'ghost'} onClick={() => setActiveTab('Leads Converted')} className="h-7">Leads Converted</Button>
                <Button size="sm" variant={activeTab === 'Total deals size' ? 'secondary' : 'ghost'} onClick={() => setActiveTab('Total deals size')} className="h-7">Total deals size</Button>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#009688" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#009688" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F44336" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#F44336" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} dy={10} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend verticalAlign="bottom" align="left" iconType="circle" wrapperStyle={{paddingTop: '20px'}} payload={[
                  { value: 'Closed won', type: 'circle', id: 'ID01', color: '#009688' },
                  { value: 'Closed lost', type: 'circle', id: 'ID02', color: '#F44336' },
              ]} />
              <Area type="monotone" dataKey="closedWon" stroke="#009688" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" dot={{ r: 4, fill: '#009688' }} activeDot={{ r: 6 }} />
              <Area type="monotone" dataKey="closedLost" stroke="#F44336" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" dot={{ r: 4, fill: '#F44336' }} activeDot={{ r: 6 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
