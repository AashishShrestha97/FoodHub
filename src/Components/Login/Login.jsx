import React from "react";
import "./Login.css"; 

const Login = () => {
    return (
        <div className="gradient-custom-2 d-flex align-items-center justify-content-center">
            <div className="card text-white">
                <div className="card-body p-5">
                    <h3 className="text-center mb-4">
                        <img src="Logo.png" alt="Lotus Logo" className="logo" />
                    </h3>
                    <p className="text-center">Please login to your account</p>

                    <form>
                        <div className="form-outline mb-4">
                            <input type="text" id="username" className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-outline mb-4">
                            <input type="password" id="password" className="form-control" placeholder="Password" />
                        </div>
                        <button className="btn btn-primary btn-block mb-4" type="submit">LOG IN</button>
                        <div className="text-center">
                            <a className="text-muted" href="#!">Forgot password?</a>
                        </div>
                        <div className="text-center">
                            <p className="mb-0">Don't have an account? <a href="/SignIn" className="text-muted">CREATE NEW</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
