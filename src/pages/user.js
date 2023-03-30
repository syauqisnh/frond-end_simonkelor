import React, { useState } from 'react';
import {
  CContainer,
  CCard,
  CCardHeader,
  CCardBody,
  CCol,
  CRow,
  CButton,
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

const User_page = () => {
    
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
    setShow(false);
  }

  const handleShow = () => setShow(true);
      
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
              <Button 
                className='btn btn-success text-white me-2'                        
                onClick={handleShow}
              >
                Tambah Data 
              </Button>

{/* Modal */}
{/* Modal Add */}
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Form Tambah Data</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
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
            <strong>Tabel Data User</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Tabel ini menampilkan seluruh data Pembangkit
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

          <CTableRow>
                <CTableDataCell> Nurafiif Almas Azhari </CTableDataCell>
                <CTableDataCell> V3921024 </CTableDataCell>
                <CTableDataCell> Universitas Sebelas Maret </CTableDataCell>
                <CTableDataCell> nurafiifalmasazhr@gmail.com </CTableDataCell>
                <CTableDataCell> Super Admin </CTableDataCell>
                <CTableDataCell> 
                    <AiIcons.AiOutlineUser
                    />
                    <BsIcons.BsPencilSquare/>
                    <AiIcons.AiFillDelete
                        // onClick={() => {
                        //   HandleDelete(item.user_id);
                        // }}
                    />
                </CTableDataCell>
              </CTableRow>
              
              <CTableRow>
                <CTableDataCell> Nurafiif Almas Azhari </CTableDataCell>
                <CTableDataCell> V3921024 </CTableDataCell>
                <CTableDataCell> Universitas Sebelas Maret </CTableDataCell>
                <CTableDataCell> nurafiifalmasazhr@gmail.com </CTableDataCell>
                <CTableDataCell> Super Admin </CTableDataCell>
                <CTableDataCell> 
                    <AiIcons.AiOutlineUser
                    />
                    <BsIcons.BsPencilSquare/>
                    <AiIcons.AiFillDelete
                        // onClick={() => {
                        //   HandleDelete(item.user_id);
                        // }}
                    />
                </CTableDataCell>
              </CTableRow>
              
              <CTableRow>
                <CTableDataCell> Nurafiif Almas Azhari </CTableDataCell>
                <CTableDataCell> V3921024 </CTableDataCell>
                <CTableDataCell> Universitas Sebelas Maret </CTableDataCell>
                <CTableDataCell> nurafiifalmasazhr@gmail.com </CTableDataCell>
                <CTableDataCell> Super Admin </CTableDataCell>
                <CTableDataCell> 
                    <AiIcons.AiOutlineUser
                    />
                    <BsIcons.BsPencilSquare/>
                    <AiIcons.AiFillDelete
                        // onClick={() => {
                        //   HandleDelete(item.user_id);
                        // }}
                    />
                </CTableDataCell>
              </CTableRow>
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
 