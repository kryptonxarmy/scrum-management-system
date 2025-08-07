"use client";

import { useState } from "react";
import { useTaskStore } from "@/lib/taskStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = () => {
    if (!title || !assignee) return;
    addTask({
      id: uuidv4(),
      title,
      status: "todo",
      assignee,
      completed: false,
      createdAt: new Date().toISOString(),
    });
    setTitle("");
    setAssignee("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border-2 border-red-200 p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white text-lg">📋</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Create Task</h2>
          {/* <p className="text-red-600 text-sm font-medium">Safety • Health • Environment</p> */}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Task Description</label>
          <Input placeholder="Enter SHE task details..." value={title} onChange={(e) => setTitle(e.target.value)} className="h-12 text-lg border-2 border-gray-300 focus:border-red-500 rounded-xl" />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Responsible Person</label>
          <Input placeholder="Assign to team member..." value={assignee} onChange={(e) => setAssignee(e.target.value)} className="h-12 text-lg border-2 border-gray-300 focus:border-red-500 rounded-xl" />
        </div>
        <div className="flex items-end">
          <Button
            onClick={handleSubmit}
            className="h-12 px-8 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <span className="mr-2">➕</span>
            Add Task
          </Button>
        </div>
      </div>
    </div>
  );
}
