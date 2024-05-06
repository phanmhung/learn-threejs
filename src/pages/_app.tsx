import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import Head from "next/head";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/300.css";
import Layout from "@/widgets/Layout";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import theme from "@/shared/theme/theme";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Analytics />
      <ChakraProvider theme={theme}>
        <Head>
          <link rel="icon" type="favicon" href="../static/favicon.ico" />
        </Head>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;