import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="services-page" id="page-services">
      {/* Header Banner */}
      <section className="hero" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div className="badge">🛠️ Engineering Services</div>
          <h1 className="hero-title">Our Technical <span>Capabilities & Solutions</span></h1>
          <p className="hero-subtitle">
            NovaTech Solutions provides full-cycle web architecture, artificial intelligence implementations, and cloud DevOps solutions.
          </p>
        </div>
      </section>

      {/* Main Service Pillars Breakdown */}
      <section className="section container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          
          {/* Pillar 1: Web Development */}
          <div className="card" id="service-detail-web" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div className="card-icon" style={{ margin: 0 }}>🌐</div>
              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-main)' }}>1. Web Development & Digital Architecture</h2>
                <p style={{ color: 'var(--brand-blue)', fontWeight: '700' }}>Custom Enterprise Applications & Microfrontends</p>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1rem' }}>
              Our Web Development division specializes in engineering resilient, accessible, and high-speed web applications using React.js, Next.js, Vue, and TypeScript. We build responsive user interfaces optimized for minimal load times and maximum SEO crawling performance.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.25rem' }}>
              We implement headless CMS integrations, REST and GraphQL APIs, and custom server-side rendering (SSR) pipelines. For deeper technical specifications, refer to our <Link to="/resources" id="service-web-link-resources">Resource Center PDF downloads</Link> or review our company foundation on the <Link to="/about" id="service-web-link-about">About NovaTech page</Link>.
            </p>
            <div style={{ background: 'var(--bg-secondary)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <strong>Key Tech Stack:</strong> React.js, Vite, Node.js Express, TypeScript, Next.js App Router, Tailwind CSS, GraphQL.
            </div>
          </div>

          {/* Pillar 2: AI & ML */}
          <div className="card" id="service-detail-ai" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div className="card-icon" style={{ margin: 0, background: '#faf5ff' }}>🧠</div>
              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-main)' }}>2. Artificial Intelligence & Machine Learning</h2>
                <p style={{ color: 'var(--brand-purple)', fontWeight: '700' }}>Retrieval-Augmented Generation (RAG) & Neural Networks</p>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1rem' }}>
              NovaTech Solutions designs end-to-end Machine Learning pipelines, autonomous AI agents, and semantic RAG systems. We enable enterprise clients to ingest unstructured multi-modal data—such as HTML web pages, text PDFs, product catalogs, and scanned OCR documents—and query them via natural language.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.25rem' }}>
              You can test our multi-modal document extraction framework directly by downloading our <a href="/pdfs/AI and Machine Learning Guide.pdf" download id="service-ai-download-guide">AI & Machine Learning Technical Guide (PDF)</a> or inspecting the <Link to="/resources" id="service-ai-link-resources">Resources hub</Link> for sample product matrices. Return to the <Link to="/" id="service-ai-link-home">Home page</Link> for FAQ details.
            </p>
            <div style={{ background: 'var(--bg-secondary)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <strong>Key AI Technologies:</strong> PyTorch, OpenAI API, LangChain, LlamaIndex, Pinecone Vector DB, Tesseract OCR, Python.
            </div>
          </div>

          {/* Pillar 3: Cloud Solutions */}
          <div className="card" id="service-detail-cloud" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div className="card-icon" style={{ margin: 0, background: '#f0fdf4' }}>☁️</div>
              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-main)' }}>3. Enterprise Cloud Solutions & DevOps</h2>
                <p style={{ color: 'var(--brand-emerald)', fontWeight: '700' }}>Kubernetes Orchestration & Zero-Trust Security</p>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1rem' }}>
              Our Cloud DevOps practice provides multi-cloud architectural design across AWS, Google Cloud Platform (GCP), and Microsoft Azure. We specialize in zero-downtime infrastructure migrations, infrastructure-as-code (Terraform/Pulumi), and automated SOC2 security auditing.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.25rem' }}>
              Learn more about our operational compliance standards by reading the <a href="/pdfs/Company Policy Document.pdf" download id="service-cloud-download-policy">Company Policy Document (PDF)</a> or visiting our <Link to="/about" id="service-cloud-link-about">Leadership section</Link>.
            </p>
            <div style={{ background: 'var(--bg-secondary)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <strong>Cloud Tooling:</strong> Kubernetes (EKS/GKE), Docker, Terraform, AWS Lambda, Prometheus, Grafana, GitHub Actions.
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
