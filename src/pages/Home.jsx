import { useState } from "react";
import SearchTabs from "../components/SearchTab";
// import TrendingSection from "../components/TrendingSection";
// import PackagesSection from "../components/PackagesSection";
import PartnersSection from "../components/PartnersSection";

const Home = () => {

  const [activeTab, setActiveTab] = useState("flight");

  // ✅ HERO CONFIG (image + text together)
  const heroContent = {
    flight: {
      image: "./planes.png",
      title: "Your journey starts here",
      subtitle: "Search flights across the world at the best prices"
    },
    hotel: {
      image: "./Hotel-Baner.png",
      title: "Find your perfect stay",
      subtitle: "Explore hotels, resorts & homestays with ease"
    },
    packages: {
      image: "./Train-Banner.jpg",
      title: "Explore curated packages",
      subtitle: "Handpicked holiday deals for unforgettable trips"
    },
    insurance: {
      image: "./Insurrance-Banner.jpg",
      title: "Travel with confidence",
      subtitle: "Secure your journey with comprehensive coverage"
    }
  };

  const currentHero = heroContent[activeTab];

  return (
    <div className="home">

      {/* HERO */}
      <div className="hero">
        <img src={currentHero.image} alt="hero" />

        <div className="hero-text">
          <h1>{currentHero.title}</h1>
          <p>{currentHero.subtitle}</p>
        </div>
      </div>

      {/* SEARCH */}
      <div className="search-wrapper">
        <div className="search-box">
          <SearchTabs 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>

      {/* <TrendingSection /> */}
      <PartnersSection />
      {/* <PackagesSection /> */}
    </div>
  );
};

export default Home;