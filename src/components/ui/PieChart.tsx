"use client";

import React from "react";
import { useTaskStore } from "@/lib/taskStore";

// Simple pie chart using SVG
export function PieChart() {
  const tasks = useTaskStore((state) => state.tasks);
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const inprogress = tasks.filter((t) => t.status === "inprogress").length;
  const todo = tasks.filter((t) => t.status === "todo").length;

  const data = [
    { label: "Completed", value: completed, color: "#22c55e" },
    { label: "In Progress", value: inprogress, color: "#eab308" },
    { label: "Todo", value: todo, color: "#3b82f6" },
  ];

  let cumulative = 0;
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg width={140} height={140} viewBox="0 0 32 32" className="mx-auto transform rotate-[-90deg]">
          {data.map((slice) => {
            const start = cumulative;
            const value = total ? slice.value / total : 0;
            cumulative += value;
            const end = cumulative;
            const large = value > 0.5 ? 1 : 0;
            const a = 16 + 15 * Math.cos(2 * Math.PI * start);
            const b = 16 + 15 * Math.sin(2 * Math.PI * start);
            const c = 16 + 15 * Math.cos(2 * Math.PI * end);
            const d = 16 + 15 * Math.sin(2 * Math.PI * end);
            return <path key={slice.label} d={`M16,16 L${a},${b} A15,15 0 ${large},1 ${c},${d} z`} fill={slice.color} stroke="#1e293b" strokeWidth={0.3} className="hover:opacity-80 transition-opacity" />;
          })}
          <circle cx={16} cy={16} r={8} fill="#1e293b" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white text-2xl font-bold">{total}</p>
            <p className="text-blue-200 text-xs font-medium">Tasks</p>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2 w-full">
        {data.map((item) => (
          <div key={item.label} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-blue-100 font-medium">{item.label}</span>
            </div>
            <span className="text-white font-bold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
