import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../ChildComponents/Input";
import { LoginSchema } from "../../ValidationSchema";
import Loading from "../util/Loading";
import "../../login.css";
import MEDIONN from "../../images/itLogo.png"
const initialValues = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const [load, setLoad] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /////////// Custom Code //////////////////////
  const navigate = useNavigate()
  const [errors, setErrors] = useState(false)
  const [payload, setPayload] = useState({
    username: "",
    password: ""
  })
  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const predefinedEmail = 'itdose';
    const predefinedPassword = '12345';

    if (payload?.username === predefinedEmail && payload?.password === predefinedPassword) {
      localStorage.setItem('authToken', 'someRandomToken');
      toast.success('Login successfully');
      window.location.href = '/PatientSearch';
    } else {
      setErrors('Invalid email or password');
    }
  };

  /////////// Custom Code //////////////////////


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // const { values, errors, handleChange, touched, handleSubmit } = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: LoginSchema,
  //   onSubmit: (values, { resetForm }) => {
  //     setLoad(true);
  //     axios
  //       .post("/api/v1/Users/login", values)
  //       .then((res) => {
  //         if (res.data.success) {
  //           window.sessionStorage.setItem("user_Token", res.data.token);
  //           window.sessionStorage.setItem("Username", res.data.user.Username);
  //           window.sessionStorage.setItem(
  //             "CompanyCode",
  //             res.data.user.CompanyCode
  //           );
  //           window.sessionStorage.setItem(
  //             "DefaultCentre",
  //             res.data.user.DefaultCentreID
  //           );
  //           window.location.replace("/login");
  //           toast.success("Login Successfully");
  //           setLoad(false);
  //           resetForm();
  //         }
  //       })
  //       .catch((err) => {
  //         toast.error(
  //           err.response.data.message
  //             ? err.response.data.message
  //             : "error occured"
  //         );
  //         setLoad(false);
  //         resetForm();
  //       });
  //   },
  // });


  return (
    <div className="div_login">
      <div className="login-box">
        <div className="login-logo">
          <br />
          <h4>
            Welcome to
          </h4>
          {/* <img src='https://s3.ap-south-1.amazonaws.com/frontend.elabpro.in/logo.jpg' /> */}
          <img src={MEDIONN} style={{ width: "250px", height: "80px" }} />
        </div>

        <div className="login-box-body">
          <p className="login-box-msg">{"Please login to begin your session."}</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group has-feedback">
              <i
                className="fa fa-user form-control-feedback"
                aria-hidden="true"
              ></i>
              <Input
                type="text"
                className="form-control"
                placeholder={"Please enter Username"}
                name="username"
                value={payload.username}
                onChange={handleChange}
              />
              {errors?.username && (
                <span className="golbal-Error">{errors?.username}</span>
              )}
            </div>
            <div className="form-group has-feedback" style={{ borderRadius: "20px" }}>
              <Input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder={"Please enter Password"}
                name="password"
                value={payload.password}
                onChange={handleChange}

              />
              <i
                className="fa fa-lock form-control-feedback"
                aria-hidden="true"
              ></i>

              {errors?.password && (
                <span className="golbal-Error">{errors?.password}</span>
              )}
            </div>
            <div className="col-sm-12" style={{ display: "flex" }}>
              <div>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={toggleShowPassword}
                ></input>
              </div>
              <div style={{ marginLeft: "10px" }}>Show Password</div>
            </div>
            <div style={{ marginTop: "0px" ,border:"none" }}>
              {load ? (
                <Loading />
              ) : (
                <button
                  type="submit"
                  className="btn btn-custom-01 btn-block btn-flat btn-info"
                  style={{ borderRadius: "20px", marginTop: "20px" ,border:"none"}}
                >
                  {"Login"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
