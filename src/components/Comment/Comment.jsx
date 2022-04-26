import "./comment.scss";
import { assets } from "../../constants";

const { PlusIcon, MinusIcon } = assets;

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment__score">
        <PlusIcon className="comment__icon" />
        <span className="comment__score-count">0</span>
        <MinusIcon className="comment__icon" />
      </div>
      <div className="comment__main">
        asds
      </div>
    </div>
  );
};

export default Comment;
