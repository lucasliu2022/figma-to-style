import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6TS7PK79QS"
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-6TS7PK79QS');`}
      </Script> */}
      <Header />
      <div className="w-full px-4 mx-auto max-w-8xl">
        <div className="lg:flex">
          <aside
            id="sidebar"
            className="fixed inset-0 z-20 flex-none hidden h-full w-72 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-48 lg:block"
            aria-labelledby="sidebar-label"
          >
            <h4 id="sidebar-label" className="sr-only">
              Browse docs
            </h4>
            <div
              id="navWrapper"
              className="overflow-y-auto z-20 h-full bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-3rem)] lg:block lg:sticky top:24 lg:top-28 dark:bg-gray-900 lg:mr-0"
            >
              <nav
                id="nav"
                className="pt-16 px-1 pl-3 lg:pl-0 lg:pt-2 font-normal text-base lg:text-sm pb-10 lg:pb-20 sticky?lg:h-(screen-18)"
                aria-label="Docs navigation"
              >
                <ul className="mb-0 list-unstyled">
                  <li className="mt-8">
                    <h5 className="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs dark:text-white">
                      Getting started
                    </h5>
                    <ul className="py-1 list-unstyled fw-normal small">
                      <li>
                        <a
                          href="/docs/getting-started/introduction/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Introduction{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/quickstart/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Quickstart{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/typescript/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          TypeScript{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/license/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          License{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/changelog/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Changelog{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mt-8">
                    <h5 className="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs dark:text-white">
                      Integration guides
                    </h5>
                    <ul className="py-1 list-unstyled fw-normal small">
                      <li>
                        <a
                          href="/docs/getting-started/react/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          React{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/next-js/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Next.js{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/vue/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Vue{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/nuxt-js/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Nuxt{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/svelte/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Svelte{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/angular/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Angular{" "}
                          <span>
                            <span className="bg-blue-100 text-blue-800 text-2xs font-semibold ml-2 px-1.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-100 dark:border-blue-400">
                              NEW
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/astro/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Astro{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/remix/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Remix{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/meteor-js/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Meteor.js{" "}
                          <span>
                            <span className="bg-blue-100 text-blue-800 text-2xs font-semibold ml-2 px-1.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-100 dark:border-blue-400">
                              NEW
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/gatsby/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Gatsby{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/solid-js/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          SolidJS{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/qwik/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Qwik{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/laravel/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Laravel{" "}
                          <span>
                            <span className="bg-blue-100 text-blue-800 text-2xs font-semibold ml-2 px-1.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-100 dark:border-blue-400">
                              NEW
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/symfony/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Symfony{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/rails/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Rails{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/phoenix/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Phoenix{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/django/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Django{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/flask/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Flask{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/getting-started/blazor/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Blazor{" "}
                          <span>
                            <span className="bg-blue-100 text-blue-800 text-2xs font-semibold ml-2 px-1.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-100 dark:border-blue-400">
                              NEW
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mt-8">
                    <h5 className="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs dark:text-white">
                      Customize
                    </h5>
                    <ul className="py-1 list-unstyled fw-normal small">
                      <li>
                        <a
                          href="/docs/customize/configuration/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Configuration{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/customize/dark-mode/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Dark mode{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/customize/theming/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Theming{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/customize/colors/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Colors{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/customize/icons/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Icons{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/customize/optimization/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Optimization{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mt-8">
                    <h5 className="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs dark:text-white">
                      Components
                    </h5>
                    <ul className="py-1 list-unstyled fw-normal small">
                      <li>
                        <a
                          href="/docs/components/accordion/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Accordion{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/alerts/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Alerts{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/avatar/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Avatar{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/badge/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Badge{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/banner/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Banner{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/bottom-navigation/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Bottom Navigation{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/breadcrumb/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Breadcrumb{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/buttons/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Buttons{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/button-group/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Button Group{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/card/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Card{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/carousel/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Carousel{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/device-mockups/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Device Mockups{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/drawer/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Drawer{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/dropdowns/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Dropdowns{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/footer/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Footer{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/forms/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Forms{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/gallery/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Gallery{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/indicators/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Indicators{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/jumbotron/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Jumbotron{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/kbd/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          KBD{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/list-group/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          List Group{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/mega-menu/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Mega menu{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/modal/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Modal{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/navbar/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Navbar{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/pagination/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Pagination{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/popover/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Popover{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/progress/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Progress{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/rating/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Rating{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/sidebar/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Sidebar{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/skeleton/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Skeleton{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/speed-dial/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Speed Dial{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/spinner/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Spinner{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/stepper/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Stepper{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/tables/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Tables{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/tabs/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Tabs{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/timeline/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Timeline{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/toast/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Toast{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/tooltips/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Tooltips{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/typography/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Typography{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/components/video/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Video{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mt-8">
                    <h5 className="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs dark:text-white">
                      Forms
                    </h5>
                    <ul className="py-1 list-unstyled fw-normal small">
                      <li>
                        <a
                          href="/docs/forms/input-field/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Input Field{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/forms/file-input/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          File Input{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/forms/search-input/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Search Input{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/forms/select/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Select{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/forms/textarea/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Textarea{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/forms/checkbox/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Checkbox{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/forms/radio/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Radio{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/forms/toggle/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Toggle{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/forms/range/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Range{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/forms/floating-label/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Floating Label{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mt-8">
                    <h5 className="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs dark:text-white">
                      Typography
                    </h5>
                    <ul className="py-1 list-unstyled fw-normal small">
                      <li>
                        <a
                          href="/docs/typography/headings/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Headings{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/typography/paragraphs/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white  !text-blue-700 hover:!text-blue-700 dark:!text-blue-500 dark:hover:!text-blue-500"
                          aria-current="page"
                        >
                          Paragraphs{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/typography/blockquote/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Blockquote{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/typography/images/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Images{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/typography/lists/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Lists{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/typography/links/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Links{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/typography/text/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Text{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/typography/hr/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          HR{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mt-8">
                    <h5 className="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs dark:text-white">
                      Plugins
                    </h5>
                    <ul className="py-1 list-unstyled fw-normal small">
                      <li>
                        <a
                          href="/docs/plugins/charts/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Charts{" "}
                          <span>
                            <span className="bg-blue-100 text-blue-800 text-2xs font-semibold ml-2 px-1.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-100 dark:border-blue-400">
                              NEW
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/plugins/datepicker/"
                          data-sidebar-item=""
                          className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                        >
                          Datepicker{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
          <div
            className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/60"
            id="sidebarBackdrop"
          />
          <main
            id="content-wrapper"
            className="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible"
          >
            <div className="xl:flex  w-full">
              <div className="flex-auto max-w-4xl min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16">
                <Component {...pageProps} />
              </div>
              <div className="flex-none w-64 pl-8 mr-8 xl:text-sm xl:block">
                <div className="flex overflow-y-auto sticky top-28 flex-col justify-between pt-10 pb-6 h-[calc(100vh-5rem)]">
                  <div className="mb-8">
                    <h4 className="pl-2.5 mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white lg:text-xs">
                      On this page
                    </h4>
                    <nav id="TableOfContents">
                      <ul>
                        <li>
                          <a href="#default-paragraph" className="">
                            Default paragraph
                          </a>
                        </li>
                        <li>
                          <a href="#leading-paragraph" className="">
                            Leading paragraph
                          </a>
                        </li>
                        <li>
                          <a href="#first-letter" className="">
                            First letter
                          </a>
                        </li>
                        <li>
                          <a href="#paragraph-link" className="">
                            Paragraph link
                          </a>
                        </li>
                        <li>
                          <a href="#paragraph-bold" className="">
                            Paragraph bold
                          </a>
                        </li>
                        <li>
                          <a href="#paragraph-underline" className="">
                            Paragraph underline
                          </a>
                        </li>
                        <li>
                          <a href="#paragraph-italic" className="">
                            Paragraph italic
                          </a>
                        </li>
                        <li>
                          <a href="#paragraph-popover" className="">
                            Paragraph popover
                          </a>
                        </li>
                        <li>
                          <a href="#layout" className="">
                            Layout
                          </a>
                          <ul>
                            <li>
                              <a href="#one-column" className="">
                                One column
                              </a>
                            </li>
                            <li>
                              <a href="#two-columns-even" className="">
                                Two columns even
                              </a>
                            </li>
                            <li>
                              <a href="#three-columns-even" className="">
                                Three columns even
                              </a>
                            </li>
                            <li>
                              <a href="#two-columns-uneven" className="">
                                Two columns uneven
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#text-alignment" className="">
                            Text alignment
                          </a>
                          <ul>
                            <li>
                              <a href="#left" className="">
                                Left
                              </a>
                            </li>
                            <li>
                              <a href="#center" className="">
                                Center
                              </a>
                            </li>
                            <li>
                              <a
                                href="#right"
                                className="!border-blue-700 !after:opacity-100 !text-blue-700 dark:!border-blue-500 dark:!text-blue-500"
                              >
                                Right
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                    <aside className="w-52 mt-6 mx-auto border-t border-gray-200 dark:border-gray-700 pt-8">
                      <a
                        href="https://www.enhanceui.com/?ref=flowbite-sidebar"
                        className="block rounded-lg"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          src="/docs/images/book-light.svg"
                          className="shadow mb-3 w-36 dark:hidden"
                          alt="Enhance UI book cover light mode"
                        />
                        <img
                          src="/docs/images/book-dark.svg"
                          className="shadow mb-3 w-36 hidden dark:block"
                          alt="Enhance UI book cover dark mode"
                        />
                        <h4 className="text-base font-semibold text-gray-900 mb-1.5 dark:text-white">
                          Learn Design Concepts
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          Make better Flowbite pages by learning the
                          fundamentals of design
                        </p>
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                          <h5 className="font-medium text-gray-900 dark:text-white">
                            Teach Me Design
                          </h5>
                          <p className="text-gray-500 dark:text-gray-400">
                            by Adrian Twarog
                          </p>
                        </div>
                      </a>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
