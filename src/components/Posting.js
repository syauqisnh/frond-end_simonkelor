import React from "react";
import { Button } from "react-bootstrap";

export default function Basic() {
  return (
    <div className="container">
      <div className="be-comment-block">
        <h1 className="judul-forum">Forum</h1>
        <div className="col-md-12 bootstrap snippets">
          <div className="panel-forum">
            <div className="panel-body">
              <textarea
                className="form-control"
                rows={2}
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
            <div className="panel-body">
              <div className="media-block">
                <a className="media-left" href="#">
                  <img
                    className="img-circle img-sm"
                    alt="Profile Picture"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  />
                </a>
                <div className="media-body">
                  <div className="mar-btm">
                    <h5 href="#">Admin-1</h5>
                  </div>
                  <p>
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                    wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat.
                  </p>
                  <div className="pad-ver">
                    <Button className="button-comment" href="/forumcomment">
                      Comment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel-forum">
            <div className="panel-body">
              <div className="media-block">
                <a className="media-left" href="#">
                  <img
                    className="img-circle img-sm"
                    alt="Profile Picture"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  />
                </a>
                <div className="media-body">
                  <div className="mar-btm">
                    <h5 href="#">Admin-2</h5>
                  </div>
                  <p>
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                    wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat.
                  </p>
                  <div className="pad-ver">
                    <Button className="button-comment" href="forumcomment">
                      Comment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel-forum">
            <div className="panel-body">
              <div className="media-block">
                <a className="media-left" href="#">
                  <img
                    className="img-circle img-sm"
                    alt="Profile Picture"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  />
                </a>
                <div className="media-body">
                  <div className="mar-btm">
                    <h5 href="#">Admin-3</h5>
                  </div>
                  <p>
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                    wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat.
                  </p>
                  <div className="pad-ver">
                    <Button className="button-comment" href="forumcomment">
                      Comment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel-forum">
            <div className="panel-body">
              <div className="media-block">
                <a className="media-left" href="#">
                  <img
                    className="img-circle img-sm"
                    alt="Profile Picture"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  />
                </a>
                <div className="media-body">
                  <div className="mar-btm">
                    <h5 href="#">Admin-4</h5>
                  </div>
                  <p>
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                    wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat.
                  </p>
                  <div className="pad-ver">
                    <Button className="button-comment" href="page3">
                      Comment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
