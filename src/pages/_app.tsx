import { useRouter } from "next/router";
import React from "react";
import useStore from "@/helpers/store";
import { useEffect } from "react";
import Header from "@/components/dom/Header";
import { SessionProvider } from "next-auth/react";
import "../styles/global.css";
import Dom from "@/components/layout/dom";

function App({ Component, pageProps }) {
  const router = useRouter();
  const { setRouter } = useStore();

  useEffect(() => {
    setRouter(router);
  }, [setRouter, router]);

  // Get the children from each page so we can split them
  const children = Component(pageProps).props.children;

  return (
    <SessionProvider session={pageProps.session}>
      <Header title={pageProps.title} />
      <Dom {...pageProps}>{children}</Dom>
    </SessionProvider>
  );
}

export default App;