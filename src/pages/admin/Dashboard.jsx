import DashboardCard from "../../components/admin/DashboardCard";

import {
  Package,
  Tags,
  AlertTriangle,
  Users,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div>

      {/* PAGE TITLE */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back, Caesar 👋
        </p>

      </div>

      {/* STATISTIC CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <DashboardCard
          title="Total Products"
          value="120"
          icon={<Package className="text-white" />}
          color="bg-blue-500"
        />

        <DashboardCard
          title="Categories"
          value="8"
          icon={<Tags className="text-white" />}
          color="bg-green-500"
        />

        <DashboardCard
          title="Out of Stock"
          value="12"
          icon={<AlertTriangle className="text-white" />}
          color="bg-red-500"
        />

        <DashboardCard
          title="Users"
          value="4"
          icon={<Users className="text-white" />}
          color="bg-purple-500"
        />

      </div>

    </div>
  );
};

export default Dashboard;