'use client';

import { useTheme } from '@/providers/theme-provider';
import { Moon, Sun } from 'lucide-react';
import clsx from 'clsx';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <span className="text-lg font-semibold">Ibnul</span>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={clsx(
            'rounded-full p-2 transition-colors',
            'hover:bg-neutral-200 dark:hover:bg-neutral-800'
          )}
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
      </div>
    </nav>
  );
};
