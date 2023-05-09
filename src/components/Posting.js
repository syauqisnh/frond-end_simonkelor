import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Comments from "./Comments";
import avatar from '../assets/images/1.png'
import axios from "axios";

export default function Basic() {
  const [data_forum, setDataForum] = useState([]);

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

  return (
    <>
    <div className="container">
      <div className="be-comment-block">
        <h1 className="judul-forum">Forum</h1>
        <div className="col-md-12 bootstrap snippets">
          <div className="panel-forum">
            <div className="panel-body">
              <textarea
                className="form-control"
                rows={4}
                placeholder="Type something here"
                defaultValue={""}
              />
              <div className="mar-top">
                <Button className="button-sub-forum" type="submit">
                  Share
                </Button>
              </div>
            </div>
          </div>
          <div className="panel-forum">

          {data_forum.map((item) => {
            return(
            <div className="panel-body">
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
