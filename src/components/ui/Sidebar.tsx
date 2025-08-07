"use client";
import React, { useState } from "react";
import { PieChart } from "./PieChart";

export function Sidebar() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "tasks", label: "Tasks", icon: "📋" },
    { id: "performance", label: "Performance", icon: "📈" },
  ];

  return (
    <aside className="w-72 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 shadow-2xl flex flex-col relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
      </div>

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">S</div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">Scrum Board</h1>
              <p className="text-blue-200 text-sm font-medium">Team Management Hub</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 mb-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-semibold transition-all duration-200 group ${
                activeTab === item.id ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105" : "text-blue-100 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="tracking-wide">{item.label}</span>
              {activeTab === item.id && <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>}
            </button>
          ))}
        </nav>

        {/* Stats Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <span>📊</span>
            Task Overview
          </h3>
          <PieChart />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto p-6 relative z-10">
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-4 border border-white/10">
          <p className="text-blue-100 text-sm font-medium">Team Productivity</p>
          <p className="text-white text-2xl font-bold">94%</p>
        </div>
      </div>
    </aside>
  );
}
