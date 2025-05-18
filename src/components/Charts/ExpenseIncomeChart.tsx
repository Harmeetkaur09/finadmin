import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  AreaChart,
  Area,
} from 'recharts';

const data = [
  { month: 'Jan', income: 5000, expenses: 3200 },
  { month: 'Feb', income: 5200, expenses: 2800 },
  { month: 'Mar', income: 5100, expenses: 3500 },
  { month: 'Apr', income: 5300, expenses: 3000 },
  { month: 'May', income: 4900, expenses: 3100 },
  { month: 'Jun', income: 5500, expenses: 3300 },
];

const ExpenseIncomeChart = () => {
      const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(matchDark.matches);

    const listener = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    matchDark.addEventListener('change', listener);

    return () => matchDark.removeEventListener('change', listener);
  }, []);
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Expense vs Income</h3>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>
            <XAxis dataKey="month" tick={{ fill: isDarkMode ? '#B0B4B9' : '#4B5563' }} />
            <YAxis tick={{ fill: isDarkMode ? '#B0B4B9' : '#4B5563' }} />

          <CartesianGrid strokeDasharray="3 3" />
            <Tooltip
            content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                return (
                    <div className=' bg-white dark:bg-gray-800 dark:text-white' style={{padding: '10px', borderRadius: '5px', color: '#B0B4B9' }}>
                    <p>{label}</p>
                    {payload.map((entry, index) => (
                        <p key={`item-${index}`} style={{ color: entry.color }}>
                        {entry.name}: {entry.value}
                        </p>
                    ))}
                    </div>
                );
                }
                return null;
            }}
            />
            <Legend
            content={() => (
                <div style={{ color: '#B0B4B9', display: 'flex', gap: '1rem' }}>
                <span><span style={{ backgroundColor: '#3b82f6', display: 'inline-block', width: 10, height: 10, marginRight: 5 }}></span>Income</span>
                <span><span style={{ backgroundColor: '#ef4444', display: 'inline-block', width: 10, height: 10, marginRight: 5 }}></span>Expenses</span>
                </div>
            )}
            />
          <Area
            type="monotone"
            dataKey="income"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorIncome)"
            name="Income"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="#ef4444"
            fillOpacity={1}
            fill="url(#colorExpenses)"
            name="Expenses"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseIncomeChart;
