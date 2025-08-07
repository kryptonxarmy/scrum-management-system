"use client";

import React from "react";
import { useTaskStore } from "@/lib/taskStore";

export function PerformanceBar() {
  const tasks = useTaskStore((state) => state.tasks);
  const assignees = Array.from(new Set(tasks.map((t) => t.assignee)));

  if (assignees.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-gray-400 text-2xl">📊</span>
        </div>
        <p className="text-gray-500 text-lg">No team members yet</p>
        <p className="text-gray-400 text-sm">Add some tasks to see performance metrics</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {assignees.map((assignee) => {
        const userTasks = tasks.filter((t) => t.assignee === assignee);
        const completed = userTasks.filter((t) => t.completed).length;
        const inProgress = userTasks.filter((t) => t.status === "inprogress").length;
        const todo = userTasks.filter((t) => t.status === "todo").length;
        const percent = userTasks.length ? Math.round((completed / userTasks.length) * 100) : 0;

        return (
          <div key={assignee} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">{assignee.charAt(0).toUpperCase()}</div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">{assignee}</h3>
                <p className="text-gray-500 text-sm">{userTasks.length} total tasks</p>
              </div>
              <div className="ml-auto text-right">
                <div className="text-2xl font-bold text-gray-800">{percent}%</div>
                <div className="text-xs text-gray-500">completion</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${percent}%`,
                    background: percent === 100 ? "linear-gradient(to right, #22c55e, #16a34a)" : percent >= 50 ? "linear-gradient(to right, #eab308, #ca8a04)" : "linear-gradient(to right, #3b82f6, #2563eb)",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-blue-50 rounded-lg p-2">
                <div className="text-blue-600 font-bold text-lg">{todo}</div>
                <div className="text-blue-500 text-xs">Todo</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2">
                <div className="text-yellow-600 font-bold text-lg">{inProgress}</div>
                <div className="text-yellow-500 text-xs">In Progress</div>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <div className="text-green-600 font-bold text-lg">{completed}</div>
                <div className="text-green-500 text-xs">Completed</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
