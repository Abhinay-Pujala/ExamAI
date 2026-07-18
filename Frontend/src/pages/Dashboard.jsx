import WelcomeCard from "../components/dashboard/cards/WelcomeCard";
import Sidebar from "../components/dashboard/layout/Sidebar";
import Topbar from "../components/dashboard/layout/Topbar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Topbar />
        <section className="flex-1 p-6">
          <WelcomeCard />
        </section>
      </main>
    </div>
  );
}
