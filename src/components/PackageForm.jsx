import {
  LuMapPin,
  LuCalendar,
  LuClock3,
  LuBriefcase,
  LuUsers,
  LuStar
} from "react-icons/lu";

import "./PackageForm.css";

const PackageForm = () => {

  return (
    <div className="package-form">

      {/* TOP BAR */}
      <div className="package-top">

        <div className="package-type">

          <button className="package-option active-package">
            International
          </button>

          <button className="package-option">
            Domestic
          </button>

          <button className="package-option">
            Honeymoon
          </button>

        </div>

        <div className="package-tag">

          <LuStar />

          Best Deals

        </div>

      </div>

      {/* GRID */}
      <div className="package-form-grid">

        {/* DESTINATION */}
        <div className="package-card-box">

          <div className="package-icon">
            <LuMapPin />
          </div>

          <span className="package-label">
            Destination
          </span>

          <h3>Dubai</h3>

          <p>United Arab Emirates</p>

        </div>

        {/* DATE */}
        <div className="package-card-box">

          <div className="package-icon">
            <LuCalendar />
          </div>

          <span className="package-label">
            Travel Date
          </span>

          <h3>May 2026</h3>

          <p>Flexible Dates</p>

        </div>

        {/* DURATION */}
        <div className="package-card-box">

          <div className="package-icon">
            <LuClock3 />
          </div>

          <span className="package-label">
            Duration
          </span>

          <h3>5 Nights</h3>

          <p>6 Days Tour</p>

        </div>

        {/* TRAVELLERS */}
        <div className="package-card-box">

          <div className="package-icon">
            <LuUsers />
          </div>

          <span className="package-label">
            Travellers
          </span>

          <h3>2 Adults</h3>

          <p>Couple Package</p>

        </div>

      </div>

      {/* BUTTON */}
      <button className="package-btn">

        <LuBriefcase />

        Explore Packages

      </button>

    </div>
  );
};

export default PackageForm;