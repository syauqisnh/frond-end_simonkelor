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
import Sidebar from '../components/Sidebar';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';

const UserInvalid_page = () => {

    const [data_user, setDataUser] = useState([]);
    const [id, setId] = useState("");
    const [nama_users, setNama] = useState("");
    const [nips, setNip] = useState("");
    const [instansis, setInstansi] = useState("");
    const [roles, setRole] = useState("");
    const [emails, setEmail] = useState("");
    const [passwords, setPassword] = useState("");
  
    const [show, setShow] = useState(false);
    
    const handleClose = () => {
        setId("");
        setNama("");
        setNip("");
        setInstansi("");
        setRole("");
        setEmail("");
        setPassword("");
        setShow(false);
    };
  
  useEffect(() => {
    const GetUser = async () =>{
      const apiGetUser = await axios.get("http://localhost:8000/api/user_registrasi");
      setDataUser(apiGetUser.data.data);
    };
    GetUser();
  }, []);
  
  const Setdata = (data) => {
    setId(data.id);
    setNama(data.nama_user);
    setNip(data.nip);
    setInstansi(data.instansi);
    setRole(data.role);
    setEmail(data.email);
    setPassword(data.password);
  
    setShow(true);
  }
  
  const HandleDelete = (id_delete) => {
    axios.delete(`
    http://localhost:8000/api/user_registrasi/${id_delete}
    `).then(() => {
      alert("Data Berhasil dihapus")
      window.location.reload();
    })
  };
  
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
  
        }).then(() =>{
          axios.delete(`
            http://localhost:8000/api/user_registrasi/${id}
          `).then(() => {
            setId("");
            setNama("");
            setNip("");
            setInstansi("");
            setRole("");
            setEmail("");
            setPassword("");
            alert("Akun telah diaktifkan")
            handleClose();
            window.location.reload();
          })
        })
  
    } catch (error) {
        alert("Data Gagal ditambahkan")
    }
  };
      
  return (
    <>
    <Sidebar />
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
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Tabel User Invalid</strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                Tabel ini menampilkan seluruh data user yang belum aktif
              </p>
                <CTable striped>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                      <CTableHeaderCell scope="col">NIP</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Instansi</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Role</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                      
                  {data_user.map((item, index) => {
                    return(
                      <CTableRow key={index}>
                        <CTableHeaderCell> {item.nama_user} </CTableHeaderCell>
                        <CTableDataCell> {item.nip} </CTableDataCell>
                        <CTableDataCell> {item.instansi} </CTableDataCell>
                        <CTableDataCell> {item.email} </CTableDataCell>
                        <CTableDataCell> {item.role} </CTableDataCell>
                        <CTableDataCell> 
                           <BsIcons.BsPencilSquare                        
                          onClick={() => {
                            Setdata(item);
                          }}
                            />
                            <AiIcons.AiFillDelete
                          onClick={() => {
                            HandleDelete(item.id);
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
  
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Form Update Data</Modal.Title>
                    </Modal.Header>
                      <Modal.Body>
                        <Form onSubmit={save_user}>
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
                                  <Button type='submit' color="success">
                                    Aktifkan
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
  
  export default UserInvalid_page;