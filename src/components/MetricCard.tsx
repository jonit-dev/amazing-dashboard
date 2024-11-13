import { clsx } from 'clsx';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

interface MetricCardProps {
  isDarkMode: boolean;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export function MetricCard({ isDarkMode, title, value, change, isPositive }: MetricCardProps) {
  return (
    <div className={clsx(
      'rounded-2xl p-6',
      isDarkMode ? 'bg-surface-800' : 'bg-white'
    )}>
      <h3 className={clsx(
        'text-sm mb-4',
        isDarkMode ? 'text-surface-200' : 'text-surface-700'
      )}>{title}</h3>
      <div className="flex items-end justify-between">
        <p className="font-display text-3xl">{value}</p>
        <div className={clsx(
          'flex items-center gap-1 text-sm rounded-lg px-2 py-1',
          isPositive 
            ? 'text-green-500 bg-green-500/10' 
            : 'text-red-500 bg-red-500/10'
        )}>
          {isPositive ? <FiArrowUp /> : <FiArrowDown />}
          <span>{change}</span>
        </div>
      </div>
    </div>
  );
}