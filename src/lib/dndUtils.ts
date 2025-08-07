// Drag and drop utility for status change
export const statuses = ["todo", "inprogress", "done"] as const;

export function getNextStatus(current: string) {
  const idx = statuses.indexOf(current);
  return statuses[(idx + 1) % statuses.length];
}
