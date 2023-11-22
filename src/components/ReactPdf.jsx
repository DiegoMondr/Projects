import React from 'react';
import { Document, Page } from 'react-pdf';

const ReactPdf = () => {
  return (
    <div className="ReactPdf">
      <Document file='../assets/PSICOLOGIA-DE-LA-MOTIVACION.pdf'>
        <Page />
      </Document>
    </div>
  );
};

export default ReactPdf;
