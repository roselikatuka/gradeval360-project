import { useEffect, useState } from "react";
import type { Role } from "../types/workflow";
import { getRole, setRole } from "../lib/auth";

export default function RoleSwitcher() {
  const [role, setRoleState] = useState<Role>("GA");

  useEffect(() => {
    setRoleState(getRole());
  }, []);

  function onChange(next: Role) {
    setRole(next);
    setRoleState(next);
    window.location.reload();
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-slate-500">Role</span>
      <select
        value={role}
        onChange={(e) => onChange(e.target.value as Role)}
        className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm"
        aria-label="Select role"
      >
        <option value="GA">Graduate Assistant</option>
        <option value="MENTOR">Mentor</option>
        <option value="ADMIN">Admin</option>
      </select>
    </div>
  );
}
