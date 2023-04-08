import React from "react";
import Sidebar from "../components/Sidebar";

export const Dokumentation = () => {
  return (
    <>
      <Sidebar />
      <div className="homes">
        <div className="wrapper d-flex flex-column">
          <div className="body flex-grow-1 px-3">
            <div className="header">
              <p>Documentation</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dokumentation;
