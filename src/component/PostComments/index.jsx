import React, { useState } from "react";
import "./Post.css";

function PostComments(props) {
  const { imageSrc, comments, onCommentAdded } = props;
  const [commentText, setCommentText] = useState("");

  function handleCommentSubmit(event) {
    event.preventDefault();
    if (commentText.trim() !== "") {
      onCommentAdded(commentText.trim());
      setCommentText("");
    }
  }

  return (
    <div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit} className="d-flex">
        <input
          className="form-control"
          type="text"
          placeholder="Bình luận"
          aria-label="Search"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
        <button className="btn btn-outline-info ms-1" type="submit">
          Gửi
        </button>
      </form>
    </div>
  );
}

export default PostComments;
