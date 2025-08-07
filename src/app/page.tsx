import { TaskForm } from "./_partials/TaskForm";
import { TaskBoard } from "./_partials/TaskBoard";
import { Sidebar } from "@/components/ui/Sidebar";
import { PerformanceBar } from "@/components/ui/PerformanceBar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <Sidebar />
      <main className="flex-1 py-8 px-6 lg:px-12 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-black text-gray-800 tracking-tight">Project Sprint</h1>
                <p className="text-gray-600 text-lg font-medium">Manage your team&apos;s productivity efficiently</p>
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
