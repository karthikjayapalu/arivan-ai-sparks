
import React from 'react';

interface DeliveryMethodProps {
  title: string;
  description: string;
}

const DeliveryMethod: React.FC<DeliveryMethodProps> = ({ title, description }) => {
  return (
    <div className="flex items-start space-x-2 mb-4">
      <div className="flex-shrink-0 mt-1">
        <div className="h-5 w-5 rounded-full bg-arivan-accent flex items-center justify-center text-white text-xs">✓</div>
      </div>
      <div>
        <h4 className="font-bold text-arivan-primary">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default DeliveryMethod;
