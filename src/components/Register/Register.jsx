import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { RegisterAction } from "../../Slice/RegisterSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { Link, Navigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Vui lòng nhập Email")
    .email("Email không hợp lệ!"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải từ 8 ký tự trở lên"),
  retypePass: yup
    .string()
    .required("Vui lòng nhập lại mật khẩu")
    .oneOf([yup.ref("password")], "Mật khẩu không khớp"),
  userName: yup
    .string()
    .required("Không được bỏ trống")
    .min(6, "UserName phải từ 6 ký tự trở lên")
    .test("Không hợp lệ", "Không hợp lệ", (value) => {
      return value.split(" ").length <= 1;
    }),
});

const Register = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    let userDate = {
      email: data.email,
      userName: data.userName,
      password: data.password,
      retypePass: data.retypePass,
    };
    try {
      const actions = RegisterAction(userDate);
      const resultAction = await dispatch(actions);
      const user = unwrapResult(resultAction);
      enqueueSnackbar("Đăng ký thành công", {
        anchorOrigin: {
          vertical: "top",
          horizontal: "left",
        },
        autoHideDuration: 3000,
        variant: "success",
        // TransitionComponent: Grow,
      });
      // Navigate(`/login`);
    } catch (error) {
      enqueueSnackbar("Đăng ký thất bại", {
        anchorOrigin: {
          vertical: "top",
          horizontal: "left",
        },
        autoHideDuration: 3000,
        variant: "error",
        // TransitionComponent: Grow,
      });
    }
  };
  return (
    <div className="login">
      <div className="container">
        <div className="login-basic">
          <h3>Đăng ký</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4>
              Username <span>*</span>
            </h4>
            <input
              id="userName"
              placeholder="Enter Username..."
              {...register("userName", { required: true })}
            />

            <div className="error">{errors.userName?.message}</div>

            <h4>
              Email Address <span>*</span>
            </h4>
            <input
              id="email"
              placeholder="Enter Email address..."
              {...register("email", { required: true })}
            />

            <div className="error">{errors.email?.message}</div>

            <h4>
              Password <span>*</span>
            </h4>
            <input
              id="password"
              placeholder="Enter password..."
              {...register("password", { required: true })}
              type="password"
            />

            <div className="error">{errors.password?.message}</div>

            <h4>
              Retype Password <span>*</span>
            </h4>
            <input
              id="retypePass"
              placeholder="Retype password..."
              type="password"
              {...register("retypePass", { required: true })}
            />
            <div className="error">{errors.retypePass?.message}</div>
            <input
              style={{ marginTop: "20px" }}
              type="submit"
              className="btn"
              value="Đăng Ký Ngay"
            />
          </form>
          <div className="login-divide">
            <span>or</span>
          </div>
          <Link to="/login" className="login-btnregis btn">
            Đăng Nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
