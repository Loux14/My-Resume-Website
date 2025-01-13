import React from "react";
import "./Resume.css";

function Resume() {
  const downloadPdf = (pdfUrl) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfUrl.split("/").pop(); // Télécharge le fichier avec son nom
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="Resume">
      <div className="block-info">
        <div>
          <button onClick={() => downloadPdf("Lucas_G_2025.pdf")}>
            Download Resume
          </button>
        </div>
        <div className="PhotoResume">
          <img src="Resume_Pic_LucasG_2025.png" alt="Resume" />
        </div>
      </div>
      <div className="block-info">
        <div>
          <button onClick={() => downloadPdf("results.pdf")}>
            Download University Results
          </button>
        </div>
        <div className="PhotoResume">
          <img src="results.png" alt="Results" />
        </div>
      </div>
    </div>
  );
}

export default Resume;
