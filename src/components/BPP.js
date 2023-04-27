import React from "react";
import {
  CCardBody,
  CCol,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import * as AiIcons from "react-icons/ai";

const BPP = () => {
  const opsi = [
    {
      Dokumen: "BPP - Januari 2023",
      waktu: "Bulanan",
      tanggal: "19 Desember 2022",
      jenis: "PDF",
    },
    {
      Dokumen: "BPP - Januari 2023",
      waktu: "Harian",
      tanggal: "19 Desember 2022",
      jenis: "PDF",
    },
    {
      Dokumen: "BPP - Januari 2023",
      waktu: "Mingguan",
      tanggal: "19 Desember 2022",
      jenis: "PDF",
    },
    {
      Dokumen: "BPP - Januari 2023",
      waktu: "Tahunan",
      tanggal: "19 Desember 2022",
      jenis: "PDF",
    },
  ];

  return (
    <>
      <div className="homes">
        <div className="wrapper">
          <div
            style={{ margin: "10px 10px", padding: "10px" }}
            className="innercontainer"
          >
            <div className="header">
              <p>Tabel BPP</p>
            </div>
            <CCol xs={12}>
              <CCardBody>
                <hr />
                <CTable striped>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col"></CTableHeaderCell>
                      <CTableHeaderCell
                        style={{
                          verticalAlign: "baseline",
                          textAlign: "center",
                        }}
                        scope="col"
                      >
                        Nama Dokumen
                      </CTableHeaderCell>
                      <CTableHeaderCell
                        style={{
                          verticalAlign: "baseline",
                          textAlign: "center",
                        }}
                        scope="col"
                      >
                        Jenis Waktu
                      </CTableHeaderCell>
                      <CTableHeaderCell
                        style={{
                          verticalAlign: "baseline",
                          textAlign: "center",
                        }}
                        scope="col"
                      >
                        Tanggal
                      </CTableHeaderCell>
                      <CTableHeaderCell
                        style={{
                          verticalAlign: "baseline",
                          textAlign: "center",
                        }}
                        scope="col"
                      >
                        Jenis Dokumen
                      </CTableHeaderCell>
                      <CTableHeaderCell
                        style={{
                          verticalAlign: "baseline",
                          textAlign: "center",
                        }}
                        scope="col"
                      >
                        File
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {opsi.map((kotak) => (
                      <CTableRow>
                        <CTableDataCell>
                          <AiIcons.AiFillDatabase
                            style={{
                              fontSize: "40px",
                              Align: "middle",
                              verticalAlign: "baseline",
                              textAlign: "center",
                            }}
                          />
                        </CTableDataCell>
                        <CTableDataCell
                          style={{
                            verticalAlign: "baseline",
                            textAlign: "center",
                          }}
                        >
                          {kotak.Dokumen}
                        </CTableDataCell>
                        <CTableDataCell
                          style={{
                            verticalAlign: "baseline",
                            textAlign: "center",
                          }}
                        >
                          {kotak.waktu}
                        </CTableDataCell>
                        <CTableDataCell
                          style={{
                            verticalAlign: "baseline",
                            textAlign: "center",
                          }}
                        >
                          {kotak.tanggal}
                        </CTableDataCell>
                        <CTableDataCell
                          style={{
                            verticalAlign: "baseline",
                            textAlign: "center",
                          }}
                        >
                          {kotak.jenis}
                        </CTableDataCell>
                        <CTableDataCell
                          style={{
                            verticalAlign: "baseline",
                            textAlign: "center",
                          }}
                        >
                          <button
                            style={{
                              backgroundColor: "#8573e9",
                              borderRadius: "30px",
                              color: "white",
                              marginleft: "20px",
                              padding: "10px 20px",
                              border: "none",
                              borderradius: "30px",
                              cursor: "pointer",
                              fontsize: "16px",
                              margintop: "20px",
                            }}
                            type="submit"
                          >
                            Download
                          </button>
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCol>
          </div>
        </div>
      </div>
    </>
  );
};

export default BPP;
