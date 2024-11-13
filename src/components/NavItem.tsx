import { clsx } from 'clsx';
import React from 'react';

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

export function NavItem({ icon, text, active = false }: NavItemProps) {
  return (
    <button
      className={clsx(
        'flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all',
        active ? 'bg-primary-500 text-white' : 'hover:bg-surface-50 dark:hover:bg-surface-700'
      )}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </button>
  );
}