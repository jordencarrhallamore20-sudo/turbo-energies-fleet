import { UnitStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function StatusBadge({ status }: { status: UnitStatus | string }) {
  return <span className={cn("status-badge", status.toLowerCase().replace(/\s+/g, "-"))}>{status}</span>;
}
