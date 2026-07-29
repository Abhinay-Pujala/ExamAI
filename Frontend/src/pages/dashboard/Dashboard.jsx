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
import { getProfile } from "../../services/profile.service.js";

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [profile, setProfile] = useState(null);
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true);
        const [statsData, recentActivityData, profileData] = await Promise.all([
          getDashboardStats(user),
          getRecentActivity(user),
          getProfile(user),
        ]);

        setStats(statsData.stats);
        setRecentActivity(recentActivityData.activities);
        setProfile(profileData.user);
      } catch (err) {
        console.error("Failed to load dashboard stats.", err);
      } finally {
        setLoading(false);
      }
    };
    if (user) {
      loadDashboardData();
    }
  }, [user]);

  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-6">
        <WelcomeCard profile={profile} />
        <DashboardStats stats={stats} />
        <RecentActivity activity={recentActivity} isLoading={loading} />
      </div>
    </DashboardLayout>
  );
}
