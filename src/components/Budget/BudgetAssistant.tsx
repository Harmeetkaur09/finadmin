import React from 'react';

const budgetData = [
  { category: 'Food', budget: 500, spent: 420 },
  { category: 'Entertainment', budget: 200, spent: 230 },
  { category: 'Transport', budget: 150, spent: 90 },
  { category: 'Utilities', budget: 300, spent: 250 },
];

const BudgetAssistant = () => {
  return (
    <section className="bg-white  dark:bg-gray-800 dark:text-white p-4 rounded shadow space-y-6">
      <h3 className="text-lg font-semibold">Budgeting Assistant</h3>
      {budgetData.map(({ category, budget, spent }) => {
        const percent = Math.min((spent / budget) * 100, 100);
        const over = spent > budget;

        return (
          <div key={category}>
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">{category}</span>
              <span
                className={`text-sm ${over ? 'text-red-600' : 'text-green-600'}`}
              >
                ${spent} / ${budget}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded h-3">
              <div
                className={`h-full rounded ${over ? 'bg-red-500' : 'bg-green-500'}`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default BudgetAssistant;
