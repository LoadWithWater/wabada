import Header from "../../components/app/Header";
import style from "./index.module.css";

function LoginPage() {
    return (
        <>
            <Header/>
            <div className={style.loginBackground}>
                <div className={style.loginContainer}>
                    <div className={style.loginBox}>
                        <div className={style.loginHead}>
                            <img className={style.loginImage} src={"/images/foxhead.png"} alt={"foxhead"}/>
                            <h1>Participate In Wabada Land!</h1>
                        </div>
                        
                        <div className={style.inputLogin}>
                            <h2>ID</h2>
                            <input type="text" className={style.inputId} placeholder={"SuperFox's ID"}></input>
                        </div>
                        <div className={style.inputLogin}>
                            <h2>Password</h2>
                            <input type="password" className={style.inputPassword} placeholder={"SuperFox's password"}></input>
                        </div>
                        <button className={style.signinButton}>Sign In</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}


export default LoginPage;