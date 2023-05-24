// import React from "react";
// import { AiFillFolderOpen } from "react-icons/ai";
// import { useHistory } from "react-router-dom";
// const C_Dataoperasi = () => {
//   const history = useHistory();

//   const handleClick = (route) => {
//     history.push(route);
//   };
//   const kotakList1 = [
//     {
//       id: 1,
//       icon: <AiFillFolderOpen />,
//       text: (
//         <>
//           <div>Langgam</div>
//           <div>Beban Harian</div>
//         </>
//       ),
//       route: "/C_langgambebanharian",
//     },
//     {
//       id: 2,
//       icon: <AiFillFolderOpen />,
//       text: (
//         <>
//           <div>Load</div>
//           <div>Stacking Energi</div>
//         </>
//       ),
//       route: "/Energi",
//     },
//     {
//       id: 3,
//       icon: <AiFillFolderOpen />,
//       text: (
//         <>
//           <div>Load</div>
//           <div>Stacking Pembangkit</div>
//         </>
//       ),
//       route: "/S_pembangkit",
//     },
//   ];
//   const kotakList2 = [
//     {
//       id: 4,
//       icon: <AiFillFolderOpen />,
//       text: (
//         <>
//           <div>Produksi Energi</div>
//           <div>Pembangkit</div>
//         </>
//       ),
//       route: "/Energi_Pembangkit",
//     },
//     {
//       id: 5,
//       icon: <AiFillFolderOpen />,
//       text: (
//         <>
//           <div>Tabel BPP</div>
//         </>
//       ),
//       route: "/BPP",
//     },
//   ];

//   const kotakStyle = {
//     width: "300px",
//     height: "300px",
//     backgroundColor: "#D9D9D9",
//     borderRadius: "50px",
//     margin: "30px 20px 10px 50px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "column",
//     cursor: "pointer",
//   };

//   const imgStyle = {
//     fontSize: "6em",
//     color: "#8473ED",
//   };

//   const textStyle = {
//     marginTop: "15px",
//     textAlign: "center",
//     fontSize: "15pt",
//   };
//   return (
//     <>
//       <div className="homes">
//         <div className="wrapper d-flex flex-column">
//           <div className="body flex-grow-1 px-3">
//             <div className="header">
//               <p>Operasional Data</p>
//               <div style={{ display: "relative", flexDirection: "column" }}>
//                 <div style={{ display: "flex" }}>
//                   {kotakList1.map((kotak) => (
//                     <div
//                       key={kotak.id}
//                       style={kotakStyle}
//                       onClick={() => handleClick(kotak.route)}
//                     >
//                       {React.cloneElement(kotak.icon, { style: imgStyle })}
//                       <p style={textStyle}>{kotak.text}</p>{" "}
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{ display: "flex" }}>
//                   {kotakList2.map((kotak) => (
//                     <div
//                       key={kotak.id}
//                       style={kotakStyle}
//                       onClick={() => handleClick(kotak.route)}
//                     >
//                       {React.cloneElement(kotak.icon, { style: imgStyle })}
//                       <p style={textStyle}>{kotak.text}</p>{" "}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default C_Dataoperasi;
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


  return (
    <>
    <CCol xs={12}>
        <CCard className="mb-4">
          <CRow>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell align="right">Calories</StyledTableCell>
              <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {rows.map((row) => (
           <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
           ))}
        </TableBody>
      </Table>
     </TableContainer>
     </CRow>
     </CCard>
     </CCol>
     <CCol xs={12}>
                    <CCard className="mb-4">
                      <CCardBody>
                        <CRow>
                          <CCol xs={6}>
                          <CChart
                              type="bar"
                              data={{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                datasets: [
                                  {
                                    label: 'GitHub Commits',
                                    backgroundColor: '#f87979',
                                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                                  },
                                ],
                              }}
                              labels="months"
                            />
                          </CCol>
                          <CCol xs={6}>
                            <CCardBody>
                            <CChart
                              type="bar"
                              data={{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                datasets: [
                                  {
                                    label: 'GitHub Commits',
                                    backgroundColor: '#f87979',
                                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                                  },
                                ],
                              }}
                              labels="months"
                            />
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
                          <CCol xs={6}>
                          <CChart
                            type="line" 
                            data={{
                              labels: ["January", "February", "March", "April", "May", "June", "July"],
                              datasets: [
                                {
                                  label: "My First dataset",
                                  backgroundColor: "rgba(220, 220, 220, 0.2)",
                                  borderColor: "rgba(220, 220, 220, 1)",
                                  pointBackgroundColor: "rgba(220, 220, 220, 1)",
                                  pointBorderColor: "#fff",
                                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                                },
                                {
                                  label: "My Second dataset",
                                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                                  borderColor: "rgba(151, 187, 205, 1)",
                                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                                  pointBorderColor: "#fff",
                                  data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
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
                          <CCol xs={6}>
                          <CChart
                            type="line" 
                            data={{
                              labels: ["January", "February", "March", "April", "May", "June", "July"],
                              datasets: [
                                {
                                  label: "My First dataset",
                                  backgroundColor: "rgba(220, 220, 220, 0.2)",
                                  borderColor: "rgba(220, 220, 220, 1)",
                                  pointBackgroundColor: "rgba(220, 220, 220, 1)",
                                  pointBorderColor: "#fff",
                                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                                },
                                {
                                  label: "My Second dataset",
                                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                                  borderColor: "rgba(151, 187, 205, 1)",
                                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                                  pointBorderColor: "#fff",
                                  data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
                                },
                              ],
                            }}
                          />
                          </CCol>
                          <CCol xs={6}>
                            <CCardBody>
                            <CChart
                              type="line" 
                              data={{
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [
                                  {
                                    label: "My First dataset",
                                    backgroundColor: "rgba(220, 220, 220, 0.2)",
                                    borderColor: "rgba(220, 220, 220, 1)",
                                    pointBackgroundColor: "rgba(220, 220, 220, 1)",
                                    pointBorderColor: "#fff",
                                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                                  },
                                  {
                                    label: "My Second dataset",
                                    backgroundColor: "rgba(151, 187, 205, 0.2)",
                                    borderColor: "rgba(151, 187, 205, 1)",
                                    pointBackgroundColor: "rgba(151, 187, 205, 1)",
                                    pointBorderColor: "#fff",
                                    data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
                                  },
                                ],
                              }}
                            />
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
                          <CCol xs={6}>
                          <CChart
                            type="line" 
                            data={{
                              labels: ["January", "February", "March", "April", "May", "June", "July"],
                              datasets: [
                                {
                                  label: "My First dataset",
                                  backgroundColor: "rgba(220, 220, 220, 0.2)",
                                  borderColor: "rgba(220, 220, 220, 1)",
                                  pointBackgroundColor: "rgba(220, 220, 220, 1)",
                                  pointBorderColor: "#fff",
                                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                                },
                                {
                                  label: "My Second dataset",
                                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                                  borderColor: "rgba(151, 187, 205, 1)",
                                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                                  pointBorderColor: "#fff",
                                  data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
                                },
                              ],
                            }}
                          />
                          </CCol>
                          <CCol xs={6}>
                            <CCardBody>
                            <CChart
                              type="line" 
                              data={{
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [
                                  {
                                    label: "My First dataset",
                                    backgroundColor: "rgba(220, 220, 220, 0.2)",
                                    borderColor: "rgba(220, 220, 220, 1)",
                                    pointBackgroundColor: "rgba(220, 220, 220, 1)",
                                    pointBorderColor: "#fff",
                                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                                  },
                                  {
                                    label: "My Second dataset",
                                    backgroundColor: "rgba(151, 187, 205, 0.2)",
                                    borderColor: "rgba(151, 187, 205, 1)",
                                    pointBackgroundColor: "rgba(151, 187, 205, 1)",
                                    pointBorderColor: "#fff",
                                    data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
                                  },
                                ],
                              }}
                            />
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
                          <CCol xs={6}>
                          <CChart
                            type="line" 
                            data={{
                              labels: ["January", "February", "March", "April", "May", "June", "July"],
                              datasets: [
                                {
                                  label: "My First dataset",
                                  backgroundColor: "rgba(220, 220, 220, 0.2)",
                                  borderColor: "rgba(220, 220, 220, 1)",
                                  pointBackgroundColor: "rgba(220, 220, 220, 1)",
                                  pointBorderColor: "#fff",
                                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                                },
                                {
                                  label: "My Second dataset",
                                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                                  borderColor: "rgba(151, 187, 205, 1)",
                                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                                  pointBorderColor: "#fff",
                                  data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
                                },
                              ],
                            }}
                          />
                          </CCol>
                          <CCol xs={6}>
                            <CCardBody>
                            <CChart
                              type="line" 
                              data={{
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [
                                  {
                                    label: "My First dataset",
                                    backgroundColor: "rgba(220, 220, 220, 0.2)",
                                    borderColor: "rgba(220, 220, 220, 1)",
                                    pointBackgroundColor: "rgba(220, 220, 220, 1)",
                                    pointBorderColor: "#fff",
                                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                                  },
                                  {
                                    label: "My Second dataset",
                                    backgroundColor: "rgba(151, 187, 205, 0.2)",
                                    borderColor: "rgba(151, 187, 205, 1)",
                                    pointBackgroundColor: "rgba(151, 187, 205, 1)",
                                    pointBorderColor: "#fff",
                                    data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
                                  },
                                ],
                              }}
                            />
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
                          <CCol xs={6}>
                          <CChart
                            type="line" 
                            data={{
                              labels: ["January", "February", "March", "April", "May", "June", "July"],
                              datasets: [
                                {
                                  label: "My First dataset",
                                  backgroundColor: "rgba(220, 220, 220, 0.2)",
                                  borderColor: "rgba(220, 220, 220, 1)",
                                  pointBackgroundColor: "rgba(220, 220, 220, 1)",
                                  pointBorderColor: "#fff",
                                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                                },
                                {
                                  label: "My Second dataset",
                                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                                  borderColor: "rgba(151, 187, 205, 1)",
                                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                                  pointBorderColor: "#fff",
                                  data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
                                },
                              ],
                            }}
                          />
                          </CCol>
                          <CCol xs={6}>
                            <CCardBody>
                            <CChart
                              type="line" 
                              data={{
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [
                                  {
                                    label: "My First dataset",
                                    backgroundColor: "rgba(220, 220, 220, 0.2)",
                                    borderColor: "rgba(220, 220, 220, 1)",
                                    pointBackgroundColor: "rgba(220, 220, 220, 1)",
                                    pointBorderColor: "#fff",
                                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                                  },
                                  {
                                    label: "My Second dataset",
                                    backgroundColor: "rgba(151, 187, 205, 0.2)",
                                    borderColor: "rgba(151, 187, 205, 1)",
                                    pointBackgroundColor: "rgba(151, 187, 205, 1)",
                                    pointBorderColor: "#fff",
                                    data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
                                  },
                                ],
                              }}
                            />
                            </CCardBody>
                          </CCol>
                        </CRow>
                      </CCardBody>
                    </CCard>
                  </CCol>
                  
    </>
  );
};

export default C_DataOperasi;
