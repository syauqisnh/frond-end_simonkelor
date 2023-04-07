// import React, { useState } from "react";
// import Comment from "./Comment";
// import { debounce } from "./utils";

// export default function Comments() {
//   let [commentInput, setCommentInput] = useState("");
//   let [comments, setComments] = useState([
//     {
//       id: 1,
//       display: "c1",
//       children: [
//         {
//           id: 2,
//           display: "c11",
//           children: []
//         },
//         {
//           id: 3,
//           display: "c12",
//           children: []
//         }
//       ]
//     }
//   ]);

//   function addReply(commentId, replyText) {
//     let commentsWithNewReply = [...comments];
//     insertComment(commentsWithNewReply, commentId, replyText);
//     setComments(commentsWithNewReply);
//   }

//   function newComment(text) {
//     return {
//       id: new Date().getTime(),
//       display: text,
//       children: []
//     };
//   }

//   function insertComment(comments, parentId, text) {
//     for (let i = 0; i < comments.length; i++) {
//       let comment = comments[i];
//       if (comment.id === parentId) {
//         comment.children.unshift(newComment(text));
//       }
//     }

//     for (let i = 0; i < comments.length; i++) {
//       let comment = comments[i];
//       insertComment(comment.children, parentId, text);
//     }
//   }

//   return (
//     <>
//       <div className="comment-input-box">
//         <textarea
//           rows="4"
//           cols="50"
//           value={commentInput}
//           onChange={(e) => {
//             debounce(setCommentInput(e.target.value));
//           }}
//         />
//         <br />
//         <button
//           onClick={() => {
//             setComments([newComment(commentInput), ...comments]);
//             setCommentInput("");
//           }}
//         >
//           Submit
//         </button>
//       </div>
//       <ul>
//         {comments.map((comment) => (
//           <Comment key={comment.id} comment={comment} addReply={addReply} />
//         ))}
//       </ul>
//     </>
//   );
// }

import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Basic() {
  return (
    <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
      <MDBRow className="justify-content-center">
        <MDBCol md="8" lg="6">
          <MDBCard
            className="shadow-0 border"
            style={{ backgroundColor: "#f0f2f5" }}
          >
            <MDBCardBody>
              <MDBInput wrapperClass="mb-4" placeholder="Type comment..." label="+ Add a note" />

              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Martha</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Johny</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0">4</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Mary Kate</p>
                    </div>
                    <div className="d-flex flex-row align-items-center text-primary">
                      <p className="small mb-0">Upvoted</p>
                      <MDBIcon
                        fas
                        icon="thumbs-up mx-2 fa-xs"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small mb-0">2</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Johny</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0"></p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}