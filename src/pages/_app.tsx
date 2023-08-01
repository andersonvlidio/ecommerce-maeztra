import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss";
// import { MantineProvider } from "@mantine/core";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          breakpoints: {
            xs: "22em",
            sm: "48em",
            md: "64em",
            lg: "74em",
            xl: "90em",
          },
        }}
      > */}
      <Component {...pageProps} />
      <Head>
        <title> Maeztra ecommerce </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {/* </MantineProvider> */}
    </>
  );
}