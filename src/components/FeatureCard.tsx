
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: 'blue' | 'green' | 'amber' | 'purple';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, color }) => {
  const colorClasses = {
    blue: 'glow-blue border-blue-500/30',
    green: 'glow-green border-green-500/30',
    amber: 'glow-amber border-amber-500/30',
    purple: 'border-purple-500/30'
  };

  const iconColors = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    amber: 'text-amber-400',
    purple: 'text-purple-400'
  };

  return (
    <div className={`glass-panel p-8 hover-lift ${colorClasses[color]} border-2 scale-in`}>
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-6 ${colorClasses[color]}`}>
        <Icon className={`w-8 h-8 ${iconColors[color]}`} />
      </div>
      
      <h3 className="heading-tertiary text-white mb-4">{title}</h3>
      <p className="body-small text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
