import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import StatCard from "@/components/StatCard";
import DataTable from "@/components/DataTable";
import { fleetUnits, parts } from "@/lib/demo-data";

export default function ReportsPage() {
  const overdue = fleetUnits.filter((unit) => (unit.nextServiceKm && unit.km > unit.nextServiceKm) || (unit.nextServiceHours && unit.hours > unit.nextServiceHours));
  const funding = parts.filter((part) => part.status === "On Funding");

  return (
    <LayoutShell>
      <section className="page-section">
        <PageHeader title="Reports" subtitle="Downtime, service pressure, funding visibility, and cost control placeholders for the next step." />
        <div className="stat-grid three-up">
          <StatCard title="Overdue service units" value={overdue.length} note="By KM or hours" />
          <StatCard title="Funding requests" value={funding.length} note="Parts awaiting approval" />
          <StatCard title="Printable job cards" value="Ready" note="Wire PDF print next" />
        </div>
      </section>
      <section className="page-section two-col">
        <DataTable
          headers={["Overdue unit", "KM", "Hours", "Target KM", "Target hours"]}
          rows={overdue.length ? overdue.map((unit) => [unit.fleetNumber, unit.km, unit.hours, unit.nextServiceKm ?? "-", unit.nextServiceHours ?? "-"]) : [["None", "-", "-", "-", "-"]]}
        />
        <DataTable
          headers={["Part on funding", "Part #", "Qty", "Unit price"]}
          rows={funding.length ? funding.map((part) => [part.partName, part.partNumber, part.quantity, part.unitPrice]) : [["None", "-", "-", "-"]]}
        />
      </section>
    </LayoutShell>
  );
}
