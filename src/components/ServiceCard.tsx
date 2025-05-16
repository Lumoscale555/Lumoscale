import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ServiceType } from './ServiceData';
import { getIconComponent } from './ServiceIcons';

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = getIconComponent(service.iconName);
  
  return (
    <div 
      className="premium-glass-card group cursor-pointer transform transition-all duration-500 relative"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Card glow effect on hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-300/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 rounded-2xl"></div>
      
      {/* Card border with gradient */}
      <div className="absolute inset-0 -z-10 rounded-2xl p-[1px] bg-gradient-to-br from-teal-200/10 via-teal-300/5 to-transparent backdrop-blur-sm"></div>
      
      <div className="relative p-8 rounded-2xl backdrop-blur-sm z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-teal-800/50 rounded-xl text-teal-300 flex items-center justify-center backdrop-blur-sm border border-teal-300/10 shadow-inner shadow-teal-300/5">
              <IconComponent className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-light tracking-wide">{service.title}</h3>
          </div>
          <div className="relative w-8 h-8 flex items-center justify-center bg-teal-800/30 rounded-full border border-teal-300/10">
            <ChevronDown 
              className={`h-4 w-4 text-teal-300 transition-transform duration-500 ease-out ${isExpanded ? 'rotate-180' : ''}`} 
            />
          </div>
        </div>
        
        <div className={`mt-6 transition-all duration-500 ease-out overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="text-white/80 mb-8 leading-relaxed">{service.description}</p>
          
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-teal-300/30 via-teal-300/10 to-transparent"></div>
            <h4 className="text-sm uppercase text-teal-300 tracking-wider mb-6 font-semibold pl-4">Key Features</h4>
            <ul className="space-y-4 pl-4">
              {service.keyFeatures.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start group/item">
                  <div className="w-1.5 h-1.5 mt-2 mr-3 rounded-full bg-teal-300/70 flex-shrink-0 group-hover/item:bg-teal-200 transition-colors duration-300"></div>
                  <span className="text-white/70 group-hover/item:text-white/90 transition-colors duration-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;