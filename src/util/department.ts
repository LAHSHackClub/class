
import { writable } from "svelte/store";
import { getDepartmentExtras } from "./database";

// used to set content of $lib/PathwayOverview in Slideover
// set by [dept].svelte
export const currentDepartment = writable("");
export const departmentExtraInfo = writable(null);

currentDepartment.subscribe(async d => {
  const res = await getDepartmentExtras(d);
  if (!res.ok) return;
  departmentExtraInfo.set(res.data);
});