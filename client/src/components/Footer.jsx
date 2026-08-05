import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>⚽ Champions League</h3>
          <p>Experience the ultimate football tournament management system inspired by UEFA Champions League.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/tournaments">Tournaments</a></li>
            <li><a href="/clubs">Clubs</a></li>
            <li><a href="/fixtures">Fixtures</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#rules">Tournament Rules</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#youtube">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Champions League Tournament Manager. All rights reserved. | This is an educational project inspired by UEFA Champions League.</p>
      </div>
    </footer>
  );
};
