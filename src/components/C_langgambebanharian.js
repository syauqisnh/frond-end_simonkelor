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
      juduls: "Langgam Beban Harian - Januari 2023",
      creates: "Diupload Oleh User",
    },
    {
      juduls: "Langgam Beban Harian - Januari 2023",
      creates: "Diupload Oleh User",
    },
    {
      juduls: "Langgam Beban Harian - Januari 2023",
      creates: "Diupload Oleh User",
    },
    {
      juduls: "Langgam Beban Harian - Januari 2023",
      creates: "Diupload Oleh User",
    },
    {
      juduls: "Langgam Beban Harian - Januari 2023",
      creates: "Diupload Oleh User",
    },
    {
      juduls: "Langgam Beban Harian - Januari 2023",
      creates: "Diupload Oleh User",
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
                      <hr/>
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
                        Data Pekerjaan
                      </CTableHeaderCell>
                      <CTableHeaderCell
                        style={{
                          verticalAlign: "baseline",
                          textAlign: "center",
                        }}
                        scope="col"
                      >
                        Create By
                      </CTableHeaderCell>

                      <CTableHeaderCell
                        style={{
                          verticalAlign: "baseline",
                          textAlign: "center",
                        }}
                        scope="col"
                      ></CTableHeaderCell>

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
    {kotak.juduls}
  </CTableDataCell>

  <CTableDataCell
    style={{
      verticalAlign: "baseline",
      textAlign: "center",
    }}
  >
    {kotak.creates}
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
