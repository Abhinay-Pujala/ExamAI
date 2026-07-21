import DashboardLayout from "../../layouts/DashboardLayout";

import WelcomeCard from "../../components/dashboard/cards/WelcomeCard";
import DashboardStats from "../../components/dashboard/cards/DashboardStats";
import RecentActivity from "../../components/dashboard/cards/RecentActivity";

export default function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-6">
        <WelcomeCard />
        <DashboardStats />
        <RecentActivity />
      </div>
    </DashboardLayout>
  );
}
