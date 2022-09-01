// import CookieConsent from "react-cookie-consent";
import CookieConsent, {
  getCookieConsentValue,
  resetCookieConsentValue,
} from "react-cookie-consent";
const Cookie = () => {
  return (
    <CookieConsent
      debug={true}
      enableDeclineButton
      buttonText="Ok, cool."
      cookieName="CookieMonster"
      onAccept={() => {
        getCookieConsentValue();
      }}
      onDecline={() => {
        resetCookieConsentValue();
      }}
      flipButtons
      expires={365}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

export default Cookie;
