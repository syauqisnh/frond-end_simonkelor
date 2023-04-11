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

const C_langgambebanharian = () => {
  const opsi = [
    {
      Dokumen: "Langgam Beban Bulanan - Januari 2023",
      waktu: "Bulanan",
    },
    {
      Dokumen: "Langgam Beban Harian - Januari 2023",
      waktu: "Harian",
    },
    {
      Dokumen: "Langgam Beban Mingguan - Januari 2023",
      waktu: "Mingguan",
    },
    {
      Dokumen: "Langgam Beban Tahunan - Januari 2023",
      waktu: "Tahunan",
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
              <p>Langgam Beban Harian</p>
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
                        Aksi
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
                            }}
                            type="submit"
                          >
                            Download
                          </button>
                          <button
                            style={{
                              backgroundColor: "#e98277",
                              borderRadius: "30px",
                              marginLeft: "10px",
                            }}
                            type="submit"
                          >
                            Hapus
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

export default C_langgambebanharian;
