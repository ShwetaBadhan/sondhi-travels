import { useState } from "react";
import DestinationCard from "./DestinationCard";
import LeadModal from "./LeadModal";

const data = [
  { city: "Singapore", price: "20,818", image: "./singapore.webp" },
  { city: "Melbourne", price: "65,336", image: "./melbourne.webp" },
  { city: "Bangkok", price: "31,378", image: "./bangkok.jpg" },
  { city: "Phuket", price: "31,378", image: "./phuket.jpg" },
  { city: "Kuala Lumpur", price: "28,000", image: "./kuala.jpg" },
  { city: "Manila", price: "22,500", image: "./manila.webp" },
  { city: "Krabi", price: "30,000", image: "./krabi.jpg" },
  { city: "Langkawi", price: "27,000", image: "./langkwai.jpg" }
];

const TrendingSection = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="trending">
      <h2>
        <span className="highlight"></span>
        Trending 
      </h2>

      <div className="card-grid">
        {data.map((item, index) => (
          <DestinationCard
            key={index}
            {...item}
            onClick={() => setSelectedCity(item)}  // ✅ FIXED
          />
        ))}
      </div>

      <LeadModal
        isOpen={!!selectedCity}
        city={selectedCity?.city}
        image={selectedCity?.image}
        onClose={() => setSelectedCity(null)}
      />
    </div>
  );
};

export default TrendingSection;