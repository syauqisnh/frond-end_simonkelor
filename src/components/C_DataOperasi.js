import React from "react";
import { BsFillFolderFill } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import { useHistory } from "react-router-dom";

const Dataoperasi = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  };
  const kotakList1 = [
    {
      id: 1,
      icon: <BsFillFolderFill />,
      text: (
        <>
          <div>Langgam</div>
          <div>Beban Harian</div>
        </>
      ),
      route: "/C_langgambebanharian",
    },
    {
      id: 2,
      icon: <BsFillFolderFill />,
      text: (
        <>
          <div>Load</div>
          <div>Stacking Energi</div>
        </>
      ),
      route: "/load",
    },
    {
      id: 3,
      icon: <BsFillFolderFill />,
      text: (
        <>
          <div>Load</div>
          <div>Stacking Pembangkit</div>
        </>
      ),
      route: "/pembangkit",
    },
  ];
  const kotakList2 = [
    {
      id: 4,
      icon: <BsFillFolderFill />,
      text: (
        <>
          <div>Produksi Energi</div>
          <div>Pembangkit</div>
        </>
      ),
      route: "/produksi",
    },
    {
      id: 5,
      icon: <BsFillFolderFill />,
      text: (
        <>
          <div>Tabel BPP</div>
        </>
      ),
      route: "/tabel",
    },
  ];

  const kotakStyle = {
    width: "300px",
    height: "300px",
    backgroundColor: "#D9D9D9",
    borderRadius: "50px",
    margin: "30px 20px 10px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    cursor: "pointer",
  };

  const kotakStyleMobile = {
    ...kotakStyle,
    width: "300px",
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
  return (
    <>
      <Sidebar />
      <div className="homes">
        <div className="wrapper d-flex flex-column">
          <div className="body flex-grow-1 px-3">
            <div className="header">
              <p>Operasional Data</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
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

export default Dataoperasi;
