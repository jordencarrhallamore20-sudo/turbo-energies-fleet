import { notFound } from "next/navigation";
import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/DataTable";
import StatusBadge from "@/components/StatusBadge";
import { fleetUnits, repairs, services, worksheets } from "@/lib/demo-data";

export default function FleetUnitPage({ params }: { params: { id: string } }) {
  const unit = fleetUnits.find((entry) => entry.id === params.id);
  if (!unit) return notFound();

  const unitRepairs = repairs.filter((repair) => repair.unitId === unit.id);
  const unitServices = services.filter((service) => service.unitId === unit.id);
  const unitWorks = worksheets.filter((entry) => entry.unitId === unit.id);

  return (
    <LayoutShell>
      <section className="page-section">
        <PageHeader title={unit.fleetNumber} subtitle={`${unit.type} • ${unit.category}`} action={<StatusBadge status={unit.status} />} />

        <div className="detail-grid">
          <div className="card">
            <h4>Unit profile</h4>
            <dl className="detail-list">
              <div><dt>Location</dt><dd>{unit.location}</dd></div>
              <div><dt>KM</dt><dd>{unit.km}</dd></div>
              <div><dt>Hours</dt><dd>{unit.hours}</dd></div>
              <div><dt>Next service KM</dt><dd>{unit.nextServiceKm ?? "-"}</dd></div>
              <div><dt>Next service hours</dt><dd>{unit.nextServiceHours ?? "-"}</dd></div>
            </dl>
          </div>
          <div className="card">
            <h4>Admin controls</h4>
            <div className="quick-actions">
              <button className="button">Edit unit</button>
              <button className="button button-secondary">Update meters</button>
              <button className="button button-secondary">Create job card</button>
              <button className="button button-secondary">Upload invoice/photo</button>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section two-col">
        <DataTable
          headers={["Repair date", "Fault", "Work done", "Status"]}
          rows={unitRepairs.length ? unitRepairs.map((repair) => [repair.openedAt, repair.fault, repair.workDone, repair.status]) : [["-", "No repair records yet", "-", "-"]]}
        />
        <DataTable
          headers={["Service date", "Type", "Work done", "Technician"]}
          rows={unitServices.length ? unitServices.map((service) => [service.serviceDate, service.serviceType, service.workDone, service.technician]) : [["-", "No service records yet", "-", "-"]]}
        />
      </section>

      <section className="page-section">
        <DataTable
          headers={["Worksheet date", "Who", "Type", "Description", "Hours"]}
          rows={unitWorks.length ? unitWorks.map((entry) => [entry.workDate, entry.user, entry.workType, entry.description, entry.hoursSpent]) : [["-", "No worksheet entries yet", "-", "-", "-"]]}
        />
      </section>
    </LayoutShell>
  );
}
