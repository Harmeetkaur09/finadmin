import React, { useState } from 'react';

type ViewType = 'Monthly' | 'Quarterly' | 'YTD';

const OverviewSection = () => {
  const [view, setView] = useState<ViewType>('Monthly');

  const data = {
    Monthly: {
      balance: 12000,
      income: 5000,
      expenses: 3200,
    },
    Quarterly: {
      balance: 14500,
      income: 15000,
      expenses: 9800,
    },
    YTD: {
      balance: 18000,
      income: 32000,
      expenses: 21000,
    },
  };

  const current = data[view];
  const savingsRatio = ((current.income - current.expenses) / current.income) * 100;

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Financial Overview</h2>
        <div className="flex space-x-2">
          {['Monthly', 'Quarterly', 'YTD'].map((v) => (
            <button
              key={v}
              onClick={() => setView(v as ViewType)}
              className={`px-3 py-1 rounded-full text-sm border ${
                view === v
                  ? 'bg-blue-600 text-white'
                  : 'bg-white  dark:bg-gray-800 dark:text-white text-gray-700 border-gray-300'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Account Balance" value={`$${current.balance.toLocaleString()}`} />
        <Card title="Monthly Income" value={`$${current.income.toLocaleString()}`} />
        <Card title="Monthly Expenses" value={`$${current.expenses.toLocaleString()}`} />
        <Card
          title="Savings Ratio"
          value={`${savingsRatio.toFixed(1)}%`}
        />
      </div>
    </section>
  );
};

type CardProps = {
  title: string;
  value: string;
};

const Card = ({ title, value }: CardProps) => (
  <div className="bg-white  dark:bg-gray-800 dark:text-white p-4 rounded shadow flex flex-col space-y-2">
    <p className="text-sm dark:bg-gray-800 dark:text-white text-gray-500">{title}</p>
    <p className="text-xl dark:bg-gray-800 dark:text-white font-bold text-gray-800">{value}</p>
  </div>
);

export default OverviewSection;
