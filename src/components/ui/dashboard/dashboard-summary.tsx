import { constants } from "../../../constants";
import DashboardSummaryCard from "./dashboard-summary-card";

const DashboardSummary = () => {
  return (
    <div className="w-full mt-6">
      <h1 className="text-[#1B2528] font-bold md:text-2xl text-lg">Summary</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-4">
        <DashboardSummaryCard
          title="Total Balance"
          total={constants.DASHBOARD_SUMMARY.totalBalance}
          change={constants.DASHBOARD_SUMMARY.balanceChange}
          shouldFormat
        />
        <DashboardSummaryCard
          title="Total Credits"
          total={constants.DASHBOARD_SUMMARY.totalCredits}
          change={constants.DASHBOARD_SUMMARY.creditsChange}
          shouldFormat
        />
        <DashboardSummaryCard
          title="Total Debits"
          total={constants.DASHBOARD_SUMMARY.totalDebits}
          change={constants.DASHBOARD_SUMMARY.debitsChange}
          shouldFormat
        />
        <DashboardSummaryCard
          title="Transactions"
          total={constants.DASHBOARD_SUMMARY.transactionCount}
          change={constants.DASHBOARD_SUMMARY.transactionChange}
        />
      </div>
    </div>
  );
};

export default DashboardSummary;
