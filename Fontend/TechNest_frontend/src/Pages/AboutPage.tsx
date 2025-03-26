import React from 'react';
import './AboutPage.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-intro">
        <h1>About Tech Store</h1>
        <p>
          Founded in [Year], Tech Store was created to bring the latest and greatest in tech products to enthusiasts and professionals alike.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide innovative technology solutions that empower our customers to achieve more, connect better, and stay ahead of the curve.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team member" />
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team member" />
            <h3>John Smith</h3>
            <p>CTO</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          We envision a future where technology continuously evolves to improve everyday life, and we are committed to leading that change.
        </p>
      </section>
    </div>
  );
};

export default About;
