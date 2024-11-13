import { clsx } from 'clsx';

interface PerformanceChartProps {
  isDarkMode: boolean;
}

export function PerformanceChart({ isDarkMode }: PerformanceChartProps) {
  return (
    <div className={clsx(
      'rounded-2xl p-6',
      isDarkMode ? 'bg-surface-800' : 'bg-white'
    )}>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-display text-lg mb-1">Performance Trends</h3>
          <p className={clsx(
            'text-sm',
            isDarkMode ? 'text-surface-200' : 'text-surface-700'
          )}>Last 6 months of activity</p>
        </div>
        <select className={clsx(
          'px-3 py-2 rounded-lg text-sm',
          isDarkMode ? 'bg-surface-700 border-surface-600' : 'bg-surface-50 border-surface-200'
        )}>
          <option>Last 6 months</option>
          <option>Last year</option>
          <option>All time</option>
        </select>
      </div>
      <div className="h-64 flex items-end justify-between gap-2">
        {[65, 45, 75, 55, 85, 95].map((height, i) => (
          <div key={i} className="w-full">
            <div className="relative h-52">
              <div
                className={clsx(
                  'absolute bottom-0 w-full rounded-lg transition-all',
                  isDarkMode ? 'bg-primary-500/20' : 'bg-primary-100'
                )}
                style={{ height: `${height}%` }}
              >
                <div
                  className="absolute bottom-0 w-full rounded-lg bg-primary-500"
                  style={{ height: `${height * 0.7}%` }}
                />
              </div>
            </div>
            <p className={clsx(
              'text-center text-sm mt-2',
              isDarkMode ? 'text-surface-200' : 'text-surface-700'
            )}>
              {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}