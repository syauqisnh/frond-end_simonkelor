import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Comments from "./Comments";
import avatar from '../assets/images/1.png'
import axios from "axios";
import Form from 'react-bootstrap/Form';

export default function Basic() {
  const [data_forum, setDataForum] = useState([]);
  const [pesan, setPesan] = useState("");

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  }

  useEffect(() => {
    const GetData = async () =>{
      const api_get = await axios.get(`
      http://localhost:8000/api/forum/`
      );
      setDataForum(api_get.data.data);
    };
    GetData();
  }, []);

  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.get("http://localhost:8000/api/datauser").then((response) => {
      setUser(response.data.sort((a, b) => b.created_at.localeCompare(a.created_at)));
      console.log(user); 
    });
  }, [user]);

  const save_data = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        `http://localhost:8000/api/forum/`,
        {
          nama_user: user.nama_user,
          pesan: pesan,
        });
        window.location.href = '/';

    } catch (error) {
        alert("Data Gagal ditambahkan")
    }
  };
  return (
    <>
    <div className="container">
      <div className="be-comment-block">
        <h1 className="judul-forum">Forum</h1>
        <div className="col-md-12 bootstrap snippets">
        <Form onSubmit={save_data}>
                          
            <div className="panel-body">
              <textarea
                className="form-control"
                rows={4}
                placeholder="Tambahkan Pesan Forum"
                onChange={(e) => setPesan(e.target.value)}
                value={pesan}
              />
              <div className="mar-top">
                <Button className="button-sub-forum" type="submit">
                  Share
                </Button>
              </div>
            </div>
        </Form>


          <div className="panel-forum">

          {data_forum.map((item, index) => {
            return(
            <div className="panel-body" key={index}>
              <div className="media-block">
                <a className="media-left" href="#">
                  <img
                    className="img-circle img-sm"
                    alt="Profile Picture"
                    src={avatar}
                  />
                </a>
                <div className="media-body">
                  <div className="mar-btm">
                    <h5 href="#">{item.nama_user}</h5>
                  </div>
                  <p>
                    {item.pesan}
                  </p>
                  <div className="pad-ver">
                    <Button className="button-comment" onClick={handleShow}>
                      Comment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
              )
            })}

          </div>
        </div>
      </div>
    </div>


                                          
                
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton style={{ maxWidth: "1000px" }}>
                    <Modal.Title className="comments-title">Comments</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Comments/>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                </Modal>

    </>
  );
}
