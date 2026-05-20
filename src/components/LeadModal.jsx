import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./LeadModal.css";

const SITE_KEY = "6LdV_NosAAAAALRIu75sbOtymBZqmmgZFxb-JSrq";

const LeadModal = ({ isOpen, onClose, city, image }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [captchaToken, setCaptchaToken] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please verify captcha");
      return;
    }

    console.log("Lead:", form, "City:", city, "Captcha:", captchaToken);

    // 👉 API / WhatsApp later

    onClose();
  };

  return (
    <div className="lead-overlay" onClick={onClose}>
      <div className="lead-modal" onClick={(e) => e.stopPropagation()}>

        {/* LEFT IMAGE */}
        <div className="lead-left">
          <img src={image} alt={city} />
          <div className="lead-overlay-text">
            <h2>{city}</h2>
            <p>Exclusive deals & curated experiences</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="lead-right">
          <h2>Plan your trip</h2>
          <p className="lead-sub">
            Get best deals for <strong>{city}</strong>
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              required
            />

            {/* REAL GOOGLE CAPTCHA (REPLACED FAKE ONE) */}
            <div className="captcha-box">
              <ReCAPTCHA
                sitekey={SITE_KEY}
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>

            <button type="submit" className="lead-btn">
              Book Now
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default LeadModal;