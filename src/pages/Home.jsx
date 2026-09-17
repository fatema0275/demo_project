import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page" id="page-home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="badge">
            ⚡ Next-Gen Enterprise Technology Partner
          </div>
          <h1 className="hero-title">
            Engineering High-Performance <span>Web & AI Solutions</span> for Global Enterprise
          </h1>
          <p className="hero-subtitle">
            NovaTech Solutions delivers full-stack web architectures, custom machine learning pipelines,
            and scalable cloud infrastructure designed to drive growth.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary" id="hero-btn-services">
              Explore Our Services &rarr;
            </Link>
            <Link to="/resources" className="btn btn-secondary" id="hero-btn-resources">
              Browse PDF Resources 📄
            </Link>
          </div>
        </div>
      </section>

      {/* Overview & Contextual Links Section */}
      <section className="section container">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Who We Are & What We Do</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            Founded in 2018, <strong>NovaTech Solutions</strong> is a modern software development and technology consulting company.
            We specialize in building cloud-native web applications, fine-tuning state-of-the-art artificial intelligence models,
            and automating continuous integration pipelines for enterprises worldwide.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            Learn more about our team and mission on our <Link to="/about" id="home-inline-about">About Us page</Link>,
            or read about our tailored technical capabilities on the <Link to="/services" id="home-inline-services">Services overview page</Link>.
            If you are evaluating our software platform or technical guidelines for integration, please inspect our full collection of downloadable documents available in the <Link to="/resources" id="home-inline-resources">Resource Center</Link>.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Our headquarters are located at <strong>100 Tech Park Way, Suite 400, San Francisco, CA 94107</strong>. You can reach our sales team directly at <strong>info@novatech-solutions.example</strong> or by calling <strong>+1 (800) 555-0199</strong>.
          </p>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Core Service Pillars</h2>
            <p className="section-subtitle">
              End-to-end software solutions tailored to solve complex engineering challenges.
            </p>
          </div>

          <div className="grid-3">
            <div className="card" id="card-web-dev">
              <div className="card-icon">🌐</div>
              <h3 className="card-title">Full-Stack Web Development</h3>
              <p className="card-desc">
                High-throughput web applications engineered with React, Next.js, and modern Microservices.
                Optimized for fast rendering and high SEO visibility.
              </p>
              <Link to="/services" className="card-link" id="card-link-web-dev">
                View Web Dev Services &rarr;
              </Link>
            </div>

            <div className="card" id="card-ai-ml">
              <div className="card-icon">🧠</div>
              <h3 className="card-title">AI & Machine Learning</h3>
              <p className="card-desc">
                Custom LLM fine-tuning, Retrieval-Augmented Generation (RAG) pipelines, and predictive analytics
                built for mission-critical enterprise workflows.
              </p>
              <Link to="/services" className="card-link" id="card-link-ai-ml">
                Explore AI/ML Capabilities &rarr;
              </Link>
            </div>

            <div className="card" id="card-cloud">
              <div className="card-icon">☁️</div>
              <h3 className="card-title">Cloud Solutions & DevOps</h3>
              <p className="card-desc">
                AWS, GCP, and Azure cloud migrations, Kubernetes container orchestration, and automated CI/CD security scanning with 99.99% uptime guarantees.
              </p>
              <Link to="/services" className="card-link" id="card-link-cloud">
                Learn About Cloud Scale &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical FAQ / RAG Testing Section */}
      <section className="section container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Essential facts and details about NovaTech Solutions for system benchmarking.
          </p>
        </div>

        <div className="faq-list">
          <div className="faq-item" id="faq-1">
            <h4 className="faq-question">What core services does NovaTech Solutions offer?</h4>
            <p className="faq-answer">
              NovaTech Solutions offers three core technical services: Custom Full-Stack Web Development, Artificial Intelligence & Machine Learning Integration, and Enterprise Cloud Infrastructure / DevOps Consulting. Read complete details on our <Link to="/services" id="faq-link-services">Services page</Link>.
            </p>
          </div>

          <div className="faq-item" id="faq-2">
            <h4 className="faq-question">Where is NovaTech Solutions headquartered and how can I contact support?</h4>
            <p className="faq-answer">
              Our main headquarters is located at 100 Tech Park Way, Suite 400, San Francisco, CA 94107. You can contact support via email at support@novatech-solutions.example or phone at +1 (800) 555-0199. Learn more about our company background on the <Link to="/about" id="faq-link-about">About Us page</Link>.
            </p>
          </div>

          <div className="faq-item" id="faq-3">
            <h4 className="faq-question">Where can I download technical specifications and product guides?</h4>
            <p className="faq-answer">
              All official PDFs—including the NovaTech Company Brochure, AI & ML Technical Guide, Product Catalog, and Company Policies—are available on our <Link to="/resources" id="faq-link-resources">Resources & Downloads page</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
