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
    console.log(data);
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
    <div className="wrapper">
		<div className="section-authentication-cover">
			<div className="">
				<div className="row g-0">

					<div className="col-12 col-xl-7 col-xxl-8 auth-cover-left align-items-center justify-content-center d-none d-xl-flex">

                        <div className="card shadow-none bg-transparent shadow-none rounded-0 mb-0">
							<div className="card-body">
                                 <img src="assets/images/login-images/login-cover.svg" className="img-fluid auth-img-cover-login" width="650" alt=""/>
							</div>
						</div>
						
					</div>

					<div className="col-12 col-xl-5 col-xxl-4 auth-cover-right align-items-center justify-content-center">
						<div className="card rounded-0 m-3 shadow-none bg-transparent mb-0">
							<div className="card-body p-sm-5">
								<div className="">
									<div className="mb-3 text-center">
										<img src="assets/images/logo-icon.png" width="60" alt=""/>
									</div>
									<div className="text-center mb-4">
										<h5 className="">Rocker Admin</h5>
										<p className="mb-0">Please log in to your account</p>
									</div>
									<div className="form-body">
										<form className="row g-3" onSubmit={loginSubmit}>
											<div className="col-12">
												<label htmlFor="enail" className="form-label">Email</label>
												<input type="email" className="form-control" id="enail" name="email" placeholder="jhon@example.com"/>
											</div>
											<div className="col-12">
												<label htmlFor="password" className="form-label">Password</label>
												<div className="input-group" id="show_hide_password">
													<input type="password" className="form-control border-end-0" id="password" name="password" value="12345678" placeholder="Enter Password"/> <a href="javascript:;" className="input-group-text bg-transparent"><i className="bx bx-hide"></i></a>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-check form-switch">
													<input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
													<label className="form-check-label" htmlFor="flexSwitchCheckChecked">Remember Me</label>
												</div>
											</div>
											<div className="col-md-6 text-end">	<a href="authentication-forgot-password.html">Forgot Password ?</a>
											</div>
											<div className="col-12">
												<div className="d-grid">
													<button type="submit" className="btn btn-primary">Sign in</button>
												</div>
											</div>
											<div className="col-12">
												<div className="text-center ">
													<p className="mb-0">Don't have an account yet? <a href="authentication-signup.html">Sign up here</a>
													</p>
												</div>
											</div>
										</form>
									</div>
									<div className="login-separater text-center mb-5"> <span>OR SIGN IN WITH</span>
										<hr/>
									</div>
									<div className="list-inline contacts-social text-center">
										<a href="javascript:;" className="list-inline-item bg-facebook text-white border-0 rounded-3"><i className="bx bxl-facebook"></i></a>
										<a href="javascript:;" className="list-inline-item bg-twitter text-white border-0 rounded-3"><i className="bx bxl-twitter"></i></a>
										<a href="javascript:;" className="list-inline-item bg-google text-white border-0 rounded-3"><i className="bx bxl-google"></i></a>
										<a href="javascript:;" className="list-inline-item bg-linkedin text-white border-0 rounded-3"><i className="bx bxl-linkedin"></i></a>
									</div>

								</div>
							</div>
						</div>
					</div>

				</div>
				
			</div>
		</div>
	</div>

  );
}

export default Login;



