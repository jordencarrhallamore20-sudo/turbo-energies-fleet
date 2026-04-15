import Link from "next/link";
import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/DataTable";
import StatusBadge from "@/components/StatusBadge";
import { fleetUnits } from "@/lib/demo-data";

export default function FleetPage() {
  return (
    <LayoutShell>
      <section className="page-section">
        <PageHeader
          title="Fleet register"
          subtitle="All Turbo Energies yellow machines and support equipment. TRT and TRL removed as requested."
          action={<button className="button">Add unit</button>}
        />
        <DataTable
          headers={["Fleet #", "Type", "Category", "Status", "KM", "Hours", "Location", "Open"]}
          rows={fleetUnits.map((unit) => [
            unit.fleetNumber,
            unit.type,
            unit.category,
            <StatusBadge key={unit.id} status={unit.status} />,
            unit.km,
            unit.hours,
            unit.location,
            <Link key={`${unit.id}-link`} className="text-link" href={`/fleet/${unit.id}`}>
              View
            </Link>,
          ])}
        />
      </section>
    </LayoutShell>
  );
}
