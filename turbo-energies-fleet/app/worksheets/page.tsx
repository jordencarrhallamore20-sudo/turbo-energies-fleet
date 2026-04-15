import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/DataTable";
import { worksheets } from "@/lib/demo-data";

export default function WorksheetsPage() {
  return (
    <LayoutShell>
      <section className="page-section">
        <PageHeader title="Worksheets" subtitle="Track who worked on each unit, when they worked on it, and what they did." action={<button className="button">Add worksheet entry</button>} />
        <DataTable
          headers={["Date", "Unit", "User", "Type", "Description", "Hours"]}
          rows={worksheets.map((entry) => [entry.workDate, entry.unitId.toUpperCase(), entry.user, entry.workType, entry.description, entry.hoursSpent])}
        />
      </section>
    </LayoutShell>
  );
}
