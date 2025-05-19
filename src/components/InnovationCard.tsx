
import React from 'react';

interface InnovationCardProps {
  title: string;
  icon: string;
  points: string[];
}

const InnovationCard: React.FC<InnovationCardProps> = ({ title, icon, points }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-arivan-muted/30 h-full">
      <div className="flex items-center mb-4 space-x-2">
        <span className="text-3xl" aria-hidden="true">{icon}</span>
        <h3 className="text-xl font-bold text-arivan-primary">{title}</h3>
      </div>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-arivan-accent mr-2">•</span>
            <span className="text-gray-600">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InnovationCard;
