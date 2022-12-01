import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  
  const comments = [
    {
      id: 1,
      desc: "ŞAMPİYON",
      name: "Yalım Gürbüz",
      userId: 1,
      profilePicture:
        "https://www.cumhuriyet.com.tr/Archive/2022/10/13/080729005-jorge-jesus-fenerbahce.jpg",
    },
    {
      id: 2,
      desc: "FENERBAHÇE",
      name: "Yalım Gürbüz",
      userId: 2,
      profilePicture:
        "https://i2.milimaj.com/i/milliyet/75/0x0/6362964a86b2495370f580f9.jpg",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Yorum Yazınız" />
        <button>Gönder</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 Saat Önce</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
