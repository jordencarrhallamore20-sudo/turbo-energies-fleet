import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/DataTable";
import { services } from "@/lib/demo-data";

export default function ServicesPage() {
  return (
    <LayoutShell>
      <section className="page-section">
        <PageHeader title="Services" subtitle="Service history with KM, hours, work done, and technician records." action={<button className="button">Log service</button>} />
        <DataTable
          headers={["Date", "Unit", "Type", "KM", "Hours", "Work done", "Technician"]}
          rows={services.map((service) => [service.serviceDate, service.unitId.toUpperCase(), service.serviceType, service.km, service.hours, service.workDone, service.technician])}
        />
      </section>
    </LayoutShell>
  );
}
