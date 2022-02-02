import React, {useState} from 'react';
import styles from '../style/login.module.css'
import logo from "../media/bitlogo.png";
import { Link, useHistory } from "react-router-dom";
function Login() {

  const [cred, setCred] = useState({
    user: "",
    pass: "",
  })
  const [resetdata, setResetdata] = useState({})

  const handleInp = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }
  const handleChange = (e) => {
    setResetdata({ ...resetdata, [e.target.name]: e.target.value })
  }
  function showPassword(id) {
    var x = document.getElementById(id)
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  

  return <section className={styles.section}>
  <div className={styles.imgBx}>
      <img className={styles.img} src={logo} alt="Welcome to DocPlus" />
  </div>
  <div className={styles.contentBx}>
      <div className={styles.formBx}>
          <h2>Login</h2>
    <form method="POST">
              <div className={styles.inputBx}>
                  <label htmlFor="id_username">Username:</label>
                  <div className={styles.inpbar}>
                  <i class="fa fa-user icon"></i>
                      <input type="text" name="user" onChange={handleInp} placeholder="username or Email" maxLength="50" required id="id_username" />
                  </div>
              </div>
              <div className={styles.inputBx}>
                  <label htmlFor="id_password">password:</label>
        <div className={styles.inpbar}>
        <i class="fa fa-key icon"></i>
          <input
                          type="password"
                          name="pass"
                          className={styles.inpBx}
                          onChange={handleInp}
                          placeholder="Enter your password"
                          maxLength="50"
                          required
            id="id_password"
          />
          <i class="fa fa-eye" style={{ 'borderRadius': '0' }} onClick={() => { var id = "id_password"; showPassword(id)}} aria-hidden="true"></i>
                  </div>
              </div>
              <div className={styles.inputBx}>
                  <input type="submit"  value="Sign in" name="" />
              </div>
                  <div className={styles.inputBx}>
                  <p>
                      Don't have an account?&nbsp;<Link exact to="/Signup">Sign Up</Link>
                  </p>
              </div>
    </form>
    <div className={styles.resetbtngrp} style={{ 'display': 'grid' }}>
      <h5
        data-bs-toggle="modal"
      id="passBtn"
      className={styles.resetbtn}
    data-bs-target="#passwordform">
    Forgot Password
  </h5>
      <h5
        data-bs-toggle="modal"
      className={styles.resetbtn}
    data-bs-target="#retrieveform">
    Forgot username
  </h5>
      <h5
        data-bs-toggle="modal"
        className={styles.resetbtn}
        id="passBtn"
    data-bs-target="#changePassword">
    Change Password
      </h5>
      </div>
    <h3>Follow Us On</h3>
          <ul className={styles.sci}>
              <li>
                  <p>Facebook</p>
              </li>
              <li>
                  <p>Facebook</p>
              </li>
              <li>
              <p>Facebook</p>
              </li>
    </ul>
      </div>
  </div>
</section>;
}

export default Login;

