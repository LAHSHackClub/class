
import { writable } from "svelte/store";

export interface PopoverContent {
  icon: string;
  message: string;
}

export const popoverContent = writable<PopoverContent|null>(null);