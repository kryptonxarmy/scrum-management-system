import { Task } from "@/types/task";
import { Checkbox } from "@/components/ui/checkbox";
import { useTaskStore } from "@/lib/taskStore";
// import { getNextStatus } from "@/lib/dndUtils";
import clsx from "clsx";

export function TaskCard({ task }: { task: Task }) {
  const updateTask = useTaskStore((state) => state.updateTask);

  // Drag event handlers
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  return (
    <div className="rounded-xl p-4 mb-4 shadow-lg border border-gray-100 bg-gradient-to-br from-white to-gray-50 transition-transform hover:scale-[1.03] cursor-grab group" draggable onDragStart={handleDragStart}>
      <div className="flex justify-between items-center mb-2">
        <span
          className={clsx(
            "px-3 py-1 rounded-full text-xs font-semibold border",
            task.status === "todo" && "bg-blue-100 text-blue-700 border-blue-200",
            task.status === "inprogress" && "bg-yellow-100 text-yellow-800 border-yellow-200",
            task.status === "done" && "bg-green-100 text-green-700 border-green-200"
          )}
        >
          {task.status === "inprogress" ? "In Progress" : task.status.charAt(0).toUpperCase() + task.status.slice(1)}
        </span>
        <Checkbox checked={task.completed} onCheckedChange={(checked) => updateTask(task.id, { completed: Boolean(checked) })} />
      </div>
      <h4 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-blue-700 transition">{task.title}</h4>
      <p className="text-sm text-gray-500 mb-2">
        Assignee: <span className="font-medium text-gray-700">{task.assignee}</span>
      </p>
      <div className="flex items-center gap-2 mt-2">
        {task.completed && <span className="inline-block px-2 py-0.5 rounded bg-green-200 text-green-800 text-xs font-semibold">Completed</span>}
        <span className="text-xs text-gray-400">Created: {new Date(task.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
}
