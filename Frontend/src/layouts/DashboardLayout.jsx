import { useState } from "react";
import Sidebar from "../components/dashboard/layout/Sidebar.jsx";
import Topbar from "../components/dashboard/layout/Topbar.jsx";

export default function DashboardLayout({ children, title = "Dashboard" }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Topbar
          title={title}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <section className="flex-1 p-6">{children}</section>
      </main>
    </div>
  );
}
