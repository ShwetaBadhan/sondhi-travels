import { useState, useRef, useEffect } from "react";

import {
  LuArrowRightLeft,
  LuPlaneTakeoff,
  LuPlaneLanding,
  LuCalendar,
  LuUsers,
  LuChevronDown
} from "react-icons/lu";

import "./FlightForm.css";

const FlightForm = () => {

  const [showTraveller, setShowTraveller] =
    useState(false);

  const [tripType, setTripType] =
    useState("oneway");

  const travellerRef = useRef(null);

  const [travellers, setTravellers] =
    useState({
      adults: 1,
      children: 0,
      infants: 0,
      classType: "Economy"
    });

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        travellerRef.current &&
        !travellerRef.current.contains(
          event.target
        )
      ) {
        setShowTraveller(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  const updateCount = (type, value) => {

    setTravellers((prev) => ({
      ...prev,
      [type]: value
    }));
  };

  return (

    <div className="flight-form">

      {/* ================= TOP ================= */}

      <div className="flight-top">

        <div className="flight-trip">

          <label
            className={
              tripType === "oneway"
                ? "trip-option active-trip"
                : "trip-option"
            }
          >

            <input
              type="radio"
              name="trip"
              checked={
                tripType === "oneway"
              }
              onChange={() =>
                setTripType("oneway")
              }
            />

            One Way

          </label>

          <label
            className={
              tripType === "roundtrip"
                ? "trip-option active-trip"
                : "trip-option"
            }
          >

            <input
              type="radio"
              name="trip"
              checked={
                tripType === "roundtrip"
              }
              onChange={() =>
                setTripType("roundtrip")
              }
            />

            Round Trip

          </label>

        </div>

        {/* <div className="fare-type">
          Regular
        </div> */}

      </div>

      {/* ================= GRID ================= */}

      <div className="flight-grid">

        {/* FROM */}

        <div className="flight-card">

  <div className="flight-icon">
    <LuPlaneTakeoff />
  </div>

  <div className="flight-card-content">

    <span className="flight-label">
      Depart From
    </span>

    <h3>Ahmedabad</h3>

    <p>AMD, India</p>

  </div>

</div>

        {/* SWAP */}

        <button
          type="button"
          className="flight-swap"
        >

          <LuArrowRightLeft />

        </button>

        {/* TO */}

        <div className="flight-card">

          <div className="flight-icon">
            <LuPlaneLanding />
          </div>

          <div className="flight-card-content">

            <span className="flight-label">
              Going To
            </span>

            <h3>Bengaluru</h3>

            <p>BLR, India</p>

          </div>

        </div>

        {/* DEPART DATE */}

        <div className="flight-card">

          <div className="flight-icon">
            <LuCalendar />
          </div>

          <div className="flight-card-content">

            <span className="flight-label">
              Depart Date
            </span>

            <h3>09 May</h3>

            <p>Saturday, 2026</p>

          </div>

        </div>

        {/* RETURN DATE */}

        <div className="flight-card">

          <div className="flight-icon">
            <LuCalendar />
          </div>

          <div className="flight-card-content">

            <span className="flight-label">
              Return Date
            </span>

            <h3 className="return-muted">
              Add Date
            </h3>

            <p>Optional</p>

          </div>

        </div>

        {/* TRAVELLERS */}

        <div
          className="
            flight-card
            traveller-card
          "
          ref={travellerRef}
        >

          <div
            className="traveller-trigger"
            onClick={() =>
              setShowTraveller(
                !showTraveller
              )
            }
          >

            <div className="flight-icon">
              <LuUsers />
            </div>

            <div className="traveller-left">

              <span className="flight-label">
                Traveller(s), Class
              </span>

              <h3>
                {travellers.adults} Adult
              </h3>

              <p>
                {travellers.classType}
              </p>

            </div>

            <LuChevronDown
              className={
                showTraveller
                  ? `
                    dropdown-icon
                    rotate-icon
                  `
                  : "dropdown-icon"
              }
            />

          </div>

          {/* ================= DROPDOWN ================= */}

          {showTraveller && (

            <div className="traveller-dropdown">

              {/* ADULTS */}

              <div className="traveller-row">

                <div className="traveller-title">

                  <h4>Adults</h4>

                  <span>
                    12+ years
                  </span>

                </div>

                <div className="counter-box">

  <button
    type="button"
    className="counter-btn"
    onClick={() =>
      updateCount(
        "adults",
        Math.max(1, travellers.adults - 1)
      )
    }
  >
    -
  </button>

  <span className="counter-value">
    {travellers.adults}
  </span>

  <button
    type="button"
    className="counter-btn"
    onClick={() =>
      updateCount(
        "adults",
        travellers.adults + 1
      )
    }
  >
    +
  </button>

</div>

              </div>

              {/* CHILDREN */}

              <div className="traveller-row">

                <div className="traveller-title">

                  <h4>Children</h4>

                  <span>
                    2 - 12 years
                  </span>

                </div>

                <div className="counter-box">

  <button
    type="button"
    className="counter-btn"
    onClick={() =>
      updateCount(
        "children",
        Math.max(0, travellers.children - 1)
      )
    }
  >
    -
  </button>

  <span className="counter-value">
    {travellers.children}
  </span>

  <button
    type="button"
    className="counter-btn"
    onClick={() =>
      updateCount(
        "children",
        travellers.children + 1
      )
    }
  >
    +
  </button>

</div>

              </div>

              {/* INFANTS */}

              <div className="traveller-row">

                <div className="traveller-title">

                  <h4>Infants</h4>

                  <span>
                    Below 2 years
                  </span>

                </div>

                <div className="counter-box">

  <button
    type="button"
    className="counter-btn"
    onClick={() =>
      updateCount(
        "infants",
        Math.max(0, travellers.infants - 1)
      )
    }
  >
    -
  </button>

  <span className="counter-value">
    {travellers.infants}
  </span>

  <button
    type="button"
    className="counter-btn"
    onClick={() =>
      updateCount(
        "infants",
        travellers.infants + 1
      )
    }
  >
    +
  </button>

</div>

              </div>

              {/* CLASS */}

              <div className="class-wrapper">

                <label>
                  Travel Class
                </label>

                <select
                  className="class-select"
                  value={
                    travellers.classType
                  }
                  onChange={(e) =>
                    updateCount(
                      "classType",
                      e.target.value
                    )
                  }
                >

                  <option>
                    Economy
                  </option>

                  <option>
                    Premium Economy
                  </option>

                  <option>
                    Business
                  </option>

                  <option>
                    First Class
                  </option>

                </select>

              </div>

              {/* DONE */}

              <button
                type="button"
                className="done-btn"
                onClick={() =>
                  setShowTraveller(false)
                }
              >

                Done

              </button>

            </div>

          )}

        </div>

      </div>

      {/* ================= SEARCH ================= */}

      <button
        type="button"
        className="flight-btn"
      >

        Search Flights

      </button>

    </div>
  );
};

export default FlightForm;