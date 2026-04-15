"use client";

import { demoUsers } from "@/lib/demo-data";
import { Role } from "@/lib/types";

const STORAGE_KEY = "turbo-energies-session";

export interface SessionUser {
  email: string;
  name: string;
  role: Role;
}

export function login(email: string, password: string): SessionUser | null {
  const match = demoUsers.find((user) => user.email === email && user.password === password);
  if (!match) return null;

  const session = { email: match.email, name: match.name, role: match.role };
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  }
  return session;
}

export function getSession(): SessionUser | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  return raw ? (JSON.parse(raw) as SessionUser) : null;
}

export function logout() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(STORAGE_KEY);
  }
}
