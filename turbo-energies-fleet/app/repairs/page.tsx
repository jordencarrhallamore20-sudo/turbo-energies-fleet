import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/DataTable";
import { repairs } from "@/lib/demo-data";

export default function RepairsPage() {
  return (
    <LayoutShell>
      <section className="page-section">
        <PageHeader title="Repairs and fault reporting" subtitle="Faults, work done, work to be done, and who handled the job." action={<button className="button">New fault report</button>} />
        <DataTable
          headers={["Opened", "Unit", "Fault", "Work done", "Work to be done", "Assigned", "Status"]}
          rows={repairs.map((repair) => [repair.openedAt, repair.unitId.toUpperCase(), repair.fault, repair.workDone, repair.workToBeDone, repair.assignedTo, repair.status])}
        />
      </section>
    </LayoutShell>
  );
}
