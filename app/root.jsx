import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import NavBar from './components/NavBar'

import styles from "./tailwind.css";

export const meta = () => ({
  charset: "utf-8",
  title: "Greek Nous - Home",
  description: "Frontend Developer specializing in Headless Ecommerce!",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap" },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-twilightPurple h-screen flex flex-col gap-y-4">
        <NavBar />
        <main className="container mx-auto pt-8 pb-32 lg:py-16 flex-grow">
          <Outlet />
        </main>
        <footer className="p-4 bg-twilightPurple border-t-2 border-primary shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-secondary">
          <span className="text-sm text-happy sm:text-center dark:text-gray-400">Created with
            <a href="https://remix.run/" className="hover:underline"> Remix</a> and
            <a href="https://contentful.com/" className="hover:underline"> Contentful</a>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-happy dark:text-happy sm:mt-0">
            <li><a href="https://www.contentful.com/remix-tutorial/" className="mr-4 hover:underline md:mr-6">Read More</a></li>
            <li><a href="https://github.com/contentful/starter-remix-portfolio" className="mr-4 hover:underline md:mr-6">GitHub</a></li>
          </ul>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}