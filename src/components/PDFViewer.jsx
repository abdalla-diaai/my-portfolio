import React from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
// to remove white spaces
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

export default function PDFViewer({ pdf }) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
  return (
    <Document file={pdf}>
      {/* remove render text and leave pdf only */}
      <Page pageNumber={1} renderTextLayer={false} />
      <Page pageNumber={2} renderTextLayer={false} />
      <Page pageNumber={3} renderTextLayer={false} />
    </Document>
  );
}
