import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  CContainer,
  CCard,
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
// import Sidebar from '../components/Sidebar';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';

const User_page = () => {
    
    const [data_user_admin, setDataUserAdmin] = useState([]);
    const [data_user_pegawai, setDataUserPegawai] = useState([]);

    const [id, setId] = useState("");
    const [nama_users, setNama] = useState("");
    const [nips, setNip] = useState("");
    const [instansis, setInstansi] = useState("");
    const [roles, setRole] = useState("");
    const [emails, setEmail] = useState("");
    const [passwords, setPassword] = useState("");
  
    const [show, setShow] = useState(false);
    const [show_edit, setShow_edit] = useState(false);
    
  const handleClose = () => {
    setId("");
    setNama("");
    setNip("");
    setInstansi("");
    setRole("");
    setEmail("");
    setShow(false);
    setShow_edit(false);
  }

  const SetdataUpdate = (data) => {
    setId(data.user_id);
    setNama(data.nama_user);
    setNip(data.nip);
    setInstansi(data.instansi);
    setRole(data.role);
    setEmail(data.email);

    setShow_edit(true);
  }

  const handleShow = () => setShow(true);

  useEffect(() => {
    const GetUserAdmin = async () =>{
      const get_admin = await axios.get(`
      http://localhost:8000/api/admin/
      `);
      setDataUserAdmin(get_admin.data.data);
      console.log(get_admin);
    };
    GetUserAdmin();
  }, []);

  useEffect(() => {
    const GetUserPegawai = async () =>{
      const get_pegawai = await axios.get(`
      http://localhost:8000/api/pegawai/`
      );
      setDataUserPegawai(get_pegawai.data.data);
    };
    GetUserPegawai();
  }, []);
  
  const save_user = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        `http://localhost:8000/api/user/`,
        {
          nama_user: nama_users,
          nip: nips,
          instansi: instansis,
          role: roles,
          email: emails,
          password: passwords,
        });
        alert("Data Berhasil ditambahkan")
        setNama("");
        setNip("");
        setInstansi("");
        setRole("");
        setEmail("");
        setPassword("");
        handleClose();
        window.location.href = '/';

    } catch (error) {
        alert("Data Gagal ditambahkan")
    }
  };

  const update_user = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `http://localhost:8000/api/update_user/${id}`,
        {
          nama_user: nama_users,
          nip: nips,
          instansi: instansis,
          role: roles,
          email: emails,

        });
        alert("Data Berhasil diubah")
        setId("");
        setNama("");
        setNip("");
        setInstansi("");
        setRole("");
        setEmail("");
        handleClose();
        window.location.href = '/';

    } catch (error) {
        alert("Data Gagal diubah")
    }
  };
  
  const HandleDelete = (id_delete) => {
    axios.delete(`
    http://localhost:8000/api/delete_user/${id_delete}
    `).then(() => {
      alert("Data Berhasil dihapus")
      window.location.href = '/';
    })
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
              User Account
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
  
  {/* Modal */}
  {/* Modal Update */}
  
                <Modal show={show_edit} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Form Update Data</Modal.Title>
                    </Modal.Header>
                      <Modal.Body>
                        <Form onSubmit={update_user}>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Label>Nama User</Form.Label>
                                  <Form.Control
                                    type="text"
                                    autoFocus
                                    onChange={(e) => setNama(e.target.value)}
                                    value={nama_users}
                                  />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>NIP User</Form.Label>
                                      <Form.Control
                                          type="text"
                                          autoFocus
                                          onChange={(e) => setNip(e.target.value)}
                                          value={nips}
                                      />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>Instansi User</Form.Label>
                                      <Form.Control
                                          type="text"
                                          autoFocus
                                          onChange={(e) => setInstansi(e.target.value)}
                                          value={instansis}
                                      />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>Role User</Form.Label>
                                      <Form.Select
                                          type="text"
                                          autoFocus
                                          onChange={(e) => setRole(e.target.value)}
                                      >
                                      <option value={roles} selected>{roles}</option>
                                      <option value="Super Admin">Super Admin</option>
                                      <option value="Admin Dispacher" >Admin Dispacher</option>
                                      <option value="Admin Pembangkit">Admin Pembangkit</option>
                                      <option value="Pegawai">Pegawai</option>
                                      </Form.Select>
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>Email User</Form.Label>
                                      <Form.Control
                                          type="email"
                                          autoFocus
                                          onChange={(e) => setEmail(e.target.value)}
                                          value={emails}
                                      />
                                  </Form.Group>
                                  <Button type='submit' color="primary" className="px-4">
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
                              <Form onSubmit={save_user}> 
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>Nama User</Form.Label>
                                      <Form.Control
                                          type="text"
                                          name="nama_user"
                                          autoFocus
                                          onChange={(e) => setNama(e.target.value)}
                                          value={nama_users}
                                      />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>NIP User</Form.Label>
                                      <Form.Control
                                          type="text"
                                          name="nip"
                                          autoFocus
                                          onChange={(e) => setNip(e.target.value)}
                                          value={nips}
                                      />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>Instansi User</Form.Label>
                                      <Form.Control
                                          type="text"
                                          name="instansi"
                                          autoFocus
                                          onChange={(e) => setInstansi(e.target.value)}
                                          value={instansis}
                                      />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>Role User</Form.Label>
                                      <Form.Select
                                          type="text"
                                          name="role"
                                          autoFocus
                                          onChange={(e) => setRole(e.target.value)}
                                          value={roles}
                                      >
                                      <option>--- Pilih Role ---</option>
                                      <option value="Super Admin">Super Admin</option>
                                      <option value="Admin Dispacher" >Admin Dispacher</option>
                                      <option value="Admin Pembangkit">Admin Pembangkit</option>
                                      <option value="Pegawai">Pegawai</option>
                                      </Form.Select>
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>Email User</Form.Label>
                                      <Form.Control
                                          type="email"
                                          name="email"
                                          autoFocus
                                          onChange={(e) => setEmail(e.target.value)}
                                          value={emails}
                                      />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <Form.Label>Password User</Form.Label>
                                      <Form.Control
                                          type="password"
                                          name="password"
                                          autoFocus
                                          onChange={(e) => setPassword(e.target.value)}
                                          value={passwords}
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
                                          <strong>Tabel Data User Admin</strong>
                                        </CCardHeader>
                                        <CCardBody>
                                          <p className="text-medium-emphasis small">
                                            Tabel ini menampilkan seluruh data user admin
                                          </p>
                                      <CTable striped>
                                        <CTableHead>
                                                <CTableRow>
                                                  <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                                                  <CTableHeaderCell scope="col">NIP</CTableHeaderCell>
                                                  <CTableHeaderCell scope="col">Instansi</CTableHeaderCell>
                                                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                                                  <CTableHeaderCell scope="col">Role</CTableHeaderCell>
                                                </CTableRow>
                                        </CTableHead>
                                        <CTableBody>
                                          
                                          {data_user_admin.map((item) => {
                                            return(
                                              <CTableRow>
                                                <CTableDataCell> {item.nama_user} </CTableDataCell>
                                                <CTableDataCell> {item.nip} </CTableDataCell>
                                                <CTableDataCell> {item.instansi} </CTableDataCell>
                                                <CTableDataCell> {item.email} </CTableDataCell>
                                                <CTableDataCell> {item.role} </CTableDataCell>
                                                <CTableDataCell> 
                                                  <BsIcons.BsPencilSquare                       
                                                    onClick={() => {
                                                      SetdataUpdate(item);
                                                    }}
                                                  />
                                                  <AiIcons.AiFillDelete
                                                      onClick={() => {
                                                        HandleDelete(item.user_id);
                                                      }}
                                                  />
                                                </CTableDataCell>
                                              </CTableRow>
                                            )
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
                                                  <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                                                  <CTableHeaderCell scope="col">NIP</CTableHeaderCell>
                                                  <CTableHeaderCell scope="col">Instansi</CTableHeaderCell>
                                                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                                                  <CTableHeaderCell scope="col">Role</CTableHeaderCell>
                                                </CTableRow>
                                        </CTableHead>
                                        <CTableBody>
                                          
                                          {data_user_pegawai.map((item) => {
                                            return(
                                              <CTableRow>
                                                <CTableDataCell> {item.nama_user} </CTableDataCell>
                                                <CTableDataCell> {item.nip} </CTableDataCell>
                                                <CTableDataCell> {item.instansi} </CTableDataCell>
                                                <CTableDataCell> {item.email} </CTableDataCell>
                                                <CTableDataCell> {item.role} </CTableDataCell>
                                                <CTableDataCell> 
                                                  <BsIcons.BsPencilSquare                       
                                                    onClick={() => {
                                                      // handleShow_edit(item.id);
                                                      SetdataUpdate(item);
                                                    }}
                                                  />
                                                  <AiIcons.AiFillDelete
                                                      onClick={() => {
                                                        HandleDelete(item.user_id);
                                                      }}
                                                  />
                                                </CTableDataCell>
                                              </CTableRow>
                                            )
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