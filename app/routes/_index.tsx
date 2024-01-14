import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import type { Gig } from "../types";
import { useLoaderData } from "@remix-run/react";
import { get } from "../utils";
import { formatDate } from "../date";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

function formatGigs(gigs: Gig[]) {
  return gigs.map((gig) => ({
    ...gig,
    date: formatDate(gig.date),
  }));
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const result = await get(request);

  const gigs = formatGigs(result || []);

  return { gigs };
};

export default function Index() {
  const { gigs } = useLoaderData<typeof loader>();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Gigs
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the cool gigs in Athens.
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Artist
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Venue
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {gigs.map((gig: Gig) => (
                  <tr key={gig.date} className="even:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {gig.date}
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
