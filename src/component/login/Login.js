import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter, useParams, useNavigate } from "react-router-dom";
import { get, formpost, post } from "../../utils/service";
import { checkAuth } from "../../utils/auth";
import * as CONSTANT from '../../utils/constant';

function Login() {
  const navigate = useNavigate();
  function loginSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    formpost("/api/login", data)
      .then((response) => {
        if (response) {
          console.log(response.data);
          if (response.data.error === "Unauthorised") {
            // toast.error('invalid credentials!');
          } else {
            // toast.success('Login successful!');
            console.log(response.data.user);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("name", response.data.user.name);
            localStorage.setItem("user_id", response.data.user.id);
            localStorage.setItem("email", response.data.user.email);
            localStorage.setItem("phone", response.data.user.phone);
            checkAuth.authenticate();

            navigate("/");
          }
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    // <div className="hold-transition login-page">
    //   <div className="login-box">
    //     <div className="login-logo">
    //       <a href="../../index2.html">
    //         <b>Admin</b>LTE
    //       </a>
    //     </div>
    //     <div className="card">
    //       <div className="card-body login-card-body">
    //         <p className="login-box-msg">Sign in to start your session</p>

    //         <form onSubmit={loginSubmit}>
    //           <div className="input-group mb-3">
    //             <input type="email" className="form-control" placeholder="Email" name="email" id="email"/>
    //             <div className="input-group-append">
    //               <div className="input-group-text">
    //                 <span className="fas fa-envelope"></span>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="input-group mb-3">
    //             <input
    //               type="password"
    //               className="form-control"
    //               placeholder="Password" name="password" id="password"
    //             />
    //             <div className="input-group-append">
    //               <div className="input-group-text">
    //                 <span className="fas fa-lock"></span>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col-8">
    //               <div className="icheck-primary">
    //                 <input type="checkbox" id="remember" />
    //                 <label htmlFor="remember">Remember Me</label>
    //               </div>
    //             </div>

    //             <div className="col-4">
    //               <button type="submit" className="btn btn-primary btn-block">
    //                 Sign In
    //               </button>
    //             </div>
    //           </div>
    //         </form>

    //         <div className="social-auth-links text-center mb-3">
    //           <p>- OR -</p>
    //           <a href="#" className="btn btn-block btn-primary">
    //             <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
    //           </a>
    //           <a href="#" className="btn btn-block btn-danger">
    //             <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
    //           </a>
    //         </div>

    //         <p className="mb-1">
    //           <a href="forgot-password.html">I forgot my password</a>
    //         </p>
    //         <p className="mb-0">
    //           <a href="register.html" className="text-center">
    //             Register a new membership
    //           </a>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
    
    <section className="log-in-section background-image-2 section-b-space">
        <div className="container-fluid-lg w-100">
            <div className="row">
                <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                    <div className="image-contain">
                        <img src={`${CONSTANT.HOMEURL}/front/assets/images/inner-page/log-in.png`} className="img-fluid" alt=""/>
                    </div>
                </div>

                <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                    <div className="log-in-box">
                        <div className="log-in-title">
                            <h3>Welcome To Fastkart</h3>
                            <h4>Log In Your Account</h4>
                        </div>

                        <div className="input-box">
                            <form className="row g-4">
                                <div className="col-12">
                                    <div className="form-floating theme-form-floating log-in-form">
                                        <input type="email" className="form-control" id="email" placeholder="Email Address"/>
                                        <label htmlFor="email">Email Address</label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-floating theme-form-floating log-in-form">
                                        <input type="password" className="form-control" id="password"
                                            placeholder="Password"/>
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="forgot-box">
                                        <div className="form-check ps-0 m-0 remember-box">
                                            <input className="checkbox_animated check-box" type="checkbox"
                                                id="flexCheckDefault"/>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                                        </div>
                                        <a href="forgot.html" className="forgot-password">Forgot Password?</a>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <button className="btn btn-animation w-100 justify-content-center" type="submit">Log
                                        In</button>
                                </div>
                            </form>
                        </div>

                        <div className="other-log-in">
                            <h6>or</h6>
                        </div>

                        <div className="log-in-button">
                            <ul>
                                <li>
                                    <a href="https://www.google.com/" className="btn google-button w-100">
                                        <img src={`${CONSTANT.HOMEURL}/front/assets/images/inner-page/google.png`} className="blur-up lazyload"
                                            alt=""/> Log In with Google
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" className="btn google-button w-100">
                                        <img src={`${CONSTANT.HOMEURL}/front/assets/images/inner-page/facebook.png`} className="blur-up lazyload"
                                            alt=""/> Log In with Facebook
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="other-log-in">
                            <h6></h6>
                        </div>

                        <div className="sign-up-box">
                            <h4>Don't have an account?</h4>
                            <a href="sign-up.html">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>

  );
}

export default Login;



