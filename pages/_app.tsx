import { NextPage } from "next";
import "../styles/globals.css";
import { ReactNode } from "react";
import { AppProps } from "next/app";

type NextPageWithLayouts = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayouts;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  // return <Component {...pageProps} />;
  return getLayout(<Component {...pageProps} />);
}
