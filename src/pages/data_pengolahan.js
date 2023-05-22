import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
} from '@coreui/react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';  

export const Pembangkit = () => {

  const [data_pembangkit, setData] = useState([]);
  const [id, setId] = useState("");
  const [nama_pembangkit, setNamaPembangkit] = useState("");
  const [jenis_pembangkit, setJenisPembangkit] = useState("");
  const [kepemilikan_aset, setAsset] = useState("");
  const [energi_primer, setEnergi] = useState("");
  const [kapasitas, setKapasitas] = useState("");
  const [DMN, setDMN] = useState("");

  const [show, setShow] = useState(false);
  const [show_edit, setShowEdit] = useState(false);
  
  const handleShow = () => setShow(true);

  const handleClose = () => {
      setId("");
      setNamaPembangkit("");
      setJenisPembangkit("");
      setAsset("");
      setEnergi("");
      setKapasitas("");
      setDMN("");
      setShow(false);
      setShowEdit(false);
  };

useEffect(() => {
  const Get = async () =>{
    const apiGet = await axios.get("http://localhost:8000/api/pembangkit");
    setData(apiGet.data.data);
  };
  Get();
}, []);

const Setdata = (data) => {
  setId(data.id_pembangkit);
  setNamaPembangkit(data.nama_pembangkit);
  setJenisPembangkit(data.jenis_pembangkit);
  setAsset(data.kepemilikan_aset);
  setEnergi(data.energi_primer);
  setKapasitas(data.kapasitas);
  setDMN(data.DMN);

  setShowEdit(true);
}

const HandleDelete = (id_delete) => {
  axios.delete(`
  http://localhost:8000/api/delete_pembangkit/${id_delete}
  `).then(() => {
    alert("Data Berhasil dihapus")
    window.location.href = '/';
  })
};

const save_data = async (event) => {
  event.preventDefault();
  try {
    await axios.post(
      `http://localhost:8000/api/pembangkit/`,
      {
        nama_pembangkit: nama_pembangkit,
        jenis_pembangkit: jenis_pembangkit,
        kepemilikan_aset: kepemilikan_aset,
        energi_primer: energi_primer,
        kapasitas: kapasitas,
        DMN: DMN,

      });
      alert("Data Berhasil ditambahkan");
      setNamaPembangkit("");
      setJenisPembangkit("");
      setAsset("");
      setEnergi("");
      setKapasitas("");
      setDMN("");
      handleClose();
      window.location.href = '/';

  } catch (error) {
      alert("Data Gagal ditambahkan")
  }
};

const update_data = async (event) => {
  event.preventDefault();
  try {
    await axios.put(
      `http://localhost:8000/api/update_pembangkit/${id}`,
      {
        nama_pembangkit: nama_pembangkit,
        jenis_pembangkit: jenis_pembangkit,
        kepemilikan_aset: kepemilikan_aset,
        energi_primer: energi_primer,
        kapasitas: kapasitas,
        DMN: DMN,

      });
      alert("Data Berhasil diubah")
      setId("");
      setNamaPembangkit("");
      setJenisPembangkit("");
      setAsset("");
      setEnergi("");
      setKapasitas("");
      setDMN("");
      handleClose();
      window.location.href = '/';

  } catch (error) {
      alert("Data Gagal diubah")
  }
};
  return (
    <>
    <div className='homes'>
      
    <div className="wrapper d-flex flex-column">
            <div className="body flex-grow-1 px-3">
    <CRow>
        <CCol xs={12}>
        
        <div className='header'>
            <p>
            Data Pembangkit
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
                <Button 
                  className='btn btn-success text-white me-2'                        
                  onClick={handleShow}
                >
                  Tambah Data 
                </Button>

        <CCol xs={12}>
          <CCard className="mt-4">
            <CCardHeader>
              <strong>Tabel Data Pembangkit</strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                Tabel ini menampilkan seluruh data pembangkit
              </p>
                <CTable striped>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Nama Pembangkit</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Jenis Pembangkit</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Asset</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Energi Primer</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Kapasitas</CTableHeaderCell>
                      <CTableHeaderCell scope="col">DMN</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                      
                  {data_pembangkit.map((item, index) => {
                    return(
                      <CTableRow key={index}>
                        <CTableHeaderCell> {item.nama_pembangkit} </CTableHeaderCell>
                        <CTableDataCell> {item.jenis_pembangkit} </CTableDataCell>
                        <CTableDataCell> {item.kepemilikan_aset} </CTableDataCell>
                        <CTableDataCell> {item.energi_primer} </CTableDataCell>
                        <CTableDataCell> {item.kapasitas} </CTableDataCell>
                        <CTableDataCell> {item.DMN} </CTableDataCell>
                        <CTableDataCell> 
                           <BsIcons.BsPencilSquare title='Edit'                   
                          onClick={() => {
                            Setdata(item);
                          }}
                            />
                            <AiIcons.AiFillDelete title='Delete'
                          onClick={() => {
                            HandleDelete(item.id_pembangkit);
                          }}
                            />
                            </CTableDataCell>
                        <CTableDataCell> 
                        </CTableDataCell>
                      </CTableRow>
                    )
                  })}
                  </CTableBody>
                </CTable>
  
  {/* Modal */}
  {/* Modal Update */}
  
                <Modal show={show_edit} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Form Update Data</Modal.Title>
                    </Modal.Header>
                      <Modal.Body>
                        <Form onSubmit={update_data}>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Label>Nama Pembangkit</Form.Label>
                                  <Form.Control
                                    type="text"
                                    autoFocus
                                    onChange={(e) => setNamaPembangkit(e.target.value)}
                                    value={nama_pembangkit}
                                  />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>Jenis Pembangkit</Form.Label>
                                      <Form.Control
                                          type="text"
                                          autoFocus
                                          onChange={(e) => setJenisPembangkit(e.target.value)}
                                          value={jenis_pembangkit}
                                      />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>Kepemilikan Asset</Form.Label>
                                      <Form.Control
                                          type="text"
                                          autoFocus
                                          onChange={(e) => setAsset(e.target.value)}
                                          value={kepemilikan_aset}
                                      />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>Energi Primer</Form.Label>
                                      <Form.Control
                                          type="text"
                                          autoFocus
                                          onChange={(e) => setEnergi(e.target.value)}
                                          value={energi_primer}
                                      />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>Kapasitas</Form.Label>
                                      <Form.Control
                                          type="number"
                                          autoFocus
                                          onChange={(e) => setKapasitas(e.target.value)}
                                          value={kapasitas}
                                      />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>DMN</Form.Label>
                                      <Form.Control
                                          type="number"
                                          autoFocus
                                          onChange={(e) => setDMN(e.target.value)}
                                          value={DMN}
                                      />
                                  </Form.Group>
                                  <Button type='submit' color="success">
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
                            <Form onSubmit={save_data}>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Label>Nama Pembangkit</Form.Label>
                                  <Form.Control
                                    type="text"
                                    autoFocus
                                    onChange={(e) => setNamaPembangkit(e.target.value)}
                                    value={nama_pembangkit}
                                  />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>Jenis Pembangkit</Form.Label>
                                      <Form.Control
                                          type="text"
                                          autoFocus
                                          onChange={(e) => setJenisPembangkit(e.target.value)}
                                          value={jenis_pembangkit}
                                      />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>Kepemilikan Asset</Form.Label>
                                      <Form.Control
                                          type="text"
                                          autoFocus
                                          onChange={(e) => setAsset(e.target.value)}
                                          value={kepemilikan_aset}
                                      />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>Energi Primer</Form.Label>
                                      <Form.Control
                                          type="text"
                                          autoFocus
                                          onChange={(e) => setEnergi(e.target.value)}
                                          value={energi_primer}
                                      />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>Kapasitas</Form.Label>
                                      <Form.Control
                                          type="number"
                                          autoFocus
                                          onChange={(e) => setKapasitas(e.target.value)}
                                          value={kapasitas}
                                      />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>DMN</Form.Label>
                                      <Form.Control
                                          type="number"
                                          autoFocus
                                          onChange={(e) => setDMN(e.target.value)}
                                          value={DMN}
                                      />
                                  </Form.Group>
                                <Button type='submit' color="success" className="px-4">
                                  Submit
                                </Button>
                            </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button> 
                            </Modal.Footer>
                        </Modal>
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

export const ReportsOne = () => {
  return (
    <>
    <div className='reports'>
      <h1>Reports/reports1</h1>
    </div>
    </>
  );
};

export const ReportsTwo = () => {
  return (
    <>
    <div className='reports'>
      <h1>Reports/reports2</h1>
    </div>
    </>
  );
};

export const ReportsThree = () => {
  return (
    <div className='reports'>
      <h1>Reports/reports3</h1>
    </div>
  );
};
