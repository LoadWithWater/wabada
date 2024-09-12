import Header from "../../components/app/Header";
import style from "./index.module.css";

function SignupPage() {
    return (
        <>
            <Header/>
            <div className={style.sighupBackground}>
                <div className={style.sighupContainer}>
                    <div className={style.loginBox}>
                        <div className={style.loginHead}>
                            <img className={style.loginImage} src={"/images/foxhead.png"} alt={"foxhead"}/>
                            <h1>Welcome to SAR!</h1>
                        </div>
                        
                        <div className={style.inputLogin}>
                            <h2>Name</h2>
                            <input type="text" className={style.inputName} placeholder={"WABADA"}></input>
                        </div>
                        <div className={style.inputLogin}>
                            <h2>ID</h2>
                            <input type="text" className={style.inputId} placeholder={"SuperFox's ID"}></input>
                        </div>
                        <div className={style.inputLogin}>
                            <h2>Password</h2>
                            <input type="password" className={style.inputPassword} placeholder={"SuperFox's password"}></input>
                        </div>
                        <div className={style.inputLogin}>
                            <h2>Password Check</h2>
                            <input type="password" className={style.inputPassword} placeholder={"SuperFox's password"}></input>
                        </div>
                        <button className={style.signinGoogle}>Sign Up with&nbsp;
                            <span className={style.signinGoogle1}>G</span>
                            <span className={style.signinGoogle2}>o</span>
                            <span className={style.signinGoogle3}>o</span>
                            <span className={style.signinGoogle4}>g</span>
                            <span className={style.signinGoogle5}>l</span>
                            <span className={style.signinGoogle6}>e</span>
                        </button>

                        <button className={style.signinButton}>Sign Up</button>
                        <div className={style.signupLink}>
                            <span onClick={() => window.location.href = '../login'}>Already have an account? Log In!</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}


export default SignupPage;