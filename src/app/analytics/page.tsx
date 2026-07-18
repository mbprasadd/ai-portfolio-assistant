"use client";
import {
  Users,
  Monitor,
  Smartphone,
  Calendar,
  Eye,
} from "lucide-react";

import StatCard from "@/components/analytics/StatCard";

import { useEffect, useState } from "react";
import CountryChart from "@/components/analytics/CountryChart";
import BrowserChart from "@/components/analytics/BrowserChart";
import RecentVisitors from "@/components/analytics/RecentVisitors";
import MessagesTable from "@/components/analytics/MessagesTable";

export default function AnalyticsPage() {
  const [stats, setStats] = useState<any>(null);
  const [countryData, setCountries] = useState<any>(null);
  const [browswerData, setBrowsers] = useState<any>(null);
  const [recentVisitorsData, setRecentVisitors] = useState<any>(null);
  const [contactMessagesData, setContactMessagesData] = useState<any>(null);

  useEffect(() => {
    async function getAnalytics() {
      try {
        const countriesRes = await fetch("/api/analytics/countries");
        const countries = await countriesRes.json();
        setCountries(countries);

        const browserRes = await fetch("/api/analytics/browsers");
        const browsers = await browserRes.json();
        setBrowsers(browsers);

        const recentRes = await fetch("/api/analytics/recent");
        const recent = await recentRes.json();
        setRecentVisitors(recent)

        const res = await fetch("/api/analytics");
        const data = await res.json();
        setStats(data.stats);

        const messagesRes = await fetch("/api/contact");
        const messages = await messagesRes.json();
        setContactMessagesData(messages);


      } catch (err) {
        console.error(err);
      }
    }

    getAnalytics();
  }, []);

return (
  <div className="min-h-screen bg-slate-950 text-white py-10 m-auto">

    {/* Container */}
    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">

        <div>
          <h1 className="text-4xl font-bold">
            📊 Portfolio Analytics
          </h1>

          <p className="text-slate-400 mt-2">
            Monitor visitors and portfolio performance
          </p>
        </div>

        <div className="mt-5 md:mt-0 flex items-center gap-2 text-green-400">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

          Live
        </div>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

        <StatCard
          title="Total Visitors"
          value={stats?.totalVisitors}
          icon={Users}
        />

        <StatCard
          title="Today's Visitors"
          value={stats?.todayVisitors}
          icon={Calendar}
        />

        <StatCard
          title="Total Visits"
          value={stats?.totalVisits}
          icon={Eye}
        />

        <StatCard
          title="Desktop"
          value={stats?.desktopVisitors}
          icon={Monitor}
        />

        <StatCard
          title="Mobile"
          value={stats?.mobileVisitors}
          icon={Smartphone}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">
        <CountryChart data={countryData?.data} />
        <BrowserChart data={browswerData?.data} />
      </div>

      {/* Recent Visitors */}
      <div className="mt-10">
        <RecentVisitors data={recentVisitorsData?.data} />
      </div>

      {/* Contact Mesaages */}
      <div className="mt-10">
        <MessagesTable messages={contactMessagesData?.data} />
      </div>

    </div>

  </div>
);
}