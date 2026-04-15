export type Role = "admin" | "manager" | "fleet_manager" | "chargehand" | "foreman" | "stores";

export type UnitStatus =
  | "Running"
  | "In Workshop"
  | "Breakdown"
  | "Waiting Parts"
  | "Under Service"
  | "Parked";

export interface FleetUnit {
  id: string;
  fleetNumber: string;
  type: string;
  category: string;
  status: UnitStatus;
  location: string;
  km: number;
  hours: number;
  nextServiceKm?: number;
  nextServiceHours?: number;
}

export interface RepairRecord {
  id: string;
  unitId: string;
  fault: string;
  workDone: string;
  workToBeDone: string;
  assignedTo: string;
  openedAt: string;
  status: string;
}

export interface ServiceRecord {
  id: string;
  unitId: string;
  serviceType: string;
  workDone: string;
  serviceDate: string;
  km: number;
  hours: number;
  technician: string;
}

export interface PartRecord {
  id: string;
  partName: string;
  partNumber: string;
  quantity: number;
  reorderLevel: number;
  status: "In Stock" | "To Order" | "On Funding";
  unitPrice: number;
}

export interface WorksheetEntry {
  id: string;
  unitId: string;
  user: string;
  workType: "Repair" | "Service" | "Inspection";
  description: string;
  workDate: string;
  hoursSpent: number;
}

export interface DemoUser {
  email: string;
  password: string;
  role: Role;
  name: string;
}
