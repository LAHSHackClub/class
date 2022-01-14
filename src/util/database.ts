
const db = [
  "9ef0d1b5876b479f97530f714f126c32",
  "e1ed77c8a9c742489606298da0b735ab",
  "11520001890f4148abd044d31d31f1e8",
  "0f53e05965194b8bac763c5150359ed8"
];

function getDatabaseID(pathway: string) {
  switch(pathway) {
    case "art": return "9ef0d1b5876b479f97530f714f126c32";
    case "english": return "e1ed77c8a9c742489606298da0b735ab";
    case "math": return "11520001890f4148abd044d31d31f1e8";
    case "science": return "0f53e05965194b8bac763c5150359ed8";
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

export async function aggregate() {
  let aggregateData = [];
  for (const id of db) {
    const url = `https://db.lahs.club/cache/${id}.json`;
    const res = await (await fetch(url)).json();
    aggregateData.push(...res);
  };
  return aggregateData;
}