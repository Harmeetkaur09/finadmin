import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { name: 'Dashboard', path: '/' },
  { name: 'Transactions', path: '/transactions' },
  { name: 'Notifications', path: '/notifications' },
];

const Sidebar = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  return (
    <>
      {show && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      <nav
        className={`fixed z-50 top-0 left-0 w-64 h-[100vh] sm:h-auto bg-gray-800 text-white p-6 transform transition-transform md:translate-x-0 ${
          show ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:block`}
      >
        <h1 className="text-2xl font-bold mb-8">Finb Tech</h1>
        <ul className="space-y-4">
          {links.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded hover:bg-gray-700 ${
                    isActive ? 'bg-gray-700 font-semibold' : ''
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
