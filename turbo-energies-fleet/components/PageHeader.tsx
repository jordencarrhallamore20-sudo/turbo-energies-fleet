import { ReactNode } from "react";

export default function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="page-header">
      <div>
        <h3>{title}</h3>
        {subtitle ? <p className="muted">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}
