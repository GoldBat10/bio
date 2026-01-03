import React, { useRef } from 'react';
import './App.css';
import CustomCursor from './components/CustomCursor';
import { FaGithub, FaDiscord, FaYoutube, FaGlobe, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

function App() {
  const profileImage = "https://github.com/teeja.png"; // Fallback/Placeholder
  const uploadedImage = "/uploaded_image_1767464052348.png";

  return (
    <>
      <CustomCursor />

      <div className="container">
        {/* Profile Section */}
        <section className="profile-section">
          <div className="profile-image-container">
            {/* Using a placeholder or the uploaded image if available */}
            <img
              src="https://tr.rbxcdn.com/30cda041539cd72a1d2d3a3723731118/150/150/AvatarHeadshot/Png" // Roblox Avatar Placeholder
              alt="Gold"
              className="profile-image"
            />
            <div className="status-indicator"></div>
          </div>

          <h1 className="profile-name">Gold</h1>

          <div className="profile-location">
            <FaMapMarkerAlt size={12} />
            <span>Mountain Time, USA</span>
          </div>

          <p className="profile-bio">
            American Mountain Time <span className="tech-highlight">Roblox Parkour Legacy</span> content creator.
          </p>

          <div className="tech-stack">
            <div className="tech-pill">Roblox</div>
            <div className="tech-pill">Parkour Legacy</div>
            <div className="tech-pill">Content Creator</div>
          </div>

          <div className="social-links">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaYoutube />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaDiscord />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <div className="section-header">
            <h2 className="section-title">Socials</h2>
            <a href="#" className="explore-more">View All</a>
          </div>

          <div className="projects-grid">
            {/* Card 1 */}
            <a href="https://youtube.com" className="project-card">
              <div>
                <div className="card-header">
                  <div className="project-icon">
                    <FaYoutube size={20} color="#FFD700" />
                  </div>
                  <span className="tag new">LATEST</span>
                </div>

                <h3 className="project-title">YouTube Channel</h3>
                <p className="project-desc">
                  Check out my latest Parkour Legacy videos, tutorials, and speedruns.
                </p>
              </div>

              <div className="view-project">
                Watch Now <FaArrowRight size={12} />
              </div>
            </a>

            {/* Card 2 */}
            <a href="https://discord.com" className="project-card">
              <div>
                <div className="card-header">
                  <div className="project-icon">
                    <FaDiscord size={20} color="#FFD700" />
                  </div>
                  <span className="tag active">COMMUNITY</span>
                </div>

                <h3 className="project-title">Discord Server</h3>
                <p className="project-desc">
                  Join the community, chat with other players, and get updates.
                </p>
              </div>

              <div className="view-project">
                Join Server <FaArrowRight size={12} />
              </div>
            </a>
          </div>
        </section>

        <footer className="footer">
          © 2026 Gold
        </footer>
      </div>

      {/* Ambient Background Gradient Effect */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '100vh',
        background: 'radial-gradient(circle at 50% 0%, rgba(255, 215, 0, 0.1), transparent 50%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
    </>
  );
}

export default App;
