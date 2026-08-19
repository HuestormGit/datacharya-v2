import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer.jsx";

const CONSENT_KEY = "datacharya_cookie_consent";
const POLICY_VERSION = "1.0";

const defaultConsent = {
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
};

function CookieSettingsPage() {
  const [consent, setConsent] = useState(defaultConsent);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem(CONSENT_KEY);

    if (storedConsent) {
      try {
        const parsedConsent = JSON.parse(storedConsent);

        setConsent({
          ...defaultConsent,
          ...parsedConsent,
          necessary: true,
        });
      } catch (error) {
        console.error("Unable to read cookie consent:", error);
      }
    }
  }, []);

  const saveConsent = (updatedConsent) => {
    const consentData = {
      ...updatedConsent,
      necessary: true,
      timestamp: new Date().toISOString(),
      policyVersion: POLICY_VERSION,
    };

    localStorage.setItem(CONSENT_KEY, JSON.stringify(consentData));

    setConsent(consentData);
    setSaved(true);

    window.dispatchEvent(
      new CustomEvent("datacharya-consent-updated", {
        detail: consentData,
      })
    );
  };

  const handleSave = () => {
    saveConsent(consent);
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectNonEssential = () => {
    saveConsent({
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false,
    });
  };

  return (
    <>
      {/* Website Header */}
      <Navbar />

      {/* Cookie Settings Content */}
      <main className="cookie-settings-page">
        <section className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-9">

              <div className="mb-4">
                <h1>Cookie Settings</h1>

                <p className="text-muted mb-1">
                  Manage your cookie and similar technology preferences.
                </p>

                <p className="small text-muted">
                  Privacy Policy version: {POLICY_VERSION}
                </p>
              </div>

              {/* Necessary */}
              <div className="cookie-setting-item border rounded p-4 mb-3">
                <div className="d-flex justify-content-between gap-4">
                  <div>
                    <h2 className="h5">
                      Strictly Necessary Technologies
                    </h2>

                    <p className="mb-0">
                      These technologies are required for website operation,
                      security, navigation and essential functionality.
                    </p>
                  </div>

                  <div>
                    <span className="badge bg-secondary">
                      Always Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="cookie-setting-item border rounded p-4 mb-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="preferencesConsent"
                    checked={consent.preferences}
                    onChange={(e) =>
                      setConsent({
                        ...consent,
                        preferences: e.target.checked,
                      })
                    }
                  />

                  <label
                    className="form-check-label"
                    htmlFor="preferencesConsent"
                  >
                    <strong>Preference Technologies</strong>
                  </label>
                </div>

                <p className="mt-2 mb-0">
                  These technologies may remember preferences such as display,
                  language or other user choices.
                </p>
              </div>

              {/* Analytics */}
              <div className="cookie-setting-item border rounded p-4 mb-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="analyticsConsent"
                    checked={consent.analytics}
                    onChange={(e) =>
                      setConsent({
                        ...consent,
                        analytics: e.target.checked,
                      })
                    }
                  />

                  <label
                    className="form-check-label"
                    htmlFor="analyticsConsent"
                  >
                    <strong>Analytics Technologies</strong>
                  </label>
                </div>

                <p className="mt-2 mb-0">
                  These technologies may help us understand website traffic,
                  feature usage, performance and errors.
                </p>
              </div>

              {/* Marketing */}
              <div className="cookie-setting-item border rounded p-4 mb-4">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="marketingConsent"
                    checked={consent.marketing}
                    onChange={(e) =>
                      setConsent({
                        ...consent,
                        marketing: e.target.checked,
                      })
                    }
                  />

                  <label
                    className="form-check-label"
                    htmlFor="marketingConsent"
                  >
                    <strong>Marketing Technologies</strong>
                  </label>
                </div>

                <p className="mt-2 mb-0">
                  These technologies may be used to measure campaigns or
                  provide relevant communications where applicable.
                </p>
              </div>

              {/* Buttons */}
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSave}
                >
                  Save choices
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleAcceptAll}
                >
                  Accept all
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleRejectNonEssential}
                >
                  Reject non-essential
                </button>
              </div>

              {/* Success Message */}
              {saved && (
                <div
                  className="alert alert-success mt-4"
                  role="status"
                >
                  Your cookie preferences have been saved.
                </div>
              )}

            </div>
          </div>
        </section>
      </main>

      {/* Website Footer */}
      <Footer />
    </>
  );
}

export default CookieSettingsPage;