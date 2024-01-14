
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// .netlify/functions-internal/server.mjs
import { handleRequest } from "@netlify/remix-adapter";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useLoaderData } from "@remix-run/react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
import { createRequestHandler } from "@netlify/remix-adapter";
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var tailwind_default = "/build/_assets/tailwind-6U6DKY36.css";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {}),
      /* @__PURE__ */ jsx(LiveReload, {})
    ] })
  ] });
}
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader,
  meta: () => meta
});
async function get(request) {
  let PROJECT_ID = "zk524vne", DATASET = "production", QUERY = encodeURIComponent(`*[_type=="gig"]{
    date,
    artist,
    venue->,
    ticketUrl,
    price
  }`), url = new URL(
    `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`
  );
  return (await (await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: request.headers.get("Cookie") ?? ""
    }
  })).json()).result;
}
var meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
var loader = async ({ request }) => ({ gigs: await get(request) });
function Index() {
  let { gigs } = useLoaderData();
  return /* @__PURE__ */ jsxs2("div", { className: "px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx2("div", { className: "sm:flex sm:items-center", children: /* @__PURE__ */ jsxs2("div", { className: "sm:flex-auto", children: [
      /* @__PURE__ */ jsx2("h1", { className: "text-base font-semibold leading-6 text-gray-900", children: "Gigs" }),
      /* @__PURE__ */ jsx2("p", { className: "mt-2 text-sm text-gray-700", children: "A list of all the cool gigs in Athens." })
    ] }) }),
    /* @__PURE__ */ jsx2("div", { className: "mt-8 flow-root", children: /* @__PURE__ */ jsx2("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ jsx2("div", { className: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs2("table", { className: "min-w-full divide-y divide-gray-300", children: [
      /* @__PURE__ */ jsx2("thead", { children: /* @__PURE__ */ jsxs2("tr", { children: [
        /* @__PURE__ */ jsx2(
          "th",
          {
            scope: "col",
            className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3",
            children: "Date"
          }
        ),
        /* @__PURE__ */ jsx2(
          "th",
          {
            scope: "col",
            className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
            children: "Artist"
          }
        ),
        /* @__PURE__ */ jsx2(
          "th",
          {
            scope: "col",
            className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
            children: "Venue"
          }
        ),
        /* @__PURE__ */ jsx2(
          "th",
          {
            scope: "col",
            className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
            children: "Price"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx2("tbody", { className: "bg-white", children: gigs.map((gig) => /* @__PURE__ */ jsxs2("tr", { className: "even:bg-gray-50", children: [
        /* @__PURE__ */ jsx2("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3", children: gig.date }),
        /* @__PURE__ */ jsx2("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: gig.artist }),
        /* @__PURE__ */ jsx2("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: gig.venue.name }),
        /* @__PURE__ */ jsx2("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: /* @__PURE__ */ jsxs2(
          "a",
          {
            href: gig.ticketUrl,
            className: "text-indigo-600 hover:text-indigo-900",
            children: [
              "\u20AC",
              gig.price
            ]
          }
        ) })
      ] }, gig.date)) })
    ] }) }) }) })
  ] });
}
var assets_manifest_default = { entry: { module: "/build/entry.client-SVPIRY4Z.js", imports: ["/build/_shared/chunk-MNAXAH3Z.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-HIISMQH6.js", imports: void 0, hasAction: false, hasLoader: false, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: true, caseSensitive: void 0, module: "/build/routes/_index-LOSFDJLG.js", imports: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false } }, version: "e7376d3d", hmr: void 0, url: "/build/manifest-E7376D3D.js" };
var mode = "production";
var assetsBuildDirectory = "public/build";
var future = { v3_fetcherPersist: false, v3_relativeSplatPath: false };
var publicPath = "/build/";
var entry = { module: entry_server_exports };
var routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: index_exports
  }
};
var handler = createRequestHandler({
  build: server_build_exports,
  mode: "production"
});
var server_default = handler;
var config = { path: "/*", preferStatic: true };
export {
  config,
  server_default as default
};
