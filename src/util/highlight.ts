
export function generateHighlighter(classes: any[], targetId: string) {
  const highlights = {};
  const x = classes.find(c => c.id === targetId);

  // Highlight futures; classes with this one as a prereq
  classes.filter(c => {
    if (c.Prerequisite?.length < 1) return false;
    if (c.Prerequisite.some(p => p.id === targetId))
      highlights[c.id] = 3;
  });

  // Highlight classes without prereqs
  classes.filter(c => {
    if (c.Prerequisite?.length < 1)
      highlights[c.id] = 2;
  });

  // Highlight shared prereq classes (sidesteps)
  classes.filter(c => {
    if (c.Prerequisite?.length < 1) return false;
    if (c.Prerequisite.every(l => x.Prerequisite.some(p => p.id === l.id)))
      highlights[c.id] = 3;
  });

  // Highlight all prereq classes
  if (x.Prerequisite?.length > 0)
    x.Prerequisite.forEach(p => { highlights[p.id] = 1; });

  return highlights;
}