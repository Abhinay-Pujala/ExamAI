import { useState } from "react";
import Sidebar from "../components/dashboard/layout/Sidebar.jsx";
import Topbar from "../components/dashboard/layout/Topbar.jsx";

export default function DashboardLayout({ children, title = "Dashboard" }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Topbar
          title={title}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <section className="flex-1 p-6">{children}</section>
      </main>
    </div>
  );
}
