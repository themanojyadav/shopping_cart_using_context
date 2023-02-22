import React, { useContext, useEffect } from "react";
import { ToastrContext } from "../context/toastrContext";

function ToastrContainer() {
  const toastrContext = useContext(ToastrContext);
  useEffect(() => {
    setTimeout(() => {
      toastrContext.dispatch({ type: "HIDE_TOASTR" });
    }, 2000);
  }, [toastrContext.state.showToastr]);

  return (
    <div
      className={`toastr_container ${
        toastrContext.state.showToastr == true ? "d-block" : "d-none"
      }`}
    >
      <p className="mb-0">{toastrContext.state.message}</p>
    </div>
  );
}

export default ToastrContainer;
