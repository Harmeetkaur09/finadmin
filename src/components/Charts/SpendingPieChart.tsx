import React, { useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const categoryData = [
  { name: 'Food', value: 400, color: '#f87171' },
  { name: 'Transport', value: 300, color: '#60a5fa' },
  { name: 'Entertainment', value: 200, color: '#34d399' },
  { name: 'Utilities', value: 100, color: '#fbbf24' },
];

const subCategoryData: Record<string, { name: string; value: number }[]> = {
  Food: [
    { name: 'Groceries', value: 250 },
    { name: 'Restaurants', value: 150 },
  ],
  Transport: [
    { name: 'Bus', value: 120 },
    { name: 'Taxi', value: 180 },
  ],
  Entertainment: [
    { name: 'Movies', value: 100 },
    { name: 'Concerts', value: 100 },
  ],
  Utilities: [
    { name: 'Electricity', value: 60 },
    { name: 'Water', value: 40 },
  ],
};

const SpendingPieChart = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const dataToDisplay = selectedCategory
    ? subCategoryData[selectedCategory]
    : categoryData;

  const COLORS = selectedCategory
    ? ['#ef4444', '#f87171', '#fca5a5', '#b91c1c']
    : categoryData.map((cat) => cat.color);

  const onPieClick = (entry: any) => {
    if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(entry.name);
    }
  };

  return (
    <div className="bg-white  dark:bg-gray-800 dark:text-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">
        {selectedCategory ? `${selectedCategory} Breakdown` : 'Spending by Category'}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={dataToDisplay}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
            onClick={onPieClick}
          >
            {dataToDisplay.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cursor="pointer" />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      {selectedCategory && (
        <button
          className="mt-4 px-3 py-1 bg-blue-600 text-white rounded"
          onClick={() => setSelectedCategory(null)}
        >
          Back to Categories
        </button>
      )}
    </div>
  );
};

export default SpendingPieChart;
