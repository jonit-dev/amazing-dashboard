import { clsx } from 'clsx';
import { FormulaItem } from './FormulaItem';

interface AwardFormulaProps {
  isDarkMode: boolean;
}

export function AwardFormula({ isDarkMode }: AwardFormulaProps) {
  return (
    <div className={clsx(
      'rounded-xl p-6',
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    )}>
      <h3 className="text-2xl font-serif mb-4">Award Formula</h3>
      <p className={clsx(
        'text-sm mb-6',
        isDarkMode ? 'text-gray-400' : 'text-gray-600'
      )}>
        How the total award amount is divided among employees.
      </p>

      <div className="space-y-4">
        <FormulaItem label="Attendance" percentage={50} color="bg-[#FFF1E7]" />
        <FormulaItem label="Claims" percentage={30} color="bg-[#F3E8FF]" />
        <FormulaItem label="Number of 5 Star Reviews" percentage={20} color="bg-[#EEF4FF]" />
      </div>
    </div>
  );
}