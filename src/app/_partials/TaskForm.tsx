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
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-lg">✨</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Create New Task</h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input placeholder="What needs to be done?" value={title} onChange={(e) => setTitle(e.target.value)} className="h-12 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl" />
        </div>
        <div className="flex-1">
          <Input placeholder="Who's responsible?" value={assignee} onChange={(e) => setAssignee(e.target.value)} className="h-12 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl" />
        </div>
        <Button
          onClick={handleSubmit}
          className="h-12 px-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          <span className="mr-2">➕</span>
          Add Task
        </Button>
      </div>
    </div>
  );
}
