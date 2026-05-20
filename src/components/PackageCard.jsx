import {
  FaPlane,
  FaUtensils,
  FaSpa,
  FaHeart,
  FaCalendarAlt
} from "react-icons/fa";

import "./PackageSection.css";

const PackageCard = ({
  title,
  desc,
  image,
  // price,
  nights,
  feature1,
  feature2,
  feature3,
  onClick
}) => {

  return (
    <div className="package-card" onClick={onClick}>

      {/* IMAGE */}
      <div className="package-img">

        <img src={image} alt={title} />

        {/* PRICE */}
        {/* <div className="package-price">
          ₹ {price}
        </div> */}

        {/* WISHLIST */}
        <button className="wishlist-btn">
          <FaHeart />
        </button>

      </div>

      {/* CONTENT */}
      <div className="package-content">

        <h3>{title}</h3>

        <p>{desc}</p>

        {/* STATS */}
        <div className="package-stats">

          <div className="stat-item">
            <FaCalendarAlt />
            <span>{nights}</span>
          </div>

          <div className="stat-item">
            <FaPlane />
            <span>{feature1}</span>
          </div>

          <div className="stat-item">
            <FaUtensils />
            <span>{feature2}</span>
          </div>

          <div className="stat-item">
            <FaSpa />
            <span>{feature3}</span>
          </div>

        </div>

        {/* BUTTON */}
        <div className="package-actions">

          <button className="enquiry-btn">
            Enquiry Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default PackageCard;