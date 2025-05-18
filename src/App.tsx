import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Layout/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import TransactionsPage from './pages/Transactions';
import NotificationsPage from './pages/NotificationsPage';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)} />

        <div className="flex-1 p-4">
          <Header onToggleSidebar={() => setShowSidebar((prev) => !prev)} />
          <main className="mt-4">
            <Routes>
<Route path="/" element={<Dashboard onToggleSidebar={() => setShowSidebar(prev => !prev)} />} />
              <Route path="/transactions" element={<TransactionsPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
