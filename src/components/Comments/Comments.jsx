// import React from "react";
import { Comment } from "../../components";
import data from "../../../data.json";

import "./comments.scss";

const Comments = () => {
  const comments = data.comments;
  return (
    <div className="comments">
      {comments.map(({ id, content, createdAt, score, user, replies }) => (
        <Comment
          key={id}
          username={user.username}
          userPicture={user.image.webp}
          commentBody={content}
          score={score}
          createdAt={createdAt}
          replies={replies}
        />
      ))}
    </div>
  );
};

export default Comments;
