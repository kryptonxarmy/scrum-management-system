"use client";
import React, { useState } from "react";
import { PieChart } from "./PieChart";
import Image from "next/image";

export function Sidebar() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "safety", label: "Safety Tasks", icon: "🛡️" },
    { id: "health", label: "Health Tasks", icon: "🏥" },
    { id: "environment", label: "Environment", icon: "🌍" },
    { id: "performance", label: "Performance", icon: "📈" },
  ];

  return (
    <aside className="w-80 min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-gray-900 shadow-2xl flex flex-col relative overflow-hidden border-r-4 border-red-600">
      {/* ExxonMobil Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='exxon-grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23exxon-grid)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 p-6">
        {/* ExxonMobil Header */}
        <div className="mb-10 border-b border-red-600/30 pb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16  bg-black/30 rounded-2xl flex items-center justify-center shadow-xl border-2 border-red-500/50">
              <div className="text-white font-black text-2xl">
                <Image src="/logo/ExxonMobil-Logo.png" alt="ExxonMobil Logo" width={40} height={40} />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight mb-1">EMCL</h1>
              <p className="text-red-200 text-sm font-semibold">SHE DEPARTMENT</p>
              <p className="text-red-300 text-xs">Safety • Health • Environment</p>
            </div>
          </div>
          <div className="bg-red-700/30 rounded-lg p-3 border border-red-600/50">
            <p className="text-red-100 text-xs font-medium">Task Management System</p>
            <p className="text-white text-sm font-bold">Internal Operations Portal</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 mb-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-semibold transition-all duration-200 group ${
                activeTab === item.id ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg transform scale-105 border border-red-500" : "text-red-100 hover:bg-red-800/30 hover:text-white border border-transparent"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="tracking-wide text-sm font-medium">{item.label}</span>
              {activeTab === item.id && <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>}
            </button>
          ))}
        </nav>

        {/* SHE Stats Card */}
        <div className="bg-red-900/40 backdrop-blur-sm rounded-2xl p-6 border border-red-600/50 mb-6">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <span>📊</span>
            SHE Task Overview
          </h3>
          <PieChart />
        </div>

        {/* Safety Metrics */}
        <div className="bg-gradient-to-r from-red-800/30 to-orange-800/30 rounded-xl p-4 border border-red-600/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🛡️</span>
            <h4 className="text-white font-bold text-sm">Safety Metrics</h4>
          </div>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div>
              <div className="text-green-400 text-xl font-bold">0</div>
              <div className="text-red-200 text-xs">Incidents</div>
            </div>
            <div>
              <div className="text-blue-400 text-xl font-bold">15</div>
              <div className="text-red-200 text-xs">Days Safe</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto p-6 relative z-10">
        <div className="bg-gradient-to-r from-red-700/40 to-orange-700/40 rounded-xl p-4 border border-red-600/40">
          <div className="flex items-center gap-2 mb-2">
            <span>🏢</span>
            <p className="text-red-100 text-sm font-semibold">SHE Compliance</p>
          </div>
          <p className="text-white text-2xl font-bold">98.5%</p>
          <p className="text-red-200 text-xs">Department Performance</p>
        </div>
        <div className="mt-4 text-center">
          <p className="text-red-300 text-xs font-medium">© 2025 ExxonMobil Corporation</p>
        </div>
      </div>
    </aside>
  );
}
