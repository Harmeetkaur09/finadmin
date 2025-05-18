import React, { useEffect, useState } from 'react';
import transactionsData from '../../data/mockData.json'; // ✅ correct

export type Transaction = {
  id: string;
  date: string;
  description: string;
  type: 'Credit' | 'Debit';
  category: string;
  amount: number;
};



const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<'All' | 'Credit' | 'Debit'>('All');

 useEffect(() => {
  const cleanedTransactions: Transaction[] = transactionsData.transactions.map((t) => ({
    ...t,
    type: t.type === 'Credit' ? 'Credit' : 'Debit', // force type to match union
  }));

  setTransactions(
    cleanedTransactions
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 10)
  );
}, []);


  const filtered = transactions.filter((t) => {
    const matchesSearch =
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === 'All' ? true : t.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <section className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>

      <div className="flex flex-col sm:flex-row justify-between mb-4 space-y-2 sm:space-y-0">
       <input
  type="text"
  placeholder="Search description or category"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border border-gray-300 rounded px-3 py-1 w-full sm:w-1/2
             text-black dark:text-white
             placeholder-gray-400 dark:placeholder-gray-300
             bg-white dark:bg-gray-800"
/>


      <select
  value={filterType}
  onChange={(e) => setFilterType(e.target.value as any)}
  className="border border-gray-300 
             bg-white dark:bg-gray-800 
             text-black dark:text-white 
             rounded px-3 py-1 w-full sm:w-1/4"
>
  <option value="All">All Types</option>
  <option value="Credit">Income</option>
  <option value="Debit">Expenses</option>
</select>

      </div>

<div className="overflow-x-auto w-full">
  <table className="min-w-full border-collapse">
    <thead>
      <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
        <th className="py-2 px-3 border-b text-left">Date</th>
        <th className="py-2 px-3 border-b text-left">Description</th>
        <th className="py-2 px-3 border-b text-left">Type</th>
        <th className="py-2 px-3 border-b text-left">Category</th>
        <th className="py-2 px-3 border-b text-right">Amount</th>
      </tr>
    </thead>
    <tbody>
      {filtered.map((t) => (
        <tr key={t.id} className="border-b">
          <td className="py-2 px-3">{new Date(t.date).toLocaleDateString()}</td>
          <td className="py-2 px-3">{t.description}</td>
          <td
            className={`py-2 px-3 font-semibold ${
              t.type === 'Credit' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {t.type}
          </td>
          <td className="py-2 px-3">{t.category}</td>
          <td
            className={`py-2 px-3 text-right font-semibold ${
              t.type === 'Credit' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            ${t.amount.toLocaleString()}
          </td>
        </tr>
      ))}
      {filtered.length === 0 && (
        <tr>
          <td colSpan={5} className="py-4 text-center text-gray-500">
            No transactions found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>

    </section>
  );
};

export default TransactionsTable;
