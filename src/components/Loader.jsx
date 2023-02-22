import React from "react";
import { BiLoader } from "react-icons/bi";

function Loader() {
  return (
    <div className="loading_section">
      <div className="container">
        <h3>
          <BiLoader /> Loading...
        </h3>
      </div>
    </div>
  );
}

export default Loader;
