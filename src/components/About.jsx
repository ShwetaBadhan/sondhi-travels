import"./About.css";
const About = () => {
  return (
    <div className="about">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <h1>Crafting Journeys, Not Just Trips</h1>
            <p>
              We design premium travel experiences that blend luxury,
              comfort, and unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-container about-split">

        <div className="about-left">
          <h2>Who We Are</h2>

          <p>
            Sondhi Travels is a trusted name in aviation and tourism,
            connecting travelers and agents through a seamless digital platform.
          </p>

          <p>
            From luxury vacations to corporate travel solutions,
            we deliver reliability, speed, and personalized service.
          </p>

          <div className="about-highlights">
            <div>✔ Trusted by thousands</div>
            <div>✔ 15+ years experience</div>
            <div>✔ Global network</div>
          </div>
        </div>

        <div className="about-right">
          <img src="/6.webp" alt="about" />
        </div>

      </section>

      {/* FEATURES */}
      <section className="about-container about-features">

        <div className="feature">
          <h3>✈ Seamless Booking</h3>
          <p>Flights, hotels & packages in one place</p>
        </div>

        <div className="feature">
          <h3>🌍 Global Reach</h3>
          <p>Access destinations worldwide</p>
        </div>

        <div className="feature">
          <h3>🤝 Trusted Network</h3>
          <p>Reliable partners & verified deals</p>
        </div>

        <div className="feature">
          <h3>💎 Premium Experience</h3>
          <p>Luxury tailored to your needs</p>
        </div>

      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="about-stats-wrapper">

          <div className="stat">
            <h2>10K+</h2>
            <p>Happy Travelers</p>
          </div>

          <div className="stat">
            <h2>50+</h2>
            <p>Destinations</p>
          </div>

          <div className="stat">
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat">
            <h2>24/7</h2>
            <p>Support</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-box">
          <h2>Start Your Journey Today</h2>
          <p>Discover premium travel experiences curated just for you</p>
          <button>Explore Now</button>
        </div>
      </section>

    </div>
  );
};

export default About;