import React from 'react';

const alerts = [
  { id: 1, message: 'Overspending on Food category this month!', type: 'warning' },
  { id: 2, message: 'Salary not received yet for May.', type: 'info' },
];

const tips = [
  'Try cooking at home to save on food expenses.',
  'Set automatic payments for bills to avoid late fees.',
];

const Notifications = () => {
  return (
    <section className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded shadow space-y-4">
      <h3 className="text-lg font-semibold">Notifications & Tips</h3>
      <div className="space-y-2">
        {alerts.map(({ id, message, type }) => (
          <div
            key={id}
            className={`p-3 rounded ${
              type === 'warning' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
            }`}
          >
            {message}
          </div>
        ))}
      </div>
      <div>
        <h4 className="font-semibold mb-2">Budget Tips</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1 dark:bg-gray-800 dark:text-white">
          {tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Notifications;
