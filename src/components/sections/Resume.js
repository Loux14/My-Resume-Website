import React from "react";
import "../../styles/Resume.css";

function Resume() {
  const downloadPdf = (pdfUrl) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfUrl.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openPdf = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="Resume">
      <div className="block-info">
        <div>
          <button onClick={() => downloadPdf("Lucas_G_2025.pdf")}>
            Download Resume
          </button>
        </div>
        <div className="PhotoResume" onClick={() => openPdf("Lucas_G_2025.pdf")} style={{ cursor: "pointer" }}>
          <img src="Resume_Pic_LucasG_2025.png" alt="Resume" />
        </div>
      </div>
      <div className="block-info">
        <div>
          <button onClick={() => downloadPdf("results.pdf")}>
            Download University Results
          </button>
        </div>
        <div className="PhotoResume" onClick={() => openPdf("results.pdf")} style={{ cursor: "pointer" }}>
          <img src="results.png" alt="Results" />
        </div>
      </div>
    </div>
  );
}

export default Resume;
