import * as React from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import {
  CChart
} from "@coreui/react-chartjs";

const C_DataOperasi = () => {
  return (
    <>
                  <CCol xs={12}>
                    <CCard className="mb-4">
                      <CCardBody>
                        <CRow>
                        <CCol sm={8}>
                          <h4 id="traffic" className="text-normal-default">
                            Langgam Beban Harian
                          </h4>
                        </CCol>
                          <CCol xs={8}>
                          <CChart
                            type="line" 
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
                                  label: "Rencana",
                                  backgroundColor: "rgba(4, 47, 157, 0.8)",
                                  borderColor: "rgba(4, 47, 157, 0.8)",
                                  pointBackgroundColor: "rgba(4, 47, 157, 0.8)",
                                  data: [40, 42, 43, 41, 42, 44, 42, 43, 42, 40, 42, 43, 41, 42, 44, 42, 43, 42, 42, 44, 42, 43, 42, 40, 42, 44, 42, 43, 42, 40, 42, 42, 45, 50, 51, 47, 46, 46, 45, 46, 44, 42, 40, 42, 42, 40, 43, 42],
                                  tension: 0.5,
                                },
                                {
                                  label: "Realisasi",
                                  backgroundColor: "rgba(255, 132, 0, 0.8)",
                                  borderColor: "rgba(255, 132, 0, 0.8)",
                                  pointBackgroundColor: "rgba(255, 132, 0, 0.8)",
                                  data: [42, 42, 41, 41, 42, 43, 42, 42, 44, 42, 42, 41, 41, 42, 43, 42, 42, 44, 43, 42, 42, 44, 42, 42, 41, 42, 44, 42, 42, 41, 42, 43, 46, 47, 50, 45, 47, 45, 46, 46, 45, 40, 41, 42, 42, 41, 41, 39],
                                  tension: 0.5,
                                },
                              ],
                            }}
                          />
                          </CCol>
                          <CCol xs={4}>
                            <CCardBody>
                              <CTable striped>
                                <CTableHead>
                                  <CTableRow>
                                    <CTableHeaderCell scope="col">
                                      Overview
                                    </CTableHeaderCell>
                                    {/* <CTableHeaderCell scope="col">
                                      Nilai
                                    </CTableHeaderCell> */}
                                  </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                  <CTableRow>
                                    <CTableDataCell>
                                     Beban Puncak Rencana Sebesar
                                    </CTableDataCell>
                                    <CTableDataCell> 103.37 MW </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      Beban Puncak Realisasi Sebesar
                                    </CTableDataCell>
                                    <CTableDataCell> 102.37 MW </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      Deviasi Rencana Realisasi
                                    </CTableDataCell>
                                    <CTableDataCell> 0.63% </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                      Load Factor (LF) Sebesar
                                    </CTableDataCell>
                                    <CTableDataCell> 73.24% </CTableDataCell>
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
                      <CCol sm={8}>
                          <h4 id="traffic" className="text-normal-default">
                            Load Stacking Realisasi
                          </h4>
                        </CCol>
                          <CCol>
                          <CChart
                            type="line" 
                            data={{
                              labels: ["1",
                              "2",
                              "3",
                              "4",
                              "5",
                              "6",
                              "7",
                              "8",
                              "9",
                              "10",
                              "11",
                              "12",
                              "13",
                              "14",
                              "15",
                              "16",
                              "17",
                              "18",
                              "19",
                              "20",
                              "21",
                              "22",
                              "23",
                              "24",
                              "25",
                              "26",
                              "27",
                              "28",
                              "29",
                              "30",
                              "31",
                              "32",
                              "33",
                              "34",
                              "35",
                              "36",
                              "37",
                              "38",
                              "39",
                              "40",
                              "41",
                              "42",
                              "43",
                              "44",
                              "45",
                              "46",
                              "47",
                              "48",],
                              datasets: [
                                {
                                  label: "Beban Sistem",
                                  backgroundColor: "rgba(0, 0, 0, 0.98)",
                                  borderColor: "rgba(0, 0, 0, 0.98)",
                                  pointBackgroundColor: "rgba(0, 0, 0, 0.98)",
                                  data: [27, 27, 27, 27, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2,],
                                  tension: 0.5,
                                  fill: false
                                },
                                {
                                  label: "Batubara",
                                  backgroundColor: "rgba(94, 94, 94, 0.8)",
                                  borderColor: "rgba(94, 94, 94, 0.8)",
                                  pointBackgroundColor: "rgba(94, 94, 94, 0.8)",
                                  data: [9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,],
                                  tension: 0.5,
                                  fill: true,
                                  pointRadius: 0,
                                },
                                {
                                  label: "Gas",
                                  backgroundColor: "rgba(255, 119, 0, 0.98)",
                                  borderColor: "rgba(255, 119, 0, 0.98)",
                                  pointBackgroundColor: "rgba(255, 119, 0, 0.98)",
                                  data: [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,],
                                  tension: 0.5,
                                  fill: true,
                                  pointRadius: 0,
                                },
                                {
                                  label: "Panas Bumi",
                                  backgroundColor: "rgba(0, 217, 4, 0.98)",
                                  borderColor: "rgba(0, 217, 4, 0.98)",
                                  pointBackgroundColor: "rgba(0, 217, 4, 0.98)",
                                  data: [17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,],
                                  tension: 0.5,
                                  fill: true,
                                  pointRadius: 0,
                                },
                                {
                                  label: "Hidro",
                                  backgroundColor: "rgba(0, 38, 217, 0.98)",
                                  borderColor: "rgba(0, 38, 217, 0.98)",
                                  pointBackgroundColor: "rgba(0, 38, 217, 0.98)",
                                  data: [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,],
                                  tension: 0.5,
                                  fill: true,
                                  pointRadius: 0,
                                },
                                {
                                  label: "MFO",
                                  backgroundColor: "rgba(103, 54, 0, 0.98)",
                                  borderColor: "rgba(103, 54, 0, 0.98)",
                                  pointBackgroundColor: "rgba(103, 54, 0, 0.98)",
                                  data: [22, 21, 21, 21, 22, 21, 21, 21, 21, 22, 21, 21, 21, 22, 21, 21, 21, 21, 22, 21, 21, 21, 22, 21, 21, 21, 21, 22, 21, 21, 21, 22, 21, 21, 21, 21, 22, 21, 21, 21, 22, 21, 21, 21, 21, 22, 21, 21, 21, 22, 21, 21, 21, 21, 22, 21, 21,],
                                  tension: 0.5,
                                  fill: true,
                                  pointRadius: 0,
                                },
                                {
                                  label: "HSD/B30",
                                  backgroundColor: "rgba(126, 75, 0, 0.98)",
                                  borderColor: "rgba(126, 75, 0, 0.98)",
                                  pointBackgroundColor: "rgba(126, 75, 0, 0.98)",
                                  data: [25, 25, 25, 25, 25, 25, 25, 24, 25, 25, 25, 25, 25, 25, 25, 25, 24, 25, 25, 25, 25, 25, 25, 25, 25, 24, 25, 25, 25, 25, 25, 25, 25, 25, 24, 25, 25, 25, 25, 25, 25, 25, 25, 24, 25, 25, 25, 25, 25, 25, 25, 25, 24, 25, 25, 25, 25,],
                                  tension: 0.5,
                                  fill: true,
                                  pointRadius: 0,
                                },
                                {
                                  label: "Surya dan Bayu",
                                  backgroundColor: "rgba(227, 233, 0, 0.98)",
                                  borderColor: "rgba(227, 233, 0, 0.98)",
                                  pointBackgroundColor: "rgba(227, 233, 0, 0.98)",
                                  data: [27, 27, 27,27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,],
                                  tension: 0.5,
                                  fill: true,
                                  pointRadius: 0,
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
                      <CCol sm={8}>
                          <h4 id="traffic" className="text-normal-default">
                            Produksi Energi Pembangkit - 03 Juni 2023
                          </h4>
                        </CCol>
                        <CRow>
                          <CCol>
                            <CCardBody>
                              <CTable striped>
                                <CTableHead>
                                  <CTableRow>
                                    <CTableHeaderCell scope="col">
                                      Pembangkit
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                      DMN
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                      Energi (MW)
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                      CF (%)
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                      Bauran Energi
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                      %
                                    </CTableHeaderCell>
                                  </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                  <CTableRow>
                                    <CTableDataCell>
                                     PLTU BOLOK (PLANT)
                                    </CTableDataCell>
                                    <CTableDataCell> 15.00 </CTableDataCell>
                                    <CTableDataCell> 358.20 </CTableDataCell>
                                    <CTableDataCell> 89.24 </CTableDataCell>
                                    <CTableDataCell> Batubara </CTableDataCell>
                                    <CTableDataCell> 22.87 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                     PLTU IPP KUPANG BARU (PLANT)
                                    </CTableDataCell>
                                    <CTableDataCell> 15.00 </CTableDataCell>
                                    <CTableDataCell> 358.20 </CTableDataCell>
                                    <CTableDataCell> 89.24 </CTableDataCell>
                                    <CTableDataCell> Batubara </CTableDataCell>
                                    <CTableDataCell> 22.87 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                     PLTD COGINDO (PLANT)
                                    </CTableDataCell>
                                    <CTableDataCell> 15.00 </CTableDataCell>
                                    <CTableDataCell> 358.20 </CTableDataCell>
                                    <CTableDataCell> 89.24 </CTableDataCell>
                                    <CTableDataCell> Batubara </CTableDataCell>
                                    <CTableDataCell> 22.87 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                     PLTMG KUPANG PEAKER (PLANT)
                                    </CTableDataCell>
                                    <CTableDataCell> 15.00 </CTableDataCell>
                                    <CTableDataCell> 358.20 </CTableDataCell>
                                    <CTableDataCell> 89.24 </CTableDataCell>
                                    <CTableDataCell> Batubara </CTableDataCell>
                                    <CTableDataCell> 22.87 </CTableDataCell>
                                  </CTableRow>

                                  <CTableRow>
                                    <CTableDataCell>
                                     ULPL KUPANG NIGATA (PLANT)
                                    </CTableDataCell>
                                    <CTableDataCell> 15.00 </CTableDataCell>
                                    <CTableDataCell> 358.20 </CTableDataCell>
                                    <CTableDataCell> 89.24 </CTableDataCell>
                                    <CTableDataCell> Batubara </CTableDataCell>
                                    <CTableDataCell> 22.87 </CTableDataCell>
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
                      <CCol sm={8}>
                          <h4 id="traffic" className="text-normal-default">
                            Langgam Beban Sistem Pembangkit - 03 Juni 2023
                          </h4>
                        </CCol>
                          <CCol>
                          <CChart
                            type="line" 
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
                                  label: "PLTU BOLOK",
                                  backgroundColor: "rgba(0, 121, 255, 1)",
                                  borderColor: "rgba(0, 121, 255, 1)",
                                  pointBackgroundColor: "rgba(0, 121, 255, 1)",
                                  data: [9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                                  tension: 0.5,
                                  fill: true,
                                },
                                {
                                  label: "PLTU IPP KPG BARU",
                                  backgroundColor: "rgba(0, 223, 162, 1)",
                                  borderColor: "rgba(0, 223, 162, 1)",
                                  pointBackgroundColor: "rgba(0, 223, 162, 1)",
                                  data: [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
                                  tension: 0.5,
                                  fill: true,
                                },
                                {
                                  label: "PLTD COGINDO",
                                  backgroundColor: "rgba(246, 250, 112, 1)",
                                  borderColor: "rgba(246, 250, 112, 1)",
                                  pointBackgroundColor: "rgba(246, 250, 112, 1)",
                                  data: [17, 17, 17, 17, 17, 17, 17, 18, 19, 20, 20, 21, 22, 23, 24, 24, 23, 21, 20, 18, 15, 15, 12, 11, 16, 22, 23, 24, 25, 23, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
                                  tension: 0.5,
                                  fill: true,
                                },
                                {
                                  label: "PLTMG KPG PEAKER",
                                  backgroundColor: "rgba(255, 0, 96, 1)",
                                  borderColor: "rgba(255, 0, 96, 1)",
                                  pointBackgroundColor: "rgba(255, 0, 96, 1)",
                                  data: [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 20, 22, 23, 23, 24, 24, 26, 26, 24, 23, 22, 19, 18, 18, 18, 18, 18],
                                  tension: 0.5,
                                  fill: true,
                                },
                              ],
                            }}
                          />
                          </CCol>
                      </CCardBody>
                    </CCard>
                  </CCol>
                  
                  
    </>
  );
};

export default C_DataOperasi;
