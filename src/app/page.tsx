import { TaskForm } from "./_partials/TaskForm";
import { TaskBoard } from "./_partials/TaskBoard";
import { Sidebar } from "@/components/ui/Sidebar";
import { PerformanceBar } from "@/components/ui/PerformanceBar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 via-red-50 to-orange-50">
      <Sidebar />
      <main className="flex-1 py-8 px-6 lg:px-12 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {/* ExxonMobil Header */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <h1 className="text-5xl lg:text-6xl font-black text-gray-800 tracking-tight">TaskBoard</h1>
                <p className="text-gray-600 text-lg font-semibold">Safety • Health • Environment Department</p>
                <p className="text-red-600 text-sm font-medium">ExxonMobil Internal Operations System</p>
              </div>
            </div>

            
          </div>

          {/* Task Form */}
          <TaskForm />

          {/* Task Board */}
          <div className="mb-12">
            <TaskBoard />
          </div>

          {/* Performance Section */}
          <section id="performance" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white">📈</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Team Performance</h2>
            </div>
            <PerformanceBar />
          </section>
        </div>
      </main>
    </div>
  );
}
