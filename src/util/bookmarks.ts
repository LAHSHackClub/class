
import { writable } from "svelte/store";

export const bookmarks = writable<string[]>([]);

export function toggleBookmark(id: string, ls: Storage) {
  let added: boolean; // false = removed
  bookmarks.update(b => {
    if (b.includes(id)) {
      b.splice(b.indexOf(id), 1);
      added = false;
    }
    else {
      b.push(id);
      added = true;
    }

    ls.setItem("bookmarks", JSON.stringify(b));
    
    return b;
  });

  return added;
}