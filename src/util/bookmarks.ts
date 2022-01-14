
import { writable } from "svelte/store";

export const bookmarks = writable<string[]>([]);

export function addBookmark(id: string) {
  bookmarks.update(b => {
    if (b.includes(id))
      return b;
    else b.push(id);
    return b;
  });
}