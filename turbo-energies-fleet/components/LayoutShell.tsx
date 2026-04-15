"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { getSession, logout, SessionUser } from "@/lib/auth";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/fleet", label: "Fleet" },
  { href: "/repairs", label: "Repairs" },
  { href: "/services", label: "Services" },
  { href: "/parts", label: "Parts" },
  { href: "/worksheets", label: "Worksheets" },
  { href: "/reports", label: "Reports" },
  { href: "/admin", label: "Admin" },
];

export default function LayoutShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<SessionUser | null>(null);

  useEffect(() => {
    const current = getSession();
    if (!current) {
      router.replace("/login");
      return;
    }
    setSession(current);
  }, [router]);

  if (!session) return null;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <div className="brand-mark">TE</div>
          <h1>Turbo Energy</h1>
          <p className="muted">Fleet Manager</p>
        </div>

        <nav className="nav-list">
          {links
            .filter((link) => session.role === "admin" || link.href !== "/admin")
            .map((link) => (
              <Link key={link.href} href={link.href} className={cn("nav-link", pathname === link.href && "active") }>
                {link.label}
              </Link>
            ))}
        </nav>
      </aside>

      <main className="content-area">
        <header className="topbar">
          <div>
            <h2>{pathname === "/dashboard" ? "Workshop Dashboard" : pathname.replace("/", "").toUpperCase()}</h2>
            <p className="muted">Industrial fleet control for workshop use</p>
          </div>
          <div className="topbar-actions">
            <div className="user-pill">
              <strong>{session.name}</strong>
              <span>{session.role.replace("_", " ")}</span>
            </div>
            <button
              className="button button-secondary"
              onClick={() => {
                logout();
                router.replace("/login");
              }}
            >
              Sign out
            </button>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
