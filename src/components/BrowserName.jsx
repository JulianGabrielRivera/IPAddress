import { browserName, browserVersion } from "react-device-detect";

const BrowserName = () => {
  return <p>{`${browserName} ${browserVersion}`}</p>;
};
export default BrowserName;
