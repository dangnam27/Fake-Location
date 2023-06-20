import React, { useState, useEffect } from "react";
import axios from "axios";
import "./signup.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [ipAddress, setIpAddress] = useState("");
  

  const handleTogglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  useEffect(() => {
    async function getIpRegiste() {
      const res = await axios.get('https://api.ipify.org/?format=json');
      const data = res.data;
      setIpAddress(data.ip);
    }
    getIpRegiste();
  }, []);
  const formik = useFormik({
    initialValues: {
      full_name: "",
      user_name: "",
      email: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .required(null)
        .min(4, "Must be 4 characters or more"),
      ip_register: Yup.string().required(null),

      device_register: Yup.string().required(null),
      

      full_name: Yup.string()
        .required(null)
        .min(6, "Must be 6 characters or more"),
      email: Yup.string()
        .required(null)
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required(null)
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{7,19}$/,
          "Password must be 7-19 characters and contain at least one letter, one number"
        ),
      confirmedPassword: Yup.string()
        .required(null)
        .oneOf([Yup.ref("password")], "Password must match"),
    }),
   
    onSubmit: (values) => {
    
      const registrationData = {

        full_name: values.full_name,
        user_name: values.user_name,
        email: values.email,
        password: values.password,
        confirmedPassword: values.confirmedPassword,
        ip_register: ipAddress,
        device_register: "web",
      };
      
      axios
        .post("http://14.225.7.179:2989/signup", registrationData)
        .then((response) => {
          console.log(response);
          alert(" Bạn đã đăng ký thành công");
          navigate("/Login");
        })
        .catch((error) => {
          console.log(error.message);
          console.log("Lỗi");
          console.log(registrationData)
        });
    },
  });

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className=" form-container  p-5 rounded bg-white">
        <form onSubmit={formik.handleSubmit}>
          <h3 className="text-center">Sign In</h3>
          <label> Full name </label>
          <input
            className="mb-2"
            type="text"
            id="full_name"
            name="full_name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
            placeholder="Enter full_name"
          />
          {formik.errors.full_name && (
            <p className="errorMsg"> {formik.errors.full_name} </p>
          )}
          <label> User Name </label>
          <input
            className="mb-2"
            type="text"
            id="user_name"
            name="user_name"
            value={formik.values.user_name}
            onChange={formik.handleChange}
            placeholder="Enter user name"
          />
          {formik.errors.user_name && (
            <p className="errorMsg"> {formik.errors.user_name} </p>
          )}
          <label> Email address </label>
          <input
            className="mb-2"
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter your email"
            autoComplete="username"
          />
          <i
            className="fa-solid fa-eye p-1"
            checked={showPassword}
            onClick={handleTogglePassword}
          ></i>
          {formik.errors.email && (
            <p className="errorMsg"> {formik.errors.email} </p>
          )}
          <label> Pass word </label>
          <input
            className="mb-2"
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter your password"
            autoComplete="new-password"
          />

          {formik.errors.password && (
            <p className="errorMsg"> {formik.errors.password} </p>
          )}
          <label> Confirm Password </label>
          <input
            className="mb-2"
            type={showPassword ? "text" : "password"}
            id="confirmedPassword"
            name="confirmedPassword"
            value={formik.values.confirmedPassword}
            onChange={formik.handleChange}
            placeholder="Confirm your password"
            autoComplete="new-password"
          />
          {formik.errors.confirmedPassword && (
            <p className="errorMsg"> {formik.errors.confirmedPassword} </p>
          )}
          {formik.errors.ip_register && (
            <p className="errorMsg"> {formik.errors.ip_register} </p>
          )}
          {/* <label> IP Register </label>
          <input
            className="mb-2"
            type="text"
            id="ip_register"
            name="ip_register"
            value={formik.values.ip_register}
            onChange={formik.handleChange}
            placeholder="Enter ip register"
          /> */}
          <div className="d-grid mt-2">
            <button className=" btn btn-primary" type="submit">
              Sign Up
            </button>
          </div>
          <p className="text-end mt-2">
            Already Registration{" "}
            <NavLink className=" ms-2" to="/Login">
              Sign In
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;
