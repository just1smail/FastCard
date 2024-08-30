import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { axiosRequest } from "../../utils/axiosRequest/axiosRequest";

const Register = () => {
  const navigate = useNavigate();

  async function register(obj) {
    try {
      const { data } = await axiosRequest.post("Account/register", obj);
      if (data.statusCode === 200) {
        navigate("/login");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-[100%] h-[900px] flex justify-center items-center pt-[100px]">
      <div>
        <h1 className="text-[30px] tracking-[2px]">Create an account</h1>
        <p className="mb-[40px]">Enter your details below</p>

        <Formik
          initialValues={{
            userName: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={async (values) => register(values)}
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
                name="phoneNumber"
                label="Phone Number"
                variant="outlined"
                type="text"
              />
              <Field
                as={TextField}
                sx={{ width: "420px", height: "50px" }}
                id="outlined-basic"
                name="email"
                label="Email"
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
              <Field
                as={TextField}
                sx={{ width: "420px", height: "50px" }}
                id="outlined-basic"
                name="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                type="text"
              />
            </div>

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
          </Form>
        </Formik>

        <div className="flex flex-col">
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              display: "flex",
              width: "420px",
              height: "50px",
              gap: "10px",
            }}
          >
            <FcGoogle style={{ fontSize: "30px" }} />{" "}
            <span className="text-black">Sign up with Google</span>
          </Button>
        </div>

        <p className="mt-[30px] text-[16] font-[400] ml-[100px]">
          Already have an account ?{" "}
          <Link to={"/login"}>
            <span className="text-blue-600 ml-[20px] border-b-2">Login</span>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
