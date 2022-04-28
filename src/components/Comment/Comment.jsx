import { Replies, ConditionalContainer } from "../../components";
import { assets } from "../../constants";
import "./comment.scss";

const { PlusIcon, MinusIcon, ReplyIcon } = assets;

const Comment = ({
  username,
  userPicture,
  createdAt,
  commentBody,
  score = 0,
  replies = [],
  replyingTo,
  isReplies = false
}) => {
  return (
    <ConditionalContainer
      condition={isReplies === false}
      container={(children) => <div className="comment-container">{children}</div>}
    >
      <div className="comment">
        <div className="comment__user-info">
          <img
            src={userPicture}
            alt="user picture"
            className="comment__picture"
          />
          <span className="comment__username">{username}</span>
          <span className="comment__timestamp">{createdAt}</span>
        </div>
        <p className="comment__body">
          {replyingTo ? <span className="comment__reply-quote">@{replyingTo} </span> : ""}
          {commentBody}
        </p>
        <div className="comment__score">
          <PlusIcon className="comment__icon" />
          <span className="comment__score-count">{score}</span>
          <MinusIcon className="comment__icon" />
        </div>
        <button className="comment__reply-button">
          <ReplyIcon className="comment__reply-button-icon" />
          Reply
        </button>
      </div>
      {replies.length ?
        <Replies replies={replies} /> : ""
      }
    </ConditionalContainer>
  );
};

export default Comment;
