
import { writable } from "svelte/store";

export const bookmarks = writable<string[]>([]);

function addBookmark(id: string) {
  bookmarks.update(b => {
    b.push(id);
    return b;
  });
}