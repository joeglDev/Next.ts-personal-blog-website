import { AppProps } from "next/app";
import { ContextProvider } from "../components/Context";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
