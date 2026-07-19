import DashboardStats from "../components/dashboard/cards/DashboardStats";
import RecentActivity from "../components/dashboard/cards/RecentActivity";
import WelcomeCard from "../components/dashboard/cards/WelcomeCard";
import Sidebar from "../components/dashboard/layout/Sidebar";
import Topbar from "../components/dashboard/layout/Topbar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Topbar />
        <section className="flex-1 p-6 space-y-6">
          <WelcomeCard />
          <DashboardStats />
          <RecentActivity />
        </section>
      </main>
    </div>
  );
}
