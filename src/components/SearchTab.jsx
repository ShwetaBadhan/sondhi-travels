import FlightForm from "./FlightForm";
import HotelForm from "./HotelForm";
import PackageForm from "./PackageForm";
import InsuranceForm from "./InsuranceForm";

import { LuPlane, LuHotel, LuBriefcase, LuShield } from "react-icons/lu";

const SearchTabs = ({ activeTab, setActiveTab }) => {
  return (
    <>
      {/* TABS */}
      <div className="tabs">

        <button 
          className={activeTab === "flight" ? "active" : ""}
          onClick={() => setActiveTab("flight")}
        >
          <LuPlane className="tab-icon" />
          Flight
        </button>

        <button 
          className={activeTab === "hotel" ? "active" : ""}
          onClick={() => setActiveTab("hotel")}
        >
          <LuHotel className="tab-icon" />
          Hotel
        </button>

        <button 
          className={activeTab === "packages" ? "active" : ""}
          onClick={() => setActiveTab("packages")}
        >
          <LuBriefcase className="tab-icon" />
          Packages
        </button>

        <button 
          className={activeTab === "insurance" ? "active" : ""}
          onClick={() => setActiveTab("insurance")}
        >
          <LuShield className="tab-icon" />
          Insurance
        </button>

      </div>

      {/* FORMS */}
      {activeTab === "flight" && <FlightForm />}
      {activeTab === "hotel" && <HotelForm />}
      {activeTab === "packages" && <PackageForm />}
      {activeTab === "insurance" && <InsuranceForm />}
    </>
  );
};

export default SearchTabs;