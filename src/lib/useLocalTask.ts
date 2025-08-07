// lib/useLocalTasks.ts
"use client";
import { Task } from "@/types/task";
import { useEffect, useState } from "react";

export function useLocalTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => setTasks((prev) => [...prev, task]);
  const updateTask = (id: string, updated: Partial<Task>) => setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, ...updated } : t)));
  const removeTask = (id: string) => setTasks((prev) => prev.filter((t) => t.id !== id));

  return { tasks, addTask, updateTask, removeTask };
}
