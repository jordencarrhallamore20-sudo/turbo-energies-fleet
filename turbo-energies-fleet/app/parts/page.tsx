import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/DataTable";
import { parts } from "@/lib/demo-data";
import { currency } from "@/lib/utils";

export default function PartsPage() {
  return (
    <LayoutShell>
      <section className="page-section">
        <PageHeader title="Parts and stock control" subtitle="Stock, to order, and on funding lists with workshop pricing visibility." action={<button className="button">Add part</button>} />
        <DataTable
          headers={["Part", "Part #", "Qty", "Reorder", "Status", "Unit price"]}
          rows={parts.map((part) => [part.partName, part.partNumber, part.quantity, part.reorderLevel, part.status, currency(part.unitPrice)])}
        />
      </section>
    </LayoutShell>
  );
}
