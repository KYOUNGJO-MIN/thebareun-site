// 📁 src/pages/PdfView.jsx

import React from "react";

export default function PdfView() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <iframe
        src="/세아아인스빌딩 매각IM_더바른.pdf"
        title="세아아인스빌딩IM"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
}
