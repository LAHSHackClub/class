
function getDatabaseID(pathway: string) {
  switch(pathway) {
    case "art": return "9ef0d1b5876b479f97530f714f126c32";
  }
}

export async function getDatabase(pathway: string) {
  if (!pathway) return { ok: false, data: null };
  const url = `https://db.lahs.club/cache/${getDatabaseID(pathway)}.json`;
  const res = await fetch(url);
  const ok = res.ok;
  if (!ok) return { ok: false, data: null };
  else return { ok: true, data: await res.json() };
}