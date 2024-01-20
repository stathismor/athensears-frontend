import { formatDate } from "../lib/date";
import type { GigType } from "../types";

type GigProps = {
  gig: GigType;
};

export function Gig({ gig }: GigProps) {
  return (
    <tr className="even:bg-gray-50">
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
        {formatDate(gig.date)}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {gig.artist}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {gig.venue.name}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <a
          href={gig.ticketUrl}
          className="text-indigo-600 hover:text-indigo-900"
        >
          &euro;{gig.price}
        </a>
      </td>
    </tr>
  );
}
