import { clsx } from 'clsx';

interface YearToDateCardProps {
  isDarkMode: boolean;
  amount: number;
}

export function YearToDateCard({ isDarkMode, amount }: YearToDateCardProps) {
  return (
    <div className={clsx(
      'rounded-xl p-6 mb-8',
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    )}>
      <h3 className="text-2xl font-serif mb-2">Total Year-to-Date Earned</h3>
      <p className="text-3xl text-green-600 font-medium">
        ${amount.toLocaleString()}
      </p>
    </div>
  );
}