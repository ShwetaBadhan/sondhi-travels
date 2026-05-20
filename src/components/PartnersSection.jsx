import { useState } from "react";
import "./PartnersSection.css";


const partners = [
  { name: "Singapore Airlines",    logo: "/logo-1.png" },
  { name: "Singapore Airlines", logo: "/logo-1.png" },
  { name: "Singapore Airlines",    logo: "/logo-1.png" },
  { name: "Singapore Airlines",      logo: "/logo-1.png" },
  { name: "Singapore Airlines",     logo: "/logo-1.png" },
  { name: "Singapore Airlines",   logo: "/logo-1.png" },
  { name: "Singapore Airlines",   logo: "/logo-1.png" },
  { name: "Singapore Airlines",     logo: "/logo-1.png" },
  { name: "Singapore Airlines",    logo: "/logo-1.png" },
  { name: "Singapore Airlines",    logo: "/logo-1.png" },
];

const doubled = [...partners, ...partners];

const stats = [
  { num: "120+", label: "Global Partners" },
  { num: "40+",  label: "Countries" },
  { num: "8yr",  label: "Experience" }, 
];

export default function PartnersSection() {
  return (
    <section className="partners-section trending">

      
      <h2>
        <span className="highlight"></span>
        Our <span className="city">Partners</span></h2>


   
      <div className="slider-wrapper">
        <div className="fade-left" />
        <div className="fade-right" />

        <div className="partners-track">
          {doubled.map((partner, i) => (
            <div key={i} className="partner-card">
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
            </div>
          ))}
        </div>
      </div>

      <div className="partners-stats">
        {stats.map((stat, i) => (
          <div key={i} className="stats-group">
            <div className="stat-item">
              <span className="stat-number">{stat.num}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
            {i < stats.length - 1 && <div className="stat-sep" />}
          </div>
        ))}
      </div>

    </section>
  );
}