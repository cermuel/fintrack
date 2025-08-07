import type { DashboardSummary } from "../types";

const SIDEBAR_MENU: { title: string; route: string | undefined }[] = [
  { title: "Dashboard", route: "/" },
  { title: "Transactions", route: undefined },
  { title: "Reports", route: undefined },
  { title: "Settings", route: undefined },
];

const USERS: string[] = [
  "/icons/user-1.svg",
  "/icons/user-2.svg",
  "/icons/user-3.svg",
  "/icons/user-4.svg",
];

export const DASHBOARD_SUMMARY: DashboardSummary = {
  totalBalance: 125000.75,
  totalCredits: 98000.5,
  totalDebits: 53000.25,
  transactionCount: 145,
  balanceChange: 4.2,
  creditsChange: 5.6,
  debitsChange: -2.3,
  transactionChange: 1.8,
};

export const constants = { SIDEBAR_MENU, USERS, DASHBOARD_SUMMARY };
