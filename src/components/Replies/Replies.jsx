import { Comment } from "../../components";

const Replies = ({ replies }) => {

  return (
    <div className="replies">
      {replies.map(({ id, content, createdAt, score, user, replyingTo }) => (
        <Comment
          key={id}
          username={user.username}
          userPicture={user.image.webp}
          commentBody={content}
          score={score}
          createdAt={createdAt}
          replyingTo={replyingTo}
          isReplies={true}
        />
      ))}
    </div>
  );
};

export default Replies;
