import { FiHome, FiTarget, FiUser, FiBarChart2 } from 'react-icons/fi';
import { clsx } from 'clsx';
import { NavItem } from './NavItem';

interface SidebarProps {
  isDarkMode: boolean;
}

export function Sidebar({ isDarkMode }: SidebarProps) {
  return (
    <aside className={clsx(
      'w-72 p-8 flex flex-col border-r',
      isDarkMode ? 'bg-surface-800 border-surface-700' : 'bg-white border-surface-200'
    )}>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center">
            <span className="text-white font-display font-medium text-xl">P</span>
          </div>
          <h1 className="font-display text-xl font-medium">Perform</h1>
        </div>
        
        <div className={clsx(
          'p-4 rounded-2xl mb-8',
          isDarkMode ? 'bg-surface-700' : 'bg-surface-50'
        )}>
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4"
              alt="Avatar"
              className="w-12 h-12 rounded-xl"
            />
            <div>
              <h2 className="font-display text-lg">Felix Chen</h2>
              <p className={clsx(
                'text-sm',
                isDarkMode ? 'text-surface-200' : 'text-surface-700'
              )}>Senior Installer</p>
            </div>
          </div>
          <div className={clsx(
            'text-sm rounded-xl p-3',
            isDarkMode ? 'bg-surface-800' : 'bg-white'
          )}>
            <div className="flex justify-between mb-1">
              <span className={isDarkMode ? 'text-surface-200' : 'text-surface-700'}>Performance Score</span>
              <span className="text-primary-500 font-medium">92%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-surface-200">
              <div className="w-[92%] h-full rounded-full bg-primary-500"></div>
            </div>
          </div>
        </div>
      </div>

      <nav className="space-y-2 mb-8">
        <NavItem icon={<FiHome size={20} />} text="Overview" active />
        <NavItem icon={<FiTarget size={20} />} text="Objectives" />
        <NavItem icon={<FiBarChart2 size={20} />} text="Analytics" />
        <NavItem icon={<FiUser size={20} />} text="Profile" />
      </nav>

      <div className="mt-auto">
        <div className={clsx(
          'rounded-2xl p-4',
          isDarkMode ? 'bg-primary-500/10' : 'bg-primary-50'
        )}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display">Quarterly Bonus</h3>
            <span className="px-2 py-1 text-xs rounded-lg bg-primary-500 text-white">Active</span>
          </div>
          <p className="text-2xl font-display font-medium text-primary-500 mb-1">$8,245</p>
          <p className={clsx(
            'text-sm',
            isDarkMode ? 'text-surface-200' : 'text-surface-700'
          )}>+12.5% from last quarter</p>
        </div>
      </div>
    </aside>
  );
}