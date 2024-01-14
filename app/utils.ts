export async function get(request: Request) {
  const PROJECT_ID = "zk524vne";
  const DATASET = process.env.SANITY_STUDIO_API_DATASET;
  const QUERY = encodeURIComponent(`*[_type=="gig"]{
    date,
    artist,
    venue->,
    ticketUrl,
    price
  }`);

  const url = new URL(
    `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`
  );

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: request.headers.get("Cookie") ?? "",
    },
  });

  const jsonResponse = await response.json();

  return jsonResponse.result;
}
