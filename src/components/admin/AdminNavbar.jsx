import { Bell, Search } from "lucide-react";

const AdminNavbar = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200 px-6 py-4">

      <div className="flex items-center justify-between">

        {/* SEARCH */}
        <div className="relative w-96">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">

          {/* NOTIFICATION */}
          <button className="relative p-2 rounded-full hover:bg-slate-100 transition">

            <Bell size={22} className="text-slate-600" />

            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>

          </button>

          {/* PROFILE */}
          <div className="flex items-center gap-3 bg-slate-100 px-3 py-2 rounded-xl">

            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              CA
            </div>

            <div className="hidden md:block">

              <h4 className="font-semibold text-sm text-slate-800">
                Caesar Aidarus
              </h4>

              <p className="text-xs text-slate-500">
                Administrator
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default AdminNavbar;