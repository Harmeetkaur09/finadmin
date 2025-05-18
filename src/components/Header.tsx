// src/components/Header/Header.tsx
import React from 'react';
import ThemeToggle from './Layout/ThemeToggle';

const Header = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  const userName = 'John Doe';
  const goalProgress = 70;

  return (
    <header className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 dark:text-white p-4 rounded shadow relative">
      {/* Hamburger menu - only on small screens */}
      <button
        className="absolute left-4 top-4 md:hidden text-gray-700 dark:text-white"
        onClick={onToggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div className="flex items-center space-x-4 pl-10 md:pl-0">
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h1 className="text-xl font-semibold">Hello, {userName} 👋</h1>
          <p className="text-sm text-gray-500">Welcome back to your dashboard</p>
        </div>
      </div>

      <div className="w-full md:w-1/3 mt-4 md:mt-0">
        <p className="text-sm text-gray-600 mb-1">Monthly Savings Goal</p>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full"
            style={{ width: `${goalProgress}%` }}
          ></div>
        </div>
        <p className="text-xs text-right text-gray-500 mt-1">{goalProgress}% reached</p>
      </div>

      <div className="flex items-center justify-end mt-4 md:mt-0">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
