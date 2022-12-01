import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://imgrosetta.mynet.com.tr/file/11592014/11592014-728xauto.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://media-exp1.licdn.com/dms/image/D4D03AQEkCrXFtzBj9g/profile-displayphoto-shrink_800_800/0/1662809752940?e=2147483647&v=beta&t=H7IOWy1pYyvfQuHcPJNOAfewLmz6ctcr2X2jEiR_KH4"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Yalım Gürbüz</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>TR</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>linkedin.com/ylmgrbz</span>
              </div>
            </div>
            <button>Takip Et</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
