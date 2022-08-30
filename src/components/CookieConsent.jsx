// import CookieConsent from "react-cookie-consent";
import CookieConsent, { Cookies, getCookieConsentValue, resetCookieConsentValue  } from "react-cookie-consent";
const Cookie = () =>{
    console.log(getCookieConsentValue());


return (
<CookieConsent  buttonText="Ok, cool."
  cookieName="CookieMonster">This website uses cookies to enhance the user experience.</CookieConsent>

)

}

export default Cookie