
const db = [
  "6cdd550534224d4bab43b114d713eda6",
  "1cbfc877f4874cb1815846806321b843",
  "e1ed77c8a9c742489606298da0b735ab",
  "11520001890f4148abd044d31d31f1e8",
  "6142dcf0b3f94950b1d3d6a242436c32",
  "0f53e05965194b8bac763c5150359ed8",
  "3b2cf319b50b48ffacf79f05093f5a68",
  "003583aa4f48480c929fe77bc959b9e1",
  "9ef0d1b5876b479f97530f714f126c32",
  "7ecde15260384b4081138bc551a58009",
];

function getDatabaseID(pathway: string) {
  switch(pathway) {
    case "athletics": return "6cdd550534224d4bab43b114d713eda6";
    case "elective": return "1cbfc877f4874cb1815846806321b843";
    case "english": return "e1ed77c8a9c742489606298da0b735ab";
    case "math": return "11520001890f4148abd044d31d31f1e8";
    case "performing-arts": return "6142dcf0b3f94950b1d3d6a242436c32";
    case "science": return "0f53e05965194b8bac763c5150359ed8";
    case "social-studies": return "3b2cf319b50b48ffacf79f05093f5a68";
    case "ted": return "003583aa4f48480c929fe77bc959b9e1";
    case "visual-arts": return "9ef0d1b5876b479f97530f714f126c32";
    case "world-language": return "7ecde15260384b4081138bc551a58009";
  }
}

export async function getDepartmentExtras(dept: string) {
  if (!dept) return { ok: false, data: null };
  const url = `https://db.lahs.club/cache/517a8232b10d4bd9820e08bf52cfc64d.json`;
  const res = await fetch(url);
  const ok = res.ok;
  if (!ok) return { ok: false, data: null };
  else {
    const data = await res.json();
    const deptExtras = data.find(d => d.Name.toLowerCase() == dept.toLowerCase());
    return { ok: true, data: deptExtras };
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