function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div>
          <div className="logo footer-logo">
            🍴 Food<span>Hub</span>
          </div>

          <p>
            Delicious food made with fresh ingredients and
            served with love.
          </p>
        </div>

        <div>
          <h3>Contact</h3>

          <p>📍 Mumbai, Maharashtra</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@foodhub.com</p>
        </div>

        <div>
          <h3>Opening Hours</h3>

          <p>Monday - Friday: 10 AM - 11 PM</p>
          <p>Saturday - Sunday: 11 AM - 12 AM</p>
        </div>
      </div>

      <div className="copyright">
        <p>
          © 2026 FoodHub. Built with React and Node.js.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
