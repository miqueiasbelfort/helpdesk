export function getElapsedHours(targetTime) {
    if (!targetTime) return "Invalid date";
  
    const targetDate = new Date(targetTime);
    const now = new Date();
    const diffMs = now - targetDate;
  
    if (diffMs <= 0) return "0 horas";
  
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    return `${hours} hora${hours !== 1 ? "s" : ""}`;
  }