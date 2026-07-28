import DashboardLayout from "../../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import {
  getDashboardStats,
  getRecentActivity,
} from "../../services/dashboard.service.js";

import WelcomeCard from "../../components/dashboard/cards/WelcomeCard";
import DashboardStats from "../../components/dashboard/cards/DashboardStats";
import RecentActivity from "../../components/dashboard/cards/RecentActivity";

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [statsData, recentActivityData] = await Promise.all([
          getDashboardStats(user),
          getRecentActivity(user),
        ]);

        setStats(statsData.stats);
        setRecentActivity(recentActivityData.activities);
      } catch (err) {
        console.error("Failed to load dashboard stats.", err);
      }
    };
    if (user) {
      loadDashboardData();
    }
  }, [user]);

  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-6">
        <WelcomeCard />
        <DashboardStats stats={stats} />
        <RecentActivity activity={recentActivity} />
      </div>
    </DashboardLayout>
  );
}
