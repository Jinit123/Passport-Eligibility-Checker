import levenshtein from "fast-levenshtein";

function normalizeName(
  name: string
) {
  return name
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();
}

export function namesMatch(
  names: string[]
) {
  if (names.length < 2)
    return true;

  const base =
    normalizeName(names[0]);

  return names.every((name) => {
    const current =
      normalizeName(name);

    return (
      levenshtein.get(
        base,
        current
      ) <= 2
    );
  });
}

function normalizeDOB(
  dob: string
) {
  return dob.replace(
    /[-]/g,
    "/"
  );
}

export function dobsMatch(
  dobs: string[]
) {
  const base =
    normalizeDOB(dobs[0]);

  return dobs.every(
    (dob) =>
      normalizeDOB(dob) ===
      base
  );
}