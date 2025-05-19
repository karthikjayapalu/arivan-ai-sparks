
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string[];
  caseStudy?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  details = [], 
  caseStudy 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="service-card">
      <div className="flex justify-between items-start">
        <div>
          <div className="service-icon">{icon}</div>
          <h3 className="text-xl font-bold mb-2 text-arivan-primary">{title}</h3>
        </div>
        {(details.length > 0 || caseStudy) && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-arivan-accent hover:text-arivan-primary transition-colors p-1"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        )}
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      {isExpanded && (
        <div className="pt-3 border-t border-arivan-muted/30 animate-fade-in">
          {details.length > 0 && (
            <ul className="mb-4 space-y-2">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-arivan-accent mr-2 text-lg">•</span>
                  <span className="text-gray-600">{detail}</span>
                </li>
              ))}
            </ul>
          )}
          
          {caseStudy && (
            <div className="bg-arivan-light p-3 rounded-md">
              <p className="text-sm font-medium text-arivan-primary">📌 Case Study:</p>
              <p className="text-sm text-gray-600">{caseStudy}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
