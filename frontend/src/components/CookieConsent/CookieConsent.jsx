import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CookieConsent.scss";
import {
  getCookieConsent,
  saveCookieConsent,
} from "../../utils/cookieConsent";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();

    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    saveCookieConsent({
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    });

    setShowBanner(false);
  };

  const rejectNonEssential = () => {
    saveCookieConsent({
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false,
    });

    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-consent">
      <div className="cookie-consent__content">

        <h3>We use cookies</h3>

        <p>
          We use necessary cookies to make our website work.
          With your permission, we may also use preference,
          analytics and marketing technologies.
        </p>

        <div className="cookie-consent__buttons">

          <button onClick={acceptAll}>
            Accept All
          </button>

          <button onClick={rejectNonEssential}>
            Reject Non-essential
          </button>

          <Link to="/cookie-settings">
            Cookie Settings
          </Link>

        </div>

      </div>
    </div>
  );
};

export default CookieConsent;