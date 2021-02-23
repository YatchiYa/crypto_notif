import React from "react";
import PDF from "./cv.pdf";

const Xddd = () => (
  <embed
    src={PDF}
    type="application/pdf"
    height={800}
    width={500}
  />
);

export default Xddd;