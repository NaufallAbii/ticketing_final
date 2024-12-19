import React, { useState } from 'react';
<<<<<<< HEAD
import axios from 'axios'; // Make sure axios is imported
=======
>>>>>>> 62a42647232249849df32daa590cc2148c4c324f
import styles from '../styles/login.module.css'; 

function Login() {
    const [isActive, setIsActive] = useState(false);
<<<<<<< HEAD
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const style = {
        backgroundImage: "url('/images/rm222-mind-22.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    };

    const handleRegisterClick = () => {
        setIsActive(true); // Show Sign Up form
    };

    const handleLoginClick = () => {
        setIsActive(false); // Show Login form
    };

    // Handle sign up form submission
    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== cpassword) {
            setError('Passwords do not match!');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', { email, password, name });
            setLoading(false);
            if (response.data) {
                setError('');
                setIsActive(false); // Switch to login form after successful signup
            }
        } catch (err) {
            setLoading(false);
            setError(err.response ? err.response.data.message : 'Error occurred during sign up');
        }
    };

    // Handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            setLoading(false);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token); // Store JWT token
                window.location.href = '/'; // Redirect to home page after successful login
            }
        } catch (err) {
            setLoading(false);
            setError(err.response ? err.response.data.message : 'Error occurred during login');
        }
    };

    return (
        <div style={style}>
        <div className='d-flex flex-row justify-content-center'>
            <div className='d-flex flex-column'>
          <div className='p-5 m-5'></div>
        <div className={`${styles.container} ${isActive ? styles.active : ''}`} id="container">
            {/* Sign Up Form */}
            <div className={`${styles["form-container"]} ${styles["sign-up"]}`}>
                <form onSubmit={handleSignUp}>
                    <h1>Create Account</h1>
                    <span>or use your email for registration</span>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email or No.Telephone" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    <input 
                        type="password" 
                        name="cpassword" 
                        placeholder="Confirm Password" 
                        value={cpassword}
                        onChange={(e) => setCpassword(e.target.value)}
                        required 
                    />
                    {error && <p className={styles.error}>{error}</p>}
                    <button type="submit" disabled={loading}>
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
=======

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
>>>>>>> 62a42647232249849df32daa590cc2148c4c324f
                </form>
            </div>

            {/* Sign In Form */}
            <div className={`${styles["form-container"]} ${styles["sign-in"]}`}>
<<<<<<< HEAD
                <form onSubmit={handleLogin}>
                    <h1>Sign In</h1>
                    <span>or use your email and password</span>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    {error && <p className={styles.error}>{error}</p>}
                    <button type="submit" disabled={loading}>
                        {loading ? 'Logging In...' : 'Sign In'}
                    </button>
=======
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
>>>>>>> 62a42647232249849df32daa590cc2148c4c324f
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
<<<<<<< HEAD
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
       
        
      
=======
                    
                </div>
            </div>
        </div>
>>>>>>> 62a42647232249849df32daa590cc2148c4c324f
    );
}

export default Login;
