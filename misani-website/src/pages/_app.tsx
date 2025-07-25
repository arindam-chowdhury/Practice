import Navbar from "@/containers/navbar/Navbar";
import "@/styles/globals.css";
import { hanken_grotesk, space_grotesk } from "@/utils/fonts";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${space_grotesk.variable} ${hanken_grotesk.variable}`}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
