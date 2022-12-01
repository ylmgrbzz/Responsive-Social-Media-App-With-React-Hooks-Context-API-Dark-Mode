import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Merhaba.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Hesabınız Yok Mu?</span>
          <Link to="/register">
            <button>Kayıt Ol</button>
          </Link>
        </div>
        <div className="right">
          <h1>Giriş Yap!</h1>
          <form>
            <input type="text" placeholder="Kullanıcı Adı" />
            <input type="password" placeholder="Şifre" />
            <button onClick={handleLogin}>Giriş</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
