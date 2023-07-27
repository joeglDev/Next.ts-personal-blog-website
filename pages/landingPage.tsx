import { BrowserWarningBanner } from '../components/BrowserWarningBanner';

export default function Home() {

  const pageWarning = () => {
    //idea from Mastodon: @jaseg@chaos.social 
    //navigator.getEnvironmentIntergrity !== undefined
    if (global.navigator)
    return global.navigator.userAgent.includes("Chrome") || global.navigator.userAgent.includes("Edge") ? true : false
  };

return (
  <main>
    {
      pageWarning() ?
      <BrowserWarningBanner /> 
      :
      <h1>test</h1>
    /** page content here - night/day login or if not test button */
    }
  </main>
)

}
