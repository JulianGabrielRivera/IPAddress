import "./App.css";
import IpAddress from "./components/IpAddress";
import Cookie from "./components/CookieConsent";
import MobileOrDesktop from "./components/MobileOrDesktop";
import BrowserName from "./components/BrowserName";

import UseWindowDimensions from "./components/UseWindowDimensions";
function App() {
  return (
    <div className="App">
      <IpAddress />
      <Cookie />
      <MobileOrDesktop />
      <BrowserName />
      <UseWindowDimensions />
    </div>
  );
}

export default App;
