import React, {useState, useEffect} from "react";
import axios from "axios";
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
import { Button } from "react-bootstrap";
import * as BsIcons from 'react-icons/bs';

const Kelistrikkan = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.get("http://localhost:8000/api/datauser").then((response) => {
      setUser(response.data);
    });
  }, [user]);

  const opsi = [
    {
      Dokumen: "Dokumen Profil Kelistrikkan PT PLN UPK Timor 2019",
      waktu: "Bulanan",
      tanggal: "19 April 2019",
      jenis: "PDF",
    },
    {
      Dokumen: "Dokumen Profil Kelistrikkan PT PLN UPK Timor 2020",
      waktu: "Harian",
      tanggal: "7 Juni 2020",
      jenis: "PDF",
    },
    {
      Dokumen: "Dokumen Profil Kelistrikkan PT PLN UPK Timor 2021",
      waktu: "Mingguan",
      tanggal: "16 Febuari 2021",
      jenis: "PDF",
    },
    {
      Dokumen: "Dokumen Profil Kelistrikkan PT PLN UPK Timor 2022",
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
              <p>Dokumen Profil Kelistrikkan</p>
            </div>
            
            <CCol xs={12}>
              <CCardBody>
                

            {(() => {
              if (user.role === "Super Admin") {
                return (
                  <Button 
                    className='btn btn-success text-white me-2'                        
                    // onClick={handleShow}
                  >
                    Tambah Data 
                  </Button>
                );
              }
            })()}
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
            {(() => {
              if (user.role === "Super Admin") {
                return (
                <CTableDataCell> 
                  <BsIcons.BsPencilSquare      
                  />
                  <AiIcons.AiFillDelete
                  />
                </CTableDataCell>
                );
              }
            })()}

            
            {(() => {
              if (user.role === "Pegawai") {
                return (
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
                );
              }
            })()}
                                                
                        
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

export default Kelistrikkan;
