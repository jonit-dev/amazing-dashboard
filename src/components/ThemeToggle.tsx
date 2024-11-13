import { FiMoon, FiSun } from 'react-icons/fi';
import { clsx } from 'clsx';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={clsx(
        'p-2.5 rounded-xl transition-all',
        isDarkMode 
          ? 'bg-surface-800 text-primary-400 hover:bg-surface-700' 
          : 'bg-white text-primary-500 hover:bg-surface-50'
      )}
    >
      {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}