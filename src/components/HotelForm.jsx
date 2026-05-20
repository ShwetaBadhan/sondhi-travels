import {
  LuHotel,
  LuCalendar,
  LuUsers,
  LuMapPin,
  LuStar
} from "react-icons/lu";



const HotelForm = () => {

  return (
    <div className="hotel-form">

      {/* TOP BAR */}
      <div className="hotel-top">

        <div className="hotel-type">

          <button className="hotel-option active-hotel">
            Hotels
          </button>

          <button className="hotel-option">
            Resorts
          </button>

          <button className="hotel-option">
            Villas
          </button>

        </div>

        <div className="hotel-rating">
          <LuStar />
          Premium Stays
        </div>

      </div>

      {/* GRID */}
      <div className="hotel-grid">

        {/* DESTINATION */}
        <div className="hotel-card">

          <div className="hotel-icon">
            <LuMapPin />
          </div>

          <span className="hotel-label">
            Destination
          </span>

          <h3>Goa</h3>

          <p>India</p>

        </div>

        {/* CHECK IN */}
        <div className="hotel-card">

          <div className="hotel-icon">
            <LuCalendar />
          </div>

          <span className="hotel-label">
            Check In
          </span>

          <h3>25 Apr</h3>

          <p>Friday</p>

        </div>

        {/* CHECK OUT */}
        <div className="hotel-card">

          <div className="hotel-icon">
            <LuCalendar />
          </div>

          <span className="hotel-label">
            Check Out
          </span>

          <h3>27 Apr</h3>

          <p>Sunday</p>

        </div>

        {/* GUESTS */}
        <div className="hotel-card">

          <div className="hotel-icon">
            <LuUsers />
          </div>

          <span className="hotel-label">
            Guests
          </span>

          <h3>2 Adults</h3>

          <p>1 Room</p>

        </div>

      </div>

      {/* SEARCH BUTTON */}
      <button className="hotel-btn">

        <LuHotel />

        Search Hotels

      </button>

    </div>
  );
};

export default HotelForm;