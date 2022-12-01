import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Share = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <input type="text" placeholder={`Ne Düşünüyorsun ${currentUser.name}?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Resim Ekle</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Konum Ekle</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Arkadaşlarını Etiketle!</span>
            </div>
          </div>
          <div className="right">
            <button>Paylaş</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
