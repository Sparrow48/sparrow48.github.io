'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const changeThemeHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <button onClick={() => changeThemeHandler()}>
        {theme === 'dark' ? (
          <div className="text-xl p-2 bg-gray-400 rounded text-yellow-500">
            <BsFillSunFill />
          </div>
        ) : (
          <div className="text-xl p-2 bg-gray-400 rounded">
            <BsMoonFill />
          </div>
        )}
      </button>
    </div>
  );
}
