import { AppProps } from "next/app";
import { ContextProvider } from "../components/Context";
import "../styles/global.css";
import {BlogPostContextProvider} from "../components/libs/contexts/BlogPostsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
        <BlogPostContextProvider>
      <Component {...pageProps} />
        </BlogPostContextProvider>
    </ContextProvider>
  );
}
