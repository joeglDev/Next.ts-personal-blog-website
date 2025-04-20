import { AppProps } from "next/app";
import { AppContextProvider } from "../components/libs/contexts/AppContext";
import "../styles/global.css";
import { BlogPostContextProvider } from "../components/libs/contexts/BlogPostsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <BlogPostContextProvider>
        <Component {...pageProps} />
      </BlogPostContextProvider>
    </AppContextProvider>
  );
}
