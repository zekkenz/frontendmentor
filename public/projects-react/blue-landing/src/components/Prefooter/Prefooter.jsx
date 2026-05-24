// Prefooter.jsx
import { useState } from "react";
import "./Prefooter.css";

function Prefooter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleContactUs = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div className="prefooter-container">
      <div className="center">
        <p>35,000+ already joined</p>
        <h4>Stay up-to-date with what we’re doing</h4>
        <form className="input-zone" onSubmit={handleContactUs} noValidate>
          <div className={`input-wrapper ${error ? "has-error" : ""}`}>
            <div className="input-relative">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(false);
                }}
              />
              {error && (
                <img
                  src="./icon-error.svg"
                  alt="error"
                  className="error-icon"
                />
              )}
            </div>
            {error && (
              <div className="error-message">
                Whoops, make sure it's an email
              </div>
            )}
          </div>
          <button type="submit">Contact Us</button>
        </form>
      </div>
    </div>
  );
}
export default Prefooter;
