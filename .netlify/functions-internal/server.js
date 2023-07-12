var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:D:\Remix\contentful-remix-portfolio-starter\app\root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/components/NavBar.jsx
var import_react2 = require("@remix-run/react"), import_react3 = require("react"), import_solid = require("@heroicons/react/24/solid");
function NavBar() {
  let [isOpen, setIsOpen] = (0, import_react3.useState)(!1);
  return /* @__PURE__ */ React.createElement("header", {
    className: "bg-twilightPurple sm:flex sm:justify-between items-center sm:px-8 sm:py-4 border-b-2 border-cyan"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between px-4 pt-4 sm:p-0"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react2.NavLink, {
    to: "/",
    className: "flex flex-nowrap"
  }, /* @__PURE__ */ React.createElement(import_solid.CodeBracketIcon, {
    className: "h-10 w-10 text-cyan p-1 rounded-full border-2 border-cyan mr-2"
  }), /* @__PURE__ */ React.createElement("span", {
    "aria-label": "Greek Nous",
    className: "text-2xl md:text-3xl text-cyan font-sigmar"
  }, "Greeknous"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: (e) => {
      setIsOpen((prev) => !prev);
    },
    className: "text-happy focus:text-secondary/80 hover:text-primary sm:hidden dark:text-white dark:focus:text-primary"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "fill-current h-8 w-8",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, isOpen ? /* @__PURE__ */ React.createElement("path", {
    d: "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
  }) : /* @__PURE__ */ React.createElement("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
  }), /* @__PURE__ */ React.createElement("title", null, "Menu"))))), /* @__PURE__ */ React.createElement("div", {
    className: `${isOpen ? "block" : "hidden"} sm:flex sm:justify-between sm:text-lg sm:p-0 dark:text-white`
  }, /* @__PURE__ */ React.createElement(import_react2.NavLink, {
    to: "/writings",
    className: "block sm:ml-4 text-happy py-2 px-4 font-semibold hover:underline hover:bg-deepPurple hover:text-cyan hover:py-2 hover:px-4 rounded-lg transition duration-300 ease-in-out"
  }, "Writings"), /* @__PURE__ */ React.createElement(import_react2.NavLink, {
    to: "/talks",
    className: "block sm:ml-4 text-happy py-2 px-4 font-semibold hover:underline hover:bg-deepPurple hover:text-cyan hover:py-2 hover:px-4 rounded-lg transition duration-300 ease-in-out"
  }, "Talks"), /* @__PURE__ */ React.createElement(import_react2.NavLink, {
    to: "/projects",
    className: "block sm:ml-4 text-happy py-2 px-4 font-semibold hover:underline hover:bg-deepPurple hover:text-cyan hover:py-2 hover:px-4 rounded-lg transition duration-300 ease-in-out"
  }, "Projects"), /* @__PURE__ */ React.createElement(import_react2.NavLink, {
    to: "/about",
    className: "block sm:ml-4 text-happy py-2 px-4 font-semibold hover:underline hover:bg-deepPurple hover:text-cyan hover:py-2 hover:px-4 rounded-lg transition duration-300 ease-in-out"
  }, "About")));
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-OJQYLW4K.css";

// route:D:\Remix\contentful-remix-portfolio-starter\app\root.jsx
var meta = () => ({
  charset: "utf-8",
  title: "Greek Nous - Home",
  description: "Frontend Developer specializing in Headless Ecommerce!",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap" }
];
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react4.Meta, null), /* @__PURE__ */ React.createElement(import_react4.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-twilightPurple h-screen flex flex-col gap-y-4"
  }, /* @__PURE__ */ React.createElement(NavBar, null), /* @__PURE__ */ React.createElement("main", {
    className: "container mx-auto pt-8 pb-32 lg:py-16 flex-grow"
  }, /* @__PURE__ */ React.createElement(import_react4.Outlet, null)), /* @__PURE__ */ React.createElement("footer", {
    className: "p-4 bg-twilightPurple border-t-2 border-primary shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-secondary"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm text-happy sm:text-center dark:text-gray-400"
  }, "Created with", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/",
    className: "hover:underline"
  }, " Remix"), " and", /* @__PURE__ */ React.createElement("a", {
    href: "https://contentful.com/",
    className: "hover:underline"
  }, " Contentful")), /* @__PURE__ */ React.createElement("ul", {
    className: "flex flex-wrap items-center mt-3 text-sm text-happy dark:text-happy sm:mt-0"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.contentful.com/remix-tutorial/",
    className: "mr-4 hover:underline md:mr-6"
  }, "Read More")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/contentful/starter-remix-portfolio",
    className: "mr-4 hover:underline md:mr-6"
  }, "GitHub")))), /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)));
}

// route:D:\Remix\contentful-remix-portfolio-starter\app\routes\writings\$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug,
  loader: () => loader,
  meta: () => meta2,
  richTextRenderOptions: () => richTextRenderOptions
});
var import_node = require("@remix-run/node"), import_react5 = require("@remix-run/react");

// app/models/contentful.server.js
var import_plaiceholder = require("plaiceholder"), SPACE = process.env.CONTENTFUL_SPACE_ID, TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
async function apiCall(query, variables) {
  let fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`, options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({ query, variables })
  };
  return await fetch(fetchUrl, options);
}
async function getProjects() {
  let formattedData = await (await (await apiCall(`
    {
        projectsCollection (order:releaseDate_DESC){
            items {
                title
                desc {
                    json
                }
                releaseDate
                link
                previewImage {
                    description
                    url
                }
            }
        }
    }`)).json()).data.projectsCollection.items.map(async (project) => {
    let { title, desc, releaseDate, link, previewImage } = project, { css, img } = await (0, import_plaiceholder.getPlaiceholder)(previewImage.url);
    return {
      title,
      desc,
      releaseDate,
      link,
      image: img,
      imageAlt: previewImage.description,
      css
    };
  });
  return Promise.all(formattedData);
}
async function getTalks() {
  return await (await (await apiCall(`{
        talksCollection {
            items {
                sys {
                    id
                }
                title
                description {
                    json
                }
                link
                type
                previewImage {
                    description
                    url
                }
            }
        }
    }`)).json()).data.talksCollection.items;
}
async function getAllBlogs() {
  return await (await (await apiCall(`
    {
        blogCollection(order:sys_firstPublishedAt_DESC) {
        items {
          title
          slug
          description
          tag
          sys {
            firstPublishedAt
          }
        }
      }
    }
    `)).json()).data.blogCollection.items;
}
async function getSingleBlog(slug) {
  return await (await (await apiCall(`
  query($slug: String){
      blogCollection(where: {slug:$slug}) {
          items {
              title
              description
              tag
              canonicalUrl
              blogBody {
                json
              }
              sys {
                publishedAt
              }
              openGraphImage {
                url
                title
              }
            }
          }
  }
  `, {
    slug
  })).json()).data.blogCollection.items[0];
}
async function getPage(title) {
  return await (await (await apiCall(`
    query($title:String) {
        pageCollection(where:{title:$title}){
          items{
            title
            description{
              json
            }
            rolesCollection{
              items{
                roleTitle
              }
            }
            linksCollection{
              items {
                name
                url
              }
            }
            seoMetadata{
              title
              ogImage {
                url
              }
              description
            }
            imageForPage {
              url
              title
              description
            }
          }
        }
      }
    `, {
    title
  })).json()).data.pageCollection.items[0];
}
var client = { getProjects, getTalks, getAllBlogs, getSingleBlog, getPage };

// app/components/Title.jsx
function Title({ title, emoji }) {
  return /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl leading-normal sm:text-5xl font-semibold sm:leading-normal font-body text-happy dark:text-primary pb-12"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "rounded border-b-4 border-happy dark:border-primary"
  }, title), "\xA0", /* @__PURE__ */ React.createElement("span", {
    role: "img",
    "aria-label": title
  }, emoji));
}

// route:D:\Remix\contentful-remix-portfolio-starter\app\routes\writings\$slug.jsx
var import_rich_text_react_renderer = require("@contentful/rich-text-react-renderer"), import_rich_text_types = require("@contentful/rich-text-types"), loader = async ({ params }) => {
  let { slug } = params;
  return (0, import_node.json)(await client.getSingleBlog(slug));
}, meta2 = ({ data }) => {
  let { title, description, openGraphImage } = data;
  return {
    title,
    description,
    "og:image": `${openGraphImage.url || ""} ${openGraphImage.title || ""}`
  };
}, richTextRenderOptions = {
  renderNode: {
    [import_rich_text_types.INLINES.HYPERLINK]: (node, children) => {
      let { data } = node, { uri } = data;
      return /* @__PURE__ */ React.createElement("a", {
        className: "text-happy underline dark:text-secondary",
        target: "_blank",
        href: uri,
        rel: "noreferrer"
      }, children[0]);
    },
    [import_rich_text_types.BLOCKS.PARAGRAPH]: (_node, children) => /* @__PURE__ */ React.createElement("p", {
      className: "text-white text-lg dark:text-gray-400 leading-relaxed mb-4 text-justify"
    }, children),
    [import_rich_text_types.BLOCKS.HEADING_1]: (_node, children) => /* @__PURE__ */ React.createElement("h2", {
      className: "text-happy text-4xl"
    }, children),
    [import_rich_text_types.BLOCKS.HEADING_2]: (_node, children) => /* @__PURE__ */ React.createElement("h2", {
      className: "text-2xl font-semibold text-happy my-6"
    }, children),
    [import_rich_text_types.BLOCKS.OL_LIST]: (_node, children) => /* @__PURE__ */ React.createElement("ol", {
      className: "list-decimal"
    }, children),
    [import_rich_text_types.BLOCKS.LIST_ITEM]: (_node, children) => /* @__PURE__ */ React.createElement("li", {
      className: "text-happy text-lg dark:text-gray-400 mb-4"
    }, children)
  }
};
function PostSlug() {
  let { title, description, tag, blogBody, sys, canonicalUrl, openGraphImage } = (0, import_react5.useLoaderData)(), canonicalName = "";
  return canonicalUrl && (canonicalName = canonicalUrl.replace("https://", "").split("/")[0]), /* @__PURE__ */ React.createElement("div", {
    className: "sm:max-w-3xl mx-auto px-4 sm:px-0 pb-28"
  }, /* @__PURE__ */ React.createElement(Title, {
    title
  }), openGraphImage && /* @__PURE__ */ React.createElement("img", {
    src: openGraphImage.url,
    alt: openGraphImage.title,
    className: "w-full h-auto object-cover rounded-lg pb-10"
  }), description && /* @__PURE__ */ React.createElement("p", {
    className: "text-xl text-cyan dark:text-gray-400 mb-8"
  }, description), tag && /* @__PURE__ */ React.createElement("p", {
    className: "text-lg font-bold text-white dark:text-cyan mx-2 mb-4 my-4"
  }, "Tags:", " ", tag.map((t, index) => /* @__PURE__ */ React.createElement("span", {
    key: index,
    className: "bg-deepPurple px-2 py-1 mx-2 rounded-full border border-white"
  }, t, index < tag.length - 1 && " "))), "				", /* @__PURE__ */ React.createElement("article", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "post"
  }, canonicalUrl ? /* @__PURE__ */ React.createElement("p", {
    className: "text-lg my-8 italic"
  }, "This blog was originally shared on", " ", /* @__PURE__ */ React.createElement("a", {
    href: canonicalUrl
  }, canonicalName), ".") : null, (0, import_rich_text_react_renderer.documentToReactComponents)(blogBody.json, richTextRenderOptions))), /* @__PURE__ */ React.createElement("p", {
    className: "text-hover italic"
  }, "Last Updated: ", new Date(sys.publishedAt).toDateString()));
}

// route:D:\Remix\contentful-remix-portfolio-starter\app\routes\writings\index.jsx
var writings_exports = {};
__export(writings_exports, {
  default: () => Writings,
  loader: () => loader2,
  meta: () => meta3
});
var import_node2 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
async function loader2() {
  let blogs = await client.getAllBlogs(), page = await client.getPage("Writings");
  return (0, import_node2.json)({ blogs, page });
}
var meta3 = ({ data }) => {
  let { seoMetadata } = data.page;
  return {
    title: seoMetadata.title,
    description: seoMetadata.description,
    "og:image": `${seoMetadata.ogImage.url || ""} ${seoMetadata.ogImage.title || ""}`
  };
};
function PostList(data) {
  return data.map((post) => /* @__PURE__ */ React.createElement("div", {
    key: post.slug,
    className: "mt-8 pb-20 border-b-2 border-light last:border-0"
  }, /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: post.slug
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl font-medium sm:text-3xl cursor-pointer text-happy hover:text-cyan dark:text-gray-300 dark:hover:text-secondary"
  }, post.title)), /* @__PURE__ */ React.createElement("p", {
    className: "py-2 sm:py-4 text-sm sm:text-lg font-body text-white dark:text-gray-400"
  }, post.description), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between mb-1"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-cyan sm:text-lg dark:text-gray-300"
  }, /* @__PURE__ */ React.createElement("span", {
    role: "img",
    "aria-label": "calendar emoji"
  }, "\u{1F5D3} ", " "), new Date(post.sys.firstPublishedAt).toDateString()), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, post.tag.map((item) => /* @__PURE__ */ React.createElement("span", {
    key: item,
    className: "mr-1 sm:mr-2 text-xs sm:text-sm rounded-full py-1 px-2 sm:px-3 text-happy dark:text-secondary"
  }, "#", item)))), /* @__PURE__ */ React.createElement("a", {
    href: `writings/${post.slug}`
  }, /* @__PURE__ */ React.createElement("p", {
    className: "pt-1 sm:pt-2 text-xs sm:text-base text-lightTeal cursor-pointer hover:text-happy w-fit dark:text-secondary"
  }, "Read More ", /* @__PURE__ */ React.createElement("span", {
    role: "img",
    "aria-label": "arrow"
  }, "\u2192")))));
}
function Writings() {
  let { blogs, page } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "px-8 sm:px-0 sm:max-w-2xl mx-auto"
  }, /* @__PURE__ */ React.createElement(Title, {
    title: "Writings",
    emoji: "\u{1F4DD}"
  }), page.seoMetadata && page.seoMetadata.ogImage && /* @__PURE__ */ React.createElement("img", {
    src: page.seoMetadata.ogImage.url,
    alt: page.seoMetadata.title
  }), PostList(blogs));
}

// route:D:\Remix\contentful-remix-portfolio-starter\app\routes\projects.jsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects,
  loader: () => loader3,
  meta: () => meta4
});
var import_node3 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/components/ProjectCard.jsx
var import_react_spring = require("react-spring"), import_rich_text_react_renderer2 = require("@contentful/rich-text-react-renderer");

// app/components/richTextRenderOptions.jsx
var import_react7 = __toESM(require("react")), import_rich_text_types2 = require("@contentful/rich-text-types"), richTextRenderOptions2 = {
  renderNode: {
    [import_rich_text_types2.INLINES.HYPERLINK]: (node, children) => {
      let { data } = node, { uri } = data;
      return /* @__PURE__ */ import_react7.default.createElement("a", {
        className: "text-primary underline dark:text-secondary",
        target: "_blank",
        href: uri,
        rel: "noreferrer"
      }, children[0]);
    },
    [import_rich_text_types2.BLOCKS.PARAGRAPH]: (node, children) => /* @__PURE__ */ import_react7.default.createElement("p", {
      className: "text-gray-700 text-base dark:text-gray-400"
    }, children)
  }
};

// app/components/ProjectCard.jsx
function ProjectCard({ project }) {
  let fadeIn = (0, import_react_spring.useSpring)({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }
  });
  return /* @__PURE__ */ React.createElement(import_react_spring.animated.li, {
    key: project.title,
    style: fadeIn,
    className: "relative group block w-full overflow-hidden rounded-lg bg-cyan dark:bg-gray-700 shadow-md cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "aspect-w-10 aspect-h-7 overflow-hidden"
  }, /* @__PURE__ */ React.createElement("img", __spreadProps(__spreadValues({
    alt: ""
  }, project.image), {
    className: "pointer-events-none object-cover group-hover:opacity-75"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "px-6 py-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold text-lg sm:text-xl mb-2 dark:text-secondary"
  }, project.title, " ", /* @__PURE__ */ React.createElement("a", {
    href: project.link,
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("span", {
    role: "img",
    "aria-label": "internet",
    className: "cursor-pointer"
  }, "\u{1F517}"))), (0, import_rich_text_react_renderer2.documentToReactComponents)(project.desc.json, richTextRenderOptions2)));
}
var ProjectCard_default = ProjectCard;

// app/components/ProjectsGrid.jsx
function ProjectsGrid({ projects }) {
  return /* @__PURE__ */ React.createElement("ul", {
    className: "grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:gap-6 2xl:gap-8 pt-8 xl:py-20 px-4"
  }, projects.map((project) => /* @__PURE__ */ React.createElement(ProjectCard_default, {
    key: project.title,
    project
  })));
}
var ProjectsGrid_default = ProjectsGrid;

// route:D:\Remix\contentful-remix-portfolio-starter\app\routes\projects.jsx
async function loader3() {
  let projects = await client.getProjects(), page = await client.getPage("Projects");
  return (0, import_node3.json)({ projects, page });
}
var meta4 = ({ data }) => {
  let { title, description, ogImage } = data.page.seoMetadata;
  return {
    title,
    description,
    "og:image": `${ogImage.url}`
  };
};
function Projects() {
  let { projects } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "px-8 md:px-24 lg:px-32"
  }, /* @__PURE__ */ React.createElement(Title, {
    title: "Projects",
    emoji: "\u{1F4BB}"
  }), /* @__PURE__ */ React.createElement(ProjectsGrid_default, {
    projects
  }));
}

// route:D:\Remix\contentful-remix-portfolio-starter\app\routes\about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  loader: () => loader4,
  meta: () => meta5,
  richTextRenderOptions: () => richTextRenderOptions3
});
var import_node4 = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var import_rich_text_react_renderer3 = require("@contentful/rich-text-react-renderer"), import_rich_text_types3 = require("@contentful/rich-text-types");
async function loader4() {
  return (0, import_node4.json)(await client.getPage("About"));
}
var meta5 = ({ data }) => {
  let { seoMetadata } = data;
  return {
    title: seoMetadata.title,
    description: seoMetadata.description,
    "og:image": `${seoMetadata.ogImage.url}`
  };
}, richTextRenderOptions3 = {
  renderNode: {
    [import_rich_text_types3.INLINES.HYPERLINK]: (node, children) => {
      let { data } = node, { uri } = data;
      return /* @__PURE__ */ React.createElement("a", {
        className: "text-primary underline dark:text-secondary",
        target: "_blank",
        href: uri,
        rel: "noreferrer"
      }, children[0]);
    }
  }
};
function About() {
  let { seoMetadata, description } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "px-8 sm:px-0 sm:max-w-2xl mx-auto mb-8"
  }, /* @__PURE__ */ React.createElement(Title, {
    title: seoMetadata.title
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 text-white text-lg dark:text-gray-300"
  }, (0, import_rich_text_react_renderer3.documentToReactComponents)(description.json, richTextRenderOptions3)));
}

// route:D:\Remix\contentful-remix-portfolio-starter\app\routes\index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader5,
  meta: () => meta6
});
var import_node7 = require("@remix-run/node"), import_react12 = require("@remix-run/react");

// app/components/Hero.jsx
var import_react_text_loop_next = require("react-text-loop-next"), import_node6 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_rich_text_types4 = require("@contentful/rich-text-types"), import_rich_text_react_renderer4 = require("@contentful/rich-text-react-renderer"), import_react_spring2 = require("react-spring");

// app/components/SocialMedia.jsx
var import_react10 = require("@remix-run/react"), import_fa = require("react-icons/fa"), import_node5 = require("@remix-run/node");
function SocialMedia() {
  let { linksCollection } = (0, import_react10.useLoaderData)(), links2 = {};
  linksCollection.items.forEach((link) => Object.assign(links2, Object.fromEntries([Object.values(link)])));
  let socialMediaLinks = Object.keys(links2).map((key) => {
    let Icon;
    switch (key) {
      case "LinkedIn":
        Icon = /* @__PURE__ */ React.createElement(import_fa.FaLinkedin, {
          className: "h-8 w-8 sm:h-12 sm:w-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-125 fill-happy"
        });
        break;
      case "GitHub":
        Icon = /* @__PURE__ */ React.createElement(import_fa.FaGithub, {
          className: "h-8 w-8 sm:h-12 sm:w-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-125 fill-happy"
        });
        break;
      case "Facebook":
        Icon = /* @__PURE__ */ React.createElement(import_fa.FaFacebook, {
          className: "h-8 w-8 sm:h-12 sm:w-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-125 fill-happy"
        });
        break;
      case "Instagram":
        Icon = /* @__PURE__ */ React.createElement(import_fa.FaInstagram, {
          className: "h-8 w-8 sm:h-12 sm:w-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-125 fill-happy"
        });
        break;
      case "Twitter":
        Icon = /* @__PURE__ */ React.createElement(import_fa.FaTwitter, {
          className: "h-8 w-8 sm:h-12 sm:w-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-125 fill-happy"
        });
        break;
      case "YouTube":
        Icon = /* @__PURE__ */ React.createElement(import_fa.FaYoutube, {
          className: "h-8 w-8 sm:h-12 sm:w-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-125 fill-happy"
        });
        break;
      default:
        break;
    }
    return /* @__PURE__ */ React.createElement("a", {
      key,
      href: links2[key],
      target: "_blank",
      "aria-label": key,
      rel: "noreferrer"
    }, Icon);
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-nowrap gap-4 mt-4 sm:mt-16 dark:text-happy items-start"
  }, socialMediaLinks);
}

// app/components/Hero.jsx
function Hero() {
  let { title, rolesCollection, description, imageForPage } = (0, import_react11.useLoaderData)(), options = {
    renderMark: {
      [import_rich_text_types4.MARKS.BOLD]: (text) => /* @__PURE__ */ React.createElement("b", null, text)
    },
    renderNode: {
      [import_rich_text_types4.BLOCKS.PARAGRAPH]: (_node, children) => /* @__PURE__ */ React.createElement("p", null, children)
    }
  }, shakeAnimation = (0, import_react_spring2.useSpring)({
    to: [
      { transform: "rotate(5deg)" },
      { transform: "rotate(-5deg)" }
    ],
    from: { transform: "rotate(0deg)" },
    config: { tension: 80, friction: 10 },
    reset: !0,
    loop: !0
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative isolate max-h-full overflow-hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-full px-4 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lg:pt-20"
  }, imageForPage && /* @__PURE__ */ React.createElement("img", {
    src: imageForPage.url,
    alt: "Hero",
    className: "w-full object-cover object-center h-auto lg:hidden"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-3xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "items-center justify-center pt-8 lg:pt-0"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl text-start text-happy md:text-start sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter"
  }, "Hello, I'm", " ", /* @__PURE__ */ React.createElement(import_react_spring2.animated.div, {
    style: shakeAnimation,
    className: "inline-block text-center bg-happy text-black px-2 py-4 dark:bg-secondary dark:text-primary"
  }, title))), /* @__PURE__ */ React.createElement("div", {
    className: `flex flex-wrap text-white items-center justify-left text-center sm:justify-left md:justify-start lg:justify-start xl:justify-start \r
                                            text-2xl md:text-2xl lg:text-3xl xl:text-4xl \r
                                            pt-6 font-bold tracking-tighter`
  }, /* @__PURE__ */ React.createElement("h1", null, "and I'm", "  "), /* @__PURE__ */ React.createElement(import_react_text_loop_next.TextLoop, {
    mask: !0
  }, rolesCollection.items.map((role) => /* @__PURE__ */ React.createElement("h1", {
    className: "bg-deepPurple px-2 py-4 mx-2",
    key: role.roleTitle
  }, role.roleTitle))), /* @__PURE__ */ React.createElement("span", null, " Developer")), /* @__PURE__ */ React.createElement("p", {
    className: "my-6 text-lg leading-8 text-cyan"
  }, (0, import_rich_text_react_renderer4.documentToReactComponents)(description.json, options)), /* @__PURE__ */ React.createElement(SocialMedia, null)))), /* @__PURE__ */ React.createElement("div", {
    className: "px-4 py-2 text-center lg:flex items-center justify-center hidden"
  }, imageForPage && /* @__PURE__ */ React.createElement("img", {
    src: imageForPage.url,
    alt: imageForPage.title,
    className: "w-full object-cover object-center h-auto"
  }))));
}

// route:D:\Remix\contentful-remix-portfolio-starter\app\routes\index.jsx
async function loader5() {
  let page = await client.getPage("Michail"), projects = await client.getProjects();
  return (0, import_node7.json)(__spreadProps(__spreadValues({}, page), { projects }));
}
var meta6 = ({ data }) => {
  let { seoMetadata } = data;
  return {
    title: seoMetadata.title,
    description: seoMetadata.description,
    "og:image": `${seoMetadata.ogImage.url}`
  };
};
function Index() {
  let { projects } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement(ProjectsGrid_default, {
    projects
  }));
}

// route:D:\Remix\contentful-remix-portfolio-starter\app\routes\talks.jsx
var talks_exports = {};
__export(talks_exports, {
  default: () => Talks,
  loader: () => loader6,
  meta: () => meta7
});
var import_node8 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var import_rich_text_react_renderer5 = require("@contentful/rich-text-react-renderer"), import_react_spring3 = require("react-spring");
async function loader6() {
  let talks = await client.getTalks(), page = await client.getPage("Talks");
  return (0, import_node8.json)({ talks, page });
}
var meta7 = ({ data }) => {
  let { title, description, ogImage } = data.page.seoMetadata;
  return {
    title,
    description,
    "og:image": `${ogImage.url}`
  };
};
function Talks() {
  let { talks } = (0, import_react13.useLoaderData)(), popUpAnimation = (0, import_react_spring3.useSpring)({
    to: { transform: "scale(1)" },
    from: { transform: "scale(0.90)" },
    config: { tension: 100, friction: 5 }
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "px-8 md:px-24 lg:px-32"
  }, /* @__PURE__ */ React.createElement(Title, {
    title: "Talks",
    emoji: "\u{1F399}"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }, talks.map((item) => {
    let { link, sys, description, title, type, previewImage } = item;
    return /* @__PURE__ */ React.createElement("a", {
      href: link,
      key: sys.id,
      type
    }, /* @__PURE__ */ React.createElement(import_react_spring3.animated.div, {
      style: popUpAnimation,
      className: "mt-8 rounded overflow-hidden shadow-lg bg-white cursor-pointer dark:bg-secondary"
    }, /* @__PURE__ */ React.createElement("div", {
      style: {
        position: "relative",
        display: "block",
        overflow: "hidden"
      }
    }, /* @__PURE__ */ React.createElement("div", {
      style: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%",
        transform: "scale(1.5)",
        filter: "blur(40px)"
      }
    }), /* @__PURE__ */ React.createElement("img", {
      src: previewImage.url,
      alt: previewImage.description
    })), /* @__PURE__ */ React.createElement("div", {
      className: "px-6 py-4"
    }, /* @__PURE__ */ React.createElement("h2", {
      className: "font-semibold text-lg mb-2 dark:text-secondary"
    }, title), /* @__PURE__ */ React.createElement("p", null, (0, import_rich_text_react_renderer5.documentToReactComponents)(description.json)))));
  })));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "8684e764", entry: { module: "/build/entry.client-VJSZ67P2.js", imports: ["/build/_shared/chunk-EPMHMQD6.js", "/build/_shared/chunk-PJTDBEHK.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NV7HDFQ7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-GXAX75GK.js", imports: ["/build/_shared/chunk-HPFIFNP4.js", "/build/_shared/chunk-LYS7ZZGQ.js", "/build/_shared/chunk-VH4EL4GG.js", "/build/_shared/chunk-NLG2DQ56.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-GWWCDIQM.js", imports: ["/build/_shared/chunk-H5MKE3E5.js", "/build/_shared/chunk-HPFIFNP4.js", "/build/_shared/chunk-SFPW3557.js", "/build/_shared/chunk-VH4EL4GG.js", "/build/_shared/chunk-NLG2DQ56.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-CBYHF4WG.js", imports: ["/build/_shared/chunk-H5MKE3E5.js", "/build/_shared/chunk-HPFIFNP4.js", "/build/_shared/chunk-LYS7ZZGQ.js", "/build/_shared/chunk-SFPW3557.js", "/build/_shared/chunk-VH4EL4GG.js", "/build/_shared/chunk-NLG2DQ56.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/talks": { id: "routes/talks", parentId: "root", path: "talks", index: void 0, caseSensitive: void 0, module: "/build/routes/talks-YTV5GK3V.js", imports: ["/build/_shared/chunk-LYS7ZZGQ.js", "/build/_shared/chunk-SFPW3557.js", "/build/_shared/chunk-VH4EL4GG.js", "/build/_shared/chunk-NLG2DQ56.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/writings/$slug": { id: "routes/writings/$slug", parentId: "root", path: "writings/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/writings/$slug-YFXJGLRD.js", imports: ["/build/_shared/chunk-NRAIPCGV.js", "/build/_shared/chunk-HPFIFNP4.js", "/build/_shared/chunk-LYS7ZZGQ.js", "/build/_shared/chunk-NLG2DQ56.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/writings/index": { id: "routes/writings/index", parentId: "root", path: "writings", index: !0, caseSensitive: void 0, module: "/build/routes/writings/index-I3H5FAFJ.js", imports: ["/build/_shared/chunk-NRAIPCGV.js", "/build/_shared/chunk-LYS7ZZGQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-8684E764.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/writings/$slug": {
    id: "routes/writings/$slug",
    parentId: "root",
    path: "writings/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/writings/index": {
    id: "routes/writings/index",
    parentId: "root",
    path: "writings",
    index: !0,
    caseSensitive: void 0,
    module: writings_exports
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/talks": {
    id: "routes/talks",
    parentId: "root",
    path: "talks",
    index: void 0,
    caseSensitive: void 0,
    module: talks_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=server.js.map
