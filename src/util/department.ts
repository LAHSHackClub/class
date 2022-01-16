
import { writable } from "svelte/store";

// used to set content of $lib/PathwayOverview in Slideover
// set by [dept].svelte
export const currentDepartment = writable("");