import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/DataTable";
import { demoUsers } from "@/lib/demo-data";

export default function AdminPage() {
  return (
    <LayoutShell>
      <section className="page-section">
        <PageHeader title="Admin control" subtitle="Major changes, user control, and master data adjustment area." action={<button className="button">Add user</button>} />
        <div className="detail-grid">
          <div className="card">
            <h4>Admin powers</h4>
            <ul className="stack-list">
              <li>Add or remove fleet units</li>
              <li>Edit KM and hours</li>
              <li>Adjust repairs and services</li>
              <li>Approve funding and order requests</li>
              <li>Manage user roles</li>
              <li>Prepare WhatsApp alerts and reminders</li>
            </ul>
          </div>
          <div className="card">
            <h4>Next production tasks</h4>
            <ul className="stack-list">
              <li>Wire real Supabase auth</li>
              <li>Connect CRUD forms to database</li>
              <li>Add file uploads for invoices and photos</li>
              <li>Generate printable PDF job cards</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="page-section">
        <DataTable
          headers={["Name", "Email", "Role"]}
          rows={demoUsers.map((user) => [user.name, user.email, user.role.replace("_", " ")])}
        />
      </section>
    </LayoutShell>
  );
}
