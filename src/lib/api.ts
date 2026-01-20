// src/lib/api.ts
import type { AppointmentRecord, Role } from "../types/workflow";


const STORAGE_KEY = "gradeval360:appointments";

function load(): Record<string, AppointmentRecord> {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
}

function save(db: Record<string, AppointmentRecord>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function now() {
  return new Date().toISOString();
}

function delay(ms = 300) {
  return new Promise((r) => setTimeout(r, ms));
}

// Seed a demo appointment
export async function seedAppointment(id: string) {
  const db = load();
  if (db[id]) return;

  const created = now();
  db[id] = {
    id,
    gaUserId: "ga-001",
    mentorUserId: "mentor-001",
    status: "DRAFT",
    createdAt: created,
    updatedAt: created,
  };

  save(db);
}

export async function getAppointment(id: string) {
  await delay();
  const db = load();
  return db[id] ?? null;
}

export async function submitExpectations(args: {
  appointmentId: string;
  role: Role;
  meetingDate: string;
  goals: string[];
  expectations: string;
}) {
  await delay();
  const { appointmentId, role, meetingDate, goals, expectations } = args;

  if (role !== "GA") throw new Error("Only GA can submit expectations.");

  const db = load();
  const appt = db[appointmentId];
  if (!appt || appt.status !== "DRAFT")
    throw new Error("Invalid appointment state.");

  appt.status = "SUBMITTED";
  appt.expectationSetting = {
    meetingDate,
    goals,
    expectations,
    submittedAt: now(),
  };
  appt.updatedAt = now();

  save(db);
  return appt;
}

export async function acknowledgeExpectations(args: {
  appointmentId: string;
  role: Role;
}) {
  await delay();
  const { appointmentId, role } = args;

  if (role !== "MENTOR")
    throw new Error("Only Mentor can acknowledge.");

  const db = load();
  const appt = db[appointmentId];
  if (!appt || appt.status !== "SUBMITTED")
    throw new Error("Invalid appointment state.");

  appt.status = "ACKNOWLEDGED";
  appt.expectationSetting!.acknowledgedAt = now();
  appt.updatedAt = now();

  save(db);
  return appt;
}
