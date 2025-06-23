import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Reason {
  percentage: number;
  description: string;
}

const reasonsData: Reason[] = [
  { percentage: 40, description: 'The proposal is unclear' },
  { percentage: 20, description: 'However venture pursuit' },
  { percentage: 10, description: 'Other' },
  { percentage: 30, description: 'The proposal is unclear' },
];

const LeadsLostReasons: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reasons of leads lost</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-6">
          {reasonsData.map((reason, index) => (
            <div key={index}>
              <p className="text-4xl font-bold text-primaryText">{reason.percentage}%</p>
              <p className="text-secondaryText mt-1">{reason.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsLostReasons;
