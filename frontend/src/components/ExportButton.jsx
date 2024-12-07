import React from "react";

const ExportButton = () => {
  const handleExport = async (format) => {
    const res = await fetch(`/api/books/export?format=${format}`);
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a"); // Creates a link with the URL to blob that we can click and download
    link.href = url;
    link.download = `books.${format}`; // file name
    link.click();
    window.URL.revokeObjectURL(url); // cleanup
  };
  return (
    <div className="mt-4">
      <button
        className="btn btn-outline-success me-2"
        onClick={() => handleExport("csv")}
      >
        Export as CSV
      </button>
      <button
        className="btn btn-outline-info"
        onClick={() => handleExport("json")}
      >
        Export as JSON
      </button>
    </div>
  );
};

export default ExportButton;
