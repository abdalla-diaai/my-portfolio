import React from "react";
import PDFViewer from "../PDFViewer";
import resume from "../../assets/myResume.pdf";
import Footer from "../Footer";

export default function Resume() {
  return (
    <div id="resume" className="container">
      <PDFViewer pdf={resume} options={{ workerSrc: "/pdf.worker.js" }} />
      <Footer />
    </div>
  );
}
