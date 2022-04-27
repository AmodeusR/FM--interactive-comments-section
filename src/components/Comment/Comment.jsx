import "./comment.scss";
import { assets } from "../../constants";

const { PlusIcon, MinusIcon, ReplyIcon } = assets;

const Comment = () => {
  
  return (
    <div className="comment">
        <div className="comment__user-info">
          <img src="https://source.unsplash.com/random/100x100" alt="user picture" className="comment__picture" />
          <span className="comment__username">Amodeus R.</span>
          <span className="comment__timestamp">1 hour ago</span>
        </div>
      <p className="comment__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat beatae sequi quasi fuga quo officiis sed, eligendi eos. Consequatur quos veritatis saepe enim, laudantium ipsa adipisci fugiat quas natus?
      </p>
      <div className="comment__score">
        <PlusIcon className="comment__icon" />
        <span className="comment__score-count">0</span>
        <MinusIcon className="comment__icon" />
      </div>
      <button className="comment__reply">
        <ReplyIcon className="comment__reply-icon" />
        Reply
      </button>
    </div>
  );
};

export default Comment;
