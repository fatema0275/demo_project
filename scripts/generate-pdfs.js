import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PDFDocument from 'pdfkit';
import { PNG } from 'pngjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, '../public/pdfs');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Simple pure-JS 8x16 Monospace Bitmap Font Map for rendering text to PNG buffers (OCR Test)
const FONT_8X16 = {
  ' ': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  'A': [0,0,0x18,0x3c,0x66,0x66,0x7e,0x66,0x66,0x66,0x66,0,0,0,0,0],
  'B': [0,0,0x7c,0x66,0x66,0x7c,0x66,0x66,0x66,0x7c,0,0,0,0,0,0],
  'C': [0,0,0x3c,0x66,0x60,0x60,0x60,0x60,0x66,0x3c,0,0,0,0,0,0],
  'D': [0,0,0x78,0x6c,0x66,0x66,0x66,0x66,0x6c,0x78,0,0,0,0,0,0],
  'E': [0,0,0x7e,0x60,0x60,0x7c,0x60,0x60,0x60,0x7e,0,0,0,0,0,0],
  'F': [0,0,0x7e,0x60,0x60,0x7c,0x60,0x60,0x60,0x60,0,0,0,0,0,0],
  'G': [0,0,0x3c,0x66,0x60,0x6e,0x66,0x66,0x66,0x3e,0,0,0,0,0,0],
  'H': [0,0,0x66,0x66,0x66,0x7e,0x66,0x66,0x66,0x66,0,0,0,0,0,0],
  'I': [0,0,0x3c,0x18,0x18,0x18,0x18,0x18,0x18,0x3c,0,0,0,0,0,0],
  'J': [0,0,0x1e,0x0c,0x0c,0x0c,0x0c,0x0c,0x6c,0x38,0,0,0,0,0,0],
  'K': [0,0,0x66,0x6c,0x78,0x70,0x78,0x6c,0x66,0x66,0,0,0,0,0,0],
  'L': [0,0,0x60,0x60,0x60,0x60,0x60,0x60,0x60,0x7e,0,0,0,0,0,0],
  'M': [0,0,0x63,0x77,0x7f,0x6b,0x63,0x63,0x63,0x63,0,0,0,0,0,0],
  'N': [0,0,0x66,0x76,0x7e,0x7e,0x6e,0x66,0x66,0x66,0,0,0,0,0,0],
  'O': [0,0,0x3c,0x66,0x66,0x66,0x66,0x66,0x66,0x3c,0,0,0,0,0,0],
  'P': [0,0,0x7c,0x66,0x66,0x66,0x7c,0x60,0x60,0x60,0,0,0,0,0,0],
  'Q': [0,0,0x3c,0x66,0x66,0x66,0x66,0x66,0x3c,0x0e,0x0f,0,0,0,0,0],
  'R': [0,0,0x7c,0x66,0x66,0x7c,0x78,0x6c,0x66,0x66,0,0,0,0,0,0],
  'S': [0,0,0x3e,0x66,0x60,0x3c,0x06,0x06,0x66,0x7c,0,0,0,0,0,0],
  'T': [0,0,0x7e,0x18,0x18,0x18,0x18,0x18,0x18,0x18,0,0,0,0,0,0],
  'U': [0,0,0x66,0x66,0x66,0x66,0x66,0x66,0x66,0x3c,0,0,0,0,0,0],
  'V': [0,0,0x66,0x66,0x66,0x66,0x66,0x3c,0x18,0x18,0,0,0,0,0,0],
  'W': [0,0,0x63,0x63,0x63,0x6b,0x7f,0x77,0x63,0x63,0,0,0,0,0,0],
  'X': [0,0,0x66,0x66,0x3c,0x18,0x18,0x3c,0x66,0x66,0,0,0,0,0,0],
  'Y': [0,0,0x66,0x66,0x66,0x3c,0x18,0x18,0x18,0x18,0,0,0,0,0,0],
  'Z': [0,0,0x7e,0x06,0x0c,0x18,0x30,0x60,0x60,0x7e,0,0,0,0,0,0],
  '0': [0,0,0x3c,0x66,0x6e,0x76,0x66,0x66,0x66,0x3c,0,0,0,0,0,0],
  '1': [0,0,0x18,0x38,0x18,0x18,0x18,0x18,0x18,0x7e,0,0,0,0,0,0],
  '2': [0,0,0x3c,0x66,0x06,0x0c,0x18,0x30,0x60,0x7e,0,0,0,0,0,0],
  '3': [0,0,0x3c,0x66,0x06,0x1c,0x06,0x06,0x66,0x3c,0,0,0,0,0,0],
  '4': [0,0,0x0c,0x1c,0x3c,0x6c,0xfe,0x0c,0x0c,0x1e,0,0,0,0,0,0],
  '5': [0,0,0x7e,0x60,0x7c,0x06,0x06,0x06,0x66,0x3c,0,0,0,0,0,0],
  '6': [0,0,0x3c,0x60,0x60,0x7c,0x66,0x66,0x66,0x3c,0,0,0,0,0,0],
  '7': [0,0,0x7e,0x06,0x0c,0x18,0x30,0x30,0x30,0x30,0,0,0,0,0,0],
  '8': [0,0,0x3c,0x66,0x66,0x3c,0x66,0x66,0x66,0x3c,0,0,0,0,0,0],
  '9': [0,0,0x3c,0x66,0x66,0x3e,0x06,0x06,0x0c,0x38,0,0,0,0,0,0],
  ':': [0,0,0,0,0,0x18,0x18,0,0,0x18,0x18,0,0,0,0,0],
  '.': [0,0,0,0,0,0,0,0,0,0x18,0x18,0,0,0,0,0],
  ',': [0,0,0,0,0,0,0,0,0,0x18,0x18,0x08,0x10,0,0,0],
  '-': [0,0,0,0,0,0,0x7e,0,0,0,0,0,0,0,0,0],
  '/': [0,0,0x02,0x06,0x0c,0x18,0x30,0x60,0x40,0,0,0,0,0,0,0],
  '@': [0,0,0x3c,0x66,0x9e,0xb2,0xb2,0x9e,0x60,0x3e,0,0,0,0,0,0],
  '(': [0,0,0x0e,0x18,0x18,0x18,0x18,0x18,0x18,0x0e,0,0,0,0,0,0],
  ')': [0,0,0x70,0x18,0x18,0x18,0x18,0x18,0x18,0x70,0,0,0,0,0,0],
  '#': [0,0,0x36,0x36,0x7f,0x36,0x7f,0x36,0x36,0,0,0,0,0,0,0],
  '$': [0,0,0x18,0x3e,0x60,0x3c,0x06,0x7c,0x18,0,0,0,0,0,0,0],
  '%': [0,0,0x63,0x66,0x0c,0x18,0x30,0x66,0x63,0,0,0,0,0,0,0],
  '!': [0,0,0x18,0x18,0x18,0x18,0x18,0,0x18,0,0,0,0,0,0,0],
  '?': [0,0,0x3c,0x66,0x06,0x0c,0x18,0,0x18,0,0,0,0,0,0,0],
  '"': [0,0,0x66,0x66,0x22,0,0,0,0,0,0,0,0,0,0,0],
  '\'': [0,0,0x18,0x18,0x08,0,0,0,0,0,0,0,0,0,0,0]
};

for (let c = 97; c <= 122; c++) {
  const upper = String.fromCharCode(c - 32);
  const lower = String.fromCharCode(c);
  FONT_8X16[lower] = FONT_8X16[upper];
}

/**
 * Renders text into a PNG Buffer (pure bitmap image containing text)
 */
function createScannedDocumentImageBuffer({ width = 800, height = 1100, lines = [] }) {
  const png = new PNG({ width, height });

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2;
      const noise = Math.floor(Math.random() * 8) - 4;
      png.data[idx] = Math.min(255, Math.max(0, 248 + noise));     // R
      png.data[idx + 1] = Math.min(255, Math.max(0, 247 + noise)); // G
      png.data[idx + 2] = Math.min(255, Math.max(0, 242 + noise)); // B
      png.data[idx + 3] = 255;                                     // Alpha
    }
  }

  for (let x = 40; x < width - 40; x++) {
    for (let ty = 60; ty < 64; ty++) {
      const idx = (width * ty + x) << 2;
      png.data[idx] = 30; png.data[idx+1] = 40; png.data[idx+2] = 80;
    }
  }

  const drawText = (text, startX, startY, scale = 2, color = [20, 25, 40]) => {
    let curX = startX;
    let curY = startY;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === '\n') {
        curX = startX;
        curY += 16 * scale + 4;
        continue;
      }

      const glyph = FONT_8X16[char] || FONT_8X16['?'];
      for (let row = 0; row < 16; row++) {
        const rowBits = glyph[row];
        for (let col = 0; col < 8; col++) {
          if ((rowBits & (1 << (7 - col))) !== 0) {
            for (let sy = 0; sy < scale; sy++) {
              for (let sx = 0; sx < scale; sx++) {
                const px = curX + col * scale + sx;
                const py = curY + row * scale + sy;
                if (px >= 0 && px < width && py >= 0 && py < height) {
                  const idx = (width * py + px) << 2;
                  png.data[idx] = color[0];
                  png.data[idx + 1] = color[1];
                  png.data[idx + 2] = color[2];
                }
              }
            }
          }
        }
      }
      curX += 8 * scale + 1;
    }
  };

  let yPos = 80;
  lines.forEach(item => {
    const text = item.text || item;
    const scale = item.scale || 2;
    const color = item.color || [20, 25, 40];
    drawText(text, 50, yPos, scale, color);
    yPos += 16 * scale + (item.spacing || 12);
  });

  drawText("CONFIDENTIAL - INTERNAL USE ONLY", 50, height - 60, 2, [180, 40, 40]);

  return PNG.sync.write(png);
}

/**
 * Creates a diagram/chart PNG buffer for technical guides & policies
 */
function createDiagramImageBuffer({ width = 700, height = 350, title = "System Architecture Diagram" }) {
  const png = new PNG({ width, height });

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2;
      png.data[idx] = 240; png.data[idx+1] = 244; png.data[idx+2] = 250; png.data[idx+3] = 255;
    }
  }

  const drawRect = (rx, ry, rw, rh, bgCol, borderCol) => {
    for (let y = ry; y < ry + rh; y++) {
      for (let x = rx; x < rx + rw; x++) {
        if (x >= 0 && x < width && y >= 0 && y < height) {
          const idx = (width * y + x) << 2;
          const isBorder = (x < rx + 3 || x >= rx + rw - 3 || y < ry + 3 || y >= ry + rh - 3);
          const col = isBorder ? borderCol : bgCol;
          png.data[idx] = col[0]; png.data[idx+1] = col[1]; png.data[idx+2] = col[2];
        }
      }
    }
  };

  drawRect(40, 80, 180, 140, [255, 255, 255], [37, 99, 235]);
  drawRect(260, 80, 180, 140, [255, 255, 255], [124, 58, 237]);
  drawRect(480, 80, 180, 140, [255, 255, 255], [16, 185, 129]);

  const drawSimpleText = (txt, sx, sy) => {
    let curX = sx;
    for (let i = 0; i < txt.length; i++) {
      const glyph = FONT_8X16[txt[i]] || FONT_8X16['?'];
      for (let row = 0; row < 16; row++) {
        const bits = glyph[row];
        for (let col = 0; col < 8; col++) {
          if ((bits & (1 << (7 - col))) !== 0) {
            const px = curX + col;
            const py = sy + row;
            if (px >= 0 && px < width && py >= 0 && py < height) {
              const idx = (width * py + px) << 2;
              png.data[idx] = 15; png.data[idx+1] = 23; png.data[idx+2] = 42;
            }
          }
        }
      }
      curX += 9;
    }
  };

  drawSimpleText(title, 40, 30);
  drawSimpleText("1. Ingest Engine", 60, 140);
  drawSimpleText("2. Neural Model", 280, 140);
  drawSimpleText("3. Cloud Endpoint", 490, 140);

  return PNG.sync.write(png);
}

/**
 * Creates a PURE GRAPHICAL IMAGE buffer containing NO text (shapes, charts, diagrams, patterns only)
 */
function createPureGraphicalImageBuffer({ width = 800, height = 600, type = 'network' }) {
  const png = new PNG({ width, height });

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2;
      // Soft gradient background
      png.data[idx] = Math.min(255, 15 + Math.floor(x / width * 30));      // R
      png.data[idx + 1] = Math.min(255, 23 + Math.floor(y / height * 40));  // G
      png.data[idx + 2] = Math.min(255, 42 + Math.floor((x+y)/(width+height)*60)); // B
      png.data[idx + 3] = 255;
    }
  }

  // Draw circle nodes & connecting line vectors
  const drawCircle = (cx, cy, radius, col) => {
    for (let y = cy - radius; y <= cy + radius; y++) {
      for (let x = cx - radius; x <= cx + radius; x++) {
        if (x >= 0 && x < width && y >= 0 && y < height) {
          const distSq = (x - cx) * (x - cx) + (y - cy) * (y - cy);
          if (distSq <= radius * radius) {
            const idx = (width * y + x) << 2;
            png.data[idx] = col[0];
            png.data[idx + 1] = col[1];
            png.data[idx + 2] = col[2];
          }
        }
      }
    }
  };

  const drawLine = (x1, y1, x2, y2, col, thickness = 3) => {
    const steps = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
    for (let i = 0; i <= steps; i++) {
      const t = steps === 0 ? 0 : i / steps;
      const px = Math.round(x1 + (x2 - x1) * t);
      const py = Math.round(y1 + (y2 - y1) * t);
      drawCircle(px, py, thickness, col);
    }
  };

  if (type === 'network') {
    // Render 6-node interconnected network graph
    const nodes = [
      { x: 150, y: 150, color: [37, 99, 235] },
      { x: 400, y: 120, color: [124, 58, 237] },
      { x: 650, y: 180, color: [6, 182, 212] },
      { x: 220, y: 420, color: [16, 185, 129] },
      { x: 480, y: 450, color: [245, 158, 11] },
      { x: 680, y: 380, color: [239, 68, 68] }
    ];

    // Connect all node edges
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        drawLine(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y, [100, 116, 139], 2);
      }
    }

    // Draw node halos
    nodes.forEach(n => {
      drawCircle(n.x, n.y, 28, n.color);
      drawCircle(n.x, n.y, 14, [255, 255, 255]);
    });
  } else if (type === 'charts') {
    // Render pure bar chart & pie chart graphics (NO TEXT)
    // Bar chart bars
    const barX = 100;
    const heights = [120, 240, 180, 320, 280, 390];
    const colors = [[37, 99, 235], [124, 58, 237], [6, 182, 212], [16, 185, 129], [245, 158, 11], [239, 68, 68]];

    heights.forEach((h, idx) => {
      const bx = barX + idx * 100;
      const by = 500 - h;
      for (let y = by; y < 500; y++) {
        for (let x = bx; x < bx + 60; x++) {
          if (x >= 0 && x < width && y >= 0 && y < height) {
            const index = (width * y + x) << 2;
            png.data[index] = colors[idx][0];
            png.data[index + 1] = colors[idx][1];
            png.data[index + 2] = colors[idx][2];
          }
        }
      }
    });

    // Draw baseline
    drawLine(60, 502, 740, 502, [255, 255, 255], 3);
  }

  return PNG.sync.write(png);
}

// Helper to save PDF doc to disk
function savePDF(doc, filename) {
  const filePath = path.join(outputDir, filename);
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);
  doc.end();

  const slugFilename = filename.toLowerCase().replace(/\s+/g, '-');
  if (slugFilename !== filename) {
    const slugPath = path.join(outputDir, slugFilename);
    const slugStream = fs.createWriteStream(slugPath);
    stream.on('finish', () => {
      fs.copyFileSync(filePath, slugPath);
      console.log(`[PDF Generator] Created alias: ${slugFilename}`);
    });
  }

  console.log(`[PDF Generator] Created PDF: ${filename}`);
}


// 1. NovaTech Company Brochure.pdf
function generateBrochure() {
  const doc = new PDFDocument({ margin: 50 });
  doc.rect(0, 0, 612, 100).fill('#0f172a');
  doc.fillColor('#ffffff').fontSize(26).text('NovaTech Solutions', 50, 30, { bold: true });
  doc.fillColor('#38bdf8').fontSize(14).text('Corporate Overview & Executive Services Brochure', 50, 65);
  doc.moveDown(3);
  doc.fillColor('#0f172a').fontSize(18).text('About NovaTech Solutions', { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(11).fillColor('#334155').text(
    'NovaTech Solutions is a leading software engineering and technology consulting firm founded in 2018. ' +
    'We specialize in enterprise web application architecture, artificial intelligence implementation, data engineering, ' +
    'and cloud infrastructure optimization. Headquartered in San Francisco, CA with global hubs, NovaTech empowers ' +
    'Fortune 500 enterprises and hyper-growth startups to accelerate digital transformation.'
  );

  doc.moveDown(1.5);
  doc.fontSize(18).fillColor('#0f172a').text('Core Capabilities & Offerings');
  doc.moveDown(0.5);

  const capabilities = [
    { title: 'Full-Stack Web Development', desc: 'Custom enterprise web platforms built with React, Next.js, TypeScript, and high-throughput backend APIs.' },
    { title: 'AI & Machine Learning Solutions', desc: 'Predictive modeling, natural language processing (NLP), Large Language Model (LLM) fine-tuning, and RAG architectures.' },
    { title: 'Cloud Infrastructure & DevOps', desc: 'AWS/Azure/GCP cloud migrations, Kubernetes orchestrations, CI/CD pipeline automation, and zero-trust security.' },
    { title: 'Software Architecture Consulting', desc: 'Legacy modernization, microservices redesign, performance optimization, and technical debt auditing.' }
  ];

  capabilities.forEach(cap => {
    doc.fillColor('#2563eb').fontSize(13).text(`• ${cap.title}`);
    doc.fillColor('#334155').fontSize(10).text(cap.desc, { indent: 15 });
    doc.moveDown(0.5);
  });

  doc.moveDown(1.5);
  doc.fontSize(18).fillColor('#0f172a').text('Contact Details & Headquarters');
  doc.moveDown(0.5);
  doc.fontSize(11).fillColor('#334155')
     .text('Headquarters: 100 Tech Park Way, Suite 400, San Francisco, CA 94107')
     .text('General Inquiries: info@novatech-solutions.example')
     .text('Technical Support: support@novatech-solutions.example')
     .text('Toll-Free Phone: +1 (800) 555-0199')
     .text('Website: https://www.novatech-solutions.example');

  savePDF(doc, 'NovaTech Company Brochure.pdf');
}


// 2. AI and Machine Learning Guide.pdf
function generateAIGuide() {
  const doc = new PDFDocument({ margin: 50 });
  doc.rect(0, 0, 612, 90).fill('#7c3aed');
  doc.fillColor('#ffffff').fontSize(24).text('NovaTech AI & ML Technical Guide', 50, 30);
  doc.fillColor('#e9d5ff').fontSize(13).text('Architecting Enterprise RAG & Neural Networks', 50, 60);

  doc.moveDown(3);
  doc.fillColor('#0f172a').fontSize(16).text('1. Introduction to Retrieval-Augmented Generation (RAG)');
  doc.moveDown(0.5);
  doc.fontSize(10.5).fillColor('#334155').text(
    'Retrieval-Augmented Generation (RAG) is an architectural framework that enhances Large Language Model (LLM) responses ' +
    'by dynamically referencing authoritative external knowledge bases. At NovaTech Solutions, our RAG framework incorporates ' +
    'multi-modal document ingestion, vector databases (such as Pinecone, Qdrant, and Milvus), and semantic chunking algorithms.'
  );

  doc.moveDown(1);
  doc.fontSize(16).fillColor('#0f172a').text('2. End-to-End Ingestion Pipeline Diagram');
  doc.moveDown(0.5);

  const diagramPng = createDiagramImageBuffer({ width: 700, height: 320, title: "NovaTech Neural RAG Ingestion Pipeline" });
  doc.image(diagramPng, 50, doc.y, { width: 500 });
  doc.moveDown(14);

  doc.fontSize(16).fillColor('#0f172a').text('3. Key Technical Specifications');
  doc.moveDown(0.5);
  doc.fontSize(10.5).fillColor('#334155')
     .text('Chunking Strategy: Recursive Character Splitter (512 tokens with 50-token overlap).')
     .text('Embedding Model: text-embedding-3-large (1536 dimensions).')
     .text('Vector Search Index: HNSW (Hierarchical Navigable Small World) cosine distance.')
     .text('Reranking Algorithm: Cohere Rerank v3 for top-k contextual relevance scoring.');

  savePDF(doc, 'AI and Machine Learning Guide.pdf');
}


// 3. NovaTech Product Catalog.pdf
function generateProductCatalog() {
  const doc = new PDFDocument({ margin: 50 });
  doc.rect(0, 0, 612, 110).fill('#2563eb');
  doc.fillColor('#ffffff').fontSize(26).text('NovaTech Enterprise Product Catalog', 50, 30);
  doc.fillColor('#93c5fd').fontSize(14).text('Volume 4 - Software Systems & Platforms', 50, 65);

  doc.moveDown(4);
  doc.fillColor('#0f172a').fontSize(18).text('Featured Enterprise Software Platforms');
  doc.moveDown(1);

  const products = [
    { name: 'NovaAI Platform v3.2', category: 'Enterprise AI', price: '$4,999 / mo', desc: 'Autonomous LLM workflow orchestrator with built-in RAG, vector indexes, and fine-tuning control room.' },
    { name: 'CloudScale Mesh v2.0', category: 'Cloud Infrastructure', price: '$2,499 / mo', desc: 'Multi-cloud Kubernetes cluster management framework with zero-downtime auto-scaling.' },
    { name: 'DevFlow CLI Pro', category: 'Developer Tools', price: '$499 / seat / yr', desc: 'Automated CI/CD security scanner, linting engine, and static code analyzer.' },
    { name: 'DataStream Lakehouse', category: 'Data Engineering', price: '$3,800 / mo', desc: 'Real-time streaming data warehouse supporting SQL queries over unstructured document stores.' }
  ];

  products.forEach(p => {
    doc.rect(50, doc.y, 512, 75).fillAndStroke('#f8fafc', '#cbd5e1');
    const yVal = doc.y - 70;
    doc.fillColor('#1e40af').fontSize(14).text(p.name, 65, yVal + 10);
    doc.fillColor('#059669').fontSize(11).text(p.price, 430, yVal + 10);
    doc.fillColor('#64748b').fontSize(9.5).text(`Category: ${p.category}`, 65, yVal + 28);
    doc.fillColor('#334155').fontSize(10).text(p.desc, 65, yVal + 42, { width: 460 });
    doc.moveDown(1.5);
  });

  doc.addPage();
  doc.fillColor('#0f172a').fontSize(18).text('Product Feature Matrix & Technical Comparison', 50, 40);
  doc.moveDown(1);

  const startY = doc.y;
  doc.rect(50, startY, 512, 28).fill('#1e293b');
  doc.fillColor('#ffffff').fontSize(11).text('Feature / Spec', 60, startY + 8);
  doc.text('NovaAI Platform', 220, startY + 8);
  doc.text('CloudScale Mesh', 340, startY + 8);
  doc.text('DataStream Lake', 460, startY + 8);

  const rows = [
    ['API Throughput', '100k req/min', '500k req/min', '1M events/sec'],
    ['Multi-Cloud Support', 'AWS, GCP, Azure', 'AWS, GCP, Azure', 'AWS, GCP'],
    ['SOC2 Type II Certified', 'Yes', 'Yes', 'Yes'],
    ['SLA Guarantee', '99.99%', '99.999%', '99.95%'],
    ['Custom RAG Indexing', 'Native', 'Plugin Available', 'Native']
  ];

  let currentY = startY + 28;
  rows.forEach((r, idx) => {
    const bg = idx % 2 === 0 ? '#f1f5f9' : '#ffffff';
    doc.rect(50, currentY, 512, 24).fillAndStroke(bg, '#e2e8f0');
    doc.fillColor('#334155').fontSize(10).text(r[0], 60, currentY + 6);
    doc.text(r[1], 220, currentY + 6);
    doc.text(r[2], 340, currentY + 6);
    doc.text(r[3], 460, currentY + 6);
    currentY += 24;
  });

  savePDF(doc, 'NovaTech Product Catalog.pdf');
}


// 4. Important Company Information.pdf (Scanned Text OCR PDF)
function generateScannedInformationPDF() {
  const doc = new PDFDocument({ margin: 0, size: [595.28, 841.89] });
  const scannedLines = [
    { text: "NOVATECH SOLUTIONS INC.", scale: 3, color: [30, 41, 59], spacing: 20 },
    { text: "CONFIDENTIAL EXECUTIVE MEMORANDUM", scale: 2, color: [180, 40, 40], spacing: 25 },
    { text: "SUBJECT: CRITICAL COMPANY POLICIES & CONTACTS", scale: 2, color: [30, 41, 59], spacing: 30 },
    { text: "1. EMERGENCY CONTACT DIRECTORY:", scale: 2, color: [30, 60, 150], spacing: 15 },
    { text: "   CHIEF SECURITY OFFICER: MARK VANCE (+1 800-555-0199 EX 101)", scale: 1.5, color: [40, 50, 70], spacing: 10 },
    { text: "   DATA PROTECTION OFFICER: DR. ELENA ROSTOVA (ELENA@NOVATECH.EX)", scale: 1.5, color: [40, 50, 70], spacing: 25 },
    { text: "2. DATA SECURITY COMPLIANCE STANDARD:", scale: 2, color: [30, 60, 150], spacing: 15 },
    { text: "   ALL EMPLOYEES MUST ENFORCE MULTI-FACTOR AUTHENTICATION (MFA).", scale: 1.5, color: [40, 50, 70], spacing: 10 },
    { text: "   ENCRYPTION KEYS ARE ROTATED EVERY 90 DAYS MANDATORY.", scale: 1.5, color: [40, 50, 70], spacing: 25 },
    { text: "3. CLOUD DEPLOYMENT KEYS & REGIONS:", scale: 2, color: [30, 60, 150], spacing: 15 },
    { text: "   PRIMARY REGION: US-WEST-2 (OREGON INFRASTRUCTURE)", scale: 1.5, color: [40, 50, 70], spacing: 10 },
    { text: "   FAILOVER REGION: EU-CENTRAL-1 (FRANKFURT CLOUD)", scale: 1.5, color: [40, 50, 70], spacing: 30 },
    { text: "NOTE FOR CRAWLERS AND RAG SYSTEMS:", scale: 2, color: [200, 30, 30], spacing: 12 },
    { text: "THIS DOCUMENT CONTAINS ONLY IMAGE BITMAP CONTENT.", scale: 1.5, color: [50, 50, 50], spacing: 8 },
    { text: "IF YOUR RAG BOT CAN ANSWER QUESTIONS FROM THIS PAGE,", scale: 1.5, color: [50, 50, 50], spacing: 8 },
    { text: "YOUR OCR ENGINE IS WORKING PERFECTLY!", scale: 1.5, color: [16, 185, 129], spacing: 10 }
  ];

  const scannedPngBuffer = createScannedDocumentImageBuffer({
    width: 800,
    height: 1100,
    lines: scannedLines
  });

  doc.image(scannedPngBuffer, 0, 0, { width: 595.28, height: 841.89 });
  savePDF(doc, 'Important Company Information.pdf');
}


// 5. Company Policy Document.pdf
function generateCompanyPolicy() {
  const doc = new PDFDocument({ margin: 50 });
  doc.rect(0, 0, 612, 100).fill('#0f172a');
  doc.fillColor('#ffffff').fontSize(24).text('NovaTech Company Policy Document', 50, 30);
  doc.fillColor('#cbd5e1').fontSize(13).text('Information Security, Remote Work & Data Governance', 50, 65);

  doc.moveDown(3);
  doc.fillColor('#0f172a').fontSize(16).text('Section 1: Information Security Policy');
  doc.moveDown(0.5);
  doc.fontSize(10.5).fillColor('#334155').text(
    'NovaTech Solutions maintains a strict zero-trust information security posture. All corporate devices must be ' +
    'registered with Central IT. Passwords must be a minimum of 16 characters in length and include uppercase, lowercase, ' +
    'numeric, and special symbols. Access to production AWS infrastructure requires Hardware Security Key (YubiKey) authentication.'
  );

  doc.moveDown(1.5);
  doc.fontSize(16).fillColor('#0f172a').text('Section 2: Intellectual Property & Open Source');
  doc.moveDown(0.5);
  doc.fontSize(10.5).fillColor('#334155').text(
    'All software code, machine learning models, training datasets, and technical documentation produced by employees ' +
    'or contractors during their employment remain the exclusive intellectual property of NovaTech Solutions Inc.'
  );

  doc.addPage();
  doc.fillColor('#0f172a').fontSize(16).text('Section 3: Remote Work & Security Infographic (Embedded Visual)');
  doc.moveDown(1);

  const policyPng = createScannedDocumentImageBuffer({
    width: 750,
    height: 650,
    lines: [
      { text: "NOVATECH REMOTE WORK INFOGRAPHIC", scale: 2.5, color: [37, 99, 235], spacing: 20 },
      { text: "1. ALWAYS CONNECT TO NOVATECH VPN BEFORE ACCESSING REPOS", scale: 1.5, color: [30, 41, 59], spacing: 15 },
      { text: "2. PUBLIC WIFI ACCESS REQUIRES ENCRYPTED TUNNEL", scale: 1.5, color: [30, 41, 59], spacing: 15 },
      { text: "3. REPORT SUSPICIOUS PHISHING TO SECURITY@NOVATECH.EX", scale: 1.5, color: [220, 38, 38], spacing: 15 },
      { text: "4. DEVICE LOSS MUST BE REPORTED WITHIN 1 HOUR MANDATORY", scale: 1.5, color: [220, 38, 38], spacing: 15 }
    ]
  });

  doc.image(policyPng, 50, doc.y, { width: 500 });
  savePDF(doc, 'Company Policy Document.pdf');
}


// ============================================================================
// 6. NovaTech Technical Diagrams and Gallery.pdf (PURE IMAGES ONLY - NO TEXT AT ALL)
// ============================================================================
function generatePureImageGalleryPDF() {
  const doc = new PDFDocument({ margin: 0, size: [595.28, 841.89] }); // A4 size

  // Page 1: Pure network topology diagram image
  const img1 = createPureGraphicalImageBuffer({ width: 800, height: 1100, type: 'network' });
  doc.image(img1, 0, 0, { width: 595.28, height: 841.89 });

  // Page 2: Pure data chart graphics image
  doc.addPage({ margin: 0, size: [595.28, 841.89] });
  const img2 = createPureGraphicalImageBuffer({ width: 800, height: 1100, type: 'charts' });
  doc.image(img2, 0, 0, { width: 595.28, height: 841.89 });

  savePDF(doc, 'NovaTech Technical Diagrams and Gallery.pdf');
}


// Run all generators
console.log('Generating NovaTech PDF Suite (6 files)...');
generateBrochure();
generateAIGuide();
generateProductCatalog();
generateScannedInformationPDF();
generateCompanyPolicy();
generatePureImageGalleryPDF();
console.log('PDF Generation completed successfully!');
