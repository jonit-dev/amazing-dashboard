import { clsx } from 'clsx';
import { ThemeToggle } from './ThemeToggle';
import { MetricCard } from './MetricCard';
import { PerformanceChart } from './PerformanceChart';
import { TeamSection } from './TeamSection';

interface MainContentProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function MainContent({ isDarkMode, setIsDarkMode }: MainContentProps) {
  return (
    <main className={clsx(
      'flex-1 p-8',
      isDarkMode ? 'bg-surface-900' : 'bg-surface-50'
    )}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="font-display text-3xl mb-2">Welcome back, Felix 👋</h2>
            <p className={clsx(
              'text-sm',
              isDarkMode ? 'text-surface-200' : 'text-surface-700'
            )}>Here's what's happening with your performance today.</p>
          </div>
          <ThemeToggle isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <MetricCard
            isDarkMode={isDarkMode}
            title="Installations"
            value="284"
            change="+12.5%"
            isPositive={true}
          />
          <MetricCard
            isDarkMode={isDarkMode}
            title="Customer Rating"
            value="4.9"
            change="+0.3"
            isPositive={true}
          />
          <MetricCard
            isDarkMode={isDarkMode}
            title="Response Time"
            value="1.2h"
            change="-15m"
            isPositive={true}
          />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <PerformanceChart isDarkMode={isDarkMode} />
          </div>
          <div>
            <TeamSection isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </main>
  );
}