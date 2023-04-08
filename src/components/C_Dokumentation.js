import React from "react";
import { BsFillFolderFill } from "react-icons/bs";
import Sidebar from "../components/Sidebar";

const Dokumentation = () => {
  const kotakStyle = {
    width: "300px", // ubah lebar kotak menjadi 300px
    height: "300px", // ubah tinggi kotak menjadi 300px
    backgroundColor: "#D9D9D9",
    borderRadius: "50px",
    margin: "30px 20px 10px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const kotakStyleMobile = {
    ...kotakStyle,
    width: "300px", // ubah lebar kotak menjadi 300px
    margin: "30px 20px 10px 10px",
    marginTop: "30px",
  };

  const imgStyle = {
    fontSize: "6em",
    color: "#8473ED",
  };

  const textStyle = {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "15pt",
  };
  const kotakList1 = [
    {
      id: 1,
      icon: <BsFillFolderFill />,
      text: (
        <>
          <div>Dokumen</div>
          <div>Perencanaan</div>
        </>
      ),
    },
    {
      id: 2,
      icon: <BsFillFolderFill />,
      text: (
        <>
          <div>Dokumen</div>
          <div>Evaluasi Operasi</div>
        </>
      ),
    },
    {
      id: 3,
      icon: <BsFillFolderFill />,
      text: (
        <>
          <div>Dokumen</div>
          <div>Profil Kelistrikkan</div>
        </>
      ),
    },
  ];

  const kotakList2 = [
    {
      id: 4,
      icon: <BsFillFolderFill />,
      text: (
        <>
          <div>Dokumen</div>
          <div>SOP Pengoprasian</div>
        </>
      ),
    },
    {
      id: 5,
      icon: <BsFillFolderFill />,
      text: (
        <>
          <div>Dokumen</div>
          <div>Single Line Diagram</div>
        </>
      ),
    },
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
                      <p style={textStyle}>{kotak.text}</p>{" "}
                      {/* tambahkan text */}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex" }}>
                  {kotakList2.map((kotak) => (
                    <div key={kotak.id} style={kotakStyleMobile}>
                      {" "}
                      {/* gunakan kotakStyleMobile untuk media screen di bawah 768px */}
                      {React.cloneElement(kotak.icon, { style: imgStyle })}
                      <p style={textStyle}>{kotak.text}</p>{" "}
                      {/* tambahkan text */}
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
