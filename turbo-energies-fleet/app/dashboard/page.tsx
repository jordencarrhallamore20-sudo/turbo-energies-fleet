import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import QuickActions from "@/components/QuickActions";
import StatCard from "@/components/StatCard";
import DataTable from "@/components/DataTable";
import StatusBadge from "@/components/StatusBadge";
import { fleetUnits, parts, repairs, services, worksheets } from "@/lib/demo-data";

export default function DashboardPage() {
  const running = fleetUnits.filter((unit) => unit.status === "Running").length;
  const down = fleetUnits.filter((unit) => unit.status === "Breakdown").length;
  const service = fleetUnits.filter((unit) => unit.status === "Under Service").length;
  const waitingParts = fleetUnits.filter((unit) => unit.status === "Waiting Parts").length;
  const lowStock = parts.filter((part) => part.quantity <= part.reorderLevel).length;

  return (
    <LayoutShell>
      <section className="page-section">
        <PageHeader title="Turbo Energies overview" subtitle="Live workshop snapshot for fleet, stock, jobs, and service pressure." />

        <div className="stat-grid">
          <StatCard title="Total units" value={fleetUnits.length} note="Seeded fleet register" />
          <StatCard title="Running" value={running} note="Units available" />
          <StatCard title="Breakdowns" value={down} note="Immediate attention" />
          <StatCard title="Under service" value={service} note="Workshop load" />
          <StatCard title="Waiting parts" value={waitingParts} note="Parts pressure" />
          <StatCard title="Low stock items" value={lowStock} note="To order / funding" />
        </div>
      </section>

      <section className="page-section two-col">
        <QuickActions />
        <div className="card">
          <h4>Service reminders</h4>
          <ul className="stack-list">
            {fleetUnits
              .filter((unit) => (unit.nextServiceKm && unit.km >= unit.nextServiceKm - 1000) || (unit.nextServiceHours && unit.hours >= unit.nextServiceHours - 100))
              .slice(0, 6)
              .map((unit) => (
                <li key={unit.id}>
                  <strong>{unit.fleetNumber}</strong>
                  <span className="muted">Next service due soon</span>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <section className="page-section two-col">
        <DataTable
          headers={["Open repairs", "Fault", "Assigned", "Status"]}
          rows={repairs.map((repair) => [repair.unitId.toUpperCase(), repair.fault, repair.assignedTo, <StatusBadge key={repair.id} status={repair.status} />])}
        />
        <DataTable
          headers={["Recent service", "Date", "Type", "Technician"]}
          rows={services.map((service) => [service.unitId.toUpperCase(), service.serviceDate, service.serviceType, service.technician])}
        />
      </section>

      <section className="page-section two-col">
        <DataTable
          headers={["Worksheet", "Unit", "Who", "Hours"]}
          rows={worksheets.map((entry) => [entry.workDate, entry.unitId.toUpperCase(), entry.user, entry.hoursSpent])}
        />
        <DataTable
          headers={["Stock", "Qty", "Reorder", "Status"]}
          rows={parts.map((part) => [part.partName, part.quantity, part.reorderLevel, part.status])}
        />
      </section>
    </LayoutShell>
  );
}
