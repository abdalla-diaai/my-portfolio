import React from "react";
import PDFViewer from "../PDFViewer";
import resume from "../../assets/myResume.pdf";

export default function Resume() {
  return(
    <div>
        <h2>my resume</h2>
    <PDFViewer pdf={resume} options={{ workerSrc: "/pdf.worker.js" }} />;

    </div>

  )
  
}
