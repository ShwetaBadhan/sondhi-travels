import {
  LuShield,
  LuMapPin,
  LuCalendar,
  LuUsers,
  LuHeartHandshake,
  LuBadgeCheck
} from "react-icons/lu";

import "./InsuranceForm.css";

const InsuranceForm = () => {

  return (
    <div className="insurance-form">

      {/* TOP BAR */}
      <div className="insurance-top">

        <div className="insurance-type">

          <button className="insurance-option active-insurance">
            Travel Insurance
          </button>

          <button className="insurance-option">
            Medical
          </button>

          <button className="insurance-option">
            Family
          </button>

        </div>

        <div className="insurance-badge">

          <LuBadgeCheck />

          Trusted Protection

        </div>

      </div>

      {/* GRID */}
      <div className="insurance-grid">

        {/* DESTINATION */}
        <div className="insurance-card">

          <div className="insurance-icon">
            <LuMapPin />
          </div>

          <span className="insurance-label">
            Destination
          </span>

          <h3>International</h3>

          <p>Worldwide Coverage</p>

        </div>

        {/* START DATE */}
        <div className="insurance-card">

          <div className="insurance-icon">
            <LuCalendar />
          </div>

          <span className="insurance-label">
            Start Date
          </span>

          <h3>25 Apr</h3>

          <p>Coverage Starts</p>

        </div>

        {/* END DATE */}
        <div className="insurance-card">

          <div className="insurance-icon">
            <LuCalendar />
          </div>

          <span className="insurance-label">
            End Date
          </span>

          <h3>30 Apr</h3>

          <p>Coverage Ends</p>

        </div>

        {/* TRAVELLERS */}
        <div className="insurance-card">

          <div className="insurance-icon">
            <LuUsers />
          </div>

          <span className="insurance-label">
            Travellers
          </span>

          <h3>2 Adults</h3>

          <p>Family Plan</p>

        </div>

      </div>

      {/* FEATURES */}
      <div className="insurance-features">

        <div className="feature-item">
          <LuShield />
          Medical Coverage
        </div>

        <div className="feature-item">
          <LuHeartHandshake />
          Trip Protection
        </div>

        <div className="feature-item">
          <LuBadgeCheck />
          Instant Claim Support
        </div>

      </div>

      {/* BUTTON */}
      <button className="insurance-btn">

        <LuShield />

        Get Insurance

      </button>

    </div>
  );
};

export default InsuranceForm;