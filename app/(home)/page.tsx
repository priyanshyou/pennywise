import HeroBanner from "@/screens/home/components/HeroBanner";
import IncomeSources from "@/screens/home/widgets/IncomeSources";
import MonthlyIncome from "@/screens/home/widgets/MonthlyIncome";
import RecentTransactions from "@/screens/home/widgets/RecentTransactions";
import Expenditure from "@/screens/home/widgets/Expenditure";
import ActivityLogs from "@/screens/home/widgets/ActivityLogs";
import IncomeAndExpense from "@/screens/home/widgets/IncomeAndExpense";
import MonthlyExpenditure from "@/screens/home/widgets/MonthlyExpenditure"
import ExpenseSavingsRevenue from "@/screens/home/widgets/ExpenseSavingsRevenue";
export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 max-w-[1200px] w-full">
      <div className="col-span-full">
        <HeroBanner />
      </div>

      <div className="col-span-full lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IncomeAndExpense />
          <ExpenseSavingsRevenue />
        </div>
        <MonthlyExpenditure />
        <RecentTransactions />
      </div>

      <div className="col-span-full lg:col-span-1 space-y-6">
        <MonthlyIncome />
        <Expenditure />
        <IncomeSources />
        <ActivityLogs />
      </div>
    </main>
  );
}
