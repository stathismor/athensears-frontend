import type { GigType, GigGroupType } from "../types";

export function sortGigs(gigs: GigType[]) {
  return gigs.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

export function groupGigs(gigs: GigType[]): GigGroupType[] {
  const groupedByMonth: Record<string, GigGroupType> = {};

  gigs.forEach((gig) => {
    const month = new Date(gig.date).toLocaleString("default", {
      month: "long",
    });
    groupedByMonth[month] ||= { month, gigs: [] };
    groupedByMonth[month].gigs.push(gig);
  });

  return Object.values(groupedByMonth);
}
