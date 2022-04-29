import data from "../../../data.json";
import "./commentmaker.scss";

const CommentMaker = () => {
  const userInfo = data.currentUser;

  return (
    <div className="commentmaker">
      <img src={userInfo.image.webp} alt="user profile" className="commentmaker__picture" />
      <textarea className="commentmaker__textfield" placeholder="Add a comment..."></textarea>
      <button className="commentmaker__button" type="button">SEND</button>
    </div>
  );
};

export default CommentMaker;
