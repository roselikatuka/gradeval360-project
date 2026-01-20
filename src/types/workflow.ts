// src/types/workflow.ts

export type Role = "GA" | "MENTOR" | "ADMIN";

export type AppointmentStatus =
  | "DRAFT"        // GA editing expectations
  | "SUBMITTED"    // GA submitted, Mentor can review
  | "ACKNOWLEDGED";// Mentor acknowledged (read-only)

export type ExpectationSetting = {
  meetingDate: string;
  goals: string[];
  expectations: string;
  submittedAt?: string;
  acknowledgedAt?: string;
};

export type AppointmentRecord = {
  id: string;
  gaUserId: string;
  mentorUserId: string;
  status: AppointmentStatus;
  expectationSetting?: ExpectationSetting;
  createdAt: string;
  updatedAt: string;
};
