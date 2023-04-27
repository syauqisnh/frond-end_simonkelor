import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CCard,
  CContainer,
  CCardHeader,
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
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Sidebar from "../components/Sidebar";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

const User_page = () => {
  const [data_pembangkit, setDataPembangkit] = useState([]);

  const [id, setId] = useState("");
  const [nama_pembangkit, setNamaPembangkit] = useState("");
  const [jenis_pembangkit, setJenisPembangkit] = useState("");
  const [kepemilikan_aset, setAsset] = useState("");
  const [energi_prime, setEnergi] = useState("");
  const [kapasitas, setKapasitas] = useState("");
  const [DMN, setDMN] = useState("");

  const [show, setShow] = useState(false);
  const [show_edit, setShow_edit] = useState(false);

  const handleClose = () => {
    setId("");
    setNamaPembangkit("");
    setJenisPembangkit("");
    setAsset("");
    setEnergi("");
    setKapasitas("");
    setDMN("");
    setShow(false);
    setShow_edit(false);
  };

  const SetdataUpdate = (data) => {
    setId(data.id_pembangkit);
    setNamaPembangkit(data.nama_pembangkit);
    setJenisPembangkit(data.jenis_pembangkit);
    setAsset(data.kepemilikan_aset);
    setEnergi(data.energi_prime);
    setKapasitas(data.kapasitas);
    setDMN(data.DMN);

    setShow_edit(true);
  };

  const handleShow = () => setShow(true);

  useEffect(() => {
    const GetData = async () => {
      const get = await axios.get(`
      http://localhost:8000/api/pembangkit/
      `);
      setDataPembangkit(get.data.data);
      console.log(get);
    };
    GetData();
  }, []);

  const update_pembangkit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/update_pembangkit/${id}`, {
        nama_pembangkit: nama_pembangkit,
        jenis_pembangkit: jenis_pembangkit,
        kepemilikan_aset: kepemilikan_aset,
        energi_prime: energi_prime,
        kapasitas: kapasitas,
        DMN: DMN,
      });
      alert("Data Berhasil diubah");
      setId("");
      setNamaPembangkit("");
      setJenisPembangkit("");
      setAsset("");
      setEnergi("");
      setKapasitas("");
      setDMN("");
      handleClose();
      window.location.reload();
    } catch (error) {
      alert("Data Gagal diubah");
    }
  };

  return (
    <>
      <Sidebar />
      <div className="homes">
        <div className="wrapper d-flex flex-column">
          <div className="body flex-grow-1 px-3">
            <CRow>
              <CCol xs={12}>
                <div className="header">
                  <p>User Account</p>
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
                  <Button
                    className="btn btn-success text-white me-2"
                    onClick={handleShow}
                  >
                    Tambah Data
                  </Button>

                  {/* Modal */}
                  {/* Modal Update */}

                  <Modal show={show_edit} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Form Update Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form onSubmit={update_pembangkit}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        ></Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Nama Pembangkit</Form.Label>
                          <Form.Control
                            type="text"
                            autoFocus
                            onChange={(e) => setNamaPembangkit(e.target.value)}
                            value={nama_pembangkit}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Jenis Pembangkit</Form.Label>
                          <Form.Control
                            type="text"
                            autoFocus
                            onChange={(e) => setJenisPembangkit(e.target.value)}
                            value={jenis_pembangkit}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>kepemilikan Asset</Form.Label>
                          <Form.Control
                            type="text"
                            autoFocus
                            onChange={(e) => setAsset(e.target.value)}
                            value={kepemilikan_aset}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Energi Primer</Form.Label>
                          <Form.Control
                            type="text"
                            autoFocus
                            onChange={(e) => setEnergi(e.target.value)}
                            value={energi_prime}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>kapasitas</Form.Label>
                          <Form.Control
                            type="number"
                            autoFocus
                            onChange={(e) => setKapasitas(e.target.value)}
                            value={kapasitas}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>kapasitas</Form.Label>
                          <Form.Control
                            type="number"
                            autoFocus
                            onChange={(e) => setDMN(e.target.value)}
                            value={DMN}
                          />
                        </Form.Group>
                        <Button type="submit" color="primary" className="px-4">
                          Update
                        </Button>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/* Modal Add */}
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Form Tambah Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        ></Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Nama Pembangkit</Form.Label>
                          <Form.Control
                            type="text"
                            autoFocus
                            onChange={(e) => setNamaPembangkit(e.target.value)}
                            value={nama_pembangkit}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Jenis Pembangkit</Form.Label>
                          <Form.Control
                            type="text"
                            autoFocus
                            onChange={(e) => setJenisPembangkit(e.target.value)}
                            value={jenis_pembangkit}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>kepemilikan Asset</Form.Label>
                          <Form.Control
                            type="text"
                            autoFocus
                            onChange={(e) => setAsset(e.target.value)}
                            value={kepemilikan_aset}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Energi Primer</Form.Label>
                          <Form.Control
                            type="text"
                            autoFocus
                            onChange={(e) => setEnergi(e.target.value)}
                            value={energi_prime}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>kapasitas</Form.Label>
                          <Form.Control
                            type="number"
                            autoFocus
                            onChange={(e) => setKapasitas(e.target.value)}
                            value={kapasitas}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>kapasitas</Form.Label>
                          <Form.Control
                            type="number"
                            autoFocus
                            onChange={(e) => setDMN(e.target.value)}
                            value={DMN}
                          />
                        </Form.Group>
                        <Button type="submit" color="success" className="px-4">
                          Submit
                        </Button>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      {/* <Button 
                                variant="primary"
                                onClick={() => {
                                  save_user();
                                  handleClose();
                                }}
                    
                                >
                                    Submit
                                </Button> */}
                    </Modal.Footer>
                  </Modal>

                  <CCol xs={12}>
                    <CCard className="mt-5">
                      <CCardHeader>
                        <strong>Tabel Data Pembangkit</strong>
                      </CCardHeader>
                      <CCardBody>
                        <p className="text-medium-emphasis small">
                          Tabel ini menampilkan seluruh data user Pembangkit
                        </p>
                        <CTable striped>
                          <CTableHead>
                            <CTableRow>
                              <CTableHeaderCell scope="col">
                                nama Pembangkit
                              </CTableHeaderCell>
                              <CTableHeaderCell scope="col">
                                jenis Pembangkit
                              </CTableHeaderCell>
                              <CTableHeaderCell scope="col">
                                Instansi
                              </CTableHeaderCell>
                              <CTableHeaderCell scope="col">
                                Email
                              </CTableHeaderCell>
                              <CTableHeaderCell scope="col">
                                Role
                              </CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                            {data_user_admin.map((item) => {
                              return (
                                <CTableRow>
                                  <CTableDataCell>
                                    {" "}
                                    {item.nama_user}{" "}
                                  </CTableDataCell>
                                  <CTableDataCell> {item.nip} </CTableDataCell>
                                  <CTableDataCell>
                                    {" "}
                                    {item.instansi}{" "}
                                  </CTableDataCell>
                                  <CTableDataCell>
                                    {" "}
                                    {item.email}{" "}
                                  </CTableDataCell>
                                  <CTableDataCell> {item.role} </CTableDataCell>
                                  <CTableDataCell>
                                    <BsIcons.BsPencilSquare
                                      onClick={() => {
                                        // handleShow_edit(item.id);
                                        SetdataUpdate(item);
                                      }}
                                    />
                                    <AiIcons.AiFillDelete
                                    // onClick={() => {
                                    //   HandleDelete(item.user_id);
                                    // }}
                                    />
                                  </CTableDataCell>
                                </CTableRow>
                              );
                            })}
                          </CTableBody>
                        </CTable>
                      </CCardBody>
                    </CCard>
                  </CCol>

                  <CCol xs={12}>
                    <CCard className="mt-5">
                      <CCardHeader>
                        <strong>Tabel Data User Pegawai</strong>
                      </CCardHeader>
                      <CCardBody>
                        <p className="text-medium-emphasis small">
                          Tabel ini menampilkan seluruh data user pegawai
                        </p>
                        <CTable striped>
                          <CTableHead>
                            <CTableRow>
                              <CTableHeaderCell scope="col">
                                Nama
                              </CTableHeaderCell>
                              <CTableHeaderCell scope="col">
                                NIP
                              </CTableHeaderCell>
                              <CTableHeaderCell scope="col">
                                Instansi
                              </CTableHeaderCell>
                              <CTableHeaderCell scope="col">
                                Email
                              </CTableHeaderCell>
                              <CTableHeaderCell scope="col">
                                Role
                              </CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                            {data_user_pegawai.map((item) => {
                              return (
                                <CTableRow>
                                  <CTableDataCell>
                                    {" "}
                                    {item.nama_user}{" "}
                                  </CTableDataCell>
                                  <CTableDataCell> {item.nip} </CTableDataCell>
                                  <CTableDataCell>
                                    {" "}
                                    {item.instansi}{" "}
                                  </CTableDataCell>
                                  <CTableDataCell>
                                    {" "}
                                    {item.email}{" "}
                                  </CTableDataCell>
                                  <CTableDataCell> {item.role} </CTableDataCell>
                                  <CTableDataCell>
                                    <BsIcons.BsPencilSquare
                                      onClick={() => {
                                        // handleShow_edit(item.id);
                                        SetdataUpdate(item);
                                      }}
                                    />
                                    <AiIcons.AiFillDelete
                                    // onClick={() => {
                                    //   HandleDelete(item.user_id);
                                    // }}
                                    />
                                  </CTableDataCell>
                                </CTableRow>
                              );
                            })}
                          </CTableBody>
                        </CTable>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CContainer>
              </CCol>
            </CRow>
          </div>
        </div>
      </div>
    </>
  );
};

export default User_page;
