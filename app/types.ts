export type GigType = {
  date: string;
  artist: string;
  venue: { name: string };
  ticketUrl: string;
  price: number;
};

export type GigGroupType = {
  month: string;
  gigs: GigType[];
};
