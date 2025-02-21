"use client"
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import EmployeesList from "@/components/dashboard/EmployeesList";
import ExpenseOverview from "@/components/dashboard/ExpenseOverview";
import OffDutyEmployees from "@/components/dashboard/OffDutyEmployees";
import PunchedInEmployees from "@/components/dashboard/PunchedInEmployees";
import RealTimeStatus from "@/components/dashboard/RealTimeStatus";
import StaffingStrength from "@/components/dashboard/StaffingStrength";
import StatsCard from "@/components/dashboard/StatsCard";
import TaskStatus from "@/components/dashboard/TaskStatus";
import TeamwiseAttendance from "@/components/dashboard/TeamwiseAttendance";
import WorkingHoursChart from "@/components/dashboard/WorkingHoursChart";
import { tabs } from "@/constants/constant";
import { ArrowDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function DashboardPage() {
  const pathname = usePathname();

  return (
    <div>
      <DashboardNav tabs={tabs} pathname={pathname} />
      <div className="space-y-4 p-4 sm:p-6 overflow-y-auto h-[calc(100vh-120px)]">
        {/* Header with flex-wrap and min-width handling */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 flex-shrink-0">
            Realtime Dashboard
          </h1>
          <div className="flex items-center gap-2 w-full md:w-fit justify-end">

          <button className="flex justify-end items-center gap-2 px-3 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md whitespace-nowrap flex-shrink-0">
              <ArrowDown className="h-4 w-4" />
              Attendance Status
            </button>
          </div>
        </div>

        {/* Attendance Section */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 auto-rows-fr">
          <div className="sm:col-span-1 lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 h-full">
              <RealTimeStatus />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex-1 bg-white rounded-lg border border-gray-200">
              <PunchedInEmployees />
            </div>
            <div className="flex-1 bg-white rounded-lg border border-gray-200">
              <StaffingStrength />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 h-full">
              <TeamwiseAttendance />
            </div>
          </div>
        </div>

        {/* Lists Section */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="bg-white rounded-lg border border-gray-200">
            <EmployeesList />
          </div>
          <div className="bg-white rounded-lg border border-gray-200">
            <OffDutyEmployees />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <StatsCard
            title="Forms Filled"
            value="0"
            change="0%"
            subtext="0 Yesterday"
            positive
          />
          <StatsCard
            title="Photos Uploaded"
            value="5"
            change="400%"
            subtext="1 Yesterday"
            positive
          />
          <StatsCard
            title="New Clients"
            value="0"
            change="0%"
            subtext="0 Yesterday"
            positive
          />
          <StatsCard
            title="Orders Submitted"
            value="0"
            change="0%"
            subtext="0 Yesterday"
          />
        </div>
        <div className="bg-white rounded-lg border border-gray-200">
          <ExpenseOverview />
        </div>
        </div>
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg border border-gray-200">
            <WorkingHoursChart />
          </div>
          <div className="bg-white rounded-lg border border-gray-200">
            <TaskStatus />
          </div>
        </div>
      </div>

    </div>
  );
}