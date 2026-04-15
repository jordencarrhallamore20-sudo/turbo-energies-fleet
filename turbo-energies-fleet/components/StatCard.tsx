import { ReactNode } from "react";

export default function StatCard({ title, value, icon, note }: { title: string; value: string | number; icon?: ReactNode; note?: string }) {
  return (
    <div className="card stat-card">
      <div className="stat-head">
        <span className="muted">{title}</span>
        <span>{icon}</span>
      </div>
      <strong className="stat-value">{value}</strong>
      {note ? <p className="muted">{note}</p> : null}
    </div>
  );
}
