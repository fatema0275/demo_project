import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand-logo" style={{ color: '#ffffff' }}>
              <div className="brand-icon">⚡</div>
              <div className="brand-text">NovaTech <span style={{ color: '#38bdf8' }}>Solutions</span></div>
            </Link>
            <p>
              NovaTech Solutions is an enterprise technology consulting firm providing web application engineering,
              AI/ML integration, and cloud infrastructure optimization.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/" id="footer-link-home">Home Page</Link></li>
              <li><Link to="/about" id="footer-link-about">About Company</Link></li>
              <li><Link to="/services" id="footer-link-services">Our Services</Link></li>
              <li><Link to="/resources" id="footer-link-resources">Resource Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Crawler Test Files</h4>
            <ul className="footer-links">
              <li><a href="/pdfs/NovaTech Company Brochure.pdf" download id="footer-pdf-brochure">Company Brochure (PDF)</a></li>
              <li><a href="/pdfs/AI and Machine Learning Guide.pdf" download id="footer-pdf-ai-guide">AI & ML Guide (PDF)</a></li>
              <li><a href="/pdfs/NovaTech Product Catalog.pdf" download id="footer-pdf-catalog">Product Catalog (PDF)</a></li>
              <li><a href="/pdfs/Important Company Information.pdf" download id="footer-pdf-ocr">Scanned Policy (OCR PDF)</a></li>
              <li><a href="/pdfs/Company Policy Document.pdf" download id="footer-pdf-policy">Policy Document (PDF)</a></li>
              <li><a href="/pdfs/NovaTech Technical Diagrams and Gallery.pdf" download id="footer-pdf-pure-images">Pure Image Gallery (PDF)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Headquarters</h4>
            <ul className="footer-links" style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
              <li>📍 100 Tech Park Way, Suite 400</li>
              <li>San Francisco, CA 94107</li>
              <li>✉️ info@novatech-solutions.example</li>
              <li>📞 +1 (800) 555-0199</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NovaTech Solutions Inc. All rights reserved. RAG & Crawler Benchmarking Website.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/about" id="footer-bottom-about">About Us</Link>
            <Link to="/services" id="footer-bottom-services">Services</Link>
            <Link to="/resources" id="footer-bottom-resources">Resources</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
