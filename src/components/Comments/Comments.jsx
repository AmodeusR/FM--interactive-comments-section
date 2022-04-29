// import React from "react";
import { Comment, CommentMaker } from "../../components";
import data from "../../../data.json";

import "./comments.scss";

const Comments = () => {
  const comments = data.comments;
  return (
    <section className="comments">
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
      <CommentMaker />
    </section>
  );
};

export default Comments;
