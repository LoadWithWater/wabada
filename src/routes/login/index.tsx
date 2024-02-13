import Header from "../../components/app/Header";
import style from "./index.module.css";

function LoginPage() {
    return (
        <>
            <Header/>
            <div className={style.loginContainer}>
                <h1>Participate In Wabada Land!</h1>
                
                <div className={style.inputLogin}>
                    <input type="text"></input>
                </div>
                <div className={style.inputLogin}>
                    <input type="password"></input>
                </div>
                <button className={style.signinButton}>Sign In</button>
            </div>
            
        </>
    )
}


export default LoginPage;