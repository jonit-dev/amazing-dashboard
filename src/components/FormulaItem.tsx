import { clsx } from 'clsx';

interface FormulaItemProps {
  label: string;
  percentage: number;
  color: string;
}

export function FormulaItem({ label, percentage, color }: FormulaItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className={clsx('w-32 py-2 px-4 rounded-lg text-sm', color)}>
          {label}
        </div>
      </div>
      <span className="text-xl">{percentage}%</span>
    </div>
  );
}