import React, { useState } from 'react';

const mockCalendarData: Record<string, number> = {
  '2025-05-01': 25,
  '2025-05-03': 80,
  '2025-05-10': 120,
  '2025-05-15': 0,
  '2025-05-17': 60,
};

const daysInMonth = 31;
const currentMonth = 'May 2025';

const SpendingCalendar = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  return (
    <section className="bg-white  dark:bg-gray-800  p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Spending Calendar - {currentMonth}</h3>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const dateKey = `2025-05-${day.toString().padStart(2, '0')}`;
          const amount = mockCalendarData[dateKey] || 0;
          const isSelected = selectedDay === dateKey;

          return (
            <div
              key={day}
              className={`p-2 border rounded cursor-pointer transition ${
                amount > 0 ? 'bg-blue-100 hover:bg-blue-200' : 'bg-gray-100'
              } ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setSelectedDay(dateKey)}
            >
              <div className="font-semibold">{day}</div>
              <div className="text-xs text-blue-800">${amount}</div>
            </div>
          );
        })}
      </div>

      {selectedDay && (
        <p className="mt-4 text-gray-700">
          You spent <strong>${mockCalendarData[selectedDay] || 0}</strong> on{' '}
          {selectedDay}.
        </p>
      )}
    </section>
  );
};

export default SpendingCalendar;
