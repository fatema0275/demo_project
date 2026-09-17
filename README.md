# NovaTech Solutions - Web Crawler & RAG Chatbot Testbed

A complete, production-styled React.js website built with **Vite** and **React Router** designed specifically as a testbed for evaluating web crawlers, document parsers, PDF extractors, OCR engines, and RAG (Retrieval-Augmented Generation) applications.

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Generate PDF Assets (Pre-Generated in `/public/pdfs/`)
```bash
npm run generate-pdfs
```

### 3. Launch Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your web browser or point your web crawler at `http://localhost:5173/`.

---

## 🌐 Website Architecture & Internal Routing

The website uses standard static anchor tags (`<a href="...">`) and React Router to enable full crawlability:

- **Home (`/`)**: Hero section, company value proposition, 3 featured service summaries, body paragraph internal links, and FAQs.
- **About Us (`/about`)**: Company history, executive leadership team, mission/vision, and contextual internal links.
- **Services (`/services`)**: In-depth breakdowns of Web Development, Artificial Intelligence & Machine Learning, and Cloud DevOps.
- **Resource Center (`/resources`)**: Direct download links for all 6 test PDF files, complete with document metadata and crawler instructions.

---

## 📄 Downloadable PDF Test Suite (`/public/pdfs/`)

The project includes **6 programmatically generated PDF files** designed to benchmark different capabilities of your document ingestion pipeline:

1. **`NovaTech Company Brochure.pdf`**
   - **Type**: Native Selectable PDF Text.
   - **Content**: Company overview, capabilities list, HQ address (San Francisco, CA), support phone (+1 800-555-0199).
   - **Test Target**: Evaluates basic PDF text extraction & paragraph chunking.

2. **`AI and Machine Learning Guide.pdf`**
   - **Type**: Selectable Text + Embedded Diagrams.
   - **Content**: Technical breakdown of RAG, vector embedding parameters (1536 dimensions), vector databases, and system architecture diagrams.
   - **Test Target**: Evaluates multi-modal diagram extraction, heading hierarchies, and vector index metadata parsing.

3. **`NovaTech Product Catalog.pdf`**
   - **Type**: Multi-page PDF with Tables & Specs.
   - **Content**: Multi-page feature matrix, pricing tables (`NovaAI Platform v3.2` at $4,999/mo, `CloudScale Mesh v2.0`, `DevFlow CLI Pro`, `DataStream Lakehouse`).
   - **Test Target**: Evaluates multi-page PDF traversal and structured table parsing.

4. **`Important Company Information.pdf`** ⭐ *(Scanned OCR Benchmark)*
   - **Type**: **Scanned / Bitmap Image PDF (0 Selectable PDF Font Glyphs)**.
   - **Content**: Executive memo, emergency contact directory (Mark Vance, Dr. Elena Rostova), MFA compliance rules, and cloud AWS region codes (`US-WEST-2`).
   - **Test Target**: **Strict OCR verification**. Standard PDF text splitters will return empty strings; requires an OCR engine (Tesseract, Unstructured, or Vision LLMs).

5. **`Company Policy Document.pdf`**
   - **Type**: Hybrid (Page 1 Selectable Text + Page 2 Embedded Image Text).
   - **Content**: Security & IP policies on Page 1, remote work infographic image on Page 2.
   - **Test Target**: Evaluates hybrid ingestion where a single document contains both native text streams and image-embedded text.

6. **`NovaTech Technical Diagrams and Gallery.pdf`** 🎨 *(Pure Image PDF)*
   - **Type**: **PURE IMAGES ONLY (0 Text Stream, 0 Text Characters)**.
   - **Content**: Multi-page visual document containing network topology graphs, cloud node diagrams, and data visualization bar/pie charts.
   - **Test Target**: Evaluates raw image extraction, multi-modal vision model ingestion, and filtering out non-text documents.

---

## 🤖 RAG Benchmark Questions

| Test Question | Expected Answer | Source Document / Page |
|---|---|---|
| *What services does NovaTech Solutions offer?* | Full-Stack Web Development, AI & Machine Learning, Cloud Solutions & DevOps | `/`, `/services`, `Brochure.pdf` |
| *What is the company's mission?* | Empower global enterprise by bridging AI research and production engineering | `/about` |
| *Who is the Chief Technology Officer (CTO)?* | Dr. Elena Rostova | `/about`, `Important Company Information.pdf` |
| *What products are in the catalog and how much do they cost?* | NovaAI Platform ($4,999/mo), CloudScale Mesh ($2,499/mo), DevFlow CLI Pro ($499/seat/yr), DataStream Lakehouse ($3,800/mo) | `NovaTech Product Catalog.pdf` |
| *What AWS region code is specified in the scanned memo?* | Primary: `US-WEST-2` (Oregon), Failover: `EU-CENTRAL-1` (Frankfurt) | `Important Company Information.pdf` (OCR) |
| *Which document contains strictly images with no text?* | `NovaTech Technical Diagrams and Gallery.pdf` | `Gallery PDF` |

---

## 🛠️ Technology Stack

- **Framework**: React.js 18 + Vite 5
- **Routing**: React Router DOM v6
- **Styling**: Vanilla CSS3 (Custom Design System with Plus Jakarta Sans & JetBrains Mono)
- **PDF Generation**: PDFKit + Pure JS PNG Bitmap Encoder (`pngjs`)
- **Backend/API Dependencies**: None (100% static, local, offline-capable)
