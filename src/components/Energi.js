import React, {useState, useEffect} from "react";
// import axios from "axios";
// import {
//   CCardBody,
//   CCol,
//   CTable,
//   CTableBody,
//   CTableDataCell,
//   CTableHead,
//   CTableHeaderCell,
//   CTableRow,
// } from "@coreui/react";
// import * as AiIcons from "react-icons/ai"; 
// import { Button } from "react-bootstrap";
// import * as BsIcons from 'react-icons/bs';
import {
  CContainer,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CBadge,
} from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import { hexToRgba } from "@coreui/utils";


const Energi = () => {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //   axios.get("http://localhost:8000/api/datauser").then((response) => {
  //     setUser(response.data);
  //   });
  // }, [user]);

  // const opsi = [
  //   {
  //     Dokumen: "Langgam Beban Bulanan - Januari 2023",
  //     waktu: "Bulanan",
  //     tanggal: "19 Desember 2022",
  //     jenis: "PDF",
  //   },
  //   {
  //     Dokumen: "Langgam Beban Harian - Januari 2023",
  //     waktu: "Harian",
  //     tanggal: "19 Desember 2022",
  //     jenis: "PDF",
  //   },
  //   {
  //     Dokumen: "Langgam Beban Mingguan - Januari 2023",
  //     waktu: "Mingguan",
  //     tanggal: "19 Desember 2022",
  //     jenis: "PDF",
  //   },
  //   {
  //     Dokumen: "Langgam Beban Tahunan - Januari 2023",
  //     waktu: "Tahunan",
  //     tanggal: "19 Desember 2022",
  //     jenis: "PDF",
  //   },
  // ];

  useEffect(() => {
    
    const data = [ 70.00, 69.43, 68.49 , 68.29 , 67.40 , 67.17 , 66.18 , 65.51 , 65.96 , 65.57 , 64.93 , 64.87 , 63.23 , 60.69 , 59.98 , 59.52 ,
      59.61 , 57.52 , 55.49 , 55.43 , 55.58 , 55.90 , 55.62 , 55.62, 66.18 , 66.18, 55.62, 55.62 ]
  

    const data_prediksi = [ 69.43, 68.49 , 68.29 , 67.40 , 67.17 , 66.18 , 65.51 , 65.96 , 65.57 , 64.93 , 64.87 , 63.23 , 60.69 , 59.98 , 59.52 ,
      59.61 , 57.52 , 55.49 , 55.43 , 55.58 , 55.90 , 55.62 , 55.68 , 55.39 , 55.16 , 55.72 , 56.42 , 55.87 , 55.60 , 55.51 , 55.39 , 54.16 ,
      54.85 , 55.25 , 57.03 , 60.61 , 68.81 , 81.01 , 85.76 , 84.47 , 83.23 , 82.42 , 81.08 , 79.41 , 77.64 , 75.76 , 73.64 , 73.09 ,]

      setRealtimes_Energi(data);
      setRealtimes_Energi_prediksi(data_prediksi);
  }, []);

    const [realtimes_langgam, setRealtimes_Energi] = useState([]);
    const [realtimes_langgam_prediksi, setRealtimes_Energi_prediksi] = useState([]);

  return (
    // <>
    //   <div className="homes">
    //     <div className="wrapper">
    //       <div
    //         style={{ margin: "10px 10px", padding: "10px" }}
    //         className="innercontainer"
    //       >
    //         <div className="header">
    //           <p>Langgam Beban Harian</p>
    //         </div>
            
    //         <CCol xs={12}>
    //           <CCardBody>
                

    //         {(() => {
    //           if (user.role === "Super Admin") {
    //             return (
    //               <Button 
    //                 className='btn btn-success text-white me-2'                        
    //                 // onClick={handleShow}
    //               >
    //                 Tambah Data 
    //               </Button>
    //             );
    //           }
    //         })()}
    //             <hr />
    //             <CTable striped>
    //               <CTableHead>
    //                 <CTableRow>
    //                   <CTableHeaderCell scope="col"></CTableHeaderCell>
    //                   <CTableHeaderCell
    //                     style={{
    //                       verticalAlign: "baseline",
    //                       textAlign: "center",
    //                     }}
    //                     scope="col"
    //                   >
    //                     Nama Dokumen
    //                   </CTableHeaderCell>
    //                   <CTableHeaderCell
    //                     style={{
    //                       verticalAlign: "baseline",
    //                       textAlign: "center",
    //                     }}
    //                     scope="col"
    //                   >
    //                     Jenis Waktu
    //                   </CTableHeaderCell>
    //                   <CTableHeaderCell
    //                     style={{
    //                       verticalAlign: "baseline",
    //                       textAlign: "center",
    //                     }}
    //                     scope="col"
    //                   >
    //                     Tanggal
    //                   </CTableHeaderCell>
    //                   <CTableHeaderCell
    //                     style={{
    //                       verticalAlign: "baseline",
    //                       textAlign: "center",
    //                     }}
    //                     scope="col"
    //                   >
    //                     Jenis Dokumen
    //                   </CTableHeaderCell>
    //                 </CTableRow>
    //               </CTableHead>
    //               <CTableBody>
    //                 {opsi.map((kotak) => (
    //                   <CTableRow>
    //                     <CTableDataCell>
    //                       <AiIcons.AiFillDatabase
    //                         style={{
    //                           fontSize: "40px",
    //                           Align: "middle",
    //                           verticalAlign: "baseline",
    //                           textAlign: "center",
    //                         }}
    //                       />
    //                     </CTableDataCell>
    //                     <CTableDataCell
    //                       style={{
    //                         verticalAlign: "baseline",
    //                         textAlign: "center",
    //                       }}
    //                     >
    //                       {kotak.Dokumen}
    //                     </CTableDataCell>
    //                     <CTableDataCell
    //                       style={{
    //                         verticalAlign: "baseline",
    //                         textAlign: "center",
    //                       }}
    //                     >
    //                       {kotak.waktu}
    //                     </CTableDataCell>
    //                     <CTableDataCell
    //                       style={{
    //                         verticalAlign: "baseline",
    //                         textAlign: "center",
    //                       }}
    //                     >
    //                       {kotak.tanggal}
    //                     </CTableDataCell>
    //                     <CTableDataCell
    //                       style={{
    //                         verticalAlign: "baseline",
    //                         textAlign: "center",
    //                       }}
    //                     >
    //                       {kotak.jenis}
    //                     </CTableDataCell>
    //         {(() => {
    //           if (user.role === "Super Admin") {
    //             return (
    //             <CTableDataCell> 
    //               <BsIcons.BsPencilSquare      
    //               />
    //               <AiIcons.AiFillDelete
    //               />
    //             </CTableDataCell>
    //             );
    //           }
    //         })()}

            
    //         {(() => {
    //           if (user.role === "Pegawai") {
    //             return (
    //               <CTableDataCell
    //               style={{
    //                 verticalAlign: "baseline",
    //                 textAlign: "center",
    //               }}
    //             >
    //               <button
    //                 style={{
    //                   backgroundColor: "#8573e9",
    //                   borderRadius: "30px",
    //                   color: "white",
    //                   marginleft: "20px",
    //                   padding: "10px 20px",
    //                   border: "none",
    //                   borderradius: "30px",
    //                   cursor: "pointer",
    //                   fontsize: "16px",
    //                   margintop: "20px",
    //                 }}
    //                 type="submit"
    //               >
    //                 Download
    //               </button>
    //             </CTableDataCell>
    //             );
    //           }
    //         })()}
                                                
                        
    //                   </CTableRow>
    //                 ))}
    //               </CTableBody>
    //             </CTable>
    //           </CCardBody>
    //         </CCol>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
    <div className='homes'>
      
      <div className="wrapper d-flex flex-column">
        <div className="body flex-grow-1 px-3">
    <CRow>
        <CCol xs={12}>
        
        <div className='header'>
            <p>
            Load Stacking Energi
            </p>
        </div>
        </CCol>
            </CRow>
          </div>
        </div>

        <div className="wrapper d-flex flex-column min-vh-100">
          <div className="body flex-grow-1 px-3">
            <CRow>
              <CCol xs={12}>
                <CContainer>
                  <CCard className="mb-4 rounded">
                    <CCardBody>
                      <CRow>
                        <CCol sm={8}>
                          <h4 id="traffic" className="text-normal-default">
                            Load Stacking Energi Sistem Timor
                          </h4>
                        </CCol>
                        <CCol sm={4} className="d-none d-md-block">
                          <CRow>
                            <CCol xs={5}>
                              <h6>
                                <CBadge
                                  className="rounded-circle text-danger"
                                  color="danger"
                                >
                                  .
                                </CBadge>
                                Realisasi
                              </h6>
                            </CCol>
                            <CCol xs={5}>
                              <h6>
                                <CBadge
                                  className="rounded-circle text-info"
                                  color="info"
                                >
                                  .
                                </CBadge>
                                Prediksi
                              </h6>
                            </CCol>
                          </CRow>
                        </CCol>
                      </CRow>
                      <CChartLine
                        style={{ height: "400px", marginTop: "40px" }}
                        data={{
                          labels: [
                            "00:00",
                            "00:30",
                            "01:00",
                            "01:30",
                            "02:00",
                            "02:30",
                            "03:00",
                            "03:30",
                            "04:00",
                            "04:30",
                            "05:00",
                            "05:30",
                            "06:00",
                            "06:30",
                            "07:00",
                            "07:30",
                            "08:00",
                            "08:30",
                            "09:00",
                            "09:30",
                            "10:00",
                            "10:30",
                            "11:00",
                            "11:30",
                            "12:00",
                            "12:30",
                            "13:00",
                            "13:30",
                            "14:00",
                            "14:30",
                            "15:00",
                            "15:30",
                            "16:00",
                            "16:30",
                            "17:00",
                            "17:30",
                            "18:00",
                            "18:30",
                            "19:00",
                            "19:30",
                            "20:00",
                            "20:30",
                            "21:00",
                            "21:30",
                            "22:00",
                            "22:30",
                            "23:00",
                            "23:30",
                          ],
                          datasets: [
                            {
                              label: "Data Aktual",
                              backgroundColor: hexToRgba("#ff0000", 10),
                              borderColor: "#ff0000",
                              pointHoverBackgroundColor: "#ff0000",
                              borderWidth: 2,
                              data: realtimes_langgam,
                              fill: true,
                            },
                            {
                              label: "Data Prediksi",
                              backgroundColor: hexToRgba("#0000FF", 10),
                              borderColor: "#0000FF",
                              pointHoverBackgroundColor: "#0000FF",
                              borderWidth: 2,
                              data: realtimes_langgam_prediksi,
                              fill: true,
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              display: false,
                            },
                          },
                          scales: {
                            x: {
                              grid: {
                                drawOnChartArea: false,
                              },
                            },
                            y: {
                              ticks: {
                                beginAtZero: true,
                                maxTicksLimit: 10,
                                stepSize: Math.ceil(10 / 5),
                                max: 5,
                              },
                            },
                          },
                          elements: {
                            line: {
                              tension: 0.4,
                            },
                            point: {
                              radius: 0,
                              hitRadius: 10,
                              hoverRadius: 4,
                              hoverBorderWidth: 3,
                            },
                          },
                        }}
                      />
                    </CCardBody>
                  </CCard>
                </CContainer>
              </CCol>

            </CRow>
          </div>
        </div>
      </div>
    </>
  );
};

export default Energi;
