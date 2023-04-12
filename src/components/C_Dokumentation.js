import React from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import { useHistory } from "react-router-dom";


const C_Dokumentation = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  };
  const kotakList1 = [
    {
      id: 1,
      icon: <AiFillFolderOpen />,
      text: (
        <>
          <div>Dokumen</div>
          <div>Perencanaan</div>
        </>
      ),
      route: "/Perencanaan",
    },
    {
      id: 2,
      icon: <AiFillFolderOpen />,
      text: (
        <>
          <div>Dokumen</div>
          <div>Evaluasi Operasi</div>
        </>
      ),
      route: "/Evaluasi",
    },
    {
      id: 3,
      icon: <AiFillFolderOpen />,
      text: (
        <>
          <div>Dokumen</div>
          <div>Profil Kelistrikkan</div>
        </>
      ),
      route: "/Kelistrikkan",
    },
  ];
  const kotakList2 = [
    {
      id: 4,
      icon: <AiFillFolderOpen />,
      text: (
        <>
          <div>Dokumen</div>
          <div>SOP Pengoprasian</div>
        </>
      ),
      route: "/SOP",
    },
    {
      id: 5,
      icon: <AiFillFolderOpen />,
      text: (
        <>
          <div>Dokumen</div>
          <div>Single Line Diagram</div>
        </>
      ),
      route: "/LineDiagram",
    },
  ];

  const kotakStyle = {
    width: "300px",
    height: "300px",
    backgroundColor: "#D9D9D9",
    borderRadius: "50px",
    margin: "30px 20px 10px 50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    cursor: "pointer",
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
  return (
    <>
      <div className="homes">
        <div className="wrapper d-flex flex-column">
          <div className="body flex-grow-1 px-3">
            <div className="header">
              <p>Operasional Data</p>
              <div style={{ display: "relative", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  {kotakList1.map((kotak) => (
                    <div
                      key={kotak.id}
                      style={kotakStyle}
                      onClick={() => handleClick(kotak.route)}
                    >
                      {React.cloneElement(kotak.icon, { style: imgStyle })}
                      <p style={textStyle}>{kotak.text}</p>{" "}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex" }}>
                  {kotakList2.map((kotak) => (
                    <div
                      key={kotak.id}
                      style={kotakStyle}
                      onClick={() => handleClick(kotak.route)}
                    >
                      {React.cloneElement(kotak.icon, { style: imgStyle })}
                      <p style={textStyle}>{kotak.text}</p>{" "}
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

export default C_Dokumentation ;
