import React, { useState } from 'react';
import styles from '../styles/login.module.css'; 

function Login() {
    const [isActive, setIsActive] = useState(false);

    const handleRegisterClick = () => {
        setIsActive(true); // Menambahkan class "active"
    };

    const handleLoginClick = () => {
        setIsActive(false); // Menghapus class "active"
    };

    return (
        <div className={`${styles.container} ${isActive ? styles.active : ''}`} id="container">
            {/* Sign Up Form */}
            <div className={`${styles["form-container"]} ${styles["sign-up"]}`}>
                <form method="POST">
                    <h1>Create Account</h1>
                    <span>or use your email for registration</span>
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email or No.Telephone" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <input type="password" name="cpassword" placeholder="Password Confirm" required />
                    <div className={styles["social-icons"]}>
                        <a href="#" className={styles.icon}><i className="fa-brands fa-google" /></a>
                        <a href="#" className={styles.icon}><i className="fa-brands fa-facebook-f" /></a>
                        <a href="#" className={styles.icon}><i className="fa-solid fa-phone" /></a>
                    </div>
                    <button name="submit_signup" type="submit">Sign Up</button>
                </form>
            </div>

            {/* Sign In Form */}
            <div className={`${styles["form-container"]} ${styles["sign-in"]}`}>
                <form method="POST" className="login-email">
                    <h1>Sign In</h1>
                    <span>or use your email and password</span>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <a href="#">Forget Your Password?</a>
                    <div className={styles["social-icons"]}>
                        <a href="#" className={styles.icon}><i className="fa-brands fa-google" /></a>
                        <a href="#" className={styles.icon}><i className="fa-brands fa-facebook-f" /></a>
                        <a href="#" className={styles.icon}><i className="fa-solid fa-phone" /></a>
                    </div>
                    <button name="submit_login" type="submit">Sign In</button>
                    <button className={styles.hidden} onClick={handleRegisterClick} id="register">Sign Up</button>
                </form>
            </div>

            {/* Toggle Panel */}
            <div className={styles["toggle-container"]}>
                <div className={styles.toggle}>
                    <div className={`${styles["toggle-panel"]} ${styles["toggle-left"]}`}>
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of the site features</p>
                        <button className={styles.hidden} onClick={handleLoginClick} id="login">Sign In</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Login;
