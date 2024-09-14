import React from "react";
import DOMPurify from "dompurify";

const SanitizedHTML = ({ htmlContent }) => {
  const sanitizedHTML = DOMPurify.sanitize(htmlContent);
  console.log("sanitizedHTML: ", sanitizedHTML);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};

export default SanitizedHTML;
