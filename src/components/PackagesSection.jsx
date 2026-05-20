import { useState } from "react";
import PackageCard from "./PackageCard";
import LeadModal from "./LeadModal";
import "./PackageSection.css";

/* ================= PACKAGES DATA ================= */

const packages = [
  {
    title: "Luxury Dubai Package",
    desc: "Enjoy 5 nights in Dubai with Burj Khalifa tickets & desert safari.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",

    days: "5 Days",
    nights: "4 Nights",
    people: "2 Adults",
    hotel: "5 Star"
  },

  {
    title: "Thailand Beach Escape",
    desc: "Phuket + Krabi combo with island tours and premium stays.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

    days: "6 Days",
    nights: "5 Nights",
    people: "Family",
    hotel: "4 Star"
  },

  {
    title: "Singapore Family Trip",
    desc: "Universal Studios, Sentosa Island & city tour included.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",

    days: "4 Days",
    nights: "3 Nights",
    people: "3 Adults",
    hotel: "Luxury"
  },

  {
    title: "Bali Honeymoon Special",
    desc: "Private villa stay with candlelight dinner & spa.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",

    days: "7 Days",
    nights: "6 Nights",
    people: "Couple",
    hotel: "Villa"
  },

  {
    title: "Europe Highlights",
    desc: "Visit Paris, Switzerland & Italy in one amazing trip.",
    image: "/europe.jpg",

    days: "10 Days",
    nights: "9 Nights",
    people: "Group",
    hotel: "Premium"
  },

  {
    title: "Maldives Luxury Stay",
    desc: "Water villa experience with all-inclusive meals.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",

    days: "5 Days",
    nights: "4 Nights",
    people: "Couple",
    hotel: "Resort"
  }
];

/* ================= COMPONENT ================= */

const PackagesSection = () => {

  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section className="packages trending">

      {/* HEADING */}
      <h2>
        <span className="highlight"></span>
        Best <span className="city">Packages</span>
      </h2>

      {/* GRID */}
      <div className="package-grid">

        {packages.map((item, index) => (

          <PackageCard
            key={index}

            title={item.title}
            desc={item.desc}
            image={item.image}

            days={item.days}
            nights={item.nights}
            people={item.people}
            hotel={item.hotel}

            onClick={() => setSelectedPackage(item)}
          />

        ))}

      </div>

      {/* LEAD MODAL */}
      <LeadModal
        isOpen={!!selectedPackage}
        city={selectedPackage?.title}
        image={selectedPackage?.image}
        onClose={() => setSelectedPackage(null)}
      />

    </section>
  );
};

export default PackagesSection;