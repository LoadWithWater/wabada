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
                            <h1>Join In Wabada Land!</h1>
                        </div>
                        
                        <div className={style.inputLogin}>
                            <h2>ID</h2>
                            <input type="text" className={style.inputId} placeholder={"SuperFox's ID"}></input>
                        </div>
                        <div className={style.inputLogin}>
                            <h2>Password</h2>
                            <input type="password" className={style.inputPassword} placeholder={"SuperFox's password"}></input>
                        </div>
                        <button className={style.signinGoogle}>Sign In with&nbsp;
                            <span className={style.signinGoogle1}>G</span>
                            <span className={style.signinGoogle2}>o</span>
                            <span className={style.signinGoogle3}>o</span>
                            <span className={style.signinGoogle4}>g</span>
                            <span className={style.signinGoogle5}>l</span>
                            <span className={style.signinGoogle6}>e</span>
                        </button>

                        <button className={style.signinButton}>Sign In</button>
                        <div className={style.signupLink}>
                            Don't you have an account? Join Us!
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}


export default LoginPage;