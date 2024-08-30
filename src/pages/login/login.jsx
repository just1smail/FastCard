import { Button, TextField } from "@mui/material";
import React from "react";
import { axiosRequest } from "../../utils/axiosRequest/axiosRequest";
import { Field, Form, Formik } from "formik";
import { saveToken } from "../../utils/token/token";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  async function Login(obj) {
    try {
      const { data } = await axiosRequest.post("Account/login", obj);
      saveToken(data?.data);
      if (localStorage.getItem("access_token")) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-[100%] h-[700px] flex justify-center items-center">
      <div>
        <h1 className="text-[30px] tracking-[2px]">Log in to Exclusive</h1>
        <p className="mb-[40px]">Enter your details below</p>

        <Formik
          initialValues={{
            userName: "",
            password: "",
          }}
          onSubmit={async (values) => Login(values)}
        >
          <Form>
            <div className="flex flex-col gap-[30px] mb-[30px]">
              <Field
                as={TextField}
                sx={{ width: "420px", height: "50px" }}
                name="userName"
                id="outlined-basic"
                label="User Name"
                variant="outlined"
              />
              <Field
                as={TextField}
                sx={{ width: "420px", height: "50px" }}
                id="outlined-basic"
                name="password"
                label="Password"
                variant="outlined"
                type="text"
              />
            </div>

            <div>
              <p className="mb-[30px] text-center">
                <span className="text-[16px] font-[600] text-[#DB4444]">
                  Forgot password?
                </span>
              </p>
            </div>

            <div className="flex flex-col">
              <Button
                type="submit"
                variant="contained"
                color="error"
                sx={{
                  display: "flex",
                  width: "420px",
                  height: "50px",
                  gap: "10px",
                  marginBottom: "30px",
                }}
              >
                Create Account
              </Button>
            </div>
          </Form>
        </Formik>

        <p className="mt-[30px] text-[16] font-[400] ml-[100px]">
          You don't have an account ?{" "}
          <Link to={"/register"}>
            <span className="text-blue-600 ml-[10px] border-b-2">Sign Up</span>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
