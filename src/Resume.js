import React from 'react';
import './Resume.css';

function Resume() {
  const downloadPdf = () => {
    const pdfUrl = 'Lucas_G_2024.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Lucas_G_2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='Resume'>
      <div>
        <button onClick={downloadPdf}>Download PDF</button>
      </div>
      <div className="PhotoResume">
        <img src="Resume_Pic_LucasG_2024.png" alt="Resume" />
      </div>
    </div>
  );
}

export default Resume;
