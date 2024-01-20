import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Fragment } from "react";

import { getGigs } from "../utils";
import type { GigType, GigGroupType } from "../types";
import { sortGigs, groupGigs } from "../lib/gig";

import { Gig } from "./gig";

export const meta: MetaFunction = () => {
  return [
    { title: "ATHENSEARS" },
    { name: "description", content: "Athens ears" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const result = await getGigs(request);
  const sortedGigs = sortGigs(result || []);
  const gigs = groupGigs(sortedGigs);

  return { gigs };
};

function renderMonth(gigGroup: GigGroupType) {
  return (
    <tr>
      <td colSpan={4} className="font-semibold py-2 pl-4 text-lg">
        {gigGroup.month}
      </td>
    </tr>
  );
}

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
                {gigs.map((gigGroup: GigGroupType) => (
                  <Fragment key={gigGroup.month}>
                    {renderMonth(gigGroup)}
                    {gigGroup.gigs.map((gig: GigType) => (
                      <Gig key={gig.date} gig={gig} />
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
