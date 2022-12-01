import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>YALIM GÜRBÜZ</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Hesabınız Yok Mu?</span>
          <Link to="/login">
          <button>Giriş Yap</button>
          </Link>
        </div>
        <div className="right">
          <h1>Kayıt Ol!</h1>
          <form>
            <input type="text" placeholder="Kullanıcı Adı" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Şifre" />
            <input type="text" placeholder="İsim" />
            <button>Kayıt </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
