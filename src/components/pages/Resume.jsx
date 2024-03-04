import React from "react";
import PDFViewer from "../PDFViewer";
import resume from "../../assets/myResume.pdf";

export default function Resume() {
  return (
    <div id="resume" className="card">
      <PDFViewer pdf={resume} options={{ workerSrc: "/pdf.worker.js" }} />
    </div>
  );
}
