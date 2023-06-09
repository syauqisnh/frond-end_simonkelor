import React, { useState } from 'react';
import axios from 'axios';
import {
  CContainer,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CBadge,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { CChartLine, CChartPie, CChartDoughnut } from "@coreui/react-chartjs";
import { hexToRgba } from "@coreui/utils";
import {CChart} from "@coreui/react-chartjs";
import { useEffect } from "react";

const Realtime = () => {
  const [realtimes, setRealtime] = useState([]);
  const [realtimes_pltu, setRealtimePLTU] = useState([]);
  const [realtimes_plant, setRealtimePLANT] = useState([]);
  const [date_realtimes, setDateRealtime] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchData = async () => {
    axios.get(`
    http://localhost:8000/api/realtimes/get_date
    `).then((response) => {
        console.log(response.data.data);
        setDateRealtime(response.data.data);
    })
   axios.get(`
    http://localhost:8000/api/realtimes
  `).then((response) => {
      // console.log(response.data.data);
      setRealtime(response.data.data);
      console.log("Berhasil mengambil data");
      
      setLoading(false);
    })
    .catch((error) => {
      console.log("Gagal mengambil data:", error);
    });
   
  axios.get(`
    http://localhost:8000/api/realtimes/PLTU
  `).then((response) => {
      console.log(response.data.data);
      setRealtimePLTU(response.data.data);
  })

  axios.get(`
    http://localhost:8000/api/realtimes/PLANT
  `).then((response) => {
      console.log(response.data.data);
      setRealtimePLANT(response.data.data);
  })
  
  }
  useEffect(() => {
    
    const data = [ 70.00, 69.43, 68.49 , 68.29 , 67.40 , 67.17 , 66.18 , 65.51 , 65.96 , 65.57 , 64.93 , 64.87 , 63.23 , 60.69 , 59.98 , 59.52 ,
      59.61 , 57.52 , 55.49 , 55.43 , 55.58 , 55.90 , 55.62 , 55.62, 66.18 , 66.18, 55.62, 55.62 ]
  

    const data_prediksi = [ 69.43, 68.49 , 68.29 , 67.40 , 67.17 , 66.18 , 65.51 , 65.96 , 65.57 , 64.93 , 64.87 , 63.23 , 60.69 , 59.98 , 59.52 ,
      59.61 , 57.52 , 55.49 , 55.43 , 55.58 , 55.90 , 55.62 , 55.68 , 55.39 , 55.16 , 55.72 , 56.42 , 55.87 , 55.60 , 55.51 , 55.39 , 54.16 ,
      54.85 , 55.25 , 57.03 , 60.61 , 68.81 , 81.01 , 85.76 , 84.47 , 83.23 , 82.42 , 81.08 , 79.41 , 77.64 , 75.76 , 73.64 , 73.09 ,]
      
      setTimeout(() => {
      fetchData();
      setRealtimes_langgam(data);
      setRealtimes_langgam_prediksi(data_prediksi);
    }, 2000);
  }, []);

    const [realtimes_langgam, setRealtimes_langgam] = useState([]);
    const [realtimes_langgam_prediksi, setRealtimes_langgam_prediksi] = useState([]);
  
      
  return (
    <>
    <div className='homes'>
      
      <div className="wrapper d-flex flex-column">
        <div className="body flex-grow-1 px-3">
    <CRow>
        <CCol xs={10}>
        
        <div className='header'>
            <p>
            Realtime
            </p>
        </div>
        </CCol>


  <CCol xs={2}>
    <div className='py-5'>

{date_realtimes.map((item, index) => {
  return(
    <div key={index} className="card-realtime-update">
        <div className='card-body-realtime'>
            <h5 className='text-title-card-realtime'>
              UPDATE <br/> 
              <span className='text-card-realtime'>{item.date}</span> 
            </h5>
        </div>
    </div>
  )
})}
    </div> 
  </CCol>
            </CRow>
          </div>
        </div>

        <div className="wrapper d-flex flex-column min-vh-80">
          <div className="body flex-grow-1 px-3">
              
              {loading ? (
                <div className=' d-flex justify-content-center align-items-center' style={{height: '70vh'}}>
                <div class="spinner"></div>
                </div>
              ) : (
            <CRow>
              <CCol xs={10}>
                <CContainer>
                  <CCard className="mb-4 rounded">
                    <CCardBody>
                      <CRow>
                        <CCol sm={8}>
                          <h4 id="traffic" className="text-normal-default">
                            Langgam Beban Sistem Timor
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

                  <CCol xs={12}>
                    <CCard className="mb-4">
                      <CCardBody>
                      <CCol sm={8}>
                          <h4 id="traffic" className="text-normal-default">
                            Frequency Sistem Timor
                          </h4>
                        </CCol>
                          <CCol>
                          <CChart
                            type="line"
                            options= {{     
                              plugins: {   
                              legend: {
                                display: false,
                                labels: false,
                              }
                            }
                            }}
                            data={{
                              labels: ["00:00",
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
                              "23:30",],
                              datasets: [
                                {
                                  // label: "Frequncy",
                                  backgroundColor: hexToRgba("#0f0f0f", 20),
                                  borderColor: "#fa1302",
                                  // pointHoverBackgroundColor: "#0000FF",
                                  pointRadius: false,
                                  borderWidth: 2,
                                  data: [17, 17, 17, 17, 17, 17, 17, 18, 19, 20, 20, 21, 22, 23, 24, 24, 23, 21, 20, 18, 15, 15, 12, 11, 16, 22, 23, 24, 25, 23, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
                                  fill: true,
                                },
                              ],
                            }}
                          />
                          </CCol>
                      </CCardBody>
                    </CCard>
                  </CCol>

                  <CCol xs={12}>
                    <CCard className="mb-4">
                      <CCardBody>
                        <CRow>
                        <CCol sm={8}>
                          <h4 id="traffic" className="text-normal-default">
                            Bauran Energi Sistem Timor
                          </h4>
                        </CCol>
                        <hr/>
                          <CCol xs={6}>
                            <CChartDoughnut
                              data={{
                                labels: ["Batubara", "HFO", "HSO", "Surya"],
                                datasets: [
                                  {
                                    backgroundColor: [
                                      "#41B883",
                                      "#E46651",
                                      "#00D8FF",
                                      "#900B16",
                                    ],
                                    data: [40, 50, 30, 20],
                                  },
                                ],
                              }}
                            />
                          </CCol>
                          <CCol xs={6}>
                            <CCardBody>
                              <CTable striped>
                                <CTableHead>
                                  <CTableRow>
                                    <CTableHeaderCell scope="col">
                                      Pembangkit
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                      Bauran energi
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                      Beban
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                      %
                                    </CTableHeaderCell>
                                  </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                  <CTableRow>
                                    <CTableDataCell>
                                      PLTU PLN BOLOK 1
                                    </CTableDataCell>
                                    <CTableDataCell> Batubara </CTableDataCell>
                                    <CTableDataCell> 14.81 </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      PLTU PLN BOLOK 2
                                    </CTableDataCell>
                                    <CTableDataCell> Batubara </CTableDataCell>
                                    <CTableDataCell> 14.81 </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      PLTU PLN BOLOK 1
                                    </CTableDataCell>
                                    <CTableDataCell> Batubara </CTableDataCell>
                                    <CTableDataCell> 14.81 </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      PLTU PLN BOLOK 1
                                    </CTableDataCell>
                                    <CTableDataCell> Batubara </CTableDataCell>
                                    <CTableDataCell> 14.81 </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      PLTU PLN BOLOK 1
                                    </CTableDataCell>
                                    <CTableDataCell> Batubara </CTableDataCell>
                                    <CTableDataCell> 14.81 </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      PLTU PLN BOLOK 1
                                    </CTableDataCell>
                                    <CTableDataCell> Batubara </CTableDataCell>
                                    <CTableDataCell> 14.81 </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      PLTU PLN BOLOK 1
                                    </CTableDataCell>
                                    <CTableDataCell> Batubara </CTableDataCell>
                                    <CTableDataCell> 14.81 </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      PLTU PLN BOLOK 1
                                    </CTableDataCell>
                                    <CTableDataCell> Batubara </CTableDataCell>
                                    <CTableDataCell> 14.81 </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      PLTU PLN BOLOK 1
                                    </CTableDataCell>
                                    <CTableDataCell> Batubara </CTableDataCell>
                                    <CTableDataCell> 14.81 </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      PLTU PLN BOLOK 1
                                    </CTableDataCell>
                                    <CTableDataCell> Batubara </CTableDataCell>
                                    <CTableDataCell> 14.81 </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>
                                </CTableBody>
                              </CTable>
                            </CCardBody>
                          </CCol>
                        </CRow>
                      </CCardBody>
                    </CCard>
                  </CCol>
                  <CCol xs={12}>
                    <CCard className="mb-4">
                      <CCardBody>
                        <CRow>
                        <CCol sm={8}>
                          <h4 id="traffic" className="text-normal-default">
                            Biaya Energi Sistem Timor
                          </h4>
                        </CCol>
                        <hr/>
                          <CCol xs={6}>
                            <CChartPie
                              data={{
                                labels: ["Red", "Green", "Yellow"],
                                datasets: [
                                  {
                                    data: [300, 50, 100],
                                    backgroundColor: [
                                      "#FF6384",
                                      "#36A2EB",
                                      "#FFCE56",
                                    ],
                                    hoverBackgroundColor: [
                                      "#FF6384",
                                      "#36A2EB",
                                      "#FFCE56",
                                    ],
                                  },
                                ],
                              }}
                            />
                          </CCol>
                          <CCol xs={6}>
                            <CCardBody>
                              <CTable striped>
                                <CTableHead>
                                  <CTableRow>
                                    <CTableHeaderCell scope="col">
                                      Biaya
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                      Nilai
                                    </CTableHeaderCell>
                                  </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                  <CTableRow>
                                    <CTableDataCell>
                                      Total Kapital Cost
                                    </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      Total Kapital Cost
                                    </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      Total Kapital Cost
                                    </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      Total Kapital Cost
                                    </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>
                                  <CTableRow>
                                    <CTableDataCell>
                                      Total Kapital Cost
                                    </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      Total Kapital Cost
                                    </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>
                                  <CTableRow>
                                    <CTableDataCell>
                                      Total Kapital Cost
                                    </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      Total Kapital Cost
                                    </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>
                                  <CTableRow>
                                    <CTableDataCell>
                                      Total Kapital const
                                    </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      Total Kapital Cost
                                    </CTableDataCell>
                                    <CTableDataCell> 15.37 </CTableDataCell>
                                  </CTableRow>
                                </CTableBody>
                              </CTable>
                            </CCardBody>
                          </CCol>
                        </CRow>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CContainer>
              </CCol>

  <CCol xs={2}>
          <CCol sm={12}>

            {realtimes.map((item, index) => {
              return(
                  <div key={index} className='py-2'>
                      <div className="card-realtime-success">
                          <div className='card-body-realtime'>
                              <h5 className='text-title-card-realtime'> {item[0].parameter} </h5>
                              <p className='text-card-realtime'> {item[0].value} </p>
                          </div>
                      </div>
                  </div>
              )
            })}
              
            <div className='py-5'>

            {realtimes_pltu.map((item, index) => {
              return(
                  <div key={index} className='py-2'>
                    <div className="card-realtime-primary">
                          <div className='card-body-realtime'>
                              <h5 className='text-title-card-realtime'> {item[0].parameter} </h5>
                              <p className='text-card-realtime'> {item[0].value} </p>
                          </div>
                      </div>
                      
                    <div className="py-2"/>
                    <div className="card-realtime-primary">
                          <div className='card-body-realtime'>
                              <h5 className='text-title-card-realtime'> {item[1].parameter} </h5>
                              <p className='text-card-realtime'> {item[1].value} </p>
                          </div>
                      </div>
                  </div>
              )
            })}
            </div>
              
              <div className='py-1'>
  
              {realtimes_plant.map((item, index) => {
                return(
                    <div key={index} className='py-2'>
                      <div className="card-realtime-grey">
                            <div className='card-body-realtime'>
                                <h5 className='text-title-card-realtime'> {item.parameter} </h5>
                                <p className='text-card-realtime'> {item.value} </p>
                            </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                </CCol>
              </CCol>
            </CRow>
            )}
          </div>
        </div>

      </div>
    </>
  );
};

export default Realtime;
