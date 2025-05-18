import React from 'react';
import HeaderProfile from '../components/Header';
import OverviewSection from '../components/OverviewCards/OverviewSection';
import ExpenseIncomeChart from '../components/Charts/ExpenseIncomeChart';
import SpendingPieChart from '../components/Charts/SpendingPieChart';
import Notifications from '../components/Notifications/Notifications';
import BudgetAssistant from '../components/Budget/BudgetAssistant';
import SpendingCalendar from '../components/Calendar/SpendingCalendar';


const Dashboard = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  return (
    <div className="space-y-8">
      <OverviewSection />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ExpenseIncomeChart />
        <SpendingPieChart />
        <BudgetAssistant />
        <SpendingCalendar />
      </div>
      <Notifications />
    </div>
  );
};

export default Dashboard;
