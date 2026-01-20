import type { Role } from "../types/workflow";


const KEY = "gradeval360:role";

export function getRole(): Role {
  const r = localStorage.getItem(KEY);
  if (r === "GA" || r === "MENTOR" || r === "ADMIN") return r;
  return "GA";
}

export function setRole(role: Role) {
  localStorage.setItem(KEY, role);
}
