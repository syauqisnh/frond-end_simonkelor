import React from "react";
import { BsFillFolderFill } from "react-icons/bs";
import Sidebar from "../components/Sidebar";

const Dokumentation = () => {
  const kotakStyle = {
    width: "280px",
    height: "280px",
    backgroundColor: "#D9D9D9",
    borderRadius: "50px",
    margin: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column", // tambahkan flex-direction column
  };

  const imgStyle = {
    fontSize: "6em",
  };

  const textStyle = {
    marginTop: "10px", // beri margin top pada text
    textAlign: "center",
  };

  const kotakList1 = [
    { id: 1, icon: <BsFillFolderFill />, text: <><div>Dokumen</div><div>Perencanaan</div></> },
    { id: 2, icon: <BsFillFolderFill />, text: <><div>Dokumen</div><div>Evaluasi Operasi</div></> },
    { id: 3, icon: <BsFillFolderFill />, text: <><div>Dokumen</div><div>Profil Kelistrikkan</div></> },
  ];
  
  const kotakList2 = [
    { id: 4, icon: <BsFillFolderFill />, text: <><div>Dokumen</div><div>SOP Pengoprasian</div></> },
    { id: 5, icon: <BsFillFolderFill />, text: <><div>Dokumen</div><div>Single Line Diagram</div></> },
  ];

  return (
    <>
      <Sidebar />
      <div className="homes">
        <div className="wrapper d-flex flex-column">
          <div className="body flex-grow-1 px-3">
            <div className="header">
              <p>Documentation</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  {kotakList1.map((kotak) => (
                    <div key={kotak.id} style={kotakStyle}>
                      {React.cloneElement(kotak.icon, { style: imgStyle })}
                      <p style={textStyle}>{kotak.text}</p> {/* tambahkan text */}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex" }}>
                  {kotakList2.map((kotak) => (
                    <div key={kotak.id} style={kotakStyle}>
                      {React.cloneElement(kotak.icon, { style: imgStyle })}
                      <p style={textStyle}>{kotak.text}</p> {/* tambahkan text */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dokumentation;
