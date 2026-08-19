const COOKIE_CONSENT_KEY = "datacharya_cookie_consent";

export const getCookieConsent = () => {
  try {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!savedConsent) {
      return null;
    }

    return JSON.parse(savedConsent);
  } catch (error) {
    console.error("Error reading cookie consent:", error);
    return null;
  }
};

export const saveCookieConsent = (consent) => {
  localStorage.setItem(
    COOKIE_CONSENT_KEY,
    JSON.stringify(consent)
  );
};

export const clearCookieConsent = () => {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
};