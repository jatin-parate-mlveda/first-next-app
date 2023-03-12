import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import TopBar from "@/components/TopBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <TopBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
