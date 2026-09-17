import React from 'react';
import { Link } from 'react-router-dom';

export default function Resources() {
  const pdfResources = [
    {
      id: "pdf-brochure",
      title: "1. NovaTech Company Brochure.pdf",
      filename: "NovaTech Company Brochure.pdf",
      slugFilename: "novatech-company-brochure.pdf",
      tag: "Text PDF",
      tagClass: "tag",
      description: "Standard PDF containing clean selectable text. Covers NovaTech corporate history, core engineering capabilities, global headquarters address (100 Tech Park Way, San Francisco, CA), and support contacts.",
      testPurpose: "Verify PDF text extraction & basic paragraph chunking."
    },
    {
      id: "pdf-ai-guide",
      title: "2. AI and Machine Learning Guide.pdf",
      filename: "AI and Machine Learning Guide.pdf",
      slugFilename: "ai-and-machine-learning-guide.pdf",
      tag: "Text + Diagrams",
      tagClass: "tag tag-guide",
      description: "Technical guide containing structured headings, technical descriptions of Retrieval-Augmented Generation (RAG), vector embedding parameters (text-embedding-3-large), and embedded architecture diagram graphics.",
      testPurpose: "Verify PDF heading hierarchy, multi-modal image extraction, and vector index metadata parsing."
    },
    {
      id: "pdf-catalog",
      title: "3. NovaTech Product Catalog.pdf",
      filename: "NovaTech Product Catalog.pdf",
      slugFilename: "novatech-product-catalog.pdf",
      tag: "Multi-page Tables",
      tagClass: "tag tag-catalog",
      description: "Multi-page enterprise product catalog featuring pricing matrices, technical spec tables, and feature lists for NovaAI Platform v3.2, CloudScale Mesh v2.0, DevFlow CLI Pro, and DataStream Lakehouse.",
      testPurpose: "Verify multi-page PDF traversal, tabular data extraction, and pricing item retrieval."
    },
    {
      id: "pdf-ocr",
      title: "4. Important Company Information.pdf",
      filename: "Important Company Information.pdf",
      slugFilename: "important-company-information.pdf",
      tag: "Scanned OCR Test",
      tagClass: "tag tag-ocr",
      description: "Scanned-style document where all text (executive memo, emergency contact directory for Mark Vance and Dr. Elena Rostova, MFA policy, AWS region codes) is pre-rendered onto bitmap images without PDF font text streams.",
      testPurpose: "Strict test for Optical Character Recognition (OCR) engines (e.g. Tesseract, Unstructured, Vision LLMs). Standard PDF text splitters will return 0 words."
    },
    {
      id: "pdf-policy",
      title: "5. Company Policy Document.pdf",
      filename: "Company Policy Document.pdf",
      slugFilename: "company-policy-document.pdf",
      tag: "Hybrid Text & Image",
      tagClass: "tag",
      description: "Hybrid compliance document containing selectable text for security policies on Page 1, combined with embedded image visual infographics on Page 2 detailing remote VPN requirements.",
      testPurpose: "Verify hybrid document processing where crawlers must handle both native PDF text streams and image-embedded OCR text in a single document."
    },
    {
      id: "pdf-pure-images",
      title: "6. NovaTech Technical Diagrams and Gallery.pdf",
      filename: "NovaTech Technical Diagrams and Gallery.pdf",
      slugFilename: "novatech-technical-diagrams-and-gallery.pdf",
      tag: "Pure Images Only (No Text)",
      tagClass: "tag tag-guide",
      description: "Multi-page document containing strictly visual graphics, network topology diagrams, cloud architecture maps, and bar/pie chart illustrations. Contains 0 text elements, 0 font streams, and 0 character glyphs.",
      testPurpose: "Verify raw image extraction, multi-modal vision model ingestion, and filtering out non-text documents."
    }
  ];

  return (
    <div className="resources-page" id="page-resources">
      {/* Header Banner */}
      <section className="hero" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div className="badge">📁 Downloadable PDF Knowledge Hub</div>
          <h1 className="hero-title">Resource Center & <span>Crawler Benchmark Documents</span></h1>
          <p className="hero-subtitle">
            This repository contains static downloadable PDFs engineered for testing web crawlers, document parsers, PDF extractors, OCR engines, and RAG chatbots.
          </p>
        </div>
      </section>

      {/* Main Download List */}
      <section className="section container">
        {/* Crawler Guidance Box */}
        <div className="crawler-note" id="crawler-guidance-box">
          <div className="crawler-note-icon">🤖</div>
          <div>
            <h3 className="crawler-note-title">Crawler & RAG Test Instructions</h3>
            <p className="crawler-note-desc">
              All PDF links below use standard HTML anchor tags (<code>&lt;a href="..." download&gt;</code>) pointing directly to static assets in the <code>/public/pdfs/</code> folder. Crawlers starting at the <Link to="/" id="resources-link-home">Home page</Link> can follow internal links to <Link to="/services" id="resources-link-services">Services</Link> or <Link to="/about" id="resources-link-about">About Us</Link> and arrive here to discover all 6 benchmark files.
            </p>
          </div>
        </div>

        <div className="section-header" style={{ textStyle: 'left', margin: '0 0 2.5rem 0' }}>
          <h2 className="section-title">Official NovaTech Documents ({pdfResources.length} Files)</h2>
          <p className="section-subtitle">Click any button to download the target PDF for crawler parsing.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {pdfResources.map((res) => (
            <div key={res.id} className="resource-card" id={res.id}>
              <div>
                <span className={res.tagClass}>{res.tag}</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                  {res.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', marginBottom: '0.75rem' }}>
                  {res.description}
                </p>
                <div style={{ fontSize: '0.92rem', color: '#2563eb', fontWeight: '600', marginBottom: '1rem' }}>
                  🎯 <strong>Crawler Test Benchmark:</strong> {res.testPurpose}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href={`/pdfs/${encodeURIComponent(res.filename)}`}
                  download={res.filename}
                  className="download-btn"
                  id={`download-${res.id}`}
                >
                  📥 Download {res.filename}
                </a>

                <a
                  href={`/pdfs/${res.slugFilename}`}
                  download={res.slugFilename}
                  style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}
                  id={`alias-${res.id}`}
                >
                  Direct link: <code>/pdfs/{res.slugFilename}</code>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RAG Benchmark Fact Sheet Section */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="section-header">
            <h2 className="section-title">RAG Chatbot Verification Benchmarks</h2>
            <p className="section-subtitle">Use these factual baseline answers to evaluate your RAG indexing and QA performance.</p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-main)' }}>
              Sample Benchmark Questions & Ground Truth Answers:
            </h4>

            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)' }}>
              <li>
                <strong>Q: What is NovaTech's company address and main contact telephone?</strong><br/>
                <em>A: 100 Tech Park Way, Suite 400, San Francisco, CA 94107. Phone: +1 (800) 555-0199. (Present on Home, About, Brochure PDF, and Scanned PDF).</em>
              </li>
              <li>
                <strong>Q: Who is the Chief Technology Officer (CTO) of NovaTech Solutions?</strong><br/>
                <em>A: Dr. Elena Rostova. She also serves as the Data Protection Officer. (Present on About page and Scanned OCR PDF).</em>
              </li>
              <li>
                <strong>Q: What are the products listed in the product catalog and what are their prices?</strong><br/>
                <em>A: NovaAI Platform v3.2 ($4,999/mo), CloudScale Mesh v2.0 ($2,499/mo), DevFlow CLI Pro ($499/seat/yr), and DataStream Lakehouse ($3,800/mo). (Present in NovaTech Product Catalog PDF).</em>
              </li>
              <li>
                <strong>Q: What is the primary AWS cloud region used by NovaTech according to executive policy?</strong><br/>
                <em>A: Primary region is US-WEST-2 (Oregon) with failover in EU-CENTRAL-1 (Frankfurt). (Present INSIDE THE IMAGE of Important Company Information PDF - Requires OCR).</em>
              </li>
              <li>
                <strong>Q: Which PDF file contains strictly images without any text content?</strong><br/>
                <em>A: NovaTech Technical Diagrams and Gallery.pdf. Contains 0 text elements and 0 font streams.</em>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
