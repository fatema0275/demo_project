import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-page" id="page-about">
      {/* Header Banner */}
      <section className="hero" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div className="badge">🏢 Corporate Overview</div>
          <h1 className="hero-title">About <span>NovaTech Solutions</span></h1>
          <p className="hero-subtitle">
            Pioneering digital transformation, advanced AI architectures, and resilient cloud engineering since 2018.
          </p>
        </div>
      </section>

      {/* Overview & Mission/Vision */}
      <section className="section container">
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Company Mission & Vision</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            At <strong>NovaTech Solutions</strong>, our mission is to empower global enterprises by bridging the gap between cutting-edge research in Artificial Intelligence and production-grade software engineering.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Our vision is to build intelligent, autonomous, and scalable cloud platforms that elevate how companies operate, make decisions, and interact with their customers. We believe in strict code quality, zero-trust data security, and transparent technical architecture.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            To explore how we apply these principles across web architectures and intelligent agents, visit our <Link to="/services" id="about-link-services">Services catalog</Link> or review our formal technical documentation in the <Link to="/resources" id="about-link-resources">Resource Center</Link>. You can also return to the <Link to="/" id="about-link-home">Home page</Link> for a summary of current offerings.
          </p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Milestone Journey</h2>
            <p className="section-subtitle">A brief timeline of growth and technological innovation.</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="faq-item" id="history-2018">
              <span className="tag">2018</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0.5rem 0' }}>Foundation in San Francisco</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                NovaTech Solutions was established by a team of senior engineers from Stanford and MIT with an initial focus on microservices and enterprise Web Development.
              </p>
            </div>

            <div className="faq-item" id="history-2021">
              <span className="tag" style={{ background: '#faf5ff', color: '#9333ea' }}>2021</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0.5rem 0' }}>AI & Machine Learning Division Expansion</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Launched our dedicated AI research group specializing in Neural Network architectures, Natural Language Processing, and LLM fine-tuning pipelines.
              </p>
            </div>

            <div className="faq-item" id="history-2024">
              <span className="tag" style={{ background: '#f0fdf4', color: '#16a34a' }}>2024 - Present</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0.5rem 0' }}>Enterprise RAG Platform & Global Expansion</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Introduced the flagship NovaAI Platform v3.2 and CloudScale Mesh, now supporting over 150 enterprise clients globally. Download our full product catalog on the <Link to="/resources" id="history-link-resources">Resources page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team Section */}
      <section className="section container">
        <div className="section-header">
          <h2 className="section-title">Leadership Team</h2>
          <p className="section-subtitle">Meet the technologists driving innovation at NovaTech Solutions.</p>
        </div>

        <div className="grid-3">
          <div className="card" id="team-ceo">
            <div className="card-icon" style={{ background: '#eff6ff' }}>👨‍💼</div>
            <h3 className="card-title">Dr. Marcus Vance</h3>
            <p style={{ color: 'var(--brand-blue)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.75rem' }}>Chief Executive Officer & Co-Founder</p>
            <p className="card-desc">
              Ph.D. in Computer Science from Stanford University. Former Principal Systems Architect with 15+ years of experience in distributed systems and AI platforms.
            </p>
          </div>

          <div className="card" id="team-cto">
            <div className="card-icon" style={{ background: '#faf5ff' }}>👩‍💻</div>
            <h3 className="card-title">Dr. Elena Rostova</h3>
            <p style={{ color: 'var(--brand-purple)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.75rem' }}>Chief Technology Officer & Data Protection Officer</p>
            <p className="card-desc">
              Expert in Neural Network acceleration, vector indexing, and zero-trust data governance. Leads NovaTech's AI research lab.
            </p>
          </div>

          <div className="card" id="team-vp">
            <div className="card-icon" style={{ background: '#f0fdf4' }}>👨‍💻</div>
            <h3 className="card-title">David Chen</h3>
            <p style={{ color: 'var(--brand-emerald)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.75rem' }}>VP of Cloud Infrastructure & Security</p>
            <p className="card-desc">
              Specialist in multi-cloud Kubernetes deployments, automated CI/CD security scanning, and SOC2 compliance automation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
