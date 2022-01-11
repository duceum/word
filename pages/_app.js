import Head from "next/head";
import React from "react";
import { GameContextProvider } from "../components/GameContext";
import SiteConfig from "../lib/config";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GameContextProvider>
        <Head>
          <title>{SiteConfig.title}</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </Head>
        <Component {...pageProps} />
      </GameContextProvider>
    </>
  );
}
