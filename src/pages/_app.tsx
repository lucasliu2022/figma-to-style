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

      <main
        id="content-wrapper"
        className="w-full min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible"
      >
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}
