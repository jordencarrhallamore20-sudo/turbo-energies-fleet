export default function QuickActions() {
  const actions = [
    "Create job card",
    "Log service",
    "Add stock issue",
    "Add downtime entry",
    "Upload invoice/photo",
    "Send WhatsApp reminder",
  ];

  return (
    <div className="card">
      <h4>Quick actions</h4>
      <div className="quick-actions">
        {actions.map((action) => (
          <button key={action} className="button button-secondary">{action}</button>
        ))}
      </div>
    </div>
  );
}
