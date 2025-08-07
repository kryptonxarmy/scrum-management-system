"use client";

import { useTaskStore } from "@/lib/taskStore";
import clsx from "clsx";
// import { useLocalTasks } from "@/lib/useLocalTask";
import { TaskCard } from "./TaskCard";

export function TaskBoard() {
  const tasks = useTaskStore((state) => state.tasks);
  const updateTask = useTaskStore((state) => state.updateTask);
  const statuses = ["todo", "inprogress", "done"] as const;

  // Drop handler for status columns
  const handleDrop = (e: React.DragEvent, status: string) => {
    const id = e.dataTransfer.getData("taskId");
    if (id && ["todo", "inprogress", "done"].includes(status)) {
      updateTask(id, { status: status as "todo" | "inprogress" | "done" });
    }
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {statuses.map((status) => (
        <div
          key={status}
          className={clsx(
            "rounded-2xl p-6 shadow-xl min-h-[260px] border-2 transition-all",
            status === "todo" && "bg-gradient-to-br from-blue-50 to-white border-blue-200",
            status === "inprogress" && "bg-gradient-to-br from-yellow-50 to-white border-yellow-200",
            status === "done" && "bg-gradient-to-br from-green-50 to-white border-green-200"
          )}
          onDrop={(e) => handleDrop(e, status)}
          onDragOver={handleDragOver}
        >
          <h2 className={clsx("font-extrabold text-lg mb-4 tracking-wide", status === "todo" && "text-blue-700", status === "inprogress" && "text-yellow-800", status === "done" && "text-green-700")}>
            {status === "inprogress" ? "In Progress" : status.charAt(0).toUpperCase() + status.slice(1)}
          </h2>
          <div className="space-y-4">
            {tasks
              .filter((t) => t.status === status)
              .map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
