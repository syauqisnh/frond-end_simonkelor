import React from "react";
import { Button } from "react-bootstrap";
import avatar from '../assets/images/1.png'

export default function Comments() {
    return (

        <div>

          <div style={{ maxHeight: 'calc(80vh - 210px)', overflowY: 'auto', padding: '20px' }}>
          <div className="be-comment">
            <div className="be-img-comment">	
              <a href="blog-detail-2.html">
                <img src={avatar} alt="" className="be-ava-comment" />
              </a>
            </div>
            <div className="be-comment-content">
              <span className="be-comment-name">
                <h5 href="#">Pegawai-1</h5>
              </span>
              <span className="be-comment-time">
                <i className="fa fa-clock-o" />
                May 27, 2015 at 3:14am
              </span>
              <p className="be-comment-text">
                Pellentesque gravida tristique ultrices. 
                Sed blandit varius mauris, vel volutpat urna hendrerit id. 
                Curabitur rutrum dolor gravida turpis tristique efficitur.
              </p>
            </div>
          </div> 

          <div className="be-comment">
            <div className="be-img-comment">	
              <a href="blog-detail-2.html">
                <img src={avatar} alt="" className="be-ava-comment" />
              </a>
            </div>
            <div className="be-comment-content">
              <span className="be-comment-name">
                 <h5 href="#">Pegawai-2</h5>
              </span>
              <span className="be-comment-time">
                <i className="fa fa-clock-o" />
                May 27, 2015 at 3:14am
              </span>
              <p className="be-comment-text">
                Nunc ornare sed dolor sed mattis. In scelerisque dui a arcu mattis, at maximus eros commodo. Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant. Proin ut ornare lectus, vel eleifend est. Fusce hendrerit dui in turpis tristique blandit.
              </p>
            </div>
          </div>

          <div className="be-comment">
            <div className="be-img-comment">	
              <a href="blog-detail-2.html">
                <img src={avatar} alt="" className="be-ava-comment" />
              </a>
            </div>
            <div className="be-comment-content">
              <span className="be-comment-name">
                <h5 href="#">Pegawai-3</h5>
              </span>
              <span className="be-comment-time">
                <i className="fa fa-clock-o" />
                May 27, 2015 at 3:14am
              </span>
              <p className="be-comment-text">
                Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant
              </p>
            </div>
          </div>
          </div>
            <div className="panel-body">
              <textarea className="form-control" rows={2} placeholder="Ketik komentar" defaultValue={""} />
              <div className="mar-top">
                <Button className="button-sub-forum" >Submit</Button>
              </div>
            </div>

        </div>
    );
}