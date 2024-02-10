import Header from "../../components/app/Header";
import style from "./index.module.css";

function LoginPage() {
    return (
        <>
            <Header/>
            <div className={style.loginContainer}>
                <div className="inputLogin">
                    <input type="text"></input>
                </div>
                <div className="inputPassword">
                    <input type="password"></input>
                </div>
                <button className={style.signinButton}>Sign In</button>
            </div>
            
        </>
    )
}


export default LoginPage;