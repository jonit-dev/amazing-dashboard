import { clsx } from 'clsx';

interface TeamGoalsProps {
  isDarkMode: boolean;
}

export function TeamGoals({ isDarkMode }: TeamGoalsProps) {
  return (
    <div className={clsx(
      'rounded-xl p-6',
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    )}>
      <h3 className="text-2xl font-serif mb-4">Team Goals</h3>
      <p className={clsx(
        'text-sm mb-6',
        isDarkMode ? 'text-gray-400' : 'text-gray-600'
      )}>
        Minimum amount that needs to be achieved before profit-sharing is activated.
      </p>

      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase font-medium mb-2">Revenue (MIN)</p>
          <p className="text-2xl">$285k <span className="text-sm text-gray-500">/month</span></p>
        </div>
        <div>
          <p className="text-xs uppercase font-medium mb-2">Recall % (MIN)</p>
          <p className="text-2xl">&lt; 15% <span className="text-sm text-gray-500">/month</span></p>
        </div>
      </div>
    </div>
  );
}