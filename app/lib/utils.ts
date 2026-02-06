export function getYearsOfExperience(startYear: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}

export function scrollTo(id: string) {
  if (typeof document === "undefined") return;
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth"
  });
}
